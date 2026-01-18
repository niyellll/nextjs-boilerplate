export default function Home() {
  const aboutPoints = [
    "GPro (Global Pro Eksistensi) adalah pusat kajian strategis yang menulis policy brief, membuat peta analitik, dan menyusun roadmap untuk isu-isu pembangunan.",
    "Fokus kerja GPro: logistik & hub, rantai pasok, biaya ekonomi (kemacetan/polusi), kemiskinan (early-warning), serta pendidikan & literasi.",
    "Keluaran utama: dokumen kebijakan yang mudah dipahami, visual/peta yang kuat, dan rekomendasi yang bisa langsung dieksekusi.",
  ];

  const focus = [
    "Hub logistik & konektivitas regional",
    "Rantai pasok global & peluang Indonesia",
    "Evaluasi PSN & biaya logistik",
    "Bottleneck kawasan industri: macet, polusi, kesehatan",
    "Early-warning kemiskinan untuk perencanaan",
    "Edukasi: kurikulum berbasis PISA & toolkit publik",
  ];

  const works = [
    {
      title: "Kediri sebagai Hub Logistik 2045",
      desc: "Riset dan argumentasi kebijakan tentang Kediri sebagai pusat logistik nasional–global, termasuk visi jangka panjang, strategi, dan roadmap transformasi.",
      tag: "Logistik • 2045",
    },
    {
      title: "Peta Rantai Pasok & Peluang Ekspor–Impor",
      desc: "Pemetaan rantai pasok dan peluang strategis berbasis kategori ekonomi (eksportir komoditas, importir, tourism-dependent) untuk melihat posisi daerah dalam perdagangan global.",
      tag: "Supply Chain • Trade",
    },
    {
      title: "Bandara Dhoho & Integrasi ke Jaringan ASAM",
      desc: "Draft proposal teknis + strategi lobbying agar konektivitas Bandara Dhoho dipercepat, termasuk simulasi dampak ekonomi penumpang & kargo.",
      tag: "Aviation • Logistics",
    },
    {
      title: "Mengapa Biaya Logistik Tidak Turun Meski PSN Dibangun?",
      desc: "Dokumen evaluatif yang membedah penyebab biaya logistik tetap tinggi, dilengkapi kerangka rekomendasi transisi mikro dan perbaikan ekosistem.",
      tag: "PSN • Ekonomi",
    },
    {
      title: "Evaluasi PSN: Kenapa Banyak Proyek Macet?",
      desc: "Analisis penyebab proyek strategis tidak efektif mendorong pertumbuhan pusat–daerah dan strategi perbaikannya (tata kelola, prioritas, desain insentif).",
      tag: "Kebijakan • Tata Kelola",
    },
    {
      title: "Risiko Ekspor Indonesia: UE Deforestasi, Relokasi China, Isu HAM",
      desc: "Kajian risiko sektor ekspor, memo mitigasi, dan strategi transisi hijau dalam konteks IEU CEPA dan perubahan standar global.",
      tag: "Trade Policy • Risiko",
    },
    {
      title: "Bottleneck Sidoarjo: Kesehatan, Kemacetan, dan Zona Industri",
      desc: "Pemetaan zona risiko kesehatan (macet & polusi), strategi bottleneck, serta toolkit edukasi masyarakat untuk respons ISPA & stres akibat kemacetan.",
      tag: "Kota • Kesehatan",
    },
    {
      title: "Flyover Gedangan & Alternatif Berbasis Zona Fungsional",
      desc: "Dokumen evaluasi strategis (skenario flyover vs pendekatan alternatif), plus overlay zona (logistik, angkutan umum, pejalan kaki) untuk rekomendasi yang lebih tepat.",
      tag: "Transport • Zonasi",
    },
    {
      title: "Sabuk Hijau Gedangan–Waru & Klausul RDTR Industri",
      desc: "Usulan sabuk hijau modular 3 tingkat dan lampiran teknis untuk revisi klausul zonasi RDTR agar kawasan industri lebih sehat dan tahan risiko.",
      tag: "Lingkungan • RDTR",
    },
    {
      title: "Early-Warning Poverty Framework",
      desc: "Kerangka peringatan dini kemiskinan dengan pendekatan dual (BPS dan PPP) untuk pengambilan keputusan dalam kebijakan strategis (PSN/RPJMN).",
      tag: "Kemiskinan • Data",
    },
    {
      title: "Transformasi Industri Tekstil Nasional",
      desc: "Policy brief/peta strategi untuk menghadapi tekanan struktural akibat barang murah dan kompetisi regional, dengan opsi kebijakan yang realistis.",
      tag: "Industri • Strategi",
    },
    {
      title: "Kurikulum Berbasis PISA untuk SMK",
      desc: "Pengembangan kurikulum literasi–numerasi–sains terapan berbasis PISA untuk siswa SMK (kelas XI) jurusan teknik/manufaktur.",
      tag: "Pendidikan • Kurikulum",
    },
  ];

  const deliverables = [
    {
      title: "Policy Brief & Memo",
      desc: "Dokumen ringkas, tajam, dan siap dipakai untuk advokasi, rapat, dan diskusi pemangku kepentingan.",
    },
    {
      title: "Peta Analitik & Lampiran Teknis",
      desc: "Peta visual (PNG/SVG) + format siap GIS (mis. GeoJSON) dengan metode yang bisa dijelaskan ulang.",
    },
    {
      title: "Roadmap & Strategi Implementasi",
      desc: "Langkah bertahap: target, aktor, risiko, dan rencana eksekusi—bukan hanya ide.",
    },
    {
      title: "Toolkit Edukasi Publik",
      desc: "Materi 1 halaman/infografik untuk edukasi masyarakat: sederhana, jelas, dan bisa langsung dipakai.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      {/* Top Bar */}
      <header className="sticky top-0 z-20 border-b border-zinc-200/60 bg-white/70 backdrop-blur dark:border-zinc-800/60 dark:bg-black/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-zinc-900 dark:bg-zinc-100" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">GPro</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Global Pro Eksistensi • Pusat Kajian Strategis</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:opacity-80" href="#tentang">Tentang</a>
            <a className="hover:opacity-80" href="#fokus">Fokus</a>
            <a className="hover:opacity-80" href="#karya">Karya</a>
            <a className="hover:opacity-80" href="#output">Output</a>
          </nav>

          <a
            href="#kontak"
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90 dark:bg-zinc-100 dark:text-black"
          >
            Kontak
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
            Website resmi GPro — ringkasan karya dan fokus kajian strategis.
          </h1>
          <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-300">
            GPro mengerjakan riset kebijakan dan produk pengetahuan untuk isu logistik, rantai pasok, biaya ekonomi, kemiskinan, dan pendidikan.
            Targetnya sederhana: rekomendasi yang jelas, bisa dipahami, dan bisa dijalankan.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#karya"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90 dark:bg-zinc-100 dark:text-black"
            >
              Lihat karya utama
            </a>
            <a
              href="#output"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold hover:bg-white dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Lihat output yang tersedia
            </a>
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="tentang" className="mx-auto max-w-6xl px-6 pt-14">
        <h2 className="text-xl font-semibold">Tentang GPro</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {aboutPoints.map((p, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black"
            >
              <p className="text-sm text-zinc-700 dark:text-zinc-200">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fokus */}
      <section id="fokus" className="mx-auto max-w-6xl px-6 pt-14">
        <h2 className="text-xl font-semibold">Fokus kerja</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">
          Area berikut adalah tema yang paling sering muncul di kajian GPro.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {focus.map((x) => (
            <span
              key={x}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            >
              {x}
            </span>
          ))}
        </div>
      </section>

      {/* Karya */}
      <section id="karya" className="mx-auto max-w-6xl px-6 pt-14">
        <h2 className="text-xl font-semibold">Karya & kajian utama</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">
          Berikut ringkasan pekerjaan GPro yang bisa kamu tampilkan sebagai portofolio publik.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {works.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-black"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold">{w.title}</p>
                <span className="shrink-0 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                  {w.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Output */}
      <section id="output" className="mx-auto max-w-6xl px-6 pt-14">
        <h2 className="text-xl font-semibold">Output yang biasanya disiapkan</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">
          Kalau ada permintaan kolaborasi, GPro biasanya menyiapkan format berikut.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {deliverables.map((d) => (
            <div key={d.title} className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <p className="text-sm font-semibold">{d.title}</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="mx-auto max-w-6xl px-6 pb-16 pt-14">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-xl font-semibold">Kontak</h2>
          <p className="mt-2 max-w-3xl text-sm text-zinc-600 dark:text-zinc-300">
            Kamu bisa pakai bagian ini untuk menaruh kontak resmi (WhatsApp/Instagram/Email).
            Kalau kamu tulis kontaknya di chat, aku bisa bantu pasang tombolnya biar bisa diklik.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-black">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">WhatsApp</p>
              <p className="mt-1 text-sm font-semibold">Tambahkan nomor WA</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-black">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Instagram</p>
              <p className="mt-1 text-sm font-semibold">Tambahkan link IG</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-black">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Email</p>
              <p className="mt-1 text-sm font-semibold">Tambahkan email</p>
            </div>
          </div>

          <p className="mt-7 text-xs text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} GPro — Global Pro Eksistensi.
          </p>
        </div>
      </section>
    </div>
  );
}
