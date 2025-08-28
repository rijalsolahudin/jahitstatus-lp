/**
 * Contact Form WhatsApp Integration
 * Handles the contact form submission and redirects to WhatsApp with form data
 */

/**
 * Validates email format
 * @param {string} email - The email to validate
 * @returns {boolean} - True if email is valid, false otherwise
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number format
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - True if phone number is valid, false otherwise
 */
function isValidPhone(phone) {
  // Allow +, spaces, and digits, minimum 10 digits
  const phoneRegex = /^[+\s\d]{10,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

document.addEventListener('DOMContentLoaded', () => {
  // Get the contact form element
  const contactForm = document.getElementById('contact-form');
  
  // WhatsApp phone number (without + or any special characters)
  const whatsappNumber = '6287777077717'; // Nomor dari halaman kontak (tanpa spasi)
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();
      
      // Get form input values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Validate form inputs
      let errorMessage = '';
      
      if (!name) {
        errorMessage = 'Mohon isi nama Anda.';
      } else if (!message) {
        errorMessage = 'Mohon isi pesan Anda.';
      } else if (email && !isValidEmail(email)) {
        errorMessage = 'Format email tidak valid.';
      } else if (phone && !isValidPhone(phone)) {
        errorMessage = 'Format nomor telepon tidak valid.';
      }
      
      if (errorMessage) {
        alert(errorMessage);
        return;
      }
      
      // Show loading state on button
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;
      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Mengirim...';
      submitButton.disabled = true;
      
      // Construct the WhatsApp message
      let whatsappMessage = `Halo, saya ${name}`;
      
      if (email) {
        whatsappMessage += `, email: ${email}`;
      }
      
      if (phone) {
        whatsappMessage += `, telepon: ${phone}`;
      }
      
      whatsappMessage += `\n\nPesan: ${message}`;
      
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Construct the WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Reset the form after submission
      contactForm.reset();
      
      // Reset button state after a short delay
      setTimeout(() => {
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'mt-4 p-3 bg-green-100 text-green-700 rounded-lg';
        successMessage.innerHTML = '<i class="fas fa-check-circle mr-2"></i> Pesan berhasil dikirim ke WhatsApp!';
        
        // Insert success message after the form
        contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      }, 1000);
    });
  }
});