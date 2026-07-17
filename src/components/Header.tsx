import { useState, useEffect } from 'preact/hooks';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      class={`fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled ? 'pt-0 pb-0 pl-0 pr-0' : 'pt-4 pb-0 pl-4 pr-4'
      }`}
    >
      <div
        class={`mx-auto w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto bg-white ${
          isScrolled
            ? 'rounded-none shadow-md border-b border-gray-100 mt-0 max-w-[2560px]'
            : 'max-w-[1536px] rounded-2xl shadow-md border border-gray-200'
        }`}
      >
        <div class={`w-full px-4 flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? 'py-2' : 'py-3.5'
        }`}>
          <a href="#" class="flex items-center space-x-2" onClick={closeMenu}>
            <img
              src="/images/logo-only.png"
              alt="JahitStatus Logo"
              class="h-10"
            />
            <span class="text-xl font-bold text-primary">
              JahitStatus<span class="text-gray-800">.com</span>
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            class="md:hidden text-gray-500 hover:text-primary focus:outline-none"
            aria-label="Toggle Menu"
          >
            <i class={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>

          {/* Desktop Navigation */}
          <nav class="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              class="text-gray-600 hover:text-primary transition-colors"
            >
              Fitur
            </a>
            <a
              href="#pricing"
              class="text-gray-600 hover:text-primary transition-colors"
            >
              Harga
            </a>
            <a
              href="#implementation"
              class="text-gray-600 hover:text-primary transition-colors"
            >
              Implementasi
            </a>
            <a
              href="#contact"
              class="text-gray-600 hover:text-primary transition-colors"
            >
              Kontak
            </a>
            <a
              href="#pricing"
              class="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full transition-colors font-medium"
            >
              Mulai Sekarang
            </a>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav class="bg-white md:hidden border-t rounded-b-2xl">
            <div class="container mx-auto px-4 py-3 flex flex-col space-y-4">
              <a
                href="#features"
                onClick={closeMenu}
                class="text-gray-600 hover:text-primary transition-colors"
              >
                Fitur
              </a>
              <a
                href="#pricing"
                onClick={closeMenu}
                class="text-gray-600 hover:text-primary transition-colors"
              >
                Harga
              </a>
              <a
                href="#implementation"
                onClick={closeMenu}
                class="text-gray-600 hover:text-primary transition-colors"
              >
                Implementasi
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                class="text-gray-600 hover:text-primary transition-colors"
              >
                Kontak
              </a>
              <a
                href="#pricing"
                onClick={closeMenu}
                class="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full transition-colors font-medium text-center"
              >
                Mulai Sekarang
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
