import React, { useState } from 'react';
import Button from '../components/Button';
import {
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Building2,
  FileText,
  Clock,
  XCircle,
  ChevronDown,
  ChevronUp,
  Award,
  Gift
} from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from '../constants';

// --- Hero Section ---
const HeroSection = () => (
  <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-gradient-to-b from-brand-50 to-white">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-100/30 skew-x-12 translate-x-20 pointer-events-none" />
    <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
      <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-100 text-brand-700 text-sm font-bold tracking-wide uppercase">
        Solusi Legalitas Bisnis Terpercaya
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-gray-900 leading-tight mb-6">
        Cuma Modal Mulai <span className="whitespace-nowrap"><span className="text-brand-600">600rb-an</span>,</span> <br className="hidden md:block" />
        Kamu Sudah Bisa Jadi <span className="text-brand-600">CEO Resmi</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        Punya <strong>PT Perorangan Legal</strong> Tanpa Ribet Urus Sendiri. <br />
        Masih jalan bisnis pakai nama pribadi? Sekarang waktunya naik kelas jadi perusahaan resmi.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button href={WHATSAPP_LINK} className="text-lg px-8 py-4 shadow-brand-600/20">
          Konsultasi GRATIS Sekarang
        </Button>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Via WhatsApp: <strong>{WHATSAPP_DISPLAY}</strong>
      </p>
    </div>
  </section>
);

// --- Pain Section ---
const PainSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
          Tanpa Legalitas, <span className="text-red-600">Bisnis Kamu Selalu Terbatas</span>
        </h2>
        <p className="text-gray-600">Jangan biarkan keraguan menghambat pertumbuhan omzetmu.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Klien besar ragu kerja sama",
          "Tidak bisa ikut tender / proyek resmi",
          "Brand terlihat kurang profesional",
          "Takut masalah hukum di kemudian hari",
          "Ribet kalau harus urus sendiri ke sistem OSS"
        ].map((pain, idx) => (
          <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-colors">
            <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
            <p className="font-medium text-gray-800 text-lg">{pain}</p>
          </div>
        ))}

        {/* Callout Card */}
        <div className="flex flex-col justify-center items-center p-6 rounded-2xl bg-brand-900 text-white shadow-xl lg:col-span-1 md:col-span-1">
          <p className="font-medium text-center mb-4">
            "Setiap hari kamu menunda, peluang besar bisa diambil kompetitor yang sudah legal."
          </p>
          <Button variant="white" href={WHATSAPP_LINK} className="w-full text-sm">
            Cari Solusi Sekarang
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// --- Solution Section ---
const SolutionSection = () => (
  <section className="py-20 bg-brand-600 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
        Sobat Legalku Siap Mengurus PT Peroranganmu Sampai Jadi
      </h2>
      <p className="text-xl text-brand-100 mb-12">
        Dengan biaya mulai <span className="whitespace-nowrap"><span className="text-white font-bold bg-brand-500/50 px-2 py-1 rounded">600rb-an</span>,</span> kamu sudah mendapatkan:
      </p>

      <div className="grid sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-12">
        {[
          "PT Perorangan resmi terdaftar",
          "Pengecekan & pengamanan nama PT",
          "Dokumen legal lengkap",
          "Pendampingan penuh sampai selesai"
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
            <CheckCircle2 className="text-green-400 shrink-0" size={24} />
            <span className="font-medium text-lg">{item}</span>
          </div>
        ))}
      </div>

      <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Kamu cukup kirim data. Kami urus semuanya.</h3>
        <p className="text-gray-600 mb-6">Tidak perlu pusing mikirin sistem atau antri.</p>
        <Button href={WHATSAPP_LINK} fullWidth>
          Mulai Proses Pendirian Sekarang
        </Button>
      </div>
    </div>
  </section>
);

// --- Benefit Section ---
const BenefitSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
          Setelah Punya PT Perorangan, <span className="text-brand-600">Bisnismu Langsung Naik Level</span>
        </h2>
        <p className="text-gray-600 text-lg">Legalitas bukan biaya — ini investasi untuk pertumbuhan bisnismu.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { icon: ShieldCheck, title: "Lebih Dipercaya", desc: "Klien & perusahaan lebih percaya pada entitas badan hukum." },
          { icon: Building2, title: "Rekening Bisnis", desc: "Lebih mudah membuka rekening bank atas nama perusahaan." },
          { icon: TrendingUp, title: "Peluang B2B", desc: "Pintu kerjasama dengan perusahaan besar terbuka lebar." },
          { icon: FileText, title: "Ikut Tender", desc: "Syarat utama pengadaan & tender pemerintah/swasta." },
          { icon: Award, title: "Brand Profesional", desc: "Meningkatkan citra brand di mata konsumen." },
          { icon: Clock, title: "Proses Cepat", desc: "Tidak memakan waktu lama, bisnis bisa langsung jalan." }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100 group">
            <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors">
              <item.icon className="text-brand-600 group-hover:text-white transition-colors" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href={WHATSAPP_LINK} variant="outline">
          Cek Syarat Pendirian Sekarang
        </Button>
      </div>
    </div>
  </section>
);

// --- Why Us Section ---
const WhyUsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 max-w-6xl">
      <div className="md:w-1/2 relative group">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
        <img
          src="/why-us.png"
          alt="Tim Sobat Legalku Professional"
          className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.01]"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">
          Kenapa Harus <span className="text-brand-600">Sobat Legalku?</span>
        </h2>
        <ul className="space-y-4">
          {[
            "Spesialis pendirian PT Perorangan",
            "Biaya transparan di awal, tanpa hidden fee",
            "Proses cepat & terarah",
            "GRATIS konsultasi sebelum deal",
            "Full online dari mana saja",
            "Didampingi tim profesional sampai dokumen terbit"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-600"></div>
              <span className="text-lg text-gray-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 p-6 bg-brand-50 rounded-xl border border-brand-100">
          <p className="text-brand-800 font-medium mb-4">"Kami bantu dari awal sampai kamu resmi jadi CEO."</p>
          <Button href={WHATSAPP_LINK}>
            Konsultasi dengan Tim Legal
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// --- Bonus Section ---
const BonusSection = () => (
  <section className="py-16 bg-brand-900 text-white">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-6">
        <Gift className="text-yellow-400 mr-2" size={24} />
        <span className="font-bold text-yellow-400 uppercase tracking-wider">Limited Bonus</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
        Daftar Sekarang dan Dapatkan
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
        <div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl flex-1 transform hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">GRATIS</h3>
          <p>Konsultasi Legal Bisnis</p>
        </div>
        <div className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-xl flex-1 transform hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">GRATIS</h3>
          <p>Cek Ketersediaan Nama PT</p>
        </div>
      </div>
      <Button href={WHATSAPP_LINK} variant="white" className="shadow-xl shadow-brand-900/50">
        Klaim Bonus via WhatsApp
      </Button>
    </div>
  </section>
);

// --- Urgency Section ---
const UrgencySection = () => (
  <section className="py-20 bg-white border-b border-gray-100">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-red-600 mb-6">
        PENTING: Nama PT Hanya Bisa Digunakan Satu Pihak
      </h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Jika kamu menunda, nama yang kamu incar bisa dipakai orang lain lebih dulu. <br />
        <strong>Mulai hari ini = lebih cepat punya PT resmi.</strong>
      </p>
      <Button href={WHATSAPP_LINK} variant="secondary">
        Amankan Nama PT Kamu Sekarang
      </Button>
    </div>
  </section>
);

// --- FAQ Section ---
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex items-center justify-between text-left hover:text-brand-600 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold font-display text-gray-900">{question}</span>
        {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 mb-12">
        Pertanyaan Umum (FAQ)
      </h2>
      <div className="bg-white rounded-2xl shadow-sm p-8">
        {[
          { q: "Apakah PT Perorangan bisa didirikan sendiri?", a: "Ya, PT Perorangan memang dikhususkan untuk 1 orang pemilik saham sekaligus direktur, tanpa perlu partner." },
          { q: "Berapa lama prosesnya?", a: "Prosesnya relatif cepat. Setelah data lengkap dan pembayaran terkonfirmasi, proses pendaftaran ke sistem OSS bisa dilakukan segera." },
          { q: "Apakah harus datang ke kantor?", a: "Tidak perlu. Semua proses dilakukan secara online. Dokumen akan dikirimkan softcopy dan hardcopy jika diperlukan." },
          { q: "Apakah legal dan resmi?", a: "Resmi. PT Perorangan diatur dalam UU Cipta Kerja dan terdaftar resmi di Kementerian Hukum Republik Indonesia." }
        ].map((item, idx) => (
          <FAQItem key={idx} question={item.q} answer={item.a} />
        ))}
      </div>
      <div className="text-center mt-10">
        <p className="text-gray-600 mb-4">Masih ada pertanyaan lain?</p>
        <Button href={WHATSAPP_LINK} variant="outline">
          Chat Tim Kami Sekarang
        </Button>
      </div>
    </div>
  </section>
);

// --- Objection Handling & Closing ---
const ClosingSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      {/* Objections */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 bg-gray-50 rounded-xl">
          <h4 className="font-bold text-gray-900 mb-2">Takut Mahal?</h4>
          <p className="text-sm text-gray-600">Biaya jelas dari awal, mulai <span className="whitespace-nowrap">600rb-an.</span> Investasi sekali untuk jangka panjang.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl">
          <h4 className="font-bold text-gray-900 mb-2">Takut Ribet?</h4>
          <p className="text-sm text-gray-600">Semua kami yang urus. Kamu tinggal duduk manis terima beres.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-xl">
          <h4 className="font-bold text-gray-900 mb-2">Takut Salah?</h4>
          <p className="text-sm text-gray-600">Tim Kami berpengalaman. Dijamin sesuai Regulasi.</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-brand-600 to-brand-800 text-white rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6">
            Jangan Tunggu Bisnismu Besar Baru Legal
          </h2>
          <p className="text-xl md:text-2xl text-brand-100 mb-8 font-light">
            Mulai <span className="whitespace-nowrap"><strong className="text-white">600rb-an</strong>,</span> kamu sudah bisa punya PT Perorangan resmi atas namamu sendiri.
          </p>
          <div className="bg-white/10 rounded-xl p-6 mb-10 backdrop-blur-sm border border-white/20 inline-block">
            <p className="text-lg font-medium">
              "Sobat Legalku urus legalitasnya. <br />Kamu fokus menghasilkan omzet."
            </p>
          </div>
          <br />
          <Button href={WHATSAPP_LINK} variant="white" className="text-lg px-10 py-5 font-bold shadow-xl animate-pulse">
            Klik WhatsApp Sekarang
          </Button>
          <p className="mt-4 text-sm text-brand-200 opacity-90">
            Konsultasi GRATIS & Cek Nama PT
          </p>
        </div>
      </div>
    </div>
  </section>
);

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/header-logo.png"
              alt="Sobat Legalku"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
          <Button href={WHATSAPP_LINK} className="hidden md:inline-flex py-2 px-4 text-xs">
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
        <ClosingSection />
      </main>

      {/* Floating Sticky CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-gray-200 md:hidden z-40">
        <Button href={WHATSAPP_LINK} fullWidth className="shadow-brand-500/50">
          Konsultasi via WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;