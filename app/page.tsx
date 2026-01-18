"use client";

import { useEffect, useMemo, useState } from "react";

type WorkItem = {
  title: string;
  category: "Logistik" | "PSN" | "Kesehatan" | "Kemiskinan" | "Trade" | "Edukasi";
  tag: string;
  summary: string;
  outputs: string[];
  featured?: boolean;
};

type Publication = {
  title: string;
  type: "PDF" | "Peta" | "Toolkit" | "Slide";
  desc: string;
  url: string;
};

export default function Home() {
  // ===== BRAND / KONTAK =====
  const BRAND = {
    short: "GPro",
    full: "Global Pro-eksistensi",
    subtitle: "Pusat Kajian Strategis • Policy • Data • Peta • Roadmap",
    waPlain: "6285899993742",
    waPretty: "+62 858-9999-3742",
    waUrl: "https://wa.me/6285899993742",
    email: "pksgpro@gmail.com",
  };

  // ===== WARNA (dari logo) =====
  const COLORS = {
    red: "#D00705",
    blue: "#7DB4CE",
    ink: "#493D58",
    soft: "#F8FAFD",
  };

  // ===== THEME =====
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("gpro-theme");
    if (saved === "dark") setDark(true);
    else if (saved === "light") setDark(false);
    else {
      const prefers = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
      setDark(Boolean(prefers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("gpro-theme", dark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // ===== UI COLORS =====
  const bg = dark ? "#050507" : COLORS.soft;
  const card = dark ? "#0B0B10" : "#FFFFFF";
  const border = dark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)";
  const textMain = dark ? "#F4F4F5" : COLORS.ink;
  const textSub = dark ? "rgba(244,244,245,0.78)" : "rgba(16,16,24,0.78)";

  // ===== TOAST =====
  const [toast, setToast] = useState<string | null>(null);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1700);
    return () => clearTimeout(t);
  }, [toast]);

  const copyText = async (txt: string, label = "Copied!") => {
    try {
      await navigator.clipboard.writeText(txt);
      setToast(label);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = txt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setToast(label);
    }
  };

  // ===== MODAL =====
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const [form, setForm] = useState({
    name: "",
    org: "",
    need: "Policy brief",
    deadline: "",
    detail: "",
  });

  const sendToWhatsApp = () => {
    const msg =
      `Halo GPro, saya ingin kolaborasi.%0A%0A` +
      `Nama: ${encodeURIComponent(form.name)}%0A` +
      `Organisasi: ${encodeURIComponent(form.org)}%0A` +
      `Kebutuhan: ${encodeURIComponent(form.need)}%0A` +
      `Deadline: ${encodeURIComponent(form.deadline)}%0A` +
      `Detail: ${encodeURIComponent(form.detail)}%0A`;
    window.open(`${BRAND.waUrl}?text=${msg}`, "_blank");
  };

  // ===== SCROLL REVEAL (pakai .gpro-reveal agar tidak lupa data attribute) =====
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".gpro-reveal"));

    if (reduceMotion) {
      els.forEach((el) => el.classList.add("gpro-reveal-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          (e.target as HTMLElement).classList.add("gpro-reveal-in");
          io.unobserve(e.target);
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const SectionTitle = ({ title, desc }: { title: string; desc?: string }) => (
    <div className="mb-6">
      <h2 className="text-xl font-extrabold tracking-tight" style={{ color: textMain }}>
        {title}
      </h2>
      {desc ? (
        <p className="mt-2 max-w-3xl text-sm leading-6" style={{ color: textSub }}>
          {desc}
        </p>
      ) : null}
    </div>
  );

  // ===== DATA =====
  const works: WorkItem[] = [
    {
      title: "Kediri sebagai Hub Logistik 2045",
      category: "Logistik",
      tag: "Logistik • 2045",
      summary:
        "Riset & argumentasi kebijakan untuk transformasi Kediri sebagai hub logistik nasional–global, lengkap dengan roadmap strategi.",
      outputs: ["Policy brief", "Roadmap", "Kerangka rantai pasok"],
      featured: true,
    },
    {
      title: "Bandara Dhoho: konektivitas & dampak ekonomi",
      category: "Logistik",
      tag: "Aviation • Logistics",
      summary:
        "Rancangan konektivitas bandara–transportasi dan simulasi dampak ekonomi (penumpang & kargo) untuk memperkuat posisi kawasan.",
      outputs: ["Proposal teknis", "Simulasi dampak", "Strategi koordinasi"],
    },
    {
      title: "Mengapa biaya logistik tidak turun meski PSN dibangun?",
      category: "PSN",
      tag: "PSN • Ekonomi",
      summary:
        "Membedah akar penyebab biaya logistik tetap tinggi dan menyusun rekomendasi perbaikan yang bisa dieksekusi.",
      outputs: ["Dokumen evaluatif", "Infografik", "Rekomendasi transisi mikro"],
    },
    {
      title: "Bottleneck kawasan industri: macet–polusi–kesehatan",
      category: "Kesehatan",
      tag: "Kota • Kesehatan",
      summary:
        "Pemetaan zona risiko kesehatan dan strategi intervensi berbasis zona untuk menurunkan dampak ISPA & stres akibat kemacetan.",
      outputs: ["Peta risiko", "Memo kebijakan", "Toolkit edukasi 1 halaman"],
    },
    {
      title: "Early-Warning Poverty Framework (BPS & PPP)",
      category: "Kemiskinan",
      tag: "Kemiskinan • Perencanaan",
      summary:
        "Kerangka peringatan dini kemiskinan untuk penajaman program, prioritas wilayah, dan perencanaan kebijakan strategis.",
      outputs: ["Framework indikator", "Skema integrasi", "Rekomendasi implementasi"],
    },
    {
      title: "Risiko ekspor: standar global & transisi hijau",
      category: "Trade",
      tag: "Trade Policy • Risiko",
      summary:
        "Kajian risiko sektor ekspor dan strategi mitigasi dalam konteks perubahan standar global dan dinamika perdagangan.",
      outputs: ["Policy memo", "Peta risiko sektor", "Strategi transisi hijau"],
    },
    {
      title: "Kurikulum berbasis PISA untuk SMK",
      category: "Edukasi",
      tag: "Pendidikan • Kurikulum",
      summary:
        "Pengembangan kurikulum literasi–numerasi–sains terapan untuk siswa SMK, dengan struktur yang mudah diterapkan.",
      outputs: ["Outline kurikulum", "Modul ringkas", "Toolkit pembelajaran"],
    },
  ];

  // Tips: nanti kamu bisa taruh file di /public/docs/... lalu url = "/docs/namafile.pdf"
  const publications: Publication[] = [
    {
      title: "Policy Brief — Hub Logistik Kediri 2045",
      type: "PDF",
      desc: "Ringkasan kebijakan + roadmap strategi (gantikan URL ini dengan file PDF kamu).",
      url: "#",
    },
    {
      title: "Peta Analitik — Bottleneck Kawasan Industri",
      type: "Peta",
      desc: "Visual zona risiko & intervensi (gantikan URL ini dengan file peta kamu).",
      url: "#",
    },
    {
      title: "Toolkit — Edukasi ISPA & Stres Kemacetan (1 halaman)",
      type: "Toolkit",
      desc: "Materi edukasi publik ringkas (gantikan URL ini dengan file toolkit kamu).",
      url: "#",
    },
    {
      title: "Deck — Evaluasi PSN & Biaya Logistik",
      type: "Slide",
      desc: "Materi presentasi stakeholder (gantikan URL ini dengan file deck kamu).",
      url: "#",
    },
  ];

  const categories = ["Semua", "Logistik", "PSN", "Kesehatan", "Kemiskinan", "Trade", "Edukasi"] as const;
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");

  const filteredWorks = useMemo(() => {
    if (active === "Semua") return works;
    return works.filter((w) => w.category === active);
  }, [active, works]);

  const featured = useMemo(() => works.find((w) => w.featured) ?? works[0], [works]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: bg }}>
      {/* BACKGROUND SUBTLE MOVING GRADIENT */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
        <div className="absolute inset-0 gpro-animated-gradient" />
      </div>

      {/* HEADER */}
      <header
        className="sticky top-0 z-40 backdrop-blur"
        style={{
          backgroundColor: dark ? "rgba(5,5,7,0.72)" : "rgba(255,255,255,0.84)",
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div
              className="h-11 w-11 overflow-hidden rounded-2xl"
              style={{ border: `1px solid ${border}`, backgroundColor: card }}
            >
              <img
                src="/logo.png"
                alt="GPro Logo"
                className="h-full w-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold" style={{ color: textMain }}>
                {BRAND.short}{" "}
                <span className="font-medium" style={{ color: textSub }}>
                  — {BRAND.full}
                </span>
              </p>
              <p className="text-xs" style={{ color: textSub }}>
                {BRAND.subtitle}
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex" style={{ color: textSub }}>
            <a className="hover:opacity-80" href="#tentang">Tentang</a>
            <a className="hover:opacity-80" href="#publikasi">Publikasi</a>
            <a className="hover:opacity-80" href="#portofolio">Portofolio</a>
            <a className="hover:opacity-80" href="#layanan">Layanan</a>
            <a className="hover:opacity-80" href="#kontak">Kontak</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark((v) => !v)}
              className="rounded-xl px-3 py-2 text-sm font-semibold transition hover:opacity-90"
              style={{ border: `1px solid ${border}`, backgroundColor: card, color: textMain }}
              aria-label="Toggle dark mode"
              title="Dark mode"
            >
              {dark ? "🌙" : "☀️"}
            </button>

            <button
              onClick={() => setOpenModal(true)}
              className="gpro-shine rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: COLORS.red }}
            >
              Ajukan Kolaborasi
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="gpro-reveal">
          <div
            className="relative overflow-hidden rounded-3xl p-8"
            style={{
              border: `1px solid ${border}`,
              background: dark
                ? `linear-gradient(135deg, ${COLORS.blue}14 0%, ${card} 45%, ${COLORS.red}12 100%)`
                : `linear-gradient(135deg, ${COLORS.blue}22 0%, #ffffff 45%, ${COLORS.red}14 100%)`,
            }}
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ border: `1px solid ${border}`, backgroundColor: card, color: textSub }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS.red }} />
                  STRATEGI • KEBIJAKAN • DATA • PETA • ROADMAP
                </div>

                <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl" style={{ color: textMain }}>
                  Membuat isu kompleks jadi keputusan yang jelas dan bisa dieksekusi.
                </h1>

                <p className="mt-4 max-w-2xl" style={{ color: textSub }}>
                  {BRAND.full} menyusun kajian strategis, policy brief, peta analitik, dan roadmap implementasi untuk logistik,
                  rantai pasok, biaya ekonomi, kemiskinan, dan edukasi—dengan bahasa yang mudah dipahami dan keluaran yang siap dipakai.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#publikasi"
                    className="gpro-shine inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                    style={{ backgroundColor: COLORS.red }}
                  >
                    Lihat Publikasi
                  </a>

                  <button
                    onClick={() => setOpenModal(true)}
                    className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                    style={{ borderColor: COLORS.blue, color: textMain, backgroundColor: card }}
                  >
                    Ajukan Kolaborasi
                  </button>

                  <a
                    href={BRAND.waUrl}
                    className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                    style={{ borderColor: border, color: textMain, backgroundColor: card }}
                  >
                    Chat WhatsApp
                  </a>
                </div>
              </div>

              {/* Featured */}
              <div className="w-full md:w-[420px]">
                <div className="gpro-card rounded-2xl p-6" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
                  <p className="text-xs font-semibold" style={{ color: textSub }}>
                    Featured work
                  </p>
                  <p className="mt-2 text-sm font-bold" style={{ color: textMain }}>
                    {featured.title}
                  </p>
                  <p className="mt-2 text-sm" style={{ color: textSub }}>
                    {featured.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {featured.outputs.map((o) => (
                      <span
                        key={o}
                        className="rounded-full border px-3 py-1 text-xs"
                        style={{ borderColor: COLORS.blue, color: textMain, backgroundColor: `${COLORS.blue}12` }}
                      >
                        {o}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-semibold" style={{ color: textSub }}>
                      {featured.tag}
                    </span>
                    <a href="#portofolio" className="text-sm font-semibold" style={{ color: COLORS.red }}>
                      Lihat semua →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* proof strip */}
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                { t: "Berbasis data", d: "Sumber publik & asumsi transparan." },
                { t: "Output siap pakai", d: "Rapi untuk rapat/advokasi." },
                { t: "Visual kuat", d: "Peta/infografik stakeholder-friendly." },
                { t: "Respon cepat", d: "WhatsApp untuk diskusi awal." },
              ].map((x) => (
                <div key={x.t} className="gpro-card rounded-2xl p-5" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
                  <p className="text-sm font-bold" style={{ color: textMain }}>
                    {x.t}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: textSub }}>
                    {x.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER STRIP (lebih keren + tidak misleading) */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div className="gpro-reveal">
          <div className="rounded-3xl p-6" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
            <p className="text-sm font-semibold" style={{ color: textMain }}>
              Referensi & benchmark yang sering dipakai
            </p>
            <p className="mt-1 text-xs" style={{ color: textSub }}>
              Logo berikut digunakan sebagai <b>rujukan sumber/benchmark</b> (bukan pernyataan afiliasi resmi).
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {[
                { name: "McKinsey & Company", src: "/mckinsey.png", href: "https://www.mckinsey.com" },
                { name: "World Economic Forum", src: "/wef.png", href: "https://www.weforum.org" },
                { name: "International Labour Organization", src: "/ilo.png", href: "https://www.ilo.org" },
                { name: "The World Bank", src: "/worldbank.png", href: "https://www.worldbank.org" },
              ].map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="gpro-card gpro-partner-wrap flex items-center justify-center rounded-2xl px-4 py-6"
                  style={{
                    border: `1px solid ${border}`,
                    background: dark
                      ? "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))"
                      : "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.01))",
                  }}
                  title={p.name}
                >
                  <div
                    className="flex h-14 w-full items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: dark ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.95)",
                      border: `1px solid ${dark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.06)"}`,
                    }}
                  >
                    <img
                      src={p.src}
                      alt={p.name}
                      className="h-9 w-auto object-contain grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-[1.03]"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="mx-auto max-w-6xl px-6 pt-14 scroll-mt-24">
        <div className="gpro-reveal">
          <SectionTitle
            title="Tentang GPro"
            desc="GPro (Global Pro-eksistensi) adalah pusat kajian strategis yang membantu organisasi dan pemangku kepentingan mengubah isu rumit menjadi keputusan yang jelas. Fokus kami bukan sekadar “analisis”, tetapi merancang opsi keputusan dan langkah eksekusi yang realistis."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2 gpro-card rounded-2xl p-6" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
              <p className="text-sm font-semibold" style={{ color: textSub }}>
                Cara kerja GPro
              </p>

              <h3 className="mt-2 text-lg font-bold" style={{ color: textMain }}>
                Diagnosis masalah → opsi kebijakan → roadmap eksekusi.
              </h3>

              <p className="mt-3 text-sm leading-6" style={{ color: textSub }}>
                Banyak kajian berhenti di “penjelasan masalah”. GPro melangkah lebih jauh: kami menyusun pertanyaan yang tepat,
                menguji asumsi secara transparan, dan merapikan data menjadi insight yang bisa dipertanggungjawabkan. Setelah itu,
                insight diterjemahkan menjadi beberapa opsi kebijakan (plus-minus, risiko, dan mitigasi) agar stakeholder bisa memilih
                keputusan dengan lebih percaya diri.
              </p>

              <p className="mt-3 text-sm leading-6" style={{ color: textSub }}>
                Yang membedakan GPro adalah fokus pada <b>langkah implementasi</b>. Kami bantu menyusun “bagaimana cara menjalankannya”:
                tahapan kerja, aktor yang perlu dilibatkan, timeline realistis, kebutuhan data tambahan, serta indikator keberhasilan.
                Hasil akhirnya bukan sekadar laporan panjang—melainkan dokumen ringkas, deck presentasi, peta analitik, atau toolkit
                yang siap dipakai untuk rapat, advokasi, atau koordinasi lintas pihak.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Policy brief", "Peta analitik", "Roadmap", "Infografik", "Toolkit 1 halaman", "Deck presentasi"].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border px-3 py-1 text-xs"
                    style={{ borderColor: COLORS.blue, backgroundColor: `${COLORS.blue}12`, color: textMain }}
                  >
                    {x}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div
                  className="rounded-2xl p-4"
                  style={{ border: `1px solid ${border}`, backgroundColor: dark ? "rgba(255,255,255,0.03)" : "#FAFAFA" }}
                >
                  <p className="text-sm font-bold" style={{ color: textMain }}>
                    Nilai kerja
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: textSub }}>
                    <li>Transparan pada asumsi dan sumber</li>
                    <li>Rapi, ringkas, stakeholder-friendly</li>
                    <li>Fokus pada langkah implementasi</li>
                    <li>Dokumen siap rapat/advokasi</li>
                  </ul>
                </div>

                <div
                  className="rounded-2xl p-4"
                  style={{ border: `1px solid ${border}`, backgroundColor: dark ? "rgba(255,255,255,0.03)" : "#FAFAFA" }}
                >
                  <p className="text-sm font-bold" style={{ color: textMain }}>
                    Untuk siapa
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm" style={{ color: textSub }}>
                    <li>Komunitas / NGO</li>
                    <li>Pemerintah daerah & stakeholder</li>
                    <li>Pelaku usaha & kolaborator</li>
                    <li>Tim riset, advokasi, dan program</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kontak cepat */}
            <div className="gpro-card rounded-2xl p-6" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
              <p className="text-sm font-bold" style={{ color: textMain }}>
                Kontak cepat
              </p>
              <p className="mt-2 text-sm" style={{ color: textSub }}>
                Diskusi awal paling cepat lewat WhatsApp. Email untuk kebutuhan dokumen formal.
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={BRAND.waUrl}
                  className="gpro-shine rounded-xl px-4 py-2 text-center text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ backgroundColor: COLORS.red }}
                >
                  WhatsApp: {BRAND.waPretty}
                </a>

                <div className="flex gap-2">
                  <button
                    onClick={() => copyText(BRAND.waPretty, "Nomor WA disalin!")}
                    className="w-1/2 rounded-xl border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                    style={{ borderColor: COLORS.blue, backgroundColor: card, color: textMain }}
                  >
                    Copy WA
                  </button>
                  <button
                    onClick={() => setOpenModal(true)}
                    className="w-1/2 rounded-xl border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                    style={{ borderColor: border, backgroundColor: card, color: textMain }}
                  >
                    Form
                  </button>
                </div>

                <a
                  href={`mailto:${BRAND.email}`}
                  className="rounded-xl border px-4 py-2 text-center text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                  style={{ borderColor: COLORS.blue, color: textMain, backgroundColor: card }}
                >
                  Email: {BRAND.email}
                </a>

                <button
                  onClick={() => copyText(BRAND.email, "Email disalin!")}
                  className="rounded-xl border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                  style={{ borderColor: border, backgroundColor: card, color: textMain }}
                >
                  Copy Email
                </button>
              </div>

              <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: `${COLORS.blue}${dark ? "10" : "14"}` }}>
                <p className="text-xs font-semibold" style={{ color: textMain }}>
                  Cara kolaborasi (singkat)
                </p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-xs" style={{ color: textSub }}>
                  <li>Diskusi kebutuhan (WA)</li>
                  <li>Ruang lingkup & output disepakati</li>
                  <li>Draft → review → final</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLIKASI */}
      <section id="publikasi" className="mx-auto max-w-6xl px-6 pt-14 scroll-mt-24">
        <div className="gpro-reveal">
          <SectionTitle
            title="Publikasi & Produk"
            desc="Dokumen/peta/toolkit yang bisa diunduh. (Sekarang placeholder dulu — nanti tinggal ganti URL-nya.)"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {publications.map((p) => (
              <div key={p.title} className="gpro-card rounded-2xl p-6" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-bold" style={{ color: textMain }}>
                    {p.title}
                  </p>
                  <span
                    className="rounded-full border px-3 py-1 text-xs font-semibold"
                    style={{ borderColor: COLORS.blue, backgroundColor: `${COLORS.blue}12`, color: textMain }}
                  >
                    {p.type}
                  </span>
                </div>

                <p className="mt-2 text-sm" style={{ color: textSub }}>
                  {p.desc}
                </p>

                <div className="mt-5 flex gap-3">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="gpro-shine inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                    style={{ backgroundColor: COLORS.red }}
                  >
                    Unduh / Lihat
                  </a>
                  <button
                    onClick={() => setOpenModal(true)}
                    className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                    style={{ borderColor: COLORS.blue, color: textMain, backgroundColor: card }}
                  >
                    Minta versi lengkap
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTOFOLIO */}
      <section id="portofolio" className="mx-auto max-w-6xl px-6 pt-14 scroll-mt-24">
        <div className="gpro-reveal">
          <SectionTitle title="Portofolio" desc="Pilih kategori untuk melihat karya yang relevan." />

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const activeBtn = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className="rounded-full border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                  style={{
                    borderColor: activeBtn ? COLORS.red : border,
                    backgroundColor: activeBtn ? `${COLORS.red}18` : card,
                    color: activeBtn ? textMain : textSub,
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {filteredWorks.map((w) => (
              <div key={w.title} className="gpro-card rounded-2xl p-6" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-bold" style={{ color: textMain }}>
                    {w.title}
                  </p>
                  <span
                    className="shrink-0 rounded-full border px-3 py-1 text-xs"
                    style={{ borderColor: COLORS.blue, backgroundColor: `${COLORS.blue}12`, color: textMain }}
                  >
                    {w.tag}
                  </span>
                </div>

                <p className="mt-2 text-sm" style={{ color: textSub }}>
                  {w.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {w.outputs.map((o) => (
                    <span
                      key={o}
                      className="rounded-full border px-3 py-1 text-xs"
                      style={{
                        borderColor: border,
                        backgroundColor: dark ? "rgba(255,255,255,0.04)" : "#FAFAFA",
                        color: textSub,
                      }}
                    >
                      {o}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold" style={{ color: textSub }}>
                    Kategori: {w.category}
                  </span>
                  <button className="text-sm font-semibold" style={{ color: COLORS.red }} onClick={() => setOpenModal(true)}>
                    Kolaborasi →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="mx-auto max-w-6xl px-6 pt-14 scroll-mt-24">
        <div className="gpro-reveal">
          <SectionTitle title="Layanan" desc="Format output yang biasa disiapkan untuk stakeholder dan kolaborator." />

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { t: "Policy Brief & Memo", d: "Dokumen ringkas, jelas, siap dipakai rapat/advokasi." },
              { t: "Peta Analitik & Visual", d: "Peta/infografik stakeholder-friendly, metodologi transparan." },
              { t: "Roadmap Implementasi", d: "Tahapan kerja, prioritas, timeline, aktor, risiko, langkah eksekusi." },
              { t: "Deck Presentasi", d: "Materi presentasi profesional yang singkat, tajam, rapi." },
            ].map((x) => (
              <div key={x.t} className="gpro-card rounded-2xl p-6" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
                <p className="text-sm font-bold" style={{ color: textMain }}>
                  {x.t}
                </p>
                <p className="mt-2 text-sm leading-6" style={{ color: textSub }}>
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="mx-auto max-w-6xl px-6 pb-16 pt-14 scroll-mt-24">
        <div className="gpro-reveal">
          <div className="rounded-3xl p-8" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
            <h2 className="text-xl font-bold" style={{ color: textMain }}>
              Ajukan kolaborasi
            </h2>
            <p className="mt-2 max-w-3xl text-sm" style={{ color: textSub }}>
              Klik tombol di bawah untuk mengisi form singkat. Setelah itu otomatis bisa terkirim ke WhatsApp.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setOpenModal(true)}
                className="gpro-shine inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                style={{ backgroundColor: COLORS.red }}
              >
                Buka Form Kolaborasi
              </button>

              <button
                onClick={() => copyText(BRAND.email, "Email disalin!")}
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                style={{ borderColor: COLORS.blue, color: textMain, backgroundColor: card }}
              >
                Copy Email
              </button>

              <button
                onClick={() => copyText(BRAND.waPretty, "Nomor WA disalin!")}
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                style={{ borderColor: border, color: textMain, backgroundColor: card }}
              >
                Copy WA
              </button>
            </div>

            <p className="mt-7 text-xs" style={{ color: textSub }}>
              © {new Date().getFullYear()} {BRAND.full}. All rights reserved.
            </p>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href={BRAND.waUrl}
        className="gpro-shine fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        style={{ backgroundColor: COLORS.red }}
        aria-label="Chat WhatsApp"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
          <span className="text-base">💬</span>
        </span>
        Chat WhatsApp
      </a>

      {/* TOAST */}
      {toast ? (
        <div className="fixed bottom-20 left-1/2 z-[70] -translate-x-1/2">
          <div
            className="rounded-full px-4 py-2 text-sm font-semibold shadow-lg"
            style={{
              backgroundColor: dark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.75)",
              color: "#fff",
              border: `1px solid ${dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.18)"}`,
            }}
          >
            {toast}
          </div>
        </div>
      ) : null}

      {/* MODAL */}
      {openModal ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <button
            className="absolute inset-0"
            onClick={() => setOpenModal(false)}
            style={{ backgroundColor: dark ? "rgba(0,0,0,0.72)" : "rgba(0,0,0,0.55)" }}
            aria-label="Close modal"
          />

          <div className="relative w-full max-w-xl rounded-3xl p-6 shadow-2xl" style={{ backgroundColor: card, border: `1px solid ${border}` }}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold" style={{ color: textSub }}>
                  Form Kolaborasi
                </p>
                <h3 className="mt-1 text-xl font-bold" style={{ color: textMain }}>
                  Ajukan Kolaborasi
                </h3>
                <p className="mt-2 text-sm" style={{ color: textSub }}>
                  Isi singkat saja. Setelah itu klik <b>Kirim ke WhatsApp</b>.
                </p>
              </div>
              <button
                onClick={() => setOpenModal(false)}
                className="rounded-xl px-3 py-2 text-sm font-semibold transition hover:opacity-90"
                style={{ border: `1px solid ${border}`, backgroundColor: dark ? "rgba(255,255,255,0.04)" : "#fff", color: textMain }}
              >
                ✕
              </button>
            </div>

            <div className="mt-5 grid gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nama"
                  className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                  style={{ border: `1px solid ${border}`, backgroundColor: dark ? "rgba(255,255,255,0.04)" : "#fff", color: textMain }}
                />
                <input
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  placeholder="Organisasi / Instansi"
                  className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                  style={{ border: `1px solid ${border}`, backgroundColor: dark ? "rgba(255,255,255,0.04)" : "#fff", color: textMain }}
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <select
                  value={form.need}
                  onChange={(e) => setForm({ ...form, need: e.target.value })}
                  className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                  style={{ border: `1px solid ${border}`, backgroundColor: dark ? "rgba(255,255,255,0.04)" : "#fff", color: textMain }}
                >
                  <option>Policy brief</option>
                  <option>Peta analitik</option>
                  <option>Roadmap</option>
                  <option>Deck presentasi</option>
                  <option>Lainnya</option>
                </select>

                <input
                  value={form.deadline}
                  onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                  placeholder="Deadline (contoh: 20 Feb / minggu ini)"
                  className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                  style={{ border: `1px solid ${border}`, backgroundColor: dark ? "rgba(255,255,255,0.04)" : "#fff", color: textMain }}
                />
              </div>

              <textarea
                value={form.detail}
                onChange={(e) => setForm({ ...form, detail: e.target.value })}
                placeholder="Ceritakan singkat kebutuhan kamu…"
                rows={4}
                className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                style={{ border: `1px solid ${border}`, backgroundColor: dark ? "rgba(255,255,255,0.04)" : "#fff", color: textMain }}
              />

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs" style={{ color: textSub }}>
                  Tips: isi minimal <b>nama</b> + <b>kebutuhan</b> biar cepat diproses.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="rounded-xl px-4 py-2 text-sm font-semibold transition hover:opacity-90"
                    style={{ border: `1px solid ${border}`, backgroundColor: dark ? "rgba(255,255,255,0.04)" : "#fff", color: textMain }}
                  >
                    Batal
                  </button>
                  <button
                    onClick={sendToWhatsApp}
                    className="gpro-shine rounded-xl px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                    style={{ backgroundColor: COLORS.red }}
                  >
                    Kirim ke WhatsApp
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: `${COLORS.blue}${dark ? "10" : "14"}` }}>
              <p className="text-xs font-semibold" style={{ color: textMain }}>
                Catatan:
              </p>
              <p className="mt-1 text-xs" style={{ color: textSub }}>
                Tutup modal: klik area gelap atau tekan <b>Esc</b>.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
