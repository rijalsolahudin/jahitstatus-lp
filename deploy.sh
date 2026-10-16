#!/usr/bin/env bash
#
# Deploy jahitstatus-lp (landing page) lewat Docker Compose + Caddy.
#
# Hasil Vite itu file statis yang di-bake ke image, jadi BEDA dari backend:
# setiap perubahan (termasuk kode) WAJIB build ulang.
#
# Jalankan ulang pakai bash kalau dipanggil via `sh` (script ini butuh pipefail).
if [ -z "${BASH_VERSION:-}" ]; then
  exec bash "$0" "$@"
fi

set -euo pipefail

# ---------------------------------------------------------------- lokasi & config
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

COMPOSE_FILE="docker-compose.yml"
SERVICE="landingpage"
CONTAINER="jahitstatus-landingpage"
HTTP_PORT="3200"
HEALTH_TIMEOUT=120

DO_PULL=1
DO_NO_CACHE=0
DO_PRUNE=0

# ---------------------------------------------------------------- output berwarna
if [ -t 1 ]; then
  C_RESET='\033[0m'; C_INFO='\033[1;34m'; C_OK='\033[1;32m'; C_WARN='\033[1;33m'; C_ERR='\033[1;31m'
else
  C_RESET=''; C_INFO=''; C_OK=''; C_WARN=''; C_ERR=''
fi
info() { printf "${C_INFO}[deploy]${C_RESET} %s\n" "$*"; }
ok()   { printf "${C_OK}[ ok ]${C_RESET} %s\n" "$*"; }
warn() { printf "${C_WARN}[warn]${C_RESET} %s\n" "$*"; }
err()  { printf "${C_ERR}[err ]${C_RESET} %s\n" "$*" >&2; }

usage() {
  cat <<'EOF'
Deploy jahitstatus-lp (landing page) via Docker Compose.

Pemakaian:
  ./deploy.sh              Deploy standar (git pull + build + up)
  ./deploy.sh --no-cache   Build tanpa cache (kalau ada masalah cache aneh)
  ./deploy.sh --prune      Hapus image lama (dangling) setelah deploy
  ./deploy.sh --no-pull    Lewati git pull
  ./deploy.sh --help       Tampilkan bantuan ini
EOF
}

for arg in "$@"; do
  case "$arg" in
    --no-pull)  DO_PULL=0 ;;
    --no-cache) DO_NO_CACHE=1 ;;
    --prune)    DO_PRUNE=1 ;;
    -h|--help)  usage; exit 0 ;;
    *)          err "Opsi tidak dikenal: $arg"; usage; exit 1 ;;
  esac
done

compose() { docker compose -f "$COMPOSE_FILE" "$@"; }

# ---------------------------------------------------------------- 1. prasyarat
info "Cek prasyarat..."
command -v docker >/dev/null 2>&1 || { err "docker tidak ditemukan di PATH"; exit 1; }
docker compose version >/dev/null 2>&1 || { err "docker compose (v2) tidak tersedia"; exit 1; }
[ -f "$COMPOSE_FILE" ] || { err "$COMPOSE_FILE tidak ditemukan"; exit 1; }
command -v curl >/dev/null 2>&1 || warn "curl tidak ada — pengecekan HTTP di-skip nanti."

# Network eksternal 'web' (reverse proxy Caddy global).
if ! docker network inspect web >/dev/null 2>&1; then
  warn "Network 'web' belum ada, dibuat..."
  docker network create web >/dev/null
fi

# ---------------------------------------------------------------- 2. update kode
if [ "$DO_PULL" = 1 ] && [ -d .git ]; then
  info "Ambil update kode (git)..."
  git fetch --all --prune
  git pull --ff-only || warn "git pull gagal / ada perubahan lokal — dilewati"
  ok "Sekarang di commit: $(git rev-parse --short HEAD)"
else
  info "Lewati git pull."
fi

# ---------------------------------------------------------------- 3. build (WAJIB)
info "Build image (Vite → static, wajib tiap deploy)..."
if [ "$DO_NO_CACHE" = 1 ]; then
  compose build --pull --no-cache "$SERVICE"
else
  compose build --pull "$SERVICE"
fi
ok "Image selesai di-build."

# ---------------------------------------------------------------- 4. naikkan container
info "Naikkan container..."
# Tangani bentrok nama container sisa project lama (mis. setelah rename project).
if docker inspect "$CONTAINER" >/dev/null 2>&1 && [ -z "$(compose ps -q "$SERVICE" 2>/dev/null)" ]; then
  warn "Container $CONTAINER ada tapi bukan milik project ini — dihapus dulu."
  docker rm -f "$CONTAINER" >/dev/null 2>&1 || true
fi
compose up -d --remove-orphans

# ---------------------------------------------------------------- 5. tunggu siap
info "Menunggu container $CONTAINER siap..."
deadline=$(( $(date +%s) + HEALTH_TIMEOUT ))
ready=0
while :; do
  if curl -fsS -m 5 -o /dev/null "http://localhost:${HTTP_PORT}/" 2>/dev/null; then ready=1; break; fi
  if [ "$(date +%s)" -ge "$deadline" ]; then break; fi
  printf '.'
  sleep 3
done
echo
if [ "$ready" = 1 ]; then
  ok "HTTP http://localhost:${HTTP_PORT}/ merespons."
else
  warn "Belum merespons setelah ${HEALTH_TIMEOUT}s — cek log: docker logs $CONTAINER"
fi

# ---------------------------------------------------------------- 6. bersih-bersih
if [ "$DO_PRUNE" = 1 ]; then
  info "Hapus image lama (dangling)..."
  docker image prune -f >/dev/null
  ok "Image lama dibersihkan."
fi

# ---------------------------------------------------------------- 7. status
info "Status container:"
compose ps

ok "Deploy selesai."
