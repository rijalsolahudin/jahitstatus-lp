import { useState } from 'preact/hooks';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const isValidEmail = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(val);
  };

  const isValidPhone = (val: string) => {
    const phoneRegex = /^[+\s\d]{10,15}$/;
    return phoneRegex.test(val.replace(/\s/g, ''));
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Mohon isi nama Anda.');
      return;
    }
    if (!message.trim()) {
      alert('Mohon isi pesan Anda.');
      return;
    }
    if (email.trim() && !isValidEmail(email)) {
      alert('Format email tidak valid.');
      return;
    }
    if (phone.trim() && !isValidPhone(phone)) {
      alert('Format nomor telepon tidak valid.');
      return;
    }

    setIsSubmitting(true);

    const whatsappNumber = '6287777077717';
    let whatsappMessage = `Halo, saya ${name}`;

    if (email) {
      whatsappMessage += `, email: ${email}`;
    }

    if (phone) {
      whatsappMessage += `, telepon: ${phone}`;
    }

    whatsappMessage += `\n\nPesan: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" class="py-10 sm:py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-10" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Kontak Kami</h2>
          <div class="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div class="bg-gray-50 p-8 rounded-lg shadow-md" data-aos="fade-right">
            <h3 class="text-2xl font-semibold mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} id="contact-form">
              <div class="mb-4">
                <label for="name" class="block text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onInput={(e) => setName((e.target as HTMLInputElement).value)}
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div class="mb-4">
                <label for="phone" class="block text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onInput={(e) => setPhone((e.target as HTMLInputElement).value)}
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div class="mb-6">
                <label for="message" class="block text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onInput={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                class="w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <i class="fas fa-spinner fa-spin mr-2"></i> Mengirim...
                  </>
                ) : (
                  <>
                    <i class="fab fa-whatsapp mr-2 text-lg"></i> Kirim Pesan via
                    WhatsApp
                  </>
                )}
              </button>
            </form>
            {success && (
              <div class="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                <i class="fas fa-check-circle mr-2"></i> Pesan berhasil dikirim ke WhatsApp!
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div data-aos="fade-left">
            <h3 class="text-2xl font-semibold mb-6">Informasi Kontak</h3>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-primary-light rounded-full w-10 h-10 flex items-center justify-center text-white">
                  <i class="fas fa-map-marker-alt text-base"></i>
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold">Kantor Pusat</h4>
                  <p class="text-gray-600">
                    Jl. Produksi No. 45, Sleman, Yogyakarta
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 bg-primary-light rounded-full w-10 h-10 flex items-center justify-center text-white">
                  <i class="fas fa-envelope text-base"></i>
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold">Email</h4>
                  <p class="text-gray-600">-</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0 bg-primary-light rounded-full w-10 h-10 flex items-center justify-center text-white">
                  <i class="fas fa-phone-alt text-base"></i>
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold">Telepon</h4>
                  <p class="text-gray-600">+62 877 7707 7717</p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h4 class="font-semibold mb-4">Jam Operasional</h4>
              <p class="text-gray-600 mb-2">Senin - Jumat: 08.00 - 17.00 WIB</p>
              <p class="text-gray-600">Sabtu: 09.00 - 15.00 WIB</p>
            </div>

            <div class="mt-8">
              <h4 class="font-semibold mb-4">Ikuti Kami</h4>
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                >
                  <i class="fab fa-instagram text-base"></i>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                >
                  <i class="fab fa-linkedin-in text-base"></i>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors"
                >
                  <i class="fab fa-whatsapp text-base"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
