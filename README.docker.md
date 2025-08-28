# Menjalankan JahitStatus Landing Page dengan Docker dan Caddy

Dokumen ini berisi instruksi untuk menjalankan JahitStatus Landing Page menggunakan Docker dan Docker Compose dengan Caddy sebagai web server.

## Prasyarat

Pastikan Anda telah menginstal:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Cara Menjalankan

### 1. Mode Produksi

```bash
# Build dan jalankan container dalam mode detached
docker-compose up -d
```

Aplikasi akan tersedia di http://localhost:8080

### 2. Mode Pengembangan (dengan Hot-Reload)

```bash
# Build dan jalankan container development
docker-compose -f docker-compose.dev.yml up
```

Server pengembangan akan tersedia di http://localhost:3200

### 3. Menghentikan Aplikasi

```bash
# Untuk mode produksi
docker-compose down

# Untuk mode pengembangan
docker-compose -f docker-compose.dev.yml down
```

## Struktur Docker

- **Dockerfile**: Mendefinisikan multi-stage build untuk mode produksi:
  - Stage 1: Build aplikasi menggunakan Node.js
  - Stage 2: Menyajikan aplikasi menggunakan Caddy

- **Dockerfile.dev**: Konfigurasi untuk lingkungan pengembangan dengan hot-reloading

- **docker-compose.yml**: Mengonfigurasi layanan produksi, port mapping, dan opsi restart

- **docker-compose.dev.yml**: Mengonfigurasi layanan pengembangan dengan volume untuk hot-reloading

- **Caddyfile**: Konfigurasi Caddy untuk:
  - Kompresi Gzip
  - Caching aset statis
  - Penanganan routing SPA
  - Header keamanan

- **.dockerignore**: Mengecualikan file-file yang tidak diperlukan dalam image Docker

## Kustomisasi

### Mengubah Port

Untuk mengubah port yang diekspos, edit `docker-compose.yml`:

```yaml
ports:
  - "8080:80"  # Ubah 8080 ke port yang diinginkan
  - "8443:443" # Ubah 8443 ke port HTTPS yang diinginkan
```

### Konfigurasi Caddy

Untuk menyesuaikan konfigurasi Caddy, edit file `Caddyfile`.

## Troubleshooting

### Melihat Log

```bash
# Melihat log dari semua container
docker-compose logs

# Melihat log secara real-time
docker-compose logs -f
```

### Masuk ke Container

```bash
docker-compose exec jahitstatus-lp sh
```