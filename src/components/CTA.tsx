export function CTA() {
  return (
    <section class="py-12 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div class="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="container mx-auto px-4 relative z-10 text-center">
        <div class="max-w-3xl mx-auto" data-aos="zoom-in">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Siap Meningkatkan Efisiensi Bisnis Konveksi Anda?
          </h2>
          <p class="text-blue-50 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan puluhan konveksi lainnya yang telah mendigitalisasi pelacakan status pesanan secara real-time dan mandiri.
          </p>
          <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://app.jahitstatus.com/register"
              class="w-full sm:w-auto px-8 py-3.5 bg-white text-primary-dark hover:bg-blue-50 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
            >
              Daftar Sekarang - Gratis 14 Hari
            </a>
            <a
              href="#contact"
              class="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 text-center"
            >
              Konsultasi Dahulu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
