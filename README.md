# Jahit Status - Landing Page

## Teknologi

Proyek ini telah dimigrasi dari HTML statis ke Vite dengan Tailwind CSS untuk pengembangan yang lebih modern dan efisien.

### Menjalankan Proyek

```bash
# Menginstal dependensi
npm install

# Menjalankan server pengembangan
npm run dev

# Build untuk produksi
npm run build

# Preview build produksi
npm run preview
```

## Fitur Tracking Order

Landing page ini dilengkapi dengan fitur simulasi tracking order yang memungkinkan pelanggan untuk melihat status pesanan mereka secara real-time.

### Cara Menggunakan

1. Buka halaman landing page dan scroll ke bagian "Simulasi Tampilan Tracking"
2. Masukkan ID Order pada form pencarian (contoh: ORD/25/08/0001)
3. Klik tombol "Search" untuk melihat detail tracking order

### Struktur Data

Data tracking order disimpan dalam format JSON di file `data-tracking.json`. Struktur datanya adalah sebagai berikut:

```typescript
interface OrderTracking {
  order_id: string;           // ID unik order, format: ORD/DD/MM/YYYY
  customer: string;           // Nama pelanggan
  order_date: string;         // Tanggal pemesanan dalam format string
  estimated_completion: string; // Perkiraan tanggal selesai dalam format string
  current_status: string;     // Status order saat ini (nama tahapan)
  status_color: string;       // Kode warna untuk status (format Tailwind CSS)
  progress: ProgressStep[];   // Daftar tahapan progres order
  notification: string;       // Pesan notifikasi untuk pelanggan
}

interface ProgressStep {
  step: string;               // Nama tahapan (Belanja Bahan, Potong, Jahit, dll)
  date: string | null;        // Tanggal tahapan dilakukan atau null jika belum dilakukan
  status: 'completed' | 'in_progress' | 'pending'; // Status tahapan saat ini
  icon: 'check' | 'clock';    // Jenis ikon yang ditampilkan
}
```

### Menambahkan Data Order Baru

Untuk menambahkan data order baru, tambahkan objek baru ke array di file `data-tracking.json` dengan struktur yang sesuai dengan definisi tipe di atas.

### Mengubah Tampilan

Tampilan tracking order dapat diubah dengan memodifikasi file `assets/js/tracking.js`. File ini berisi fungsi-fungsi untuk merender data tracking ke dalam UI.

### Tipe Data

Definisi tipe data untuk tracking order dapat dilihat di file `types/tracking.ts`. File ini berisi definisi TypeScript untuk struktur data tracking order.