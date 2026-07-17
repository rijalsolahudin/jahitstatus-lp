import { useState, useEffect } from 'preact/hooks';

export function Showcase() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeAlt, setActiveAlt] = useState<string>('');
  const [zoomScale, setZoomScale] = useState<number>(1);

  const openLightbox = (src: string, alt: string) => {
    setActiveImage(src);
    setActiveAlt(alt);
    setZoomScale(1);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = '';
  };

  const zoomIn = (e: MouseEvent) => {
    e.stopPropagation();
    setZoomScale((prev) => Math.min(prev + 0.25, 3));
  };

  const zoomOut = (e: MouseEvent) => {
    e.stopPropagation();
    setZoomScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const resetZoom = (e: MouseEvent) => {
    e.stopPropagation();
    setZoomScale(1);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  return (
    <section class="py-10 sm:py-12 bg-[#FAFBFC] relative overflow-hidden">
      {/* Background soft blur accents */}
      <div class="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="container mx-auto responsive-padding relative z-10">
        <div class="text-center mb-8 sm:mb-10" data-aos="fade-up">
          <span class="inline-block px-3 py-1 bg-primary bg-opacity-10 text-primary-dark rounded-full text-xs sm:text-sm font-semibold mb-3">
            DASHBOARD & PREVIEW
          </span>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 leading-tight">
            Kelola Produksi dengan Fitur Unggulan
          </h2>
          <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Pantau semua alur kerja konveksi Anda dengan sistem manajemen yang visual, interaktif, dan modern.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

          {/* Card 1: Kanban Board (Col 1) */}
          <div
            data-aos="fade-up"
            class="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:border-primary/20 transition-all duration-300"
          >
            <div>
              <span class="text-[10px] font-bold tracking-wider text-primary uppercase bg-primary/10 px-2.5 py-1 rounded-full">
                VISUAL & INTUITIF
              </span>
              <h3 class="text-xl font-bold text-gray-800 mt-3 mb-2">
                Kanban Board Produksi
              </h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Pantau & geser status tiap order antar tahap produksi dengan drag-and-drop.
              </p>
            </div>
            <div
              onClick={() => openLightbox("/images/previews/schedule-production-boards-view.jpg", "Kanban Board Produksi")}
              class="mt-6 -mx-6 -mb-8 overflow-hidden rounded-b-2xl border-t border-gray-100 cursor-zoom-in"
            >
              <img
                src="/images/previews/schedule-production-boards-view.jpg"
                alt="Kanban Board"
                class="w-full h-48 sm:h-52 object-cover object-left-top"
              />
            </div>
          </div>

          {/* Card 2: Kalender Produksi (Col 2) */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            class="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:border-primary/20 transition-all duration-300"
          >
            <div>
              <span class="text-[10px] font-bold tracking-wider text-emerald-600 uppercase bg-emerald-50 px-2.5 py-1 rounded-full">
                TEPAT WAKTU
              </span>
              <h3 class="text-xl font-bold text-gray-800 mt-3 mb-2">
                Kalender Produksi
              </h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Atur prioritas harian tim dengan jadwal & tenggat order yang terpampang jelas.
              </p>
            </div>
            <div
              onClick={() => openLightbox("/images/previews/schedule-production-calendar-view.jpg", "Kalender Produksi")}
              class="mt-6 -mx-6 -mb-8 overflow-hidden rounded-b-2xl border-t border-gray-100 cursor-zoom-in"
            >
              <img
                src="/images/previews/schedule-production-calendar-view.jpg"
                alt="Kalender Produksi"
                class="w-full h-48 sm:h-52 object-cover object-top"
              />
            </div>
          </div>

          {/* Card 3: Portal Tracking Pelanggan (Col 3, Row-span-2) */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            class="md:row-span-2 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:border-primary/20 transition-all duration-300"
          >
            <div class="mb-6">
              <span class="text-[10px] font-bold tracking-wider text-amber-600 uppercase bg-amber-50 px-2.5 py-1 rounded-full">
                TRANSPARANSI
              </span>
              <h3 class="text-xl font-bold text-gray-800 mt-3 mb-2">
                Portal Tracking Mandiri
              </h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Pelanggan bisa cek status jahitan secara real-time lewat link khusus. Kurangi chat berulang untuk menanyakan progres baju.
              </p>
            </div>
            <div
              onClick={() => openLightbox("/images/previews/tracking.webp", "Portal Tracking Mandiri")}
              class="overflow-hidden rounded-2xl border border-gray-100 flex-grow flex items-center bg-gray-50 cursor-zoom-in"
            >
              <img
                src="/images/previews/tracking.webp"
                alt="Portal Tracking Pelanggan"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 4: Asisten AI Admin (Col 1 & 2 - Spans 2) */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            class="md:col-span-2 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center justify-between overflow-hidden hover:border-primary/20 transition-all duration-300"
          >
            <div class="flex-1 space-y-3">
              <span class="text-[10px] font-bold tracking-wider text-purple-600 uppercase bg-purple-50 px-2.5 py-1 rounded-full">
                CERDAS
              </span>
              <h3 class="text-xl sm:text-2xl font-bold text-gray-800">
                Asisten AI Admin
              </h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                AI cerdas yang membantu admin mendeteksi hambatan produksi lebih dini, kelola antrean otomatis, dan merangkum progres pesanan secara kilat.
              </p>
            </div>
            <div
              onClick={() => openLightbox("/images/previews/ai-assisten-admin-square.png", "Asisten AI Admin")}
              class="flex-1 w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50 flex items-center justify-center p-3 cursor-zoom-in"
            >
              <img
                src="/images/previews/ai-assisten-admin-square.png"
                alt="Asisten AI Admin"
                class="w-full h-auto max-h-[280px] md:max-h-[320px] object-contain"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={closeLightbox}
          class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col justify-center items-center p-4 select-none cursor-zoom-out"
        >
          {/* Top Panel Controls */}
          <div class="absolute top-4 right-4 flex items-center space-x-3 z-10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <button
              onClick={zoomOut}
              class="text-white hover:text-primary transition-colors p-1"
              title="Zoom Out"
            >
              <i class="fas fa-search-minus text-lg"></i>
            </button>

            <span class="text-white text-xs font-mono min-w-[40px] text-center">
              {Math.round(zoomScale * 100)}%
            </span>

            <button
              onClick={zoomIn}
              class="text-white hover:text-primary transition-colors p-1"
              title="Zoom In"
            >
              <i class="fas fa-search-plus text-lg"></i>
            </button>

            <button
              onClick={resetZoom}
              class="text-white hover:text-primary transition-colors p-1 border-l border-white/10 pl-3 ml-2"
              title="Reset Zoom"
            >
              <i class="fas fa-redo text-sm"></i>
            </button>

            <button
              onClick={closeLightbox}
              class="text-white hover:text-red-500 transition-colors p-1 border-l border-white/10 pl-3 ml-2"
              title="Close (Esc)"
            >
              <i class="fas fa-times text-lg"></i>
            </button>
          </div>

          {/* Lightbox Caption */}
          <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md text-white text-sm px-6 py-2.5 rounded-full border border-white/10 max-w-[90%] text-center">
            {activeAlt}
          </div>

          {/* Scalable Image Container */}
          <div class="w-full h-full flex items-center justify-center overflow-auto p-8">
            <img
              src={activeImage}
              alt={activeAlt}
              onClick={(e) => e.stopPropagation()}
              style={{ transform: `scale(${zoomScale})` }}
              class="max-w-full max-h-[80vh] object-contain transition-transform duration-200 ease-out shadow-2xl rounded-lg cursor-default"
            />
          </div>
        </div>
      )}
    </section>
  );
}
