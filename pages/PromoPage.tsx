import React from 'react';
import Button from '../components/Button';
import {
  CheckCircle2,
  Star,
  Zap,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Gift
} from 'lucide-react';
import {
  WHATSAPP_LINK_PROMO,
  WHATSAPP_DISPLAY,
  WHATSAPP_LINK_STARTER,
  WHATSAPP_LINK_GROWTH,
  WHATSAPP_LINK_PROFESSIONAL
} from '../constants';

const PricingCard: React.FC<{
  title: string;
  originalPrice: string;
  promoPrice: string;
  description: string;
  features: string[];
  bonuses?: string[];
  isPopular?: boolean;
  isBestValue?: boolean;
  ctaText: string;
  link: string;
}> = ({ title, originalPrice, promoPrice, description, features, bonuses, isPopular, isBestValue, ctaText, link }) => (
  <div className={`relative flex flex-col h-full rounded-2xl transition-all duration-300 ${isPopular || isBestValue
    ? 'border-2 border-brand-500 shadow-xl bg-white transform md:-translate-y-2 z-10'
    : 'border border-gray-200 shadow-sm bg-gray-50/50 hover:border-brand-300'
    }`}>
    {isPopular && (
      <div className="absolute -top-4 left-0 right-0 flex justify-center">
        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
          <Star size={12} fill="currentColor" /> Paling Banyak Dipilih
        </span>
      </div>
    )}
    {isBestValue && (
      <div className="absolute -top-4 left-0 right-0 flex justify-center">
        <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
          <ShieldCheck size={12} /> Paling Lengkap & Siap Ekspansi
        </span>
      </div>
    )}

    <div className="p-6 md:p-8 flex-grow">
      <h3 className="text-xl font-display font-bold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-sm text-gray-500 line-through block">{originalPrice}</span>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl md:text-4xl font-bold text-brand-600">{promoPrice}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-6 border-b border-gray-200 pb-4 min-h-[3rem]">
        {description}
      </p>

      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
            <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {bonuses && bonuses.length > 0 && (
        <div className="bg-yellow-50 rounded-lg p-4 mb-4 border border-yellow-100">
          <div className="flex items-center gap-2 mb-2">
            <Gift size={16} className="text-yellow-600" />
            <span className="font-bold text-xs uppercase text-yellow-700">Bonus Spesial</span>
          </div>
          <ul className="space-y-2">
            {bonuses.map((bonus, idx) => (
              <li key={idx} className="text-xs text-gray-800 font-medium flex items-start gap-1">
                <span className="text-yellow-600">•</span> {bonus}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-2 text-xs text-center text-gray-500 mb-4 bg-blue-50 py-1 rounded">
        Gratis: Konsultasi Via WA
      </div>
    </div>

    <div className="p-6 pt-0 mt-auto">
      <Button
        href={link}
        fullWidth
        variant={isPopular || isBestValue ? 'primary' : 'outline'}
        className="text-sm"
      >
        {ctaText}
      </Button>
    </div>
  </div>
);

const PromoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/header-logo.png"
              alt="Sobat Legalku"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
          <Button href={WHATSAPP_LINK_PROMO} className="hidden md:inline-flex py-2 px-4 text-xs">
            Ambil Promo
          </Button>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        {/* Hero Hook */}
        <section className="container mx-auto px-4 mb-16 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wide mb-6">
            <Zap size={14} className="fill-brand-700" /> Promo Terbatas
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 leading-tight">
            UMKM Serius Naik Kelas,<br />
            <span className="text-brand-600">Jangan Tunda Legalitas</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Setiap hari bisnis jalan. Tapi tanpa PT, kamu masih dianggap "usaha biasa".
            Emang kamu mau usahamu terlihat kecil? Atau ingin terlihat besar dan profesional dengan <strong>PT Perorangan?</strong>
          </p>

          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg inline-block text-yellow-800 text-sm font-medium animate-pulse">
            ⚠️ Promo ini terbatas dan bisa berubah sewaktu-waktu.
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

            {/* Paket Starter */}
            <PricingCard
              title="Paket Starter"
              originalPrice="Rp 1.000.000"
              promoPrice="597rb"
              description="Cocok untuk kamu yang ingin mulai legal dulu dengan biaya paling hemat."
              features={[
                "Cek nama PT Gratis",
                "Rekomendasi KBLI",
                "Email Registrasi (Gmail)",
                "Pernyataan Pendirian Perseroan Perorangan",
                "SK Kementerian Hukum RI",
                "Hak Akses AHU"
              ]}
              ctaText="Ambil Paket Starter"
              link={WHATSAPP_LINK_STARTER}
            />

            {/* Paket Growth */}
            <PricingCard
              title="Paket Growth"
              originalPrice="Rp 1.500.000"
              promoPrice="797rb"
              isPopular
              description="Pilihan paling rasional. Selisih 200rb dari Starter, tapi sudah siap secara pajak."
              features={[
                "Semua fitur Paket Starter",
                "Akun Coretax",
                "NPWP (Nomor Pokok Wajib Pajak)",
                "SKT Pajak"
              ]}
              bonuses={[
                "Voucher pembuatan website senilai Rp 1.500.000"
              ]}
              ctaText="Ambil Paket Growth"
              link={WHATSAPP_LINK_GROWTH}
            />

            {/* Paket Profesional */}
            <PricingCard
              title="Paket Profesional"
              originalPrice="Rp 2.000.000"
              promoPrice="997rb"
              isBestValue
              description="Pebisnis yang tidak mau repot. Sekali jadi, langsung lengkap sampai NIB & OSS."
              features={[
                "Semua fitur Paket Growth",
                "NIB (Nomor Induk Berusaha)",
                "SPPL & Tata Ruang",
                "Akun OSS RBA"
              ]}
              bonuses={[
                "Voucher pembuatan website senilai Rp 2.000.000",
                "Gratis pembuatan Logo Bisnis senilai Rp 1.000.000"
              ]}
              ctaText="Ambil Paket Profesional"
              link={WHATSAPP_LINK_PROFESSIONAL}
            />

          </div>
        </section>

        {/* Urgency Section */}
        <section className="bg-gray-900 text-white py-16 mb-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <AlertTriangle className="mx-auto text-yellow-400 mb-6 h-12 w-12" />
            <h2 className="text-3xl font-display font-bold mb-6">Keputusan Ada di Tangan Kamu</h2>
            <p className="text-xl text-gray-300 mb-8">
              Semakin cepat PT terbit, semakin cepat kamu bisa:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-10">
              {['Kerja sama dengan perusahaan besar', 'Ikut tender resmi', 'Lebih dipercaya klien', 'Naik kelas jadi bisnis profesional'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-400" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Button href={WHATSAPP_LINK_PROMO} variant="white" className="shadow-lg shadow-brand-500/20">
              Amankan Nama PT Sekarang
            </Button>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="container mx-auto px-4 text-center pb-10">
          <div className="bg-brand-50 rounded-2xl p-8 md:p-12 border border-brand-100 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Siap Mendaftar?</h2>
            <p className="text-gray-600 mb-8">
              Kirim pesan sekarang: <br />
              <span className="font-bold text-brand-700 text-lg">"Saya Mau Daftar PT Perorangan"</span>
            </p>
            <Button href={WHATSAPP_LINK_PROMO} className="text-lg px-8 py-4">
              Klik WhatsApp Sekarang → {WHATSAPP_DISPLAY}
            </Button>
          </div>
        </section>

      </main>

      {/* Floating Sticky CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-gray-200 md:hidden z-40">
        <Button href={WHATSAPP_LINK_PROMO} fullWidth className="shadow-brand-500/50">
          Ambil Promo Sekarang
        </Button>
      </div>
    </div>
  );
};

export default PromoPage;