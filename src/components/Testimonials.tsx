export function Testimonials() {
  return (
    <section id="testimonials" class="py-10 sm:py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Klien Kami</h2>
          <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Dipercaya oleh vendor konveksi, produsen jersey, penyedia seragam
            sekolah, hingga fashion brand nasional.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div
            class="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                <img
                  src="https://jckonveksi.com/wp-content/uploads/2022/08/zyro-image.jpg"
                  alt="User Profile"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 class="font-semibold">Kipni</h4>
                <p class="text-sm text-gray-500">
                  Manager Operasional JC Konveksi
                </p>
              </div>
            </div>
            <div class="mb-4 text-yellow-400">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="text-gray-600 italic">
              "Sekarang saya gak perlu di-WA terus sama klien nanyain order"
            </p>
          </div>
        </div>

        <div class="text-center mt-12" data-aos="fade-up">
          <p class="text-gray-700 mb-6 text-lg">
            Ingin tahu apakah sistem ini cocok untuk bisnis Anda?
          </p>
          <a
            href="#contact"
            class="inline-block py-3 px-8 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
