/**
 * Mobile Menu Handler
 * Menangani toggle menu mobile untuk tampilan responsif dengan animasi smooth
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ambil elemen-elemen yang diperlukan
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  // Pastikan elemen ada sebelum menambahkan event listener
  if (mobileMenuButton && mobileMenu) {
    // Tambahkan class hidden secara default (untuk kompatibilitas dengan CSS)
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    }
    
    // Tambahkan event listener untuk toggle menu
    mobileMenuButton.addEventListener('click', () => {
      // Toggle class 'show' pada menu mobile untuk animasi
      mobileMenu.classList.toggle('show');
      
      // Animasi ikon menu (toggle antara burger dan close)
      const menuIcon = mobileMenuButton.querySelector('i');
      if (menuIcon) {
        if (menuIcon.classList.contains('fa-bars')) {
          menuIcon.classList.remove('fa-bars');
          menuIcon.classList.add('fa-times');
        } else {
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        }
      }
    });
    
    // Tambahkan event listener untuk link di menu mobile
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Tutup menu setelah link diklik dengan animasi
        mobileMenu.classList.remove('show');
        
        // Reset ikon menu ke burger
        const menuIcon = mobileMenuButton.querySelector('i');
        if (menuIcon) {
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        }
      });
    });
  }
});