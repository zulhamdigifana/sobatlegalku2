import React, { useState } from 'react';
import Button from '../components/Button';
import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
  TrendingUp,
  Building2,
  FileText,
  Clock,
  Gift,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { WHATSAPP_LINK_SALES, WHATSAPP_DISPLAY } from '../constants';

// --- Components ---

const SectionContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <section className={`py-20 ${className}`}>
    <div className="container mx-auto px-4 max-w-4xl">
      {children}
    </div>
  </section>
);

const CheckListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3 mb-4">
    <CheckCircle2 className="text-brand-600 shrink-0 mt-1" size={20} />
    <span className="text-gray-700 text-lg">{children}</span>
  </li>
);

// --- Sections ---

const HeroSection = () => (
  <section className="pt-32 pb-20 bg-gradient-to-br from-brand-50 via-white to-blue-50 overflow-hidden relative">
    {/* Background accents */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>

    <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
      <div className="inline-block px-4 py-2 bg-white border border-brand-100 rounded-full mb-6 shadow-sm">
        <span className="text-brand-600 font-bold uppercase tracking-wider text-xs md:text-sm flex items-center gap-2">
          <Briefcase size={14} /> Solusi Legalitas UMKM
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-display font-extrabold text-gray-900 leading-tight mb-6">
        No Drama, Jadi <span className="text-brand-600">CEO Resmi</span> di PT Sendiri Mulai <span className="whitespace-nowrap">600 Ribuan Saja</span>
      </h1>

      <p className="text-xl text-gray-600 mb-8 font-light">
        Proses cepat, legal, dan didampingi sampai jadi. <br className="hidden md:block" />
        <span className="font-medium text-gray-900">Melayani di Seluruh Indonesia</span>
      </p>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100 max-w-2xl mx-auto mb-10">
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          Masih pakai nama pribadi untuk bisnis? <br />
          Sekarang waktunya naik level jadi perusahaan resmi. <br />
          <br />
          Mulai dari <strong>600 ribuan saja</strong>, kamu sudah bisa punya PT Perorangan atas namamu sendiri.
        </p>
        <Button href={WHATSAPP_LINK_SALES} className="text-lg px-8 py-4 shadow-brand-500/30">
          Konsultasi GRATIS Sekarang — Klik WhatsApp
        </Button>
      </div>

      <p className="text-sm text-gray-500">
        Respon Cepat via WhatsApp: <strong>{WHATSAPP_DISPLAY}</strong>
      </p>
    </div>
  </section>
);

const PainSection = () => (
  <SectionContainer className="bg-white">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
        Tanpa Legalitas, <br /><span className="text-red-600">Bisnis Selalu Setengah Jalan</span>
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mb-10">
      {[
        "Klien besar ragu kerja sama",
        "Tidak bisa ikut tender atau proyek resmi",
        "Sulit buka rekening bisnis perusahaan",
        "Brand terlihat kurang profesional",
        "Takut tersandung masalah hukum di kemudian hari",
        "Ribet kalau harus urus sendiri ke sistem"
      ].map((pain, idx) => (
        <div key={idx} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
          <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
          <span className="font-medium text-gray-800">{pain}</span>
        </div>
      ))}
    </div>

    <div className="bg-red-50 border border-red-100 p-6 rounded-xl text-center">
      <p className="text-gray-800 font-medium mb-4">
        Setiap hari kamu menunda, kompetitor yang sudah legal bisa ambil peluang lebih dulu.
      </p>
      <Button href={WHATSAPP_LINK_SALES} variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
        Tanyakan Solusi Legalitas Tercepat — Klik WhatsApp
      </Button>
    </div>
  </SectionContainer>
);

const SolutionSection = () => (
  <section className="py-20 bg-brand-600 text-white">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Sobat Legalku Urus Sampai Kamu Resmi Jadi CEO
        </h2>
        <p className="text-xl text-brand-100">
          Dengan biaya mulai <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded">600 ribuan</span>, kamu sudah bisa memiliki:
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-10">
        <ul className="grid md:grid-cols-2 gap-y-4 gap-x-8">
          {[
            "PT Perorangan resmi terdaftar",
            "Nama PT dicek & diamankan",
            "Dokumen legal lengkap",
            "Proses sesuai regulasi pemerintah",
            "Pendampingan sampai selesai"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <CheckCircle2 className="text-green-400 shrink-0" size={24} />
              <span className="text-lg font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <p className="text-brand-100 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          Kamu cukup kirim data. Kami yang urus semuanya. <br />
          <strong className="text-white">Tanpa drama. Tanpa ribet. Tanpa bolak-balik sistem.</strong>
        </p>
        <Button href={WHATSAPP_LINK_SALES} variant="white" className="text-lg px-8 py-4 shadow-xl">
          Mulai Proses Pendirian Sekarang — Klik WhatsApp
        </Button>
      </div>
    </div>
  </section>
);

const BenefitSection = () => (
  <SectionContainer className="bg-gray-50">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
        Setelah Punya PT Perorangan, <br />Posisi Bisnismu Berubah
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {[
        { icon: ShieldCheck, title: "Lebih Dipercaya", desc: "Klien & partner bisnis lebih yakin." },
        { icon: TrendingUp, title: "Mudah B2B", desc: "Kerja sama antar perusahaan lancar." },
        { icon: FileText, title: "Ikut Tender", desc: "Akses ke pengadaan pemerintah & swasta." },
        { icon: Building2, title: "Lebih Profesional", desc: "Brand image naik di mata klien." },
        { icon: ArrowRight, title: "Siap Ekspansi", desc: "Tanpa hambatan legalitas lagi." }
      ].map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <item.icon className="text-brand-600 mb-4" size={32} />
          <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>

    <div className="text-center bg-white p-8 rounded-2xl border border-gray-200">
      <p className="text-gray-800 text-lg font-medium mb-6">
        Legalitas bukan beban biaya. <br />
        Ini pondasi agar bisnismu tumbuh dengan aman.
      </p>
      <Button href={WHATSAPP_LINK_SALES} variant="primary">
        Cek Apakah Bisnismu Sudah Siap Naik Kelas
      </Button>
    </div>
  </SectionContainer>
);

const WhyUsSection = () => (
  <SectionContainer className="bg-white">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <img
          src="/why-us.png"
          alt="Tim Sobat Legalku"
          className="rounded-2xl shadow-2xl w-full h-auto object-cover transform md:-rotate-1 hover:rotate-0 transition-transform duration-500"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
          Kenapa Harus <span className="text-brand-600">Sobat Legalku?</span>
        </h2>
        <ul className="space-y-4 mb-8">
          <CheckListItem>Spesialis pendirian PT Perorangan</CheckListItem>
          <CheckListItem>Biaya transparan di awal</CheckListItem>
          <CheckListItem>Proses cepat & terarah</CheckListItem>
          <CheckListItem>GRATIS konsultasi</CheckListItem>
          <CheckListItem>Bisa full online dari mana saja</CheckListItem>
          <CheckListItem>Diurus sampai dokumen PT terbit</CheckListItem>
        </ul>
        <p className="text-gray-600 mb-8 italic">
          "Kami bantu dari awal sampai kamu benar-benar resmi punya perusahaan."
        </p>
        <Button href={WHATSAPP_LINK_SALES}>
          Konsultasi Langsung dengan Tim Legal Sekarang
        </Button>
      </div>
    </div>
  </SectionContainer>
);

const BonusSection = () => (
  <section className="py-16 bg-gray-900 text-white">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full font-bold uppercase tracking-wider mb-6 border border-yellow-500/30">
        <Gift size={18} /> Limited Offer
      </div>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
        Daftar Sekarang dan Dapatkan
      </h2>

      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm flex-1">
          <h3 className="text-xl font-bold text-yellow-400 mb-1">GRATIS</h3>
          <p className="text-gray-300">Konsultasi Legal Bisnis</p>
        </div>
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm flex-1">
          <h3 className="text-xl font-bold text-yellow-400 mb-1">GRATIS</h3>
          <p className="text-gray-300">Cek Nama PT</p>
        </div>
      </div>

      <p className="text-lg text-gray-400 mb-8">
        Semakin cepat kamu mulai, semakin cepat legalitas aman.
      </p>

      <Button href={WHATSAPP_LINK_SALES} variant="white" className="shadow-brand-500/20">
        Klaim Bonus Konsultasi Gratis — Klik WhatsApp
      </Button>
    </div>
  </section>
);

const UrgencySection = () => (
  <SectionContainer className="bg-white text-center">
    <div className="inline-block p-4 bg-red-50 rounded-full mb-6 animate-pulse">
      <AlertTriangle className="text-red-600 w-10 h-10" />
    </div>
    <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">
      Nama PT hanya bisa digunakan satu pihak.
    </h2>
    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
      Jika kamu menunda, nama yang kamu incar bisa dipakai orang lain lebih dulu. <br />
      <strong>Proses dimulai hari ini = lebih cepat kamu resmi jadi CEO.</strong>
    </p>
    <Button href={WHATSAPP_LINK_SALES} variant="secondary">
      Amankan Nama PT Kamu Sekarang — Klik WhatsApp
    </Button>
  </SectionContainer>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-5 flex items-center justify-between text-left hover:text-brand-600 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold font-display text-gray-800">{question}</span>
        {isOpen ? <ChevronUp className="text-gray-400 shrink-0 ml-4" /> : <ChevronDown className="text-gray-400 shrink-0 ml-4" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => (
  <SectionContainer className="bg-gray-50">
    <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-10">Pertanyaan Umum</h2>
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100 mb-10">
      <FAQItem
        question="Apakah PT Perorangan bisa didirikan sendiri?"
        answer="Ya. PT Perorangan dirancang khusus untuk 1 orang pemilik saham sekaligus direktur, tanpa perlu partner."
      />
      <FAQItem
        question="Berapa lama prosesnya?"
        answer="Relatif cepat. Setelah data lengkap dan pembayaran terkonfirmasi, proses pendaftaran ke sistem OSS bisa dilakukan segera."
      />
      <FAQItem
        question="Apakah harus datang ke kantor?"
        answer="Tidak. Semua proses bisa dilakukan secara online dari mana saja."
      />
      <FAQItem
        question="Apakah legal dan resmi?"
        answer="Ya. Sangat resmi dan mengikuti regulasi pemerintah melalui sistem AHU Kementerian Hukum RI."
      />
    </div>
    <div className="text-center">
      <Button href={WHATSAPP_LINK_SALES} variant="outline">
        Masih Ada Pertanyaan? Chat Sekarang
      </Button>
    </div>
  </SectionContainer>
);

const ObjectionSection = () => (
  <SectionContainer className="bg-white text-center">
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <div className="p-6 bg-brand-50 rounded-xl">
        <HelpCircle className="mx-auto text-brand-600 mb-4" size={32} />
        <h4 className="font-bold text-gray-900 text-lg mb-2">Takut Mahal?</h4>
        <p className="text-gray-600">Biaya jelas dari awal.</p>
      </div>
      <div className="p-6 bg-brand-50 rounded-xl">
        <HelpCircle className="mx-auto text-brand-600 mb-4" size={32} />
        <h4 className="font-bold text-gray-900 text-lg mb-2">Takut Ribet?</h4>
        <p className="text-gray-600">Semua kami yang urus.</p>
      </div>
      <div className="p-6 bg-brand-50 rounded-xl">
        <HelpCircle className="mx-auto text-brand-600 mb-4" size={32} />
        <h4 className="font-bold text-gray-900 text-lg mb-2">Takut Salah Proses?</h4>
        <p className="text-gray-600">Tim berpengalaman.</p>
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-8">
      Kamu fokus jalankan bisnis. <br />
      Kami pastikan legalitasnya aman.
    </h3>
    <Button href={WHATSAPP_LINK_SALES} variant="primary">
      Konsultasi Tanpa Komitmen Sekarang
    </Button>
  </SectionContainer>
);

const ClosingSection = () => (
  <section className="py-24 bg-gradient-to-b from-brand-900 to-gray-900 text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
    <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
      <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6 leading-tight">
        Jangan Tunggu Bisnismu <br />Besar Baru Legal
      </h2>
      <p className="text-xl md:text-2xl text-brand-100 mb-8 font-light">
        Mulai dari <strong>600 ribuan saja</strong>, <br />
        kamu sudah bisa punya PT Perorangan resmi atas namamu sendiri.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
        <div className="flex items-center justify-center gap-2 text-brand-200">
          <CheckCircle2 size={20} /> No Drama
        </div>
        <div className="flex items-center justify-center gap-2 text-brand-200">
          <CheckCircle2 size={20} /> Proses Cepat
        </div>
        <div className="flex items-center justify-center gap-2 text-brand-200">
          <CheckCircle2 size={20} /> Didampingi Sampai Jadi
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 inline-block mb-10">
        <p className="text-lg font-medium italic">
          "Sobat Legalku urus legalitasnya. <br />
          Kamu fokus menghasilkan omzet."
        </p>
      </div>

      <div>
        <Button href={WHATSAPP_LINK_SALES} variant="white" className="text-lg px-10 py-5 shadow-2xl animate-pulse">
          Klik WhatsApp Sekarang — Konsultasi GRATIS & Cek Nama PT
        </Button>
      </div>
    </div>
  </section>
);

const SalesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Simple Sticky Header */}
      <nav className="sticky top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/header-logo.png"
              alt="Sobat Legalku"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
          <Button href={WHATSAPP_LINK_SALES} className="hidden md:inline-flex py-2 px-4 text-xs">
            Hubungi Kami
          </Button>
        </div>
      </nav>

      <main>
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <BenefitSection />
        <WhyUsSection />
        <BonusSection />
        <UrgencySection />
        <FAQSection />
        <ObjectionSection />
        <ClosingSection />
      </main>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-gray-200 md:hidden z-40">
        <Button href={WHATSAPP_LINK_SALES} fullWidth className="shadow-lg shadow-brand-500/30">
          Konsultasi via WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default SalesPage;