export function Pricing() {
  return (
    <section id="pricing" class="py-10 sm:py-12 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-10" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
            Paket Berlangganan
          </h2>
          <div class="w-20 h-1 bg-white mx-auto mb-6"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Basic Plan */}
          <div
            class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="p-8 border-b border-gray-100">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">Basic</h3>
              <div class="text-primary text-3xl font-bold mb-2">
                Rp 499.000
                <span class="text-gray-500 text-lg font-normal"> / bulan</span>
              </div>
              <p class="text-gray-600 text-sm">Pembayaran fleksibel per bulan</p>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600">Semua fitur JahitStatus</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600">Tracking order real-time & notifikasi email</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600">Dashboard admin</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600">Kalkulator HPP</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600">Cocok untuk memulai</span>
                </li>
              </ul>
            </div>
            <div class="p-8 bg-white border-t border-gray-100">
              <a
                href="https://app.jahitstatus.com/register?plan_id=01987d3c-5e91-7090-b321-2935d82e167f"
                class="block w-full py-3 px-4 text-center bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors shadow-sm hover:shadow"
              >
                Mulai Sekarang
              </a>
            </div>
          </div>

          {/* Pro Plan (Popular) */}
          <div
            class="bg-white rounded-2xl shadow-2xl overflow-hidden transform scale-105 border-2 border-amber-400 hover:shadow-2xl transition-all duration-300 relative z-10"
            data-aos="fade-up"
          >
            <div class="absolute top-0 right-0 bg-amber-400 text-amber-950 px-5 py-1.5 rounded-bl-xl font-extrabold text-xs tracking-wider uppercase">
              POPULER
            </div>
            <div class="p-8 border-b border-gray-100">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">Pro</h3>
              <div class="text-primary text-3xl font-bold mb-2">
                Rp 4.990.000
                <span class="text-gray-500 text-lg font-normal"> / tahun</span>
              </div>
              <p class="text-gray-600 text-sm">Hemat ±17% dibanding bayar bulanan</p>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600 font-medium">Semua fitur JahitStatus</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600">Tracking order real-time & notifikasi email</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600">Dashboard admin</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600">Kalkulator HPP</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600">Akses penuh 12 bulan</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-primary font-semibold">Lebih hemat ± Rp 1.000.000</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600 text-sm">Pilihan populer untuk konveksi menengah</span>
                </li>
              </ul>
            </div>
            <div class="p-8 bg-white border-t border-gray-100">
              <a
                href="https://app.jahitstatus.com/register?plan_id=01987d3c-5eb3-7213-b942-25a7e5e712e4"
                class="block w-full py-3.5 px-4 text-center bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                Pilih Paket Pro
              </a>
            </div>
          </div>

          {/* Lifetime Plan */}
          <div
            class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="p-8 border-b border-gray-100">
              <h3 class="text-2xl font-bold mb-2 text-gray-800">Lifetime</h3>
              <div class="text-primary text-3xl font-bold mb-2">
                Rp 20.000.000
                <span class="text-gray-500 text-base font-normal"> (Beli Putus)</span>
              </div>
              <p class="text-gray-600 text-sm">Bayar sekali, pakai selamanya</p>
            </div>
            <div class="p-8">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600 font-medium">Semua fitur JahitStatus</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600">Tracking order real-time & notifikasi email</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600">Dashboard admin</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-gray-600">Kalkulator HPP</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
                  <span class="text-primary font-semibold">Hemat hingga Rp 39.000.000 (10 thn)</span>
                </li>
              </ul>
            </div>
            <div class="p-8 bg-white border-t border-gray-100">
              <a
                href="https://app.jahitstatus.com/register?plan_id=01987d3c-5eb6-7002-b9be-5dc9bb082920"
                class="block w-full py-3 px-4 text-center bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors shadow-sm hover:shadow"
              >
                Pilih Lifetime
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
