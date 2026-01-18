type Project = {
  title: string;
  tag: string;
  outcome: string;
  deliverables: string[];
};

export default function Home() {
  // === Edit cepat di sini (kalau sudah punya) ===
  const brand = {
    name: "GPro",
    org: "Global Pro Eksistensi",
    tagline: "Pusat Kajian Strategis — riset kebijakan yang bisa dipakai, bukan sekadar wacana.",
    contact: {
      email: "mailto:your-email@example.com", // ganti
      whatsapp: "#", // ganti jadi link wa.me/62xxxx
      instagram: "#", // ganti
    },
  };

  const credibility = [
    {
      title: "Berbasis data & sumber publik",
      desc: "Mengutamakan data yang bisa ditelusuri (OSM, statistik publik, dokumen kebijakan), dengan asumsi yang dijelaskan jelas.",
    },
    {
      title: "Output siap dipakai",
      desc: "Policy brief, memo, peta analitik, dan roadmap yang formatnya siap untuk rapat, advokasi, dan pengambilan keputusan.",
    },
    {
      title: "Bahasa sederhana, tetap tajam",
      desc: "Ringkas untuk pemangku kepentingan non-teknis, namun tetap kuat secara argumentasi dan struktur kebijakan.",
    },
  ];

  const focusAreas = [
    "Hub logistik & konektivitas regional",
    "Rantai pasok global & peluang Indonesia",
    "Evaluasi PSN & biaya logistik",
    "Bottleneck kawasan industri: macet, polusi, kesehatan",
    "Early-warning kemiskinan untuk perencanaan",
    "Edukasi publik: kurikulum & toolkit literasi",
  ];

  const approach = [
    {
      step: "1) Diagnose",
      desc: "Merumuskan masalah dengan jelas: konteks, aktor, hambatan, dan indikator dampak.",
    },
    {
      step: "2) Model",
      desc: "Menyusun kerangka analisis: skenario, peta risiko, dan opsi kebijakan yang realistis.",
    },
    {
      step: "3) Recommend",
      desc: "Menyusun rekomendasi yang bisa dieksekusi: prioritas, timeline, dan trade-off.",
    },
    {
      step: "4) Communicate",
      desc: "Mengemas temuan jadi materi siap pakai: brief, deck, infografik, dan lampiran teknis.",
    },
  ];

  const projects: Project[] = [
    {
      title: "Kediri sebagai Hub Logistik 2045",
      tag: "Logistik • 2045",
      outcome:
        "Menyusun visi–roadmap dan argumentasi kebijakan untuk transformasi Kediri sebagai pusat logistik nasional–global.",
      deliverables: ["Roadmap strategi", "Policy brief argumentatif", "Kerangka konektivitas rantai pasok"],
    },
    {
      title: "Bandara Dhoho: Integrasi konektivitas & simulasi dampak",
      tag: "Aviation • Logistics",
      outcome:
        "Merancang skema konektivitas bandara–transportasi dan mensimulasikan manfaat ekonomi (penumpang & kargo) untuk percepatan integrasi jaringan.",
      deliverables: ["Draft proposal teknis", "Simulasi dampak ekonomi", "Strategi koordinasi & advokasi"],
    },
    {
      title: "Mengapa biaya logistik tidak turun meski PSN dibangun?",
      tag: "PSN • Tata Kelola",
      outcome:
        "Membedah akar masalah biaya logistik yang persisten dan merumuskan rekomendasi perbaikan pada level kebijakan dan eksekusi mikro.",
      deliverables: ["Dokumen evaluatif", "Infografik sistem biaya", "Rekomendasi transisi mikro"],
    },
    {
      title: "Bottleneck kawasan industri: kesehatan, kemacetan, polusi",
      tag: "Kota • Kesehatan",
      outcome:
        "Menyusun peta risiko kesehatan dan strategi intervensi berbasis zona untuk menurunkan dampak ISPA/stres akibat kemacetan.",
      deliverables: ["Peta zona risiko", "Memo strategi kesehatan", "Toolkit edukasi 1 halaman"],
    },
    {
      title: "Early-Warning Poverty Framework (BPS & PPP)",
      tag: "Kemiskinan • Perencanaan",
      outcome:
        "Membangun kerangka peringatan dini kemiskinan untuk mendukung penajaman prioritas program dan ketepatan sasaran.",
      deliverables: ["Framework indikator", "Skema integrasi kebijakan", "Rekomendasi implementasi"],
    },
    {
      title: "Policy brief industri: transformasi tekstil nasional",
      tag: "Industri • Strategi",
      outcome:
        "Menyusun peta strategi dan opsi kebijakan untuk menghadapi tekanan struktural industri (kompetisi harga, impor murah, dan adaptasi pasar).",
      deliverables: ["Policy brief", "Matriks opsi kebijakan", "Roadmap transisi"],
    },
  ];

  const deliverables = [
    {
      title: "Policy Brief & Memo Kebijakan",
      desc: "Ringkas, fokus solusi, dan siap dipakai untuk rapat/advokasi. Struktur: masalah → bukti → opsi → rekomendasi.",
    },
    {
      title: "Peta Analitik & Lampiran Teknis",
      desc: "Visual yang kuat (PNG/SVG) + lampiran metodologi agar bisa dipertanggungjawabkan dan direplikasi.",
    },
    {
      title: "Roadmap Implementasi",
      desc: "Tahapan kerja dengan milestone, aktor, risiko, kebutuhan data, dan strategi koordinasi lintas lembaga.",
    },
    {
      title: "Deck Presentasi & Infografik",
      desc: "Materi komunikasi untuk stakeholder: jelas, pendek, dan mudah dipahami (non-teknis friendly).",
    },
  ];

  const faq = [
    {
      q: "Apakah GPro bisa mengerjakan untuk instansi/komunitas yang belum punya data lengkap?",
      a: "Bisa. Kami mulai dari data publik yang tersedia, lalu menyusun kebutuhan data tambahan secara bertahap agar pekerjaan tetap jalan.",
    },
    {
      q: "Output akhirnya apa saja?",
      a: "Biasanya policy brief/memo, peta analitik, deck presentasi, dan lampiran teknis. Format disesuaikan kebutuhan stakeholder.",
    },
    {
      q: "Apakah bisa dibuat versi ringkas untuk publik & versi teknis untuk internal?",
      a: "Bisa. Kami biasanya siapkan 2 versi: ringkas untuk publik/stakeholder luas, dan teknis untuk tim internal/implementasi.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-zinc-200/70 bg-white/70 backdrop-blur dark:border-zinc-800/70 dark:bg-black/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-zinc-900 dark:bg-zinc-100" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">
                {brand.name} <span className="text-zinc-500 dark:text-zinc-400">— {brand.org}</span>
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{brand.tagline}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:opacity-80" href="#tentang">Tentang</a>
            <a className="hover:opacity-80" href="#fokus">Fokus</a>
            <a className="hover:opacity-80" href="#portofolio">Portofolio</a>
            <a className="hover:opacity-80" href="#cara-kerja">Cara kerja</a>
            <a className="hover:opacity-80" href="#kontak">Kontak</a>
          </nav>

          <a
            href="#kontak"
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-zinc-100 dark:text-black"
          >
            Ajukan kolaborasi
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-14">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <p className="text-xs font-semibold tracking-wide text-zinc-600 dark:text-zinc-400">
            STRATEGI • KEBIJAKAN • DATA • PETA • ROADMAP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
            Riset strategis yang memudahkan keputusan dan mempercepat eksekusi.
          </h1>

          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-300">
            {brand.org} membantu menyusun <span className="font-semibold text-zinc-900 dark:text-zinc-100">policy brief</span>,
            <span className="font-semibold text-zinc-900 dark:text-zinc-100"> peta analitik</span>, dan
            <span className="font-semibold text-zinc-900 dark:text-zinc-100"> roadmap implementasi</span> untuk isu logistik,
            rantai pasok, biaya ekonomi, kemiskinan, dan edukasi—dengan hasil yang bisa langsung dipakai di lapangan.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#portofolio"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90 dark:bg-zinc-100 dark:text-black"
            >
              Lihat portofolio ringkas
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Diskusi kebutuhan Anda
            </a>
          </div>

          {/* Trust / credibility cards */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {credibility.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black"
              >
                <p className="text-sm font-semibold">{c.title}</p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Proof placeholders (optional) */}
          <div className="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-white p-5 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-black dark:text-zinc-300">
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">Tambahkan bukti agar lebih meyakinkan (opsional)</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Link PDF policy brief / riset (Google Drive / GitHub)</li>
              <li>Logo partner/kolaborator (jika ada)</li>
              <li>Angka capaian (mis. jumlah peta, dokumen, wilayah kajian) — isi dengan data asli</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="mx-auto max-w-6xl px-6 pt-14">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold">Tentang GPro</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">
              {brand.name} adalah inisiatif kajian strategis yang berorientasi pada solusi. Kami menulis dan memetakan isu kompleks
              menjadi rekomendasi yang jelas, prioritas yang masuk akal, dan rencana yang bisa dieksekusi.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
                <p className="text-sm font-semibold">Nilai kerja</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                  <li>Berbasis bukti dan asumsi yang transparan</li>
                  <li>Format jelas untuk stakeholder non-teknis</li>
                  <li>Fokus pada implementasi, bukan jargon</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
                <p className="text-sm font-semibold">Untuk siapa</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                  <li>Komunitas/NGO</li>
                  <li>Pemerintah daerah</li>
                  <li>Pelaku usaha & pemangku kepentingan</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick contact box */}
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-sm font-semibold">Kontak cepat</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Pasang link asli agar terlihat profesional dan mudah dihubungi.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={brand.contact.whatsapp}
                className="rounded-xl bg-zinc-900 px-4 py-2 text-center text-sm font-semibold text-white hover:opacity-90 dark:bg-zinc-100 dark:text-black"
              >
                WhatsApp
              </a>
              <a
                href={brand.contact.email}
                className="rounded-xl border border-zinc-300 px-4 py-2 text-center text-sm font-semibold hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Email
              </a>
              <a
                href={brand.contact.instagram}
                className="rounded-xl border border-zinc-300 px-4 py-2 text-center text-sm font-semibold hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Instagram
              </a>
            </div>
            <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
              Tips: email dengan domain sendiri (mis. admin@domain.com) akan meningkatkan kepercayaan.
            </p>
          </div>
        </div>
      </section>

      {/* Fokus */}
      <section id="fokus" className="mx-auto max-w-6xl px-6 pt-14">
        <h2 className="text-xl font-semibold">Fokus kajian</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">
          Area yang paling sering dikerjakan dan menjadi kekuatan utama GPro.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {focusAreas.map((x) => (
            <span
              key={x}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            >
              {x}
            </span>
          ))}
        </div>
      </section>

      {/* Portofolio */}
      <section id="portofolio" className="mx-auto max-w-6xl px-6 pt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Portofolio ringkas</h2>
            <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">
              Contoh tema & keluaran yang sudah pernah dikerjakan GPro. (Bisa kamu tambah link PDF/Drive agar makin meyakinkan.)
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold">{p.title}</p>
                <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                  {p.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.outcome}</p>
              <div className="mt-4">
                <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Keluaran</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                  {p.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: public links area */}
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <p className="font-semibold text-zinc-900 dark:text-zinc-100">Agar lebih dipercaya:</p>
          <p className="mt-1">
            Tambahkan 3–5 link publik (contoh PDF policy brief / peta / dashboard). Kalau kamu kirim linknya nanti, aku bisa pasang tombol “Unduh” di sini.
          </p>
        </div>
      </section>

      {/* Cara kerja */}
      <section id="cara-kerja" className="mx-auto max-w-6xl px-6 pt-14">
        <h2 className="text-xl font-semibold">Cara kerja yang rapi & terukur</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">
          Ini membantu stakeholder percaya karena prosesnya jelas, bukan “asal opini”.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {approach.map((a) => (
            <div key={a.step} className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <p className="text-sm font-semibold">{a.step}</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Output */}
      <section id="output" className="mx-auto max-w-6xl px-6 pt-14">
        <h2 className="text-xl font-semibold">Output yang bisa disiapkan</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {deliverables.map((d) => (
            <div key={d.title} className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black">
              <p className="text-sm font-semibold">{d.title}</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 pt-14">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faq.map((f) => (
            <div key={f.q} className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <p className="text-sm font-semibold">{f.q}</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="kontak" className="mx-auto max-w-6xl px-6 pb-16 pt-14">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-xl font-semibold">Siap kolaborasi</h2>
          <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">
            Kalau kamu ingin kajian/peta/policy brief yang rapi dan bisa dipakai untuk pengambilan keputusan, kita bisa mulai dari diskusi singkat:
            tujuan, konteks, timeline, dan output yang dibutuhkan.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={brand.contact.whatsapp}
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90 dark:bg-zinc-100 dark:text-black"
            >
              Hubungi via WhatsApp
            </a>
            <a
              href={brand.contact.email}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Kirim email
            </a>
            <a
              href={brand.contact.instagram}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Lihat Instagram
            </a>
          </div>

          <p className="mt-7 text-xs text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} {brand.org}. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
