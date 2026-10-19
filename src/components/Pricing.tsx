type Plan = {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  note: string;
  cta: string;
  planId: string;
  popular?: boolean;
  highlight?: string;
  features: string[];
};

const FEATURES = [
  'Kode order unik otomatis',
  'Tracking order real-time',
  'Notifikasi email otomatis',
  'Dashboard admin',
  'Database pelanggan & mitra',
  'Kalkulator HPP',
  'Asisten AI customer 24/7',
  'Asisten AI admin (smart command center)',
  'Dst. semua fitur lengkap',
];

const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    badge: 'Gratis 1 bulan pertama',
    price: 'Rp 499.000',
    period: '/ bulan',
    note: 'Pembayaran fleksibel per bulan',
    cta: 'Mulai Gratis',
    planId: '01987d3c-5e91-7090-b321-2935d82e167f',
    features: FEATURES,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 'Rp 4.990.000',
    period: '/ tahun',
    note: 'Hemat ±17% dibanding bayar bulanan',
    cta: 'Pilih Paket Pro',
    planId: '01987d3c-5eb3-7213-b942-25a7e5e712e4',
    popular: true,
    highlight: 'Lebih hemat ± Rp 1.000.000',
    features: [...FEATURES, 'Akses penuh 12 bulan'],
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: 'Rp 20.000.000',
    period: '(Beli Putus)',
    note: 'Bayar sekali, pakai selamanya',
    cta: 'Pilih Lifetime',
    planId: '01987d3c-5eb6-7002-b9be-5dc9bb082920',
    highlight: 'Hemat hingga Rp 39.000.000 (10 thn)',
    features: [...FEATURES, 'Akses seumur hidup'],
  },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul class="space-y-3">
      {items.map((item, i) => (
        <li class="flex items-start" key={i}>
          <i class="fas fa-check text-green-500 mt-1 mr-3"></i>
          <span class="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Pricing() {
  return (
    <section id="pricing" class="py-10 sm:py-12 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-10" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">
            Paket Berlangganan
          </h2>
          <div class="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p class="text-blue-50 text-base md:text-lg max-w-2xl mx-auto">
            Coba paket Basic <span class="font-bold text-white">gratis 1 bulan pertama</span>.
            Paket lain langsung aktif setelah pembayaran.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PLANS.map((plan, index) => (
            <div
              key={plan.id}
              class={
                plan.popular
                  ? 'bg-white rounded-2xl shadow-2xl overflow-hidden transform scale-105 border-2 border-amber-400 hover:shadow-2xl transition-all duration-300 relative z-10'
                  : 'bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100'
              }
              data-aos="fade-up"
              data-aos-delay={String(index * 100)}
            >
              {plan.popular && (
                <div class="absolute top-0 right-0 bg-amber-400 text-amber-950 px-5 py-1.5 rounded-bl-xl font-extrabold text-xs tracking-wider uppercase">
                  POPULER
                </div>
              )}
              <div class="p-8 border-b border-gray-100">
                {plan.badge && (
                  <span class="inline-block mb-3 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}
                <h3 class="text-2xl font-bold mb-2 text-gray-800">{plan.name}</h3>
                <div class="text-primary text-3xl font-bold mb-2">
                  {plan.price}
                  <span class="text-gray-500 text-lg font-normal"> {plan.period}</span>
                </div>
                <p class="text-gray-600 text-sm">{plan.note}</p>
              </div>
              <div class="p-8">
                <CheckList items={plan.features} />
                {plan.highlight && (
                  <p class="mt-5 pt-5 border-t border-gray-100 text-primary font-semibold">
                    {plan.highlight}
                  </p>
                )}
              </div>
              <div class="p-8 bg-white border-t border-gray-100">
                <a
                  href={`https://app.jahitstatus.com/register?plan_id=${plan.planId}`}
                  class={
                    plan.popular
                      ? 'block w-full py-3.5 px-4 text-center bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold rounded-xl transition-all shadow-md hover:shadow-lg'
                      : 'block w-full py-3 px-4 text-center bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors shadow-sm hover:shadow'
                  }
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}