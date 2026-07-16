export function Implementation() {
  return (
    <section id="implementation" class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Cara Implementasi</h2>
          <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="relative">
            {/* Vertical Line */}
            <div class="absolute left-8 top-0 bottom-0 w-1 bg-primary-light hidden md:block"></div>

            {/* Step 1 */}
            <div class="flex flex-col md:flex-row mb-12" data-aos="fade-right">
              <div class="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4 md:mb-0 z-10">
                1
              </div>
              <div class="md:ml-8">
                <h3 class="text-xl font-bold mb-2">
                  Konsultasi Sistem Produksi Anda
                </h3>
                <p class="text-gray-600">
                  Kami akan mempelajari alur produksi konveksi Anda untuk
                  memastikan sistem kami dapat disesuaikan dengan kebutuhan
                  spesifik bisnis Anda.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div
              class="flex flex-col md:flex-row mb-12"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div class="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4 md:mb-0 z-10">
                2
              </div>
              <div class="md:ml-8">
                <h3 class="text-xl font-bold mb-2">
                  Setup & Kustomisasi Sistem
                </h3>
                <p class="text-gray-600">
                  Tim teknis kami akan mengatur sistem sesuai dengan kebutuhan
                  Anda, termasuk kustomisasi branding, tahapan produksi, dan
                  integrasi dengan sistem yang sudah ada.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div
              class="flex flex-col md:flex-row mb-12"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div class="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4 md:mb-0 z-10">
                3
              </div>
              <div class="md:ml-8">
                <h3 class="text-xl font-bold mb-2">
                  Training Tim & Simulasi Tracking
                </h3>
                <p class="text-gray-600">
                  Kami akan melatih tim Anda untuk menggunakan dashboard admin
                  dan melakukan simulasi tracking order untuk memastikan semua
                  berjalan lancar.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div
              class="flex flex-col md:flex-row"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div class="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4 md:mb-0 z-10">
                4
              </div>
              <div class="md:ml-8">
                <h3 class="text-xl font-bold mb-2">Go-Live & Mulai Dipakai</h3>
                <p class="text-gray-600">
                  Sistem siap digunakan! Kami akan terus mendampingi selama masa
                  transisi untuk memastikan implementasi berjalan mulus.
                </p>
              </div>
            </div>
          </div>

          <div
            class="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200 text-center"
            data-aos="fade-up"
          >
            <p class="text-gray-700">
              <i class="fas fa-tools text-primary mr-2"></i>
              Tim kami mendampingi penuh sampai sistem berjalan mulus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
