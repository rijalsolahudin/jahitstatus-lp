export function Hero() {
  return (
    <section class="relative overflow-hidden bg-white pt-24 sm:pt-28 md:pt-8">
      <div class="absolute inset-0 z-0 opacity-5">
        <div class="absolute inset-0 bg-primary-light opacity-10 pattern-dots"></div>
      </div>

      <div class="container mx-auto responsive-padding pb-16 pt-12 sm:pb-20 sm:pt-16 md:pt-36 md:pb-28 relative z-10">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div
            class="w-full md:w-1/2 mb-8 md:mb-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-shadow leading-tight">
              <span>Sistem Pelacakan Order untuk Industri Konveksi Modern</span>
            </h1>

            <p class="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              Tingkatkan kepercayaan pelanggan & efisiensi produksi Anda dengan
              sistem tracking order yang transparan dan mudah digunakan.
            </p>

            <div
              class="chat-bubble relative p-4 sm:p-5 mb-8 sm:mb-12 rounded-xl sm:rounded-2xl shadow-lg mr-0 sm:mr-5"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <p class="text-base sm:text-lg font-bold text-gray-800">
                "Sudah sampai tahap apa ya order saya?"
                <span class="text-primary text-xs sm:text-sm ml-1 sm:ml-2 block sm:inline-block mt-1 sm:mt-0">
                  - Pertanyaan yang sering ditanyakan
                </span>
              </p>
              <p class="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
                Dengan{' '}
                <span class="font-semibold text-primary">JahitStatus.com</span>,
                pelanggan bisa memantau status order secara real-time, sementara
                Anda fokus menuntaskan produksi tanpa gangguan.
              </p>
              <div class="mt-3 sm:mt-4 flex flex-col sm:flex-row items-start sm:items-center text-xs sm:text-sm text-gray-500">
                <div class="flex items-center mb-2 sm:mb-0">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Tingkatkan kepuasan pelanggan
                </div>
                <div class="flex items-center mb-2 sm:mb-0 sm:ml-4">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Kurangi pertanyaan berulang
                </div>
                <div class="flex md:hidden items-center sm:ml-4">
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>
                  Didukung Asisten AI
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#pricing"
                class="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors font-medium text-center flex items-center justify-center text-sm sm:text-base"
              >
                <i class="fas fa-rocket mr-2"></i> Mulai Sekarang
              </a>
              <a
                href="#features"
                class="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors font-medium text-center flex items-center justify-center text-sm sm:text-base"
              >
                <i class="fas fa-list-check mr-2"></i> Lihat Fitur Lengkap
              </a>
            </div>
          </div>

          <div
            class="hidden md:flex w-full md:w-1/2 justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div class="hero-3d-scene">
              {/* Floating info badges */}
              <div class="hero-badge hero-badge--top-right">
                <div class="hero-badge__icon hero-badge__icon--green">
                  <i class="fas fa-check"></i>
                </div>
                <div class="hero-badge__text">
                  <span class="hero-badge__label">Status Updated</span>
                  <span class="hero-badge__value">Real-time</span>
                </div>
              </div>

              <div class="hero-badge hero-badge--bottom-left">
                <div class="hero-badge__icon hero-badge__icon--blue">
                  <i class="fas fa-robot"></i>
                </div>
                <div class="hero-badge__text">
                  <span class="hero-badge__label">Asisten AI</span>
                  <span class="hero-badge__value">24/7 Aktif</span>
                </div>
              </div>

              <div class="hero-badge hero-badge--top-left">
                <div class="hero-badge__icon hero-badge__icon--purple">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="hero-badge__text">
                  <span class="hero-badge__label">Notifikasi</span>
                  <span class="hero-badge__value">Otomatis</span>
                </div>
              </div>

              {/* 3D Tablet Device */}
              <div class="hero-tablet-wrapper">
                <div class="hero-tablet">
                  <div class="hero-tablet__bezel">
                    {/* Tablet top bar */}
                    <div class="hero-tablet__camera"></div>
                    <div class="hero-tablet__screen">
                      <img
                        src="/images/previews/tracking.webp"
                        alt="JahitStatus Dashboard Preview"
                        class="hero-tablet__screen-img"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
                {/* Tablet reflection/shadow */}
                <div class="hero-tablet__shadow"></div>

                {/* Phone mockup overlapping bottom-right */}
                <div class="hero-phone">
                  <div class="hero-phone__bezel">
                    <div class="hero-phone__notch"></div>
                    <div class="hero-phone__screen">
                      {/* Chat header */}
                      <div class="phone-chat-header">
                        <div class="phone-chat-header__avatar">AI</div>
                        <div class="phone-chat-header__info">
                          <span class="phone-chat-header__name">
                            Asisten AI Pelacak Order{' '}
                            <span class="phone-chat-header__badge">BETA</span>
                          </span>
                          <span class="phone-chat-header__status">Aktif</span>
                        </div>
                      </div>
                      {/* Chat body */}
                      <div class="phone-chat-body">
                        <div class="phone-chat-bubble phone-chat-bubble--bot">
                          Halo! Saya adalah asisten AI McLaughlin PLC. Silakan
                          sebutkan nomor order Anda terlebih dahulu agar saya
                          bisa melacak status pengerjaannya.
                        </div>
                        <div class="phone-chat-bubble phone-chat-bubble--user">
                          Tolong cek orderan saya{' '}
                          <strong>MCL/26/07/0007</strong> sudah sampe mana
                          prosesnya
                        </div>
                        <div class="phone-chat-bubble phone-chat-bubble--bot">
                          <div style={{ marginBottom: '4px' }}>
                            Tentu, saya akan cek order Anda dengan nomor{' '}
                            <strong>MCL/26/07/0007</strong>. Berikut informasi
                            terbaru untuk pesanan Anda:
                          </div>
                          <div class="phone-chat-info-row">
                            • <strong>Nama Barang/Order:</strong> Seragam
                            Sekolah (100 pcs)
                          </div>
                          <div class="phone-chat-info-row">
                            • <strong>Nama Customer:</strong> Jovani Gutmann
                          </div>
                          <div class="phone-chat-info-row">
                            • <strong>Status Saat Ini:</strong>{' '}
                            <span style={{ color: '#2596be' }}>✂ Potong</span>
                          </div>
                          <div class="phone-chat-info-row">
                            • <strong>Estimasi Tanggal Selesai:</strong> 19 Juli
                            2026
                          </div>
                          <div class="phone-chat-info-row">
                            • <strong>Tanggal Order Masuk:</strong> 02 Mei 2026
                          </div>
                          <div style={{ marginTop: '4px' }}>
                            Jadi, pesanan Anda sedang dalam proses pemotongan
                            kain. Apakah ada yang ingin ditanyakan lagi?
                          </div>
                        </div>
                      </div>
                      {/* Chat input */}
                      <div class="phone-chat-input">
                        <span>Ketik pesan Anda...</span>
                        <div class="phone-chat-input__btn">
                          <i class="fas fa-paper-plane" style={{ fontSize: '7px' }}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
