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

// Inisialisasi AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
});