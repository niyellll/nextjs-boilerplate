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
    white: "#FFFFFF",
  };

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

  const categories = ["Semua", "Logistik", "PSN", "Kesehatan", "Kemiskinan", "Trade", "Edukasi"] as const;
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");

  const filteredWorks = useMemo(() => {
    if (active === "Semua") return works;
    return works.filter((w) => w.category === active);
  }, [active]);

  const featured = useMemo(() => works.find((w) => w.featured) ?? works[0], []);

  // ====== SCROLL REVEAL (animasi halus saat scroll) ======
  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    // kalau user minta reduce motion: tampilkan langsung
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

  // ====== UI HELPERS ======
  const SectionTitle = ({ title, desc }: { title: string; desc?: string }) => (
    <div className="mb-6">
      <h2 className="text-xl font-bold" style={{ color: COLORS.ink }}>
        {title}
      </h2>
      {desc ? <p className="mt-2 max-w-3xl text-sm text-zinc-600">{desc}</p> : null}
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.soft }}>
      {/* BACKGROUND BLOBS (gradient modern) */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-20 -top-24 h-[380px] w-[380px] rounded-full blur-3xl"
          style={{ backgroundColor: `${COLORS.blue}33` }}
        />
        <div
          className="absolute right-[-120px] top-10 h-[440px] w-[440px] rounded-full blur-3xl"
          style={{ backgroundColor: `${COLORS.red}22` }}
        />
        <div
          className="absolute left-[25%] bottom-[-220px] h-[520px] w-[520px] rounded-full blur-3xl"
          style={{ backgroundColor: `${COLORS.blue}22` }}
        />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
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
              <p className="text-sm font-bold" style={{ color: COLORS.ink }}>
                {BRAND.short} <span className="font-medium text-zinc-500">— {BRAND.full}</span>
              </p>
              <p className="text-xs text-zinc-500">{BRAND.subtitle}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:opacity-80" href="#tentang">Tentang</a>
            <a className="hover:opacity-80" href="#portofolio">Portofolio</a>
            <a className="hover:opacity-80" href="#layanan">Layanan</a>
            <a className="hover:opacity-80" href="#kontak">Kontak</a>
          </nav>

          <a
            href="#kontak"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            style={{ backgroundColor: COLORS.red }}
          >
            Ajukan Kolaborasi
          </a>
        </div>
      </header>

      {/* HERO + FEATURED */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <div
          data-reveal
          className="opacity-0 translate-y-4 transition-all duration-700 ease-out"
        >
          <div
            className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm"
            style={{
              background: `linear-gradient(135deg, ${COLORS.blue}22 0%, #ffffff 45%, ${COLORS.red}14 100%)`,
            }}
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-600">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS.red }} />
                  STRATEGI • KEBIJAKAN • DATA • PETA • ROADMAP
                </div>

                <h1 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl" style={{ color: COLORS.ink }}>
                  Membuat isu kompleks jadi keputusan yang jelas dan bisa dieksekusi.
                </h1>

                <p className="mt-4 max-w-2xl text-zinc-600">
                  {BRAND.full} menyusun kajian strategis, policy brief, peta analitik, dan roadmap implementasi untuk logistik,
                  rantai pasok, biaya ekonomi, kemiskinan, dan edukasi—dengan bahasa yang mudah dipahami dan keluaran yang siap dipakai.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#portofolio"
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                    style={{ backgroundColor: COLORS.red }}
                  >
                    Lihat Portofolio
                  </a>
                  <a
                    href={BRAND.wa}
                    className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                    style={{ borderColor: COLORS.blue, color: COLORS.ink, backgroundColor: "#ffffff" }}
                  >
                    Chat WhatsApp
                  </a>
                  <a
                    href={BRAND.email}
                    className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                    style={{ borderColor: "#E5E7EB", color: COLORS.ink, backgroundColor: "#ffffff" }}
                  >
                    Email
                  </a>
                </div>
              </div>

              {/* Featured Work Card */}
              <div className="w-full md:w-[420px]">
                <div
                  className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-xs font-semibold text-zinc-500">Featured work</p>
                  <p className="mt-2 text-sm font-bold" style={{ color: COLORS.ink }}>
                    {featured.title}
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">{featured.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {featured.outputs.map((o) => (
                      <span
                        key={o}
                        className="rounded-full border px-3 py-1 text-xs"
                        style={{ borderColor: COLORS.blue, color: COLORS.ink, backgroundColor: `${COLORS.blue}12` }}
                      >
                        {o}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-500">{featured.tag}</span>
                    <a
                      href="#portofolio"
                      className="text-sm font-semibold transition group-hover:opacity-90"
                      style={{ color: COLORS.red }}
                    >
                      Lihat semua →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Proof strip */}
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                { t: "Berbasis data", d: "Sumber publik & asumsi transparan." },
                { t: "Output siap pakai", d: "Rapi untuk rapat/advokasi." },
                { t: "Peta & visual", d: "Lebih cepat dipahami stakeholder." },
                { t: "Respon cepat", d: "WhatsApp untuk diskusi awal." },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <p className="text-sm font-bold" style={{ color: COLORS.ink }}>{x.t}</p>
                  <p className="mt-1 text-sm text-zinc-600">{x.d}</p>
                </div>
              ))}
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
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold" style={{ color: COLORS.ink }}>Nilai kerja</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600">
                <li>Transparan pada asumsi & sumber</li>
                <li>Rapi, ringkas, stakeholder-friendly</li>
                <li>Fokus pada langkah implementasi</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold" style={{ color: COLORS.ink }}>Untuk siapa</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600">
                <li>Komunitas/NGO</li>
                <li>Pemerintah daerah</li>
                <li>Pelaku usaha & stakeholder</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold" style={{ color: COLORS.ink }}>Kontak cepat</p>
              <p className="mt-2 text-sm text-zinc-600">Hubungi untuk diskusi kebutuhan dan bentuk kolaborasi.</p>

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
                  style={{ borderColor: COLORS.blue, color: COLORS.ink, backgroundColor: "#ffffff" }}
                >
                  Email: pksgpro@gmail.com
                </a>
              </div>

              <div className="mt-4 rounded-2xl p-4" style={{ backgroundColor: `${COLORS.blue}1A` }}>
                <p className="text-xs font-semibold" style={{ color: COLORS.ink }}>Tips profesional</p>
                <p className="mt-1 text-xs text-zinc-600">
                  Jika nanti sudah siap bisnis, gunakan email domain sendiri (mis. admin@domain.com) untuk trust lebih tinggi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTOFOLIO + FILTER */}
      <section id="portofolio" className="mx-auto max-w-6xl px-6 pt-14 scroll-mt-24">
        <div data-reveal className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <SectionTitle
            title="Portofolio"
            desc="Pilih kategori untuk melihat karya yang relevan. (Nanti kamu bisa tambahkan tombol unduh PDF/Link publik biar makin meyakinkan.)"
          />

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const activeBtn = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className="rounded-full border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                  style={{
                    borderColor: activeBtn ? COLORS.red : "#E5E7EB",
                    backgroundColor: activeBtn ? `${COLORS.red}10` : "#ffffff",
                    color: activeBtn ? COLORS.ink : "#3F3F46",
                  }}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {/* Cards */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {filteredWorks.map((w) => (
              <div
                key={w.title}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-bold" style={{ color: COLORS.ink }}>{w.title}</p>
                  <span
                    className="shrink-0 rounded-full border px-3 py-1 text-xs"
                    style={{ borderColor: COLORS.blue, color: COLORS.ink, backgroundColor: `${COLORS.blue}12` }}
                  >
                    {w.tag}
                  </span>
                </div>

                <p className="mt-2 text-sm text-zinc-600">{w.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {w.outputs.map((o) => (
                    <span
                      key={o}
                      className="rounded-full border px-3 py-1 text-xs text-zinc-700"
                      style={{ borderColor: "#E5E7EB", backgroundColor: "#FAFAFA" }}
                    >
                      {o}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-500">Kategori: {w.category}</span>
                  <a
                    href="#kontak"
                    className="text-sm font-semibold transition group-hover:opacity-90"
                    style={{ color: COLORS.red }}
                  >
                    Kolaborasi →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-white p-5 text-sm text-zinc-600">
            <p className="font-semibold" style={{ color: COLORS.ink }}>Biar makin meyakinkan:</p>
            <p className="mt-1">
              Tambahkan 3–5 link publik (PDF policy brief / peta / toolkit). Kalau kamu kirim linknya, aku bisa buat tombol “Unduh / Lihat”.
            </p>
          </div>
        </div>
      </section>

      {/* LAYANAN */}
      <section id="layanan" className="mx-auto max-w-6xl px-6 pt-14 scroll-mt-24">
        <div data-reveal className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <SectionTitle
            title="Layanan"
            desc="Format output yang biasa disiapkan untuk stakeholder dan kolaborator."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                t: "Policy Brief & Memo",
                d: "Dokumen ringkas, jelas, dan siap dipakai untuk rapat, advokasi, dan pengambilan keputusan.",
              },
              {
                t: "Peta Analitik & Visual",
                d: "Peta/infografik yang mudah dipahami stakeholder non-teknis, dengan metodologi transparan.",
              },
              {
                t: "Roadmap Implementasi",
                d: "Tahapan kerja: prioritas, timeline, aktor, risiko, dan langkah eksekusi.",
              },
              {
                t: "Deck Presentasi",
                d: "Materi presentasi profesional untuk pemangku kepentingan (singkat, tajam, dan rapi).",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-bold" style={{ color: COLORS.ink }}>{x.t}</p>
                <p className="mt-2 text-sm text-zinc-600">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="mx-auto max-w-6xl px-6 pb-16 pt-14 scroll-mt-24">
        <div data-reveal className="opacity-0 translate-y-4 transition-all duration-700 ease-out">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold" style={{ color: COLORS.ink }}>Ajukan kolaborasi</h2>
            <p className="mt-2 max-w-3xl text-sm text-zinc-600">
              Kirim kebutuhan singkat (topik, output yang diinginkan, deadline). Kita mulai dari diskusi awal supaya jelas dan cepat.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={BRAND.wa}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                style={{ backgroundColor: COLORS.red }}
              >
                WhatsApp
              </a>
              <a
                href={BRAND.email}
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:shadow-sm"
                style={{ borderColor: COLORS.blue, color: COLORS.ink, backgroundColor: "#ffffff" }}
              >
                Email
              </a>
            </div>

            <p className="mt-7 text-xs text-zinc-500">
              © {new Date().getFullYear()} {BRAND.full}. All rights reserved.
            </p>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={BRAND.wa}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        style={{ backgroundColor: COLORS.red }}
        aria-label="Chat WhatsApp"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
          {/* simple icon */}
          <span className="text-base">💬</span>
        </span>
        Chat WhatsApp
      </a>
    </div>
  );
}
