import React, { useState } from 'react';
import Button from '../components/Button';
import {
  TrendingUp,
  ShieldCheck,
  Building2,
  FileCheck,
  Clock,
  Gift,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Briefcase,
  CheckCircle2,
  Users,
  Award,
  XCircle,
  Check
} from 'lucide-react';
import { WHATSAPP_LINK_HOME, WHATSAPP_DISPLAY } from '../constants';

// --- Components ---

const SectionHeading: React.FC<{ title: React.ReactNode; subtitle?: React.ReactNode; className?: string; light?: boolean }> = ({ title, subtitle, className = "", light = false }) => (
  <div className={`text-center mb-12 max-w-4xl mx-auto ${className}`}>
    <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl ${light ? 'text-brand-100' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left hover:text-brand-600 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold font-display text-gray-800">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-500 shrink-0 ml-4" /> : <ChevronDown className="text-gray-400 shrink-0 ml-4" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// --- Sections ---

const HeroSection = () => (
  <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-gradient-to-br from-white via-brand-50 to-white">
    <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-100 text-brand-700 text-sm font-bold tracking-wide uppercase shadow-sm">
        <Award size={16} />
        Solusi Legalitas UMKM Indonesia
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-gray-900 leading-tight mb-6">
        Pebisnis UMKM, Saatnya Bisnis Anda <br className="hidden lg:block" />
        <span className="text-brand-600">Naik Kelas Profesional</span>
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
        Buat bisnismu terlihat besar & terpercaya dengan <strong>PT Perorangan resmi</strong>. <br className="hidden md:block" />
        Hanya modal mulai <strong>600 ribuan</strong>, kamu resmi jadi CEO.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button href={WHATSAPP_LINK_HOME} className="text-lg px-10 py-4 shadow-brand-500/25 shadow-xl">
          Bikin PT Perorangan Sekarang
        </Button>
      </div>
      <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
        <CheckCircle2 size={16} className="text-green-500" /> Proses Cepat & Online, di Seluruh Indonesia
      </p>
    </div>
  </section>
);

const PainSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-4xl">
      <SectionHeading
        title={<>Banyak UMKM Sulit Tumbuh Bukan Karena Produk, <span className="text-red-600">Tapi Legalitas</span></>}
        subtitle="Masih jualan pakai nama pribadi? Hati-hati, ini yang sering terjadi:"
      />

      <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
        <ul className="space-y-4 md:space-y-6">
          {[
            "Klien perusahaan besar ragu untuk kerja sama",
            "Sulit masuk proyek, tender, atau pengadaan B2B",
            "Brand terlihat kurang profesional",
            "Takut urusan hukum atau sengketa nama di kemudian hari",
            "Rekening masih campur dengan uang pribadi"
          ].map((pain, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <div className="bg-red-100 p-2 rounded-full shrink-0 mt-0.5">
                <XCircle className="text-red-600" size={20} />
              </div>
              <span className="text-lg text-gray-700 font-medium">{pain}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-900 font-bold text-lg mb-6">
            UMKM yang serius berkembang butuh legalitas, bukan sekadar omzet.
          </p>
          <Button href={WHATSAPP_LINK_HOME} variant="outline">
            Cek Nama PT Anda — Gratis via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="py-24 bg-brand-700 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 p-12 opacity-5">
      <Building2 size={400} />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
        <div className="lg:w-1/2 text-left">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
            PT Perorangan: <br />Solusi Legal Paling Tepat untuk UMKM
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Kini hanya dengan modal mulai <span className="bg-white text-brand-700 font-bold px-2 py-0.5 rounded">600 ribuan</span>, kamu sudah bisa memiliki perusahaan resmi sendiri.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Punya PT Perorangan resmi",
              "Nama PT dicek & diamankan",
              "Terdaftar legal melalui AHU Kementerian Hukum RI",
              "Dokumen perusahaan lengkap",
              "Didampingi dari awal sampai PT terbit"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="text-green-400 shrink-0" size={24} />
                <span className="text-lg font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <Button href={WHATSAPP_LINK_HOME} variant="white" className="w-full md:w-auto">
            Amankan Nama PT Anda Sekarang
          </Button>
        </div>

        <div className="lg:w-1/2 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center">
          <Briefcase className="w-20 h-20 text-brand-200 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Sekarang Saatnya Kamu Resmi Jadi CEO</h3>
          <p className="text-brand-100 mb-8">
            Tidak perlu partner, tidak perlu modal setor puluhan juta. Cukup KTP dan NPWP, bisnismu resmi berbadan hukum.
          </p>
          <div className="inline-block bg-brand-800 rounded-lg px-6 py-3 text-sm font-bold tracking-wider uppercase">
            Proses 100% Online
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BenefitSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 max-w-6xl">
      <SectionHeading
        title="Setelah Punya PT Perorangan, UMKM Langsung Terlihat Profesional"
        subtitle="UMKM + Legalitas = Siap Scale Up"
      />

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          { icon: Building2, title: "Brand Terpercaya", desc: "Meningkatkan kepercayaan customer dan mitra bisnis seketika." },
          { icon: Users, title: "Peluang Kerja Sama", desc: "Lebih mudah menjalin B2B dengan perusahaan besar." },
          { icon: FileCheck, title: "Akses Tender", desc: "Membuka peluang masuk ke proyek pemerintah & swasta." },
          { icon: ShieldCheck, title: "Bisnis Aman", desc: "Perlindungan hukum lebih kuat dengan pemisahan harta pribadi." },
          { icon: TrendingUp, title: "Mudah Buka Rekening", desc: "Memiliki rekening atas nama perusahaan, bukan pribadi." },
          { icon: Award, title: "Status CEO Resmi", desc: "Kebanggaan dan validasi sebagai pengusaha profesional." }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 text-brand-600">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button href={WHATSAPP_LINK_HOME} variant="primary">
          Saya Siap Punya PT Sekarang
        </Button>
      </div>
    </div>
  </section>
);

const WhyUsSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 relative group">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
        <img
          src="/why-us.png"
          alt="Tim Sobat Legalku Profesional"
          className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.01]"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
          Kenapa Harus <span className="text-brand-600">Sobat Legalku?</span>
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Kami membantu UMKM naik kelas secara legal dengan proses yang transparan dan memudahkan.
        </p>

        <div className="space-y-4">
          {[
            "Spesialis pendirian PT Perorangan & Legalitas UMKM",
            "Biaya transparan di awal",
            "Gratis konsultasi & cek ketersediaan nama PT",
            "Proses cepat, terarah, dan 100% Online",
            "Didampingi tim profesional sampai dokumen terbit"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-brand-200 transition-colors">
              <div className="bg-brand-600 rounded-full p-1 text-white">
                <Check size={16} />
              </div>
              <span className="font-medium text-gray-800">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button href={WHATSAPP_LINK_HOME}>
            Konsultasi Langsung dengan Tim Kami
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const BonusSection = () => (
  <section className="py-16 bg-gradient-to-r from-brand-900 to-brand-800 text-white">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 border border-white/20">
        <Gift className="text-yellow-400 mr-2" size={20} />
        <span className="font-bold text-yellow-400 tracking-wide">SPECIAL OFFER</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
        Daftar Sekarang dan Dapatkan
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
        <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-xl flex-1 hover:bg-white/10 transition-colors transform hover:-translate-y-1">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">GRATIS</h3>
          <p className="text-brand-50">Konsultasi Legal UMKM</p>
        </div>
        <div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-xl flex-1 hover:bg-white/10 transition-colors transform hover:-translate-y-1">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">GRATIS</h3>
          <p className="text-brand-50">Cek Ketersediaan Nama PT</p>
        </div>
      </div>
      <Button href={WHATSAPP_LINK_HOME} variant="white" className="shadow-2xl shadow-brand-900/50">
        Klaim Bonus Konsultasi Gratis Sekarang
      </Button>
    </div>
  </section>
);

const UrgencySection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <div className="inline-block p-4 rounded-full bg-red-50 mb-6 animate-pulse">
        <AlertTriangle className="text-red-600 w-8 h-8" />
      </div>
      <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
        Nama PT Hanya Bisa Digunakan Satu Pihak
      </h2>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        Jika kamu menunda, nama bisnismu yang unik bisa didaftarkan orang lain lebih dulu.
        <br /><strong>Mulai hari ini = lebih cepat bisnismu resmi.</strong>
      </p>
      <Button href={WHATSAPP_LINK_HOME} variant="secondary">
        Amankan Nama PT Perorangan Kamu Sekarang
      </Button>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 max-w-3xl">
      <SectionHeading title="Pertanyaan Umum (FAQ)" className="mb-8" />
      <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
        <FAQItem
          question="Apakah PT Perorangan cocok untuk UMKM?"
          answer="Sangat cocok. PT Perorangan memang dirancang khusus oleh pemerintah melalui UU Cipta Kerja agar UMKM bisa memiliki badan hukum resmi, terlihat profesional, dan legal tanpa modal besar."
        />
        <FAQItem
          question="Apakah harus punya partner?"
          answer="Tidak. Sesuai namanya, PT Perorangan cukup didirikan oleh 1 orang saja. Kamu menjadi Pemegang Saham sekaligus Direktur."
        />
        <FAQItem
          question="Apakah prosesnya lama dan ribet?"
          answer="Tidak. Proses di Sobat Legalku sangat cepat dan terarah. Kamu hanya perlu menyiapkan KTP, NPWP, dan data usaha. Sisanya kami yang urus sampai beres."
        />
        <FAQItem
          question="Apakah legal & resmi?"
          answer="Ya, sangat resmi. Badan hukum anda akan terdaftar di sistem AHU Kementerian Hukum Republik Indonesia."
        />
      </div>
      <div className="text-center mt-10">
        <p className="text-gray-600 mb-4">Masih punya pertanyaan lain?</p>
        <Button href={WHATSAPP_LINK_HOME} variant="outline">
          Konsultasi Gratis Sekarang — Klik WhatsApp
        </Button>
      </div>
    </div>
  </section>
);

const ObjectionSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <h2 className="text-2xl font-bold mb-12 text-gray-900">Kami Mengerti Keraguan Anda</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-brand-50 rounded-xl border border-brand-100 hover:shadow-lg transition-shadow">
          <h4 className="font-bold text-gray-900 text-lg mb-2">Takut Mahal?</h4>
          <p className="text-gray-600">Investasi mulai <span className="font-bold text-brand-700">600rb-an</span>. Sangat terjangkau untuk legalitas seumur hidup.</p>
        </div>
        <div className="p-6 bg-brand-50 rounded-xl border border-brand-100 hover:shadow-lg transition-shadow">
          <h4 className="font-bold text-gray-900 text-lg mb-2">Takut Ribet?</h4>
          <p className="text-gray-600">Tidak perlu pusing login sistem. Semua kami yang urus, kamu tinggal duduk manis.</p>
        </div>
        <div className="p-6 bg-brand-50 rounded-xl border border-brand-100 hover:shadow-lg transition-shadow">
          <h4 className="font-bold text-gray-900 text-lg mb-2">Takut Salah?</h4>
          <p className="text-gray-600">Tim kami berpengalaman. Dijamin sesuai regulasi.</p>
        </div>
      </div>
      <p className="text-xl font-bold text-gray-800 mb-6">
        UMKM yang serius <span className="text-red-600 underline decoration-red-300 decoration-2 underline-offset-4">tidak menunda legalitas</span>.
      </p>
      <Button href={WHATSAPP_LINK_HOME} variant="primary">
        Bikin PT Peroranganmu Sekarang
      </Button>
    </div>
  </section>
);

const ClosingSection = () => (
  <section className="py-24 bg-brand-900 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
    <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
      <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6">
        UMKM Naik Kelas Dimulai dari Legalitas
      </h2>
      <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
        Hanya dengan modal mulai <strong>600 ribuan</strong>, kamu sudah punya PT Perorangan resmi dan sah menjadi CEO di bisnismu sendiri.
        <br /><br />
        <span className="italic text-white font-medium">"Sobat Legalku urus legalitasnya. Kamu fokus kembangkan usaha."</span>
      </p>

      <Button href={WHATSAPP_LINK_HOME} variant="white" className="text-lg px-12 py-5 shadow-2xl animate-pulse">
        Konsultasi GRATIS & Cek Nama PT
      </Button>
      <p className="mt-6 text-brand-300 text-sm">
        Klik tombol di atas untuk terhubung ke WhatsApp Official kami
      </p>
    </div>
  </section>
);

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <nav className="sticky top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm transition-all">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/header-logo.png"
              alt="Sobat Legalku"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          <Button href={WHATSAPP_LINK_HOME} className="hidden md:inline-flex py-2.5 px-5 text-sm">
            Konsultasi Gratis
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

      {/* Floating CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-gray-200 md:hidden z-40">
        <Button href={WHATSAPP_LINK_HOME} fullWidth className="shadow-lg shadow-brand-500/30">
          Konsultasi via WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default HomePage;