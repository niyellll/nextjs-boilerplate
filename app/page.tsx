export default function Home() {
  const BRAND = {
    name: "Global Pro-eksistensi",
    short: "GPro",
    tagline: "Pusat Kajian Strategis • Policy • Data • Peta • Roadmap",
    wa: "https://wa.me/6285899993742",
    email: "mailto:pksgpro@gmail.com",
  };

  // Palet warna dari logo
  const COLORS = {
    red: "#D00705",
    blue: "#7DB4CE",
    ink: "#493D58",
    soft: "#F8FAFD",
  };

  const highlights = [
    {
      title: "Hub Logistik Kediri 2045",
      tag: "Logistik • 2045",
      desc: "Riset dan argumentasi kebijakan tentang Kediri sebagai hub logistik nasional–global, termasuk strategi dan roadmap transformasi.",
    },
    {
      title: "Bandara Dhoho: Konektivitas & dampak ekonomi",
      tag: "Aviation • Logistics",
      desc: "Rancangan konektivitas transportasi dan simulasi manfaat ekonomi (penumpang & kargo) untuk memperkuat posisi kawasan.",
    },
    {
      title: "Evaluasi PSN & Biaya Logistik",
      tag: "Policy • Ekonomi",
      desc: "Analisis kenapa biaya logistik tidak turun meski PSN dibangun, plus rekomendasi perbaikan yang bisa dieksekusi.",
    },
    {
      title: "Bottleneck Kawasan Industri (macet–polusi–kesehatan)",
      tag: "Kota • Kesehatan",
      desc: "Pemetaan zona risiko kesehatan dan strategi intervensi, termasuk toolkit edukasi sederhana untuk masyarakat.",
    },
    {
      title: "Early-Warning Poverty Framework",
      tag: "Kemiskinan • Perencanaan",
      desc: "Kerangka peringatan dini kemiskinan untuk penajaman program dan perencanaan pembangunan (BPS & PPP).",
    },
    {
      title: "Strategi Transformasi Industri (mis. tekstil)",
      tag: "Industri • Strategi",
      desc: "Policy brief untuk menghadapi tekanan struktural industri dan opsi kebijakan yang realistis untuk transisi.",
    },
  ];

  const services = [
    {
      title: "Policy Brief & Memo",
      desc: "Dokumen ringkas, jelas, dan siap dipakai untuk rapat, advokasi, dan pengambilan keputusan.",
    },
    {
      title: "Peta Analitik & Visual",
      desc: "Peta/infografik yang mudah dipahami stakeholder non-teknis, dengan metodologi yang transparan.",
    },
    {
      title: "Roadmap Implementasi",
      desc: "Tahapan kerja: prioritas, timeline, aktor, risiko, dan langkah eksekusi.",
    },
    {
      title: "Deck Presentasi",
      desc: "Materi presentasi profesional untuk pemangku kepentingan (singkat, tajam, dan rapi).",
    },
  ];

  return (
    <div style={{ backgroundColor: COLORS.soft }} className="min-h-screen text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              {/* Pastikan kamu upload logo ke /public/logo.png */}
              <img src="/logo.png" alt="GPro Logo" className="h-full w-full object-cover" />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-bold" style={{ color: COLORS.ink }}>
                {BRAND.short} <span className="font-medium text-zinc-500">— {BRAND.name}</span>
              </p>
              <p className="text-xs text-zinc-500">{BRAND.tagline}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:opacity-80" href="#tentang">Tentang</a>
            <a className="hover:opacity-80" href="#karya">Karya</a>
            <a className="hover:opacity-80" href="#layanan">Layanan</a>
            <a className="hover:opacity-80" href="#kontak">Kontak</a>
          </nav>

          <a
            href="#kontak"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-white"
            style={{ backgroundColor: COLORS.red }}
          >
            Ajukan Kolaborasi
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-14">
        <div
          className="rounded-3xl border border-zinc-200 bg-white p-8"
          style={{
            background:
              `linear-gradient(135deg, ${COLORS.blue}22 0%, #ffffff 45%, ${COLORS.red}14 100%)`,
          }}
        >
          <p className="text-xs font-semibold tracking-wide text-zinc-600">
            STRATEGI • KEBIJAKAN • DATA • PETA • ROADMAP
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl" style={{ color: COLORS.ink }}>
            Membuat isu kompleks jadi keputusan yang jelas dan bisa dieksekusi.
          </h1>

          <p className="mt-4 max-w-3xl text-zinc-600">
            {BRAND.name} menyusun kajian strategis, policy brief, peta analitik, dan roadmap implementasi
            untuk logistik, rantai pasok, biaya ekonomi, kemiskinan, dan edukasi—dengan bahasa yang mudah dipahami
            dan keluaran yang siap dipakai.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#karya"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: COLORS.red }}
            >
              Lihat Karya Utama
            </a>
            <a
              href={BRAND.wa}
              className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold"
              style={{ borderColor: COLORS.blue, color: COLORS.ink, backgroundColor: "#ffffff" }}
            >
              Chat WhatsApp
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t: "Berbasis data", d: "Mengutamakan sumber publik dan asumsi yang transparan." },
              { t: "Output siap pakai", d: "Ringkas, rapi, dan cocok untuk rapat/advokasi." },
              { t: "Komunikasi kuat", d: "Bahasa sederhana tanpa menghilangkan ketajaman." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <p className="text-sm font-bold" style={{ color: COLORS.ink }}>{x.t}</p>
                <p className="mt-2 text-sm text-zinc-600">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="mx-auto max-w-6xl px-6 pt-14">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold" style={{ color: COLORS.ink }}>Tentang GPro</h2>
            <p className="mt-3 text-zinc-600">
              GPro berfokus pada pekerjaan yang “nyambung ke eksekusi”: menyusun kerangka masalah,
              membangun opsi kebijakan, lalu mengemasnya jadi materi yang bisa dipakai oleh pemangku kepentingan.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <p className="text-sm font-bold" style={{ color: COLORS.ink }}>Nilai kerja</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600">
                  <li>Transparan pada asumsi & sumber</li>
                  <li>Rapi, ringkas, stakeholder-friendly</li>
                  <li>Fokus pada langkah implementasi</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <p className="text-sm font-bold" style={{ color: COLORS.ink }}>Untuk siapa</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600">
                  <li>Komunitas/NGO</li>
                  <li>Pemerintah daerah</li>
                  <li>Pelaku usaha & stakeholder</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kontak cepat */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6">
            <p className="text-sm font-bold" style={{ color: COLORS.ink }}>Kontak cepat</p>
            <p className="mt-2 text-sm text-zinc-600">
              Hubungi untuk diskusi kebutuhan dan bentuk kolaborasi.
            </p>

            <div className="mt-4 flex flex-col gap-2">
              <a
                href={BRAND.wa}
                className="rounded-xl px-4 py-2 text-center text-sm font-semibold text-white"
                style={{ backgroundColor: COLORS.red }}
              >
                WhatsApp: +62 858-9999-3742
              </a>
              <a
                href={BRAND.email}
                className="rounded-xl border px-4 py-2 text-center text-sm font-semibold"
                style={{ borderColor: COLORS.blue, color: COLORS.ink }}
              >
                Email: pksgpro@gmail.com
              </a>
            </div>

            <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: `${COLORS.blue}1A` }}>
              <p className="text-xs font-semibold" style={{ color: COLORS.ink }}>Tips agar makin profesional</p>
              <p className="mt-1 text-xs text-zinc-600">
                Kalau nanti sudah siap bisnis, pertimbangkan email domain sendiri (mis. admin@domain.com) untuk meningkatkan trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Karya */}
      <section id="karya" className="mx-auto max-w-6xl px-6 pt-14">
        <h2 className="text-xl font-bold" style={{ color: COLORS.ink }}>Karya utama</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">
          Ringkasan portofolio yang mencerminkan tema kerja GPro. (Nanti kamu bisa tambah link PDF/Drive agar lebih meyakinkan.)
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {highlights.map((p) => (
            <div key={p.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-bold" style={{ color: COLORS.ink }}>{p.title}</p>
                <span
                  className="shrink-0 rounded-full border px-3 py-1 text-xs"
                  style={{ borderColor: COLORS.blue, color: COLORS.ink, backgroundColor: `${COLORS.blue}12` }}
                >
                  {p.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-600">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-white p-5 text-sm text-zinc-600">
          <p className="font-semibold" style={{ color: COLORS.ink }}>Agar makin dipercaya:</p>
          <p className="mt-1">
            Tambahkan 3–5 link publik (PDF policy brief, peta, dashboard). Kalau kamu kirim linknya nanti, aku bisa pasang tombol “Unduh”.
          </p>
        </div>
      </section>

      {/* Layanan */}
      <section id="layanan" className="mx-auto max-w-6xl px-6 pt-14">
        <h2 className="text-xl font-bold" style={{ color: COLORS.ink }}>Layanan</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">
          Format output yang biasa disiapkan untuk stakeholder dan kolaborator.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-bold" style={{ color: COLORS.ink }}>{s.title}</p>
              <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="kontak" className="mx-auto max-w-6xl px-6 pb-16 pt-14">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8">
          <h2 className="text-xl font-bold" style={{ color: COLORS.ink }}>Siap kolaborasi</h2>
          <p className="mt-2 max-w-3xl text-sm text-zinc-600">
            Jika kamu butuh policy brief, peta analitik, atau roadmap implementasi yang rapi dan mudah dipahami,
            kita bisa mulai dari diskusi singkat.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={BRAND.wa}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white"
              style={{ backgroundColor: COLORS.red }}
            >
              WhatsApp
            </a>
            <a
              href={BRAND.email}
              className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold"
              style={{ borderColor: COLORS.blue, color: COLORS.ink }}
            >
              Email
            </a>
          </div>

          <p className="mt-7 text-xs text-zinc-500">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
