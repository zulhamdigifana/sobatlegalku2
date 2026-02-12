import React from 'react';
import Button from '../components/Button';
import {
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Award
} from 'lucide-react';
import { WHATSAPP_LINK_POSITIONING, WHATSAPP_DISPLAY } from '../constants';

// --- Components ---

const SectionContainer: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-20 md:py-24 ${className}`}>
    <div className="container mx-auto px-4 max-w-4xl">
      {children}
    </div>
  </section>
);

// --- Sections ---

const HeroSection = () => (
  <section className="pt-32 pb-24 bg-white relative overflow-hidden">
    <div className="container mx-auto px-4 max-w-5xl relative z-10">

      {/* Box Container Design */}
      <div className="border-[3px] md:border-4 border-brand-500 p-8 md:p-14 text-center mb-12 mx-auto max-w-4xl relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-brand-50 rounded-full text-brand-700 font-bold text-xs md:text-sm uppercase tracking-widest mb-8">
          <TrendingUp size={16} /> Next Level UMKM
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-gray-900 leading-tight mb-8">
          UMKM Mau Naik Level? <br />
          <span className="text-brand-600">Berhenti Pakai Nama Pribadi.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
          Awalnya mungkin tidak terasa masalah. <br className="hidden md:block" />
          Order tetap masuk. Transfer tetap jalan. Bisnis tetap hidup.
        </p>
      </div>

      {/* Narrative Below Box */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Tapi begitu ada klien besar datang dan bertanya:
        </p>

        <div className="bg-gray-50 px-8 py-6 rounded-xl border-l-4 border-brand-500 mb-10 inline-block shadow-sm mx-auto">
          <p className="italic text-2xl md:text-3xl text-gray-700 font-serif">“Bisa kirim legalitas PT-nya?”</p>
        </div>

        <div className="prose prose-lg mx-auto text-gray-600 mb-10 leading-relaxed">
          <p>
            Kamu mulai sadar… <br />
            Bisnismu sudah berkembang. Tapi statusnya masih usaha pribadi. <br />
            <strong className="text-gray-900 text-xl block mt-2">Dan di mata perusahaan besar, itu beda level.</strong>
          </p>
        </div>

        <Button href={WHATSAPP_LINK_POSITIONING} className="text-lg px-10 py-4 shadow-xl shadow-brand-500/20">
          Naik Level Sekarang — Konsultasi GRATIS via WhatsApp
        </Button>
      </div>
    </div>
  </section>
);

const AgitationSection = () => (
  <SectionContainer className="bg-gray-50 border-y border-gray-100">
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="text-red-500" size={32} />
        <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">
          Realita Pasar
        </h2>
      </div>

      <p className="text-lg text-gray-700 mb-8">
        Kalau bisnismu sudah jalan tapi belum punya PT,
        kamu masih dianggap "usaha kecil". <br />
        <span className="text-gray-500 text-base">Bukan karena omzetmu kecil. Tapi karena legalitasmu belum naik kelas.</span>
      </p>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mb-10">
        <h3 className="font-bold text-gray-900 mb-4">Akibatnya?</h3>
        <ul className="space-y-4">
          {[
            "Peluang kerja sama tertunda",
            "Tender tidak bisa diikuti",
            "Brand terlihat kurang profesional"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-700">
              <XCircle className="text-red-400 shrink-0" size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-6 border-t border-gray-100 text-gray-600 italic">
          Padahal kualitas produk dan jasamu sudah layak bersaing.
        </div>
      </div>

      <div className="text-center">
        <Button href={WHATSAPP_LINK_POSITIONING} variant="outline" className="border-gray-300 hover:border-brand-600 text-gray-600 hover:text-brand-600">
          Cek Solusi Legalitas untuk Bisnismu — Klik WhatsApp
        </Button>
      </div>
    </div>
  </SectionContainer>
);

const MindsetSection = () => (
  <SectionContainer className="bg-white">
    <div className="max-w-3xl mx-auto">
      <div className="mb-10 text-center">
        <div className="inline-block p-3 bg-brand-50 rounded-full mb-4">
          <Briefcase className="text-brand-600" size={24} />
        </div>
        <h2 className="text-3xl font-display font-bold text-gray-900">
          Shift Mindset (Visualisasi Masa Depan)
        </h2>
      </div>

      <p className="text-xl text-center text-gray-700 mb-10 font-light">
        Sekarang bayangkan sebaliknya. <br />
        Kamu kirim proposal. Header-nya ada <strong className="text-brand-600">nama PT milikmu sendiri.</strong>
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-brand-600 text-white p-8 rounded-2xl flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">The New Standard</h3>
          <p className="opacity-90">
            Ada legalitas resmi. <br />
            Ada struktur perusahaan. <br />
            Ada kredibilitas. <br />
            <br />
            <span className="font-bold text-xl">Posisinya langsung berbeda.</span>
          </p>
        </div>

        <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
          <ul className="space-y-4">
            {[
              "Lebih dipercaya klien",
              "Bisa kerja sama B2B",
              "Siap ikut tender",
              "Brand terlihat profesional"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                <span className="text-lg font-medium text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-center text-gray-500 italic text-lg">
        Itu bukan soal gaya. Itu soal <strong>positioning</strong>.
      </p>
    </div>
  </SectionContainer>
);

const OfferSection = () => (
  <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
        Dan kabar baiknya…
      </h2>
      <p className="text-xl md:text-2xl text-brand-100 mb-10 font-light">
        Mulai <span className="font-bold text-white bg-white/20 px-2 rounded">600 ribuan</span> saja, <br />
        kamu sudah bisa punya PT Perorangan resmi atas namamu sendiri.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          "Tanpa ribet urus sendiri",
          "Tanpa drama bolak-balik sistem",
          "Proses cepat",
          "Legal & sesuai regulasi",
          "Didampingi sampai jadi"
        ].map((item, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm md:text-base flex items-center gap-2">
            <ShieldCheck size={16} className="text-green-400" />
            {item}
          </div>
        ))}
      </div>

      <div className="bg-white text-gray-900 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
        <p className="text-lg font-bold mb-6">
          Kamu fokus kembangkan bisnis. <br />
          Kami urus legalitasnya.
        </p>
        <Button href={WHATSAPP_LINK_POSITIONING} fullWidth>
          Mulai Proses Pendirian PT Sekarang — Klik WhatsApp
        </Button>
      </div>
    </div>
  </section>
);

const DecisionSection = () => (
  <SectionContainer className="bg-white text-center">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-8">
        Sekarang pertanyaannya cuma satu:
      </h2>

      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="flex-1 p-6 rounded-xl border-2 border-transparent bg-gray-50 text-gray-400">
          <p className="font-medium">Mau tetap jadi UMKM biasa?</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-xs">OR</div>
        </div>
        <div className="flex-1 p-6 rounded-xl border-2 border-brand-500 bg-brand-50 text-brand-700 shadow-lg transform md:-translate-y-2">
          <p className="font-bold flex items-center justify-center gap-2">
            <Award size={18} /> Resmi jadi CEO di PT milikmu sendiri?
          </p>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Keputusan ada di tanganmu. <br />
        Legalitas bukan soal formalitas. Ini tentang bagaimana pasar memandang bisnismu. <br />
        <strong>Semakin cepat kamu naik level, semakin besar peluang yang bisa kamu ambil.</strong>
      </p>
    </div>
  </SectionContainer>
);

const ClosingSection = () => (
  <section className="py-24 bg-white border-t border-gray-100">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-8">
        Jangan Tunggu Ditanya Legalitas <span className="text-brand-600">Baru Bergerak</span>
      </h2>

      <p className="text-xl text-gray-600 mb-10">
        Klik sekarang. Chat WhatsApp & Konsultasi GRATIS. <br />
        <span className="font-bold text-gray-800">Resmi. Cepat. Didampingi sampai jadi.</span>
      </p>

      <div className="mb-10">
        <div className="inline-block p-6 bg-brand-50 rounded-2xl border border-brand-100">
          <p className="text-lg font-medium italic text-brand-800">
            "Sobat Legalku urus legalitasnya. <br />
            Kamu fokus kembangkan omzet."
          </p>
        </div>
      </div>

      <Button href={WHATSAPP_LINK_POSITIONING} className="text-lg px-10 py-5 shadow-2xl animate-pulse">
        Klik WhatsApp Sekarang — Konsultasi GRATIS
      </Button>

      <p className="mt-4 text-gray-400 font-mono text-sm">
        {WHATSAPP_DISPLAY}
      </p>
    </div>
  </section>
);

const PositioningPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Sticky Header */}
      <nav className="sticky top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/header-logo.png"
              alt="Sobat Legalku"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
          <Button href={WHATSAPP_LINK_POSITIONING} className="hidden md:inline-flex py-2 px-4 text-xs">
            Hubungi Kami
          </Button>
        </div>
      </nav>

      <main>
        <HeroSection />
        <AgitationSection />
        <MindsetSection />
        <OfferSection />
        <DecisionSection />
        <ClosingSection />
      </main>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-gray-200 md:hidden z-40">
        <Button href={WHATSAPP_LINK_POSITIONING} fullWidth className="shadow-lg shadow-brand-500/30">
          Konsultasi via WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default PositioningPage;