export function Footer() {
  const handleNewsletterSubmit = (e: Event) => {
    e.preventDefault();
    alert('Terima kasih telah berlangganan newsletter kami!');
  };

  return (
    <footer class="bg-gray-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 class="text-xl font-semibold mb-4">JahitStatus.com</h4>
            <p class="text-gray-400 mb-4">
              Solusi Digital untuk Konveksi Modern
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-instagram text-base"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-linkedin-in text-base"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">
                <i class="fab fa-whatsapp text-base"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 class="text-xl font-semibold mb-4">Tautan Cepat</h4>
            <ul class="space-y-2">
              <li>
                <a href="#features" class="text-gray-400 hover:text-white transition-colors">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#pricing" class="text-gray-400 hover:text-white transition-colors">
                  Harga
                </a>
              </li>
              <li>
                <a href="#implementation" class="text-gray-400 hover:text-white transition-colors">
                  Implementasi
                </a>
              </li>
              <li>
                <a href="#contact" class="text-gray-400 hover:text-white transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 class="text-xl font-semibold mb-4">Legal</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 class="text-xl font-semibold mb-4">Berlangganan Newsletter</h4>
            <p class="text-gray-400 mb-4">
              Dapatkan tips & update terbaru untuk bisnis konveksi Anda
            </p>
            <form onSubmit={handleNewsletterSubmit} class="flex">
              <input
                type="email"
                placeholder="Email Anda"
                class="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800"
                required
              />
              <button
                type="submit"
                class="bg-primary hover:bg-primary-dark px-4 py-2 rounded-r-lg transition-colors"
                aria-label="Subscribe"
              >
                <i class="fas fa-paper-plane text-base"></i>
              </button>
            </form>
          </div>
        </div>

        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            © 2025 JahitStatus.com – Solusi Digital untuk Konveksi Modern. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
