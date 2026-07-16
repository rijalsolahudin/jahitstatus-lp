export function Features() {
  return (
    <>
      {/* Why Choose Us Section */}
      <section id="features" class="py-10 sm:py-12 bg-gray-50">
        <div class="container mx-auto responsive-padding">
          <div class="text-center mb-10 sm:mb-16" data-aos="fade-up">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Kenapa Harus <span class="text-primary">JahitStatus</span>?
            </h2>
            <div class="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
            <p class="text-sm sm:text-base text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
              Solusi tracking order yang modern dan profesional untuk bisnis
              konveksi Anda
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Feature 1 */}
            <div
              class="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="bg-primary-light text-white rounded-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <i class="fas fa-search-location text-lg sm:text-2xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center text-gray-800">
                Tracking Order Otomatis
              </h3>
              <p class="text-sm sm:text-base text-gray-600 text-center">
                Pelanggan cukup memasukkan kode order untuk melihat progres
                instan.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              class="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="bg-primary text-white rounded-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <i class="fas fa-envelope-open-text text-lg sm:text-2xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center text-gray-800">
                Notifikasi Otomatis
              </h3>
              <p class="text-sm sm:text-base text-gray-600 text-center">
                Setiap perubahan status langsung terkirim ke pelanggan via email.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              class="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="bg-primary-dark text-white rounded-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <i class="fas fa-tachometer-alt text-lg sm:text-2xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center text-gray-800">
                Dashboard Admin
              </h3>
              <p class="text-sm sm:text-base text-gray-600 text-center">
                Tim produksi bisa update status dengan cepat, tanpa skill teknis.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              class="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="bg-primary-light text-white rounded-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <i class="fas fa-paint-brush text-lg sm:text-2xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center text-gray-800">
                Tampilan Profesional
              </h3>
              <p class="text-sm sm:text-base text-gray-600 text-center">
                Bisa dikustomisasi dengan logo & warna brand Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section class="py-10 sm:py-12 bg-gradient-to-b from-white to-gray-50">
        <div class="container mx-auto responsive-padding">
          <div class="text-center mb-10 sm:mb-16" data-aos="fade-up">
            <span class="inline-block px-2 sm:px-3 py-1 bg-primary-light bg-opacity-20 text-primary rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
              FITUR UNGGULAN
            </span>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-shadow">
              Fitur Utama
            </h2>
            <div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p class="text-sm sm:text-base text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
              Solusi lengkap untuk manajemen dan pelacakan order konveksi Anda
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Feature 1 */}
            <div
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="bg-gradient-to-br from-primary to-primary-dark w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 text-white shadow-md">
                <i class="fas fa-fingerprint text-lg sm:text-2xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Kode Order Unik Otomatis
              </h3>
              <p class="text-sm sm:text-base text-gray-600">
                Pantau status tiap pesanan dengan satu kode. Sistem otomatis
                menghasilkan kode unik untuk setiap order yang masuk, memudahkan
                pelacakan dan referensi.
              </p>
              <div class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                <span class="text-primary font-medium flex items-center text-sm sm:text-base">
                  <span>Mudah diingat</span>
                  <i class="fas fa-check-circle ml-2"></i>
                </span>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="bg-gradient-to-br from-primary to-primary-dark w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 text-white shadow-md">
                <i class="fas fa-chart-line text-lg sm:text-2xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Progress Tracking
              </h3>
              <p class="text-sm sm:text-base text-gray-600">
                Dari Order Masuk → Belanja Bahan → Potong → Jahit → QC → Packing →
                Dikirim → Selesai. Pantau setiap tahapan produksi dengan detail.
              </p>
              <div class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                <span class="text-primary font-medium flex items-center text-sm sm:text-base">
                  <span>Real-time updates</span>
                  <i class="fas fa-check-circle ml-2"></i>
                </span>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="bg-gradient-to-br from-primary to-primary-dark w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 text-white shadow-md">
                <i class="fas fa-palette text-lg sm:text-2xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Branding Custom
              </h3>
              <p class="text-sm sm:text-base text-gray-600">
                Gunakan sistem dengan identitas brand Anda sendiri. Saat ini
                tersedia kustomisasi <span class="font-medium">nama</span> dan{' '}
                <span class="font-medium">domain</span>. Fitur kustomisasi{' '}
                <span class="text-gray-500 italic">warna, logo, dan email</span>{' '}
                sedang dalam tahap pengembangan.
              </p>
              <div class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                <span class="text-primary font-medium flex items-center text-sm sm:text-base">
                  <span>White-label solution</span>
                  <i class="fas fa-check-circle ml-2"></i>
                </span>
              </div>
            </div>

            {/* Feature 4 */}
            <div
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="absolute top-2 sm:top-4 -right-1 bg-yellow-400 text-yellow-900 text-xs font-bold py-1 px-2 rounded-br-none rounded-tl-none rounded-tr-lg rounded-bl-lg shadow-md z-10">
                Coming Soon
              </div>
              <div class="bg-gradient-to-br from-primary to-primary-dark w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 text-white shadow-md">
                <i class="fas fa-chart-pie text-lg sm:text-2xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Laporan Produksi
              </h3>
              <p class="text-sm sm:text-base text-gray-600">
                Pantau data produksi harian, mingguan, dan riwayat order kapan
                saja. Dapatkan insight berharga untuk pengambilan keputusan
                bisnis.
              </p>
              <div class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                <span class="text-primary font-medium flex items-center text-sm sm:text-base">
                  <span>Analisis mendalam</span>
                  <i class="fas fa-check-circle ml-2"></i>
                </span>
              </div>
            </div>

            {/* Feature 5 */}
            <div
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div class="bg-gradient-to-br from-primary to-primary-dark w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 text-white shadow-md">
                <i class="fas fa-calculator text-lg sm:text-2xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Kalkulator HPP
              </h3>
              <p class="text-sm sm:text-base text-gray-600">
                Hitung biaya produksi secara otomatis (bahan, tenaga kerja,
                overhead) untuk membantu menentukan harga jual dengan lebih
                akurat.
              </p>
              <div class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                <span class="text-primary font-medium flex items-center text-sm sm:text-base">
                  <span>Harga jual optimal</span>
                  <i class="fas fa-check-circle ml-2"></i>
                </span>
              </div>
            </div>

            {/* Feature 6 */}
            <div
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div class="bg-gradient-to-br from-primary to-primary-dark w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 text-white shadow-md">
                <i class="fas fa-bell text-lg sm:text-2xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Notifikasi Status
              </h3>
              <p class="text-sm sm:text-base text-gray-600">
                Kirim update otomatis ke pelanggan saat status pesanan berubah.
                Tingkatkan kepercayaan dengan transparansi proses produksi.
              </p>
              <div class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                <span class="text-primary font-medium flex items-center text-sm sm:text-base">
                  <span>WhatsApp & Email</span>
                  <i class="fas fa-check-circle ml-2"></i>
                </span>
              </div>
            </div>

            {/* Feature 7 */}
            <div
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div class="bg-gradient-to-br from-primary to-primary-dark w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 text-white shadow-md">
                <i class="fas fa-calendar-alt text-lg sm:text-2xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Schedule Produksi
              </h3>
              <p class="text-sm sm:text-base text-gray-600">
                Pantau dan update produksi dengan tampilan interaktif kanban
                board. Kelola jadwal produksi dengan lebih efisien dan visual.
              </p>
              <div class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                <span class="text-primary font-medium flex items-center text-sm sm:text-base">
                  <span>Kanban Board</span>
                  <i class="fas fa-check-circle ml-2"></i>
                </span>
              </div>
            </div>

            {/* Feature 8 */}
            <div
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div class="bg-gradient-to-br from-primary to-primary-dark w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 text-white shadow-md">
                <i class="fas fa-comment-dots text-lg sm:text-2xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Asisten AI Customer
              </h3>
              <p class="text-sm sm:text-base text-gray-600">
                Layanan pelacakan status pesanan mandiri via Chatbot AI interaktif
                24/7. Pelanggan cukup bertanya langsung dan AI akan menyajikan
                progres pengerjaan.
              </p>
              <div class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                <span class="text-primary font-medium flex items-center text-sm sm:text-base">
                  <span>Self-Service Chat Widget</span>
                  <i class="fas fa-check-circle ml-2"></i>
                </span>
              </div>
            </div>

            {/* Feature 9 */}
            <div
              class="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div class="bg-gradient-to-br from-primary to-primary-dark w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 text-white shadow-md">
                <i class="fas fa-robot text-lg sm:text-2xl"></i>
              </div>
              <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                Asisten AI Admin
              </h3>
              <p class="text-sm sm:text-base text-gray-600">
                Cari pesanan, rekap laporan borongan, hingga susun draf pesan
                WhatsApp konfirmasi / tagihan secara otomatis hanya dengan
                mengetik perintah chat sederhana.
              </p>
              <div class="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                <span class="text-primary font-medium flex items-center text-sm sm:text-base">
                  <span>Smart Command Center</span>
                  <i class="fas fa-check-circle ml-2"></i>
                </span>
              </div>
            </div>
          </div>

          <div class="text-center mt-8 sm:mt-12">
            <a
              href="#pricing"
              class="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-primary hover:bg-primary-dark text-white text-sm sm:text-base font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <i class="fas fa-tags mr-2"></i> Lihat Paket Harga
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
