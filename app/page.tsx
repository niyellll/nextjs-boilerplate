export default function Home() {
  const highlights = [
    {
      title: "Kajian Hub Logistik Kediri 2045",
      desc: "Riset dan argumentasi kebijakan tentang Kediri sebagai hub logistik nasional–global, termasuk roadmap strategi dan konektivitas rantai pasok jangka panjang.",
    },
    {
      title: "Analisis Geopolitik & Perdagangan",
      desc: "Kajian dampak dinamika global terhadap Indonesia: re-konfigurasi rantai pasok, relokasi manufaktur, dan peluang/risiko kebijakan ekspor–impor.",
    },
    {
      title: "Policy Brief Sektor Strategis",
      desc: "Policy brief transformasi industri (mis. tekstil), penurunan biaya logistik, serta perbaikan tata kelola program strategis.",
    },
    {
      title: "Pemetaan Bottleneck Perkotaan & Industri",
      desc: "Kajian kemacetan, polusi, risiko kesehatan, dan alternatif intervensi berbasis zona fungsional (contoh: Gedangan–Waru) dengan keluaran peta & memo.",
    },
    {
      title: "Early-Warning Poverty Framework",
      desc: "Kerangka peringatan dini kemiskinan dengan pendekatan ganda (BPS & PPP) untuk dukung perencanaan pembangunan.",
    },
    {
      title: "Produk Pengetahuan & Edukasi",
      desc: "Pengembangan kurikulum berbasis PISA untuk SMK, toolkit edukasi masyarakat, serta outline buku reflektif tentang pelayanan & warisan iman.",
    },
  ];

  const focusAreas = [
    "Logistik & konektivitas hub",
    "Rantai pasok & perdagangan global",
    "Kebijakan publik & reform tata kelola",
    "Peta risiko: kemacetan, polusi, kesehatan",
    "Kemiskinan & early-warning planning",
    "Edukasi, kurikulum, dan literasi publik",
  ];

  const outputs = [
    { label: "Policy brief & memo kebijakan", note: "Ringkas, argumentatif, siap dipakai untuk advokasi & diskusi." },
    { label: "Peta & visual analitik", note: "PNG/SVG dan format GIS-ready (mis. GeoJSON) berbasis data publik." },
    { label: "Dashboard / presentasi", note: "Ringkasan temuan untuk pemangku kepentingan (mudah dipahami)." },
    { label: "Riset panjang & roadmap", note: "Dokumen komprehensif untuk visi 2045 dan strategi bertahap." },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-zinc-200/60 bg-white/70 backdrop-blur dark:border-zinc-800/60 dark:bg-black/50">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-zinc-900 dark:bg-zinc-100" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">Global Pro Eksistensi</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Pusat Kajian Strategis & Produk Pengetahuan</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:opacity-80" href="#tentang">Tentang</a>
            <a className="hover:opacity-80" href="#karya">Karya</a>
            <a className="hover:opacity-80" href="#fokus">Fokus</a>
            <a className="hover:opacity-80" href="#kontak">Kontak</a>
          </nav>

          <a
            href="#kontak"
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-zinc-100 dark:text-black"
          >
            Hubungi
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-14">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <p className="text-xs font-semibold tracking-wide text-zinc-600 dark:text-zinc-400">
            STRATEGI • DATA • KEBIJAKAN • DAMPAK
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
            Menghubungkan riset strategis dengan aksi nyata.
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300">
            Global Pro Eksistensi membangun kajian, peta, dan policy brief untuk isu-isu kunci:
            logistik, rantai pasok, biaya ekonomi, kemiskinan, serta edukasi—dengan bahasa yang mudah dipahami dan output yang siap dipakai.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#karya"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90 dark:bg-zinc-100 dark:text-black"
            >
              Lihat ringkasan karya
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Ajukan kolaborasi
            </a>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Keluaran</p>
              <p className="mt-1 text-sm font-semibold">Policy brief, peta, dashboard</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Tema</p>
              <p className="mt-1 text-sm font-semibold">Logistik, supply chain, kemiskinan</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-black">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Gaya kerja</p>
              <p className="mt-1 text-sm font-semibold">Ringkas, tajam, dapat dieksekusi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="mx-auto max-w-5xl px-6 pt-14">
        <h2 className="text-xl font-semibold">Tentang Global Pro Eksistensi</h2>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-300">
          Kami berfokus pada riset strategis dan produk pengetahuan yang membantu pengambilan keputusan.
          Pendekatan kami menggabungkan analisis kebijakan, pemetaan risiko, dan komunikasi publik—agar ide besar menjadi rencana yang bisa dikerjakan.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
            <p className="text-sm font-semibold">Nilai kerja</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
              <li>Berbasis data & sumber publik yang dapat diaudit</li>
              <li>Bahasa sederhana, cocok untuk pemangku kepentingan non-teknis</li>
              <li>Berorientasi solusi: opsi kebijakan + langkah implementasi</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
            <p className="text-sm font-semibold">Format output</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
              <li>Policy brief / memo (1–10 halaman)</li>
              <li>Peta visual + lampiran teknis</li>
              <li>Deck presentasi & dashboard ringkas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Karya */}
      <section id="karya" className="mx-auto max-w-5xl px-6 pt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Ringkasan karya yang pernah dikerjakan</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Berikut highlight dari proyek dan kajian yang pernah Gpro lakukan (bisa kamu ubah/rapikan kapan saja).
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fokus */}
      <section id="fokus" className="mx-auto max-w-5xl px-6 pt-14">
        <h2 className="text-xl font-semibold">Fokus utama</h2>
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

        <h3 className="mt-10 text-lg font-semibold">Keluaran yang bisa kamu tampilkan ke publik</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {outputs.map((o) => (
            <div key={o.label} className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
              <p className="text-sm font-semibold">{o.label}</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{o.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="mx-auto max-w-5xl px-6 pb-16 pt-14">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-xl font-semibold">Kontak & kolaborasi</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
            Mau minta dibuatkan policy brief, peta analitik, roadmap, atau ringkasan kajian? Tinggal taruh kontak kamu di sini.
            (Nanti aku bisa bantu pasang tombol WhatsApp/Email/Instagram kalau kamu sudah punya linknya.)
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90 dark:bg-zinc-100 dark:text-black"
            >
              Tambah tombol WhatsApp (nanti)
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Tambah email bisnis (nanti)
            </a>
          </div>

          <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Global Pro Eksistensi — Pusat Kajian Strategis.
          </p>
        </div>
      </section>
    </div>
  );
}
