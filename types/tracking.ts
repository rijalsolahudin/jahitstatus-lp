/**
 * Definisi tipe data untuk tracking order konveksi
 */

/**
 * Status progres dari setiap tahapan order
 */
export type ProgressStatus = 'completed' | 'in_progress' | 'pending';

/**
 * Jenis ikon yang digunakan pada timeline
 */
export type ProgressIcon = 'check' | 'clock';

/**
 * Struktur data untuk setiap tahapan dalam progres order
 */
export interface ProgressStep {
  /** Nama tahapan (Belanja Bahan, Potong, Jahit, dll) */
  step: string;
  /** Tanggal tahapan dilakukan atau null jika belum dilakukan */
  date: string | null;
  /** Status tahapan saat ini */
  status: ProgressStatus;
  /** Jenis ikon yang ditampilkan */
  icon: ProgressIcon;
}

/**
 * Struktur data utama untuk tracking order
 */
export interface OrderTracking {
  /** ID unik order, format: ORD/DD/MM/YYYY */
  order_id: string;
  /** Nama pelanggan */
  customer: string;
  /** Tanggal pemesanan dalam format string */
  order_date: string;
  /** Perkiraan tanggal selesai dalam format string */
  estimated_completion: string;
  /** Status order saat ini (nama tahapan) */
  current_status: string;
  /** Kode warna untuk status (format Tailwind CSS) */
  status_color: string;
  /** Daftar tahapan progres order */
  progress: ProgressStep[];
  /** Pesan notifikasi untuk pelanggan */
  notification: string;
}

/**
 * Tipe untuk array data tracking order
 */
export type OrderTrackingData = OrderTracking[];