/**
 * Script untuk mengelola tampilan tracking order
 * Versi modern dengan efek visual dan interaktivitas yang ditingkatkan
 */

// Fungsi untuk mengambil data tracking dari file JSON
async function fetchTrackingData() {
  try {
    // Menggunakan path relatif yang benar
    const response = await fetch('./data-tracking.json');
    if (!response.ok) {
      throw new Error('Gagal mengambil data tracking: ' + response.status);
    }
    const data = await response.json();
    console.log('Data tracking berhasil dimuat:', data);
    return data;
  } catch (error) {
    console.error('Error saat mengambil data tracking:', error);
    return [];
  }
}

// Fungsi untuk mencari order berdasarkan ID
function findOrderById(trackingData, orderId) {
  return trackingData.find(order => order.order_id === orderId);
}

// Fungsi untuk memformat tampilan status
function formatStatusBadge(status, color) {
  const colorClass = color === 'green-500' ? 'status-badge-green' : 
                    color === 'amber-500' ? 'status-badge-amber' : 
                    color === 'blue-500' ? 'status-badge-blue' : 'status-badge-gray';
  
  // Tentukan warna teks berdasarkan color
  let textColor = '#4b5563'; // Default untuk gray
  if (color === 'green-500') {
    textColor = '#059669';
  } else if (color === 'amber-500') {
    textColor = '#d97706';
  } else if (color === 'blue-500') {
    textColor = '#2563eb';
  }
  
  return `<span class="status-badge ${colorClass}" style="color: ${textColor}; text-shadow: none;">${status}</span>`;
}

// Fungsi untuk memformat tampilan progress step
function formatProgressStep(step, index) {
  let iconHtml = '';
  let statusClass = '';
  let textColor = '#9ca3af'; // Default untuk pending
  
  switch (step.status) {
    case 'completed':
      iconHtml = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>';
      statusClass = 'completed';
      textColor = '#1f2937'; // Warna teks lebih gelap untuk completed
      break;
    case 'in_progress':
      iconHtml = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>';
      statusClass = 'in-progress';
      textColor = '#f59e0b'; // Warna teks amber untuk in_progress
      break;
    default:
      iconHtml = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>';
      statusClass = 'pending';
  }
  
  const dateHtml = step.date ? `<p class="step-date" style="color: #6b7280;">${step.date}</p>` : '';
  
  // Menambahkan delay animasi berdasarkan index
  const animationDelay = `style="animation-delay: ${index * 0.1}s"`;
  
  return `
    <div class="progress-step" ${animationDelay}>
      <div class="flex">
        <div class="flex-shrink-0">
          <div class="step-icon ${statusClass}">
            ${iconHtml}
          </div>
        </div>
        <div class="step-content">
          ${dateHtml}
          <p class="step-title ${statusClass}" style="color: ${textColor}; background-color: transparent;">${step.step}</p>
        </div>
      </div>
    </div>
  `;
}

// Fungsi untuk merender data order ke dalam UI
function renderOrderTracking(order) {
  const trackingContainer = document.getElementById('tracking-container');
  
  if (!order) {
    trackingContainer.innerHTML = `
      <div class="p-6 bg-red-50 rounded-lg border border-red-100 text-center hover-lift">
        <p class="text-red-700">Order tidak ditemukan. Silakan periksa ID order Anda.</p>
      </div>
    `;
    return;
  }
  
  console.log('Rendering order:', order); // Log untuk debugging
  
  // Render order info
  const orderInfoHtml = `
    <div class="p-6 bg-gray-50">
      <div class="order-info-card p-5 hover-lift">
        <h3 class="order-id mb-4" style="color: #111827;">${order.order_id}</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="order-info-label">Pelanggan:</p>
            <p class="order-info-value" style="color: #1f2937;">${order.customer}</p>
          </div>
          <div>
            <p class="order-info-label">Tanggal Order:</p>
            <p class="order-info-value" style="color: #1f2937;">${order.order_date}</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div>
            <p class="order-info-label">Estimasi Selesai:</p>
            <p class="order-info-value" style="color: #1f2937;">${order.estimated_completion}</p>
          </div>
          <div>
            <p class="order-info-label">Status:</p>
            <p style="background-color: transparent;">${formatStatusBadge(order.current_status, order.status_color)}</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Render progress steps dengan animasi bertahap
  const progressStepsHtml = order.progress.map((step, index) => formatProgressStep(step, index)).join('');
  
  // Render notification
  const notificationHtml = `
    <div class="notification-box mt-8 text-center">
      <p class="text-sm text-gray-700" style="color: #4b5563; background-color: transparent;">${order.notification}</p>
    </div>
  `;
  
  // Combine all sections
  const contentHTML = `
    ${orderInfoHtml}
    <div class="p-6 bg-gray-50 border-t border-gray-100">
      <div class="progress-timeline">
        ${progressStepsHtml}
      </div>
      ${notificationHtml}
    </div>
  `;
  
  // Gunakan requestAnimationFrame untuk memastikan rendering berjalan dengan baik
  requestAnimationFrame(() => {
    // Set innerHTML setelah frame berikutnya
    trackingContainer.innerHTML = contentHTML;
    
    // Tambahkan kelas untuk animasi masuk setelah konten dirender
    setTimeout(() => {
      trackingContainer.classList.add('tracking-card');
      
      // Tambahkan event listener untuk link di notifikasi
      const notificationLinks = trackingContainer.querySelectorAll('.notification-box a');
      notificationLinks.forEach(link => {
        link.classList.add('text-primary', 'hover:text-primary-dark', 'transition-colors', 'duration-300');
      });
      
      console.log('Tracking card rendered and animated');
    }, 50); // Delay kecil untuk memastikan DOM sudah diperbarui
  });
}

// Fungsi untuk menangani pencarian order
function handleOrderSearch(trackingData) {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  
  if (searchForm && searchInput) {
    // Tambahkan kelas untuk styling
    searchInput.classList.add('search-input', 'input-focus-effect');
    
    // Tambahkan event listener untuk submit form
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const orderId = searchInput.value.trim();
      if (orderId) {
        // Tambahkan efek loading
        document.getElementById('tracking-container').innerHTML = `
          <div class="p-6 bg-gray-50 text-center">
            <div class="animate-pulse">
              <div class="h-6 loading-skeleton w-3/4 mx-auto mb-4"></div>
              <div class="h-4 loading-skeleton w-1/2 mx-auto mb-2"></div>
              <div class="h-4 loading-skeleton w-2/3 mx-auto mb-6"></div>
              
              <div class="space-y-3">
                <div class="h-4 loading-skeleton w-full"></div>
                <div class="h-4 loading-skeleton w-full"></div>
                <div class="h-4 loading-skeleton w-3/4"></div>
              </div>
            </div>
            <p class="mt-4 text-gray-500">Mencari data tracking...</p>
          </div>
        `;
        
        // Simulasi delay untuk efek loading (opsional)
        setTimeout(() => {
          const order = findOrderById(trackingData, orderId);
          console.log('Order found by search:', order);
          renderOrderTracking(order);
        }, 500);
      }
    });
    
    // Tambahkan event listener untuk input real-time (opsional)
    searchInput.addEventListener('input', function() {
      const searchButton = searchForm.querySelector('button[type="submit"]');
      if (searchButton) {
        if (this.value.trim() !== '') {
          searchButton.classList.remove('bg-gray-100', 'text-gray-700');
          searchButton.classList.add('bg-primary', 'text-white');
        } else {
          searchButton.classList.add('bg-gray-100', 'text-gray-700');
          searchButton.classList.remove('bg-primary', 'text-white');
        }
      }
    });
  }
}

// Fungsi untuk menginisialisasi tampilan tracking
async function initializeTracking() {
  // Tampilkan loading state
  const trackingContainer = document.getElementById('tracking-container');
  if (!trackingContainer) {
    console.error('Tracking container tidak ditemukan');
    return;
  }
  
  trackingContainer.innerHTML = `
    <div class="p-6 bg-gray-50 text-center">
      <div class="animate-pulse">
        <div class="h-6 loading-skeleton w-3/4 mx-auto mb-4"></div>
        <div class="h-4 loading-skeleton w-1/2 mx-auto mb-2"></div>
        <div class="h-4 loading-skeleton w-2/3 mx-auto mb-6"></div>
        
        <div class="space-y-3">
          <div class="h-4 loading-skeleton w-full"></div>
          <div class="h-4 loading-skeleton w-full"></div>
          <div class="h-4 loading-skeleton w-3/4"></div>
        </div>
      </div>
      <p class="mt-4 text-gray-500">Loading tracking data...</p>
    </div>
  `;
  
  // Variabel untuk menyimpan data tracking agar tidak hilang
  let trackingData = [];
  
  try {
    // Ambil data tracking
    trackingData = await fetchTrackingData();
    console.log('Data tracking berhasil dimuat:', trackingData);
    
    if (!trackingData || trackingData.length === 0) {
      console.error('Data tracking kosong');
      trackingContainer.innerHTML = `
        <div class="p-6 bg-red-50 rounded-lg border border-red-100 text-center hover-lift">
          <p class="text-red-700">Tidak ada data tracking yang tersedia.</p>
        </div>
      `;
      return;
    }
    
    // Tambahkan styling ke search form
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
      searchForm.classList.add('search-container');
      
      // Tambahkan ikon pencarian
      const searchInput = document.getElementById('search-input');
      if (searchInput) {

        // Isi nilai default di search input
        searchInput.value = trackingData[0].order_id;
      }
    }
    
    // Tampilkan order pertama sebagai default dengan delay untuk efek animasi
    // Gunakan setTimeout dengan waktu yang cukup untuk memastikan DOM sudah siap
    setTimeout(() => {
      if (trackingData && trackingData.length > 0) {
        console.log('Rendering order default:', trackingData[0]);
        renderOrderTracking(trackingData[0]);
      }
    }, 500);
    
    // Setup pencarian
    handleOrderSearch(trackingData);
  } catch (error) {
    console.error('Error initializing tracking:', error);
    trackingContainer.innerHTML = `
      <div class="p-6 bg-red-50 rounded-lg border border-red-100 text-center hover-lift">
        <p class="text-red-700">Terjadi kesalahan saat memuat data tracking. Silakan coba lagi nanti.</p>
        <p class="text-red-500 mt-2">${error.message || 'Unknown error'}</p>
      </div>
    `;
  }
}

// Jalankan inisialisasi saat dokumen siap
document.addEventListener('DOMContentLoaded', () => {
  // Pastikan elemen tracking-container ada dan terlihat
  const trackingContainer = document.getElementById('tracking-container');
  if (trackingContainer) {
    // Tambahkan style untuk memastikan elemen tetap terlihat
    trackingContainer.style.opacity = '1';
    trackingContainer.style.visibility = 'visible';
    
    // Jalankan inisialisasi tracking
    console.log('Initializing tracking...');
    initializeTracking();
    
    // Tambahkan event listener untuk memastikan data tetap terlihat setelah semua resource dimuat
    window.addEventListener('load', () => {
      console.log('Window loaded, ensuring tracking data visibility...');
      if (trackingContainer.innerHTML.trim() === '') {
        console.log('Tracking container empty after load, reinitializing...');
        initializeTracking();
      }
    });
  } else {
    console.error('Tracking container not found on DOMContentLoaded');
  }
});