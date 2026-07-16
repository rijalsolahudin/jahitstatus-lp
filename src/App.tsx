import { useEffect, useState } from 'preact/hooks';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Showcase } from './components/Showcase';
import { Pricing } from './components/Pricing';
import { Implementation } from './components/Implementation';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    // Handle scroll for back-to-top button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // FOUC Prevention / Loader Removal
    document.body.classList.add('js-loaded');

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div class="font-sans text-gray-800 bg-white overflow-x-hidden min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <Implementation />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        class={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center transition-all duration-300 z-50 ${
          showBackToTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Back to top"
      >
        <i class="fas fa-chevron-up text-base"></i>
      </button>
    </div>
  );
}
