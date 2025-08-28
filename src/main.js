// Import style utama
import './style.css';

// Import library AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import CSS kustom
import './assets/css/tracking-modern.css';
import './assets/css/chat-bubble.css';

// Import JavaScript kustom
import './assets/js/tracking.js';
import './assets/js/animations.js';
import './assets/js/contact.js';
import './assets/js/mobile-menu.js';

// Inisialisasi AOS dan menangani FOUC
document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  
  // Menangani FOUC (Flash of Unstyled Content)
  // Menambahkan kelas js-loaded ke body setelah CSS dimuat
  document.body.classList.add('js-loaded');
});