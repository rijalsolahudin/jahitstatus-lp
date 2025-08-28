/**
 * Animations.js
 * Script untuk menambahkan efek animasi dan interaksi pada halaman
 */

document.addEventListener('DOMContentLoaded', function() {
  // Tunggu hingga CSS dimuat sepenuhnya (js-loaded ditambahkan oleh main.js)
  const checkLoaded = () => {
    if (document.body.classList.contains('js-loaded')) {
      // Inisialisasi animasi untuk elemen dengan kelas hover-lift
      initHoverEffects();
      
      // Inisialisasi animasi scroll
      initScrollAnimations();
      
      // Inisialisasi efek parallax
      initParallaxEffect();
      
      // Inisialisasi efek ripple untuk tombol
      initRippleEffect();
    } else {
      // Cek lagi setelah 100ms
      setTimeout(checkLoaded, 100);
    }
  };
  
  // Mulai pengecekan
  checkLoaded();
});

/**
 * Inisialisasi efek hover untuk elemen dengan kelas hover-lift
 */
function initHoverEffects() {
  // Tambahkan efek hover pada card dan tombol
  const hoverElements = document.querySelectorAll('.hover-lift');
  
  hoverElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '';
    });
  });
}

/**
 * Inisialisasi animasi saat scroll
 */
function initScrollAnimations() {
  // Tambahkan kelas untuk animasi saat elemen muncul di viewport
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  // Observer untuk mendeteksi elemen yang masuk viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe semua elemen dengan kelas animate-on-scroll
  animateElements.forEach(element => {
    observer.observe(element);
  });
  
  // Tambahkan kelas animate-on-scroll ke elemen tracking
  const trackingContainer = document.getElementById('tracking-container');
  if (trackingContainer) {
    trackingContainer.classList.add('animate-on-scroll');
    
    // Tambahkan animasi untuk elemen tracking
    const trackingCard = trackingContainer.querySelector('.tracking-card');
    if (trackingCard) {
      trackingCard.classList.add('hover-lift');
    }
    
    const progressSteps = trackingContainer.querySelectorAll('.progress-step');
    progressSteps.forEach((step, index) => {
      step.classList.add('animate-on-scroll');
      step.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const notificationBox = trackingContainer.querySelector('.notification-box');
    if (notificationBox) {
      notificationBox.classList.add('hover-lift');
      notificationBox.classList.add('animate-on-scroll');
      notificationBox.style.transitionDelay = '0.5s';
    }
  }
}

/**
 * Inisialisasi efek parallax untuk background
 */
function initParallaxEffect() {
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.getAttribute('data-speed') || 0.5;
      element.style.backgroundPositionY = `${scrollTop * speed}px`;
    });
  });
}

/**
 * Inisialisasi efek ripple untuk tombol
 */
function initRippleEffect() {
  const buttons = document.querySelectorAll('button, .btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

/**
 * Tambahkan efek smooth scroll untuk link anchor
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset untuk header
        behavior: 'smooth'
      });
    }
  });
});

/**
 * Tambahkan efek untuk form input
 */
document.querySelectorAll('input, textarea').forEach(input => {
  // Tambahkan kelas saat input difokuskan
  input.addEventListener('focus', function() {
    this.parentElement.classList.add('input-focused');
  });
  
  // Hapus kelas saat input kehilangan fokus
  input.addEventListener('blur', function() {
    if (this.value === '') {
      this.parentElement.classList.remove('input-focused');
    }
  });
  
  // Periksa apakah input sudah memiliki nilai saat halaman dimuat
  if (input.value !== '') {
    input.parentElement.classList.add('input-focused');
  }
});

/**
 * Tambahkan efek loading untuk transisi halaman
 */
function showPageLoadingEffect() {
  const loader = document.createElement('div');
  loader.classList.add('page-loader');
  loader.innerHTML = `
    <div class="loader-spinner">
      <div class="spinner-circle"></div>
    </div>
  `;
  
  document.body.appendChild(loader);
  
  setTimeout(() => {
    loader.classList.add('loaded');
    setTimeout(() => {
      loader.remove();
    }, 500);
  }, 500);
}

// Tambahkan CSS untuk efek ripple
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  .ripple-effect {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.4);
    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;
    animation: ripple 0.6s linear;
    transform: scale(0);
    pointer-events: none;
  }
  
  @keyframes ripple {
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }
  
  .page-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
  }
  
  .page-loader.loaded {
    opacity: 0;
  }
  
  .loader-spinner {
    width: 50px;
    height: 50px;
  }
  
  .spinner-circle {
    width: 100%;
    height: 100%;
    border: 4px solid rgba(37, 150, 190, 0.2);
    border-top-color: #2596be;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .animate-on-scroll.animated {
    opacity: 1;
    transform: translateY(0);
  }
`;


document.head.appendChild(rippleStyle);

// Tampilkan efek loading saat halaman dimuat
showPageLoadingEffect();