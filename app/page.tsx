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
  url: string; // ganti dengan link kamu
};

export default function Home() {
  // ====== BRAND / KONTAK ======
  const BRAND = {
    short: "GPro",
    full: "Global Pro-eksistensi",
    subtitle: "Pusat Kajian Strategis • Policy • Data • Peta • Roadmap",
    wa: "https://wa.me/6285899993742",
    email: "mailto:pksgpro@gmail.com",
  };

  // ====== PALET WARNA (DARI LOGO) ======
  const COLORS = {
    red: "#D00705",
    blue: "#7DB4CE",
    ink: "#493D58",
    soft: "#F8FAFD",
  };

  // ====== DARK MODE ======
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // ambil preferensi dari localStorage, kalau belum ada ikuti sistem
    const saved = typeof window !== "undefined" ? localStorage.getItem("gpro-theme") : null;
    if (saved === "dark") setDark(true);
    else if (saved === "light") setDark(false);
    else {
      const prefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("gpro-theme", dark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", dark);
    }
  }, [dark]);

  // ====== PORTOFOLIO ======
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

  // ====== PUBLIKASI (ganti URL) ======
  const publications: Publication[] = [
    {
      title: "Policy Brief — Hub Logistik Kediri 2045",
      type: "PDF",
      desc: "Ringkasan kebijakan + roadmap strategi (contoh placeholder).",
      url: "https://example.com/kediri-policy-brief.pdf",
    },
    {
      title: "Peta Analitik — Bottleneck Kawasan Industri",
      type: "Peta",
      desc: "Visual zona risiko & intervensi (contoh placeholder).",
      url: "https://example.com/peta-bottleneck.png",
    },
    {
      title: "Toolkit — Edukasi ISPA & Stres Kemacetan (1 halaman)",
      type: "Toolkit",
      desc: "Materi edukasi publik ringkas (contoh placeholder).",
      url: "https://example.com/toolkit-ispa.pdf",
    },
    {
      title: "Deck — Evaluasi PSN & Biaya Logistik",
      type: "Slide",
      desc: "Materi presentasi untuk stakeholder (contoh placeholder).",
      url: "https://example.com/deck-psn.pptx",
    },
  ];

  const categories = ["Semua", "Logistik", "PSN", "Kesehatan", "Kemiskinan", "Trade", "Edukasi"] as const;
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");

  const filteredWorks = useMemo(() => {
    if (active === "Semua") return works;
    return works.filter((w) => w.category === active);
  }, [active]);

  const featured = useMemo(() => works.find((w) => w.featured) ?? works[0], []);

  // ====== MODAL FORM ======
  const [openModal, setOpenModal] = useState(false);

  // close modal with ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenModal(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ====== SCROLL REVEAL ======
  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduceMotion) {
      els.forEach((el) => {
        el.classList.remove("opacity-0", "translate-y-4");
        el.classList.add("opacity-100", "translate-y-0");
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.remove("opacity-0", "translate-y-4");
          el.classList.add("opacity-100", "translate-y-0");
          io.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ====== helpers ======
  const cn = (...s: (string | false | null | undefined)[]) => s.filter(Boolean).join(" ");

  const SectionTitle = ({ title, desc }: { title: string; desc?: string }) => (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h2>
      {desc ? <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">{desc}</p> : null}
    </div>
  );

  const chipStyle = {
    borderColor: COLORS.blue,
    backgroundColor: `${COLORS.blue}12`,
  } as React.CSSProperties;

  // ====== UI THEME ======
  const bg = dark ? "#050507" : COLORS.soft;
  const card = dark ? "#0B0B10" : "#FFFFFF";
  const border = dark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)";
  const textMain = dark ? "#F4F4F5" : COLORS.ink;
  const textSub = dark ? "rgba(244,244,245,0.72)" : "rgba(24,24,27,0.65)";

  // ====== Modal submit (langsung ke WhatsApp biar gampang) ======
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

    window.open(`${BRAND.wa}?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: bg }}>
      {/* BACKGROUND BLOBS */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-20 -top-24 h-[380px] w-[380px] rounded-full blur-3xl"
          style={{ backgroundColor: `${COLORS.blue}${dark ? "22" : "33"}` }}
        />
        <div
          className="absolute right-[-120px] top-10 h-[440px] w-[440px] rounded-full blur-3xl"
          style={{ backgroundColor: `${COLORS.red}${dark ? "14" : "22"}` }}
        />
        <div
          className="absolute left-[25%] bottom-[-220px] h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ backgroundColor: `${COLORS.blue}${dark ? "14" : "22"}` }}
        />
      </div>

      {/* HEADER */}
      <header
        className="sticky top-0 z-40 backdrop-blur"
        style={{
          backgroundColor: dark ? "rgba(5,5,7,0.72)" : "rgba(255,255,255,0.78)",
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
                alt="GPro Logo”
                className="h-full w-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-bold" style={{ color: textMain }}>
                {BRAND.short} <span style={{ color: textSub }} className="font-medium">— {BRAND.full}</span>
              </p>
              <p className="text-xs" style={{ color: textSub }}>{BRAND.subtitle}</p>
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
            {/* Dark mode toggle */}
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
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              style={{ backgroundColor: COLORS.red }}
            >
              Ajukan Kolaborasi
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div data-reveal className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <div
            className="relative overflow-hidden rounded-3xl p-8 shadow-sm"
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
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
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
                    href={BRAND.wa}
                    className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                    style={{ borderColor: border, color: textMain, backgroundColor: card }}
                  >
                    Chat WhatsApp
                  </a>
                </div>
              </div>

              {/* Featured */}
              <div className="w-full md:w-[420px]">
                <div
                  className="group rounded-2xl p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  style={{ border: `1px solid ${border}`, backgroundColor: card }}
                >
                  <p className="text-xs font-semibold" style={{ color: textSub }}>Featured work</p>
                  <p className="mt-2 text-sm font-bold" style={{ color: textMain }}>{featured.title}</p>
                  <p className="mt-2 text-sm" style={{ color: textSub }}>{featured.summary}</p>

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
                    <span className="text-xs font-semibold" style={{ color: textSub }}>{featured.tag}</span>
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
                <div
                  key={x.t}
                  className="rounded-2xl p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  style={{ border: `1px solid ${border}`, backgroundColor: card }}
                >
                  <p className="text-sm font-bold" style={{ color: textMain }}>{x.t}</p>
                  <p className="mt-1 text-sm" style={{ color: textSub }}>{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER / TESTIMONI STRIP */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div data-reveal className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <div
            className="rounded-3xl p-6"
            style={{ border: `1px solid ${border}`, backgroundColor: card }}
          >
            <p className="text-sm font-semibold" style={{ color: textMain }}>
              Partner / kolaborasi (bisa diisi logo organisasi)
            </p>
            <p className="mt-1 text-xs" style={{ color: textSub }}>
              Kalau belum ada, ini tetap bisa tampil sebagai “Trusted by / Collaboration”.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {["Partner A", "Partner B", "Partner C", "Partner D"].map((p) => (
                <div
                  key={p}
                  className="flex items-center justify-center rounded-2xl px-4 py-6 text-sm font-semibold"
                  style={{ border: `1px dashed ${border}`, color: textSub }}
                >
                  {p}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: `${COLORS.blue}${dark ? "10" : "14"}` }}>
              <p className="text-xs font-semibold" style={{ color: textMain }}>Tips:</p>
              <p className="mt-1 text-xs" style={{ color: textSub }}>
                Nanti kamu tinggal ganti tulisan “Partner A/B/...” jadi logo (PNG) biar terlihat lebih meyakinkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="mx-auto max-w-6xl px-6 pt-14 scroll-mt-24">
        <div data-reveal className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <SectionTitle
            title="Tentang GPro"
            desc="GPro berfokus pada pekerjaan yang “nyambung ke eksekusi”: merumuskan masalah, membangun opsi kebijakan, lalu mengemasnya jadi materi yang bisa dipakai pemangku kepentingan."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Nilai kerja",
                list: ["Transparan pada asumsi & sumber", "Rapi, ringkas, stakeholder-friendly", "Fokus pada langkah implementasi"],
              },
              {
                t: "Untuk siapa",
                list: ["Komunitas/NGO", "Pemerintah daerah", "Pelaku usaha & stakeholder"],
              },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl p-6 shadow-sm" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
                <p className="text-sm font-bold" style={{ color: textMain }}>{x.t}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm" style={{ color: textSub }}>
                  {x.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-2xl p-6 shadow-sm" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
              <p className="text-sm font-bold" style={{ color: textMain }}>Kontak cepat</p>
              <p className="mt-2 text-sm" style={{ color: textSub }}>
                Hubungi untuk diskusi kebutuhan dan bentuk kolaborasi.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={BRAND.wa}
                  className="rounded-xl px-4 py-2 text-center text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ backgroundColor: COLORS.red }}
                >
                  WhatsApp: +62 858-9999-3742
                </a>
                <a
                  href={BRAND.email}
                  className="rounded-xl border px-4 py-2 text-center text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                  style={{ borderColor: COLORS.blue, color: textMain, backgroundColor: card }}
                >
                  Email: pksgpro@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLIKASI */}
      <section id="publikasi" className="mx-auto max-w-6xl px-6 pt-14 scroll-mt-24">
        <div data-reveal className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <SectionTitle
            title="Publikasi & Produk"
            desc="Dokumen/peta/toolkit yang bisa diunduh. (Sekarang masih contoh — tinggal ganti link URL-nya.)"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {publications.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{ border: `1px solid ${border}`, backgroundColor: card }}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-bold" style={{ color: textMain }}>{p.title}</p>
                  <span className="rounded-full border px-3 py-1 text-xs font-semibold" style={{ ...chipStyle, color: textMain }}>
                    {p.type}
                  </span>
                </div>
                <p className="mt-2 text-sm" style={{ color: textSub }}>{p.desc}</p>

                <div className="mt-5 flex gap-3">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
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

          <div className="mt-6 rounded-2xl border border-dashed p-5 text-sm" style={{ borderColor: border, backgroundColor: card, color: textSub }}>
            <p className="font-semibold" style={{ color: textMain }}>Cara ganti link publikasi:</p>
            <p className="mt-1">
              Cari bagian <b>publications</b> di kode, lalu ganti <b>url</b> dengan link Google Drive/PDF kamu.
            </p>
          </div>
        </div>
      </section>

      {/* PORTOFOLIO + FILTER */}
      <section id="portofolio" className="mx-auto max-w-6xl px-6 pt-14 scroll-mt-24">
        <div data-reveal className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <SectionTitle
            title="Portofolio"
            desc="Pilih kategori untuk melihat karya yang relevan."
          />

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
              <div
                key={w.title}
                className="group rounded-2xl p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{ border: `1px solid ${border}`, backgroundColor: card }}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-bold" style={{ color: textMain }}>{w.title}</p>
                  <span className="shrink-0 rounded-full border px-3 py-1 text-xs" style={{ ...chipStyle, color: textMain }}>
                    {w.tag}
                  </span>
                </div>

                <p className="mt-2 text-sm" style={{ color: textSub }}>{w.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {w.outputs.map((o) => (
                    <span
                      key={o}
                      className="rounded-full border px-3 py-1 text-xs"
                      style={{ borderColor: border, backgroundColor: dark ? "rgba(255,255,255,0.04)" : "#FAFAFA", color: textSub }}
                    >
                      {o}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold" style={{ color: textSub }}>Kategori: {w.category}</span>
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
        <div data-reveal className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <SectionTitle title="Layanan" desc="Format output yang biasa disiapkan untuk stakeholder dan kolaborator." />

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { t: "Policy Brief & Memo", d: "Dokumen ringkas, jelas, siap dipakai rapat/advokasi." },
              { t: "Peta Analitik & Visual", d: "Peta/infografik stakeholder-friendly, metodologi transparan." },
              { t: "Roadmap Implementasi", d: "Tahapan kerja, prioritas, timeline, aktor, risiko, langkah eksekusi." },
              { t: "Deck Presentasi", d: "Materi presentasi profesional yang singkat, tajam, rapi." },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                style={{ border: `1px solid ${border}`, backgroundColor: card }}
              >
                <p className="text-sm font-bold" style={{ color: textMain }}>{x.t}</p>
                <p className="mt-2 text-sm" style={{ color: textSub }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="mx-auto max-w-6xl px-6 pb-16 pt-14 scroll-mt-24">
        <div data-reveal className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <div className="rounded-3xl p-8 shadow-sm" style={{ border: `1px solid ${border}`, backgroundColor: card }}>
            <h2 className="text-xl font-bold" style={{ color: textMain }}>Ajukan kolaborasi</h2>
            <p className="mt-2 max-w-3xl text-sm" style={{ color: textSub }}>
              Klik tombol di bawah untuk mengisi form singkat. Setelah itu otomatis bisa terkirim ke WhatsApp.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setOpenModal(true)}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                style={{ backgroundColor: COLORS.red }}
              >
                Buka Form Kolaborasi
              </button>
              <a
                href={BRAND.email}
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                style={{ borderColor: COLORS.blue, color: textMain, backgroundColor: card }}
              >
                Email: pksgpro@gmail.com
              </a>
            </div>

            <p className="mt-7 text-xs" style={{ color: textSub }}>
              © {new Date().getFullYear()} {BRAND.full}. All rights reserved.
            </p>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href={BRAND.wa}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        style={{ backgroundColor: COLORS.red }}
        aria-label="Chat WhatsApp"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
          <span className="text-base">💬</span>
        </span>
        Chat WhatsApp
      </a>

      {/* MODAL */}
      {openModal ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* overlay */}
          <button
            className="absolute inset-0"
            onClick={() => setOpenModal(false)}
            style={{ backgroundColor: dark ? "rgba(0,0,0,0.72)" : "rgba(0,0,0,0.55)" }}
            aria-label="Close modal"
          />

          {/* modal card */}
          <div
            className="relative w-full max-w-xl rounded-3xl p-6 shadow-2xl"
            style={{ backgroundColor: card, border: `1px solid ${border}` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold" style={{ color: textSub }}>Form Kolaborasi</p>
                <h3 className="mt-1 text-xl font-bold" style={{ color: textMain }}>Ajukan Kolaborasi</h3>
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
                    className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                    style={{ backgroundColor: COLORS.red }}
                  >
                    Kirim ke WhatsApp
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: `${COLORS.blue}${dark ? "10" : "14"}` }}>
              <p className="text-xs font-semibold" style={{ color: textMain }}>Catatan:</p>
              <p className="mt-1 text-xs" style={{ color: textSub }}>
                Kamu bisa tutup modal dengan klik area gelap atau tekan tombol <b>Esc</b>.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
