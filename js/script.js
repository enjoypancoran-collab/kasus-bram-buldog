// Naskah game "Kasus Bram Buldog".
// Setiap beat: { id, s: pembicara, t: teks, do?: [aksi], cam?: preset kamera }
// id dipakai sebagai nama file suara: assets/audio/voice/<id>.mp3

export const CAST = {
  bram:    { name: 'Bram Buldog',        voice: 'TX3LPaxmHKxFdv7VOQHJ' },
  wendi:   { name: 'Mas Wendi',          voice: 'IKne3meq5aSn9XLyUdCD' },
  hakim:   { name: 'Hakim von Timbangen', voice: 'pqHfZKP75CvOlQylNhV4' },
  panitera:{ name: 'Panitera Tok',       voice: 'N2lVS1w4EtoT3dr4eOWO' },
  rudi:    { name: 'Bang Rudi',          voice: 'nPczCjzI2devNBz1zQrb' },
  maria:   { name: 'Bu Maria',           voice: 'Xb7hH8MSUJpSbSDYk0k2' },
  kevin:   { name: 'Mas Kevin',          voice: 'bIHbv24MWmeRgasZH58o' },
  siti:    { name: 'Mbak Siti',          voice: '9BWtsMINqrJLrRacOk9x' },
  yohana:  { name: 'Kak Yohana',         voice: 'cgSgspJ2msm6clMCkdW9' },
  darto:   { name: 'Pak Darto',          voice: 'onwK4e9ZLuTAKqWW03F9' },
  togar:   { name: 'Bang Togar',         voice: 'cjVigY5qzO86Huf0OWal' },
  ayu:     { name: 'Mbak Ayu',           voice: '21m00Tcm4TlvDq8ikWAM' },
  fajar:   { name: 'Mas Fajar',          voice: 'iP95p4xoKVk53GoZ742B' },
  ratna:   { name: 'Bu Ratna',           voice: 'pFZP5JQG7iQjIQuC4Bku' },
  nanda:   { name: 'Dik Nanda',          voice: 'FGY2WhTYpPnrIDTdsKH5' },
  yosef:   { name: 'Pak Yosef',          voice: 'JBFqnCBsd6RMkjVDRZzb' },
  bayu:    { name: 'Mas Bayu',           voice: 'CwhRBWXzGAHq8TQ4Fs17' },
  lestari: { name: 'Bu Lestari',         voice: 'XB0fDUnXU5powFXDhCwa' },
  tutor:   { name: 'Tutor AI',           voice: 'SAz9YHcvj6GT2YYXdXww' },
};

export const PROLOG = [
  { id: 'p_01', s: 'wendi', t: 'Pak Bram Buldog! Akhirnya datang juga. Saya kira Bapak nyasar ke pet shop sebelah.' },
  { id: 'p_02', s: 'bram',  t: 'Bram Buldog, pengacara. Sekali gigit, tidak lepas. Kasus apa yang perlu saya gigit hari ini?' },
  { id: 'p_03', s: 'wendi', t: 'Sidang kenaikan grading PTP Kemenkeu. Sore ini, pukul empat, di Mahkamah Grading.', do: ['handMap'] },
  { id: 'p_04', s: 'bram',  t: 'Grading dua belas, minta naik. Apa alasan penolakan sebelumnya?' },
  { id: 'p_05', s: 'wendi', t: 'Menurut Biro SDM, risiko pekerjaan kami tidak lebih tinggi dari Pranata Keuangan dan Pranata APBN. Jadi grading kami disamakan. Padahal risiko saya tiap hari besar, Pak: lupa jalan pulang karena lembur.' },
  { id: 'p_06', s: 'bram',  t: 'Dan siapa hakimnya?' },
  { id: 'p_07', s: 'wendi', t: 'Yang Mulia... Hakim von Timbangen.', do: ['thunder'] },
  { id: 'p_08', s: 'bram',  t: 'Hakim yang mimbarnya setinggi tiga lantai itu?' },
  { id: 'p_09', s: 'wendi', t: 'Yang itu. Beliau terkenal membenci dua hal: pamer tanpa beban, dan janji tanpa bukti. Oh, satu lagi: pengacara yang telat.' },
  { id: 'p_10', s: 'bram',  t: 'Maka saya butuh bukti. Di mana saya bisa mendapatkannya?' },
  { id: 'p_11', s: 'wendi', t: 'Di Menara Pembelajaran, tujuh lantai. Di setiap lantai ada rekan PTP yang siap memberi bukti. Tapi tas Bapak hanya muat tujuh berkas. Satu berkas per lantai.' },
  { id: 'p_12', s: 'bram',  t: 'Tujuh gigitan. Cukup.', do: ['liftBag'] },
  { id: 'p_13', s: 'wendi', t: 'Pilih baik-baik, Pak. Masa depan grading kami ada di dalam tas itu. Masa depan cicilan kami juga, Pak.' },
  { id: 'p_14', s: 'bram',  t: 'Dan Anda semua yang akan membantu saya memilih.', cam: 'bramCloseFront' },
  { id: 'p_15', s: 'bram',  t: 'Tujuh lantai, tujuh bukti, satu sidang. Ayo kita mulai.' },
];

export const ROUND2_FAIL = [
  { id: 'r2f_01', s: 'wendi', t: 'Pak Bram! Mahkamah membuka sidang banding satu jam lagi! Saya lari dari parkiran, jadi jangan sia-siakan betis saya, Pak.' },
  { id: 'r2f_02', s: 'bram',  t: 'Tas kosong lagi. Tujuh gigitan lagi. Kali ini kita gigit lebih cermat.' },
];
export const ROUND2_WIN = [
  { id: 'r2w_01', s: 'wendi', t: 'Pak Bram! Pihak Biro SDM mengajukan banding! Putusan kita harus dipertahankan!' },
  { id: 'r2w_02', s: 'bram',  t: 'Menang sekali itu keberuntungan. Menang dua kali itu bukti. Ayo.' },
];

// Kalimat Bram saat berkas masuk tas (diacak)
export const BITE = [
  { id: 'bite_1', s: 'bram', t: 'Sekali gigit, tidak lepas!' },
  { id: 'bite_2', s: 'bram', t: 'Masuk tas. Lantai berikutnya!' },
  { id: 'bite_3', s: 'bram', t: 'Berkas yang bagus. Terima kasih, rekan!' },
];

export const FLOORS = [
  {
    n: 1, set: 'lobby', title: 'Lantai 1 — Lobi dan Galeri Piala', karyaBy: 'rudi', arsitekBy: 'maria',
    beats: [
      { id: 'f1_01', s: 'bram',  t: 'Lantai satu. Siapa yang punya bukti untuk saya?' },
      { id: 'f1_02', s: 'rudi',  t: 'Saya, Pak! Selamat datang di Galeri Piala PTP!', do: ['holoK'] },
      { id: 'f1_03', s: 'rudi',  t: 'Puluhan piala dalam beberapa tahun! Juara inovasi pembelajaran, juara e-learning, juara video! Bawa ini saja, Pak. Hakim mana yang tidak silau?' },
      { id: 'f1_04', s: 'maria', t: 'Silau itu masalahnya, Bang. Pak Bram, bukti saya tidak berkilau, tapi berat.', do: ['hideHoloK'] },
      { id: 'f1_05', s: 'maria', t: 'Sebuah unit minta dibuatkan pelatihan karena pegawainya sering salah input. Kami tidak langsung membuat pelatihan. Kami analisis dulu masalah kinerjanya.', do: ['holoA'] },
      { id: 'f1_06', s: 'maria', t: 'Ternyata akar masalahnya di prosedur yang membingungkan, bukan di pengetahuan pegawai. Rekomendasi kami: perbaiki SOP dan buat panduan kerja satu halaman. Pelatihannya tidak perlu.', do: ['holoA2'] },
      { id: 'f1_07', s: 'rudi',  t: 'Lho, kok malah menolak bikin pelatihan? Itu kan pekerjaan kita!' },
      { id: 'f1_08', s: 'maria', t: 'Pekerjaan kita memastikan pegawai bisa bekerja, Bang. Kadang jawabannya bukan pelatihan. Dan kalau rekomendasi itu salah, kinerja unit itu taruhannya.' },
      { id: 'f1_09', s: 'bram',  t: 'Kilau... atau beban.', do: ['weigh'] },
    ],
    karya:   { title: 'Galeri Piala PTP', text: 'Puluhan piala lomba inovasi pembelajaran dalam beberapa tahun terakhir.',
               court: { id: 'c1k', t: 'Yang Mulia, PTP memenangkan puluhan lomba inovasi pembelajaran!' } },
    arsitek: { title: 'Rekomendasi: Bukan Pelatihan', text: 'PTP menganalisis masalah kinerja unit dan memutuskan solusinya bukan pelatihan.',
               court: { id: 'c1a', t: 'Yang Mulia, PTP dipercaya memutuskan apakah masalah kinerja butuh pelatihan atau tidak, dan menanggung akibatnya!' } },
  },
  {
    n: 2, set: 'studio', title: 'Lantai 2 — Studio Produksi', karyaBy: 'kevin', arsitekBy: 'siti',
    beats: [
      { id: 'f2_01', s: 'kevin', t: 'Pak Bram! Pas banget. Duduk, duduk. Action!', do: ['holoK'] },
      { id: 'f2_02', s: 'kevin', t: 'Video pembelajaran sinematik dibuat dengan AI. Tiga hari produksi, kualitas bioskop. Ditonton ribuan pegawai!' },
      { id: 'f2_03', s: 'bram',  t: 'Saya... tersentuh.' },
      { id: 'f2_04', s: 'siti',  t: 'Bagus sekali, Kevin. Tapi siapa yang memutuskan video itu perlu dibuat?', do: ['hideHoloK'] },
      { id: 'f2_05', s: 'kevin', t: 'Ya... unitnya yang minta.' },
      { id: 'f2_06', s: 'siti',  t: 'Itu bedanya, Pak Bram. Ini Peta Kebutuhan Belajar Kemenkeu. Kami memetakan kesenjangan kompetensi di semua unit, lalu menentukan program mana yang dibuat, digabung, atau dihentikan.', do: ['holoA'] },
      { id: 'f2_07', s: 'siti',  t: 'Titik merah ini kesenjangan yang belum tersentuh pelatihan apa pun. Yang abu-abu ini program lama yang kami usulkan berhenti.', do: ['holoA2'] },
      { id: 'f2_08', s: 'kevin', t: 'Dihentikan? Berani juga.' },
      { id: 'f2_09', s: 'siti',  t: 'Kalau peta ini keliru, anggaran pelatihan seluruh Kemenkeu salah sasaran. Itu taruhannya.' },
      { id: 'f2_10', s: 'bram',  t: 'Bioskop... atau peta.', do: ['weigh'] },
    ],
    karya:   { title: 'Trailer Cinematic AI', text: 'Video pembelajaran kualitas bioskop yang dibuat dengan AI dan ditonton ribuan pegawai.',
               court: { id: 'c2k', t: 'Yang Mulia, PTP membuat video pembelajaran sinematik dengan AI!' } },
    arsitek: { title: 'Peta Kebutuhan Belajar Kemenkeu', text: 'PTP memetakan kesenjangan kompetensi lintas unit dan menentukan program mana yang dibuat atau dihentikan.',
               court: { id: 'c2a', t: 'Yang Mulia, PTP menentukan arah program pelatihan seluruh Kemenkeu berdasarkan peta kebutuhan!' } },
  },
  {
    n: 3, set: 'immersive', title: 'Lantai 3 — Ruang Imersif 360', karyaBy: 'yohana', arsitekBy: 'darto',
    beats: [
      { id: 'f3_01', s: 'yohana', t: 'Pak Bram, jangan panik! Ini simulasi 360 kami. Pegawai baru bisa belajar memeriksa dokumen di kantor pelayanan virtual tanpa harus datang ke kantornya.', do: ['holoK'] },
      { id: 'f3_02', s: 'bram',   t: 'Luar biasa. Saya hampir minta tanda terima.' },
      { id: 'f3_03', s: 'darto',  t: 'Mbak Yohana ini jago membuat ruangan, Pak. Saya jagonya membuat jalan.' },
      { id: 'f3_04', s: 'darto',  t: 'Ini Jalur Belajar Terpadu untuk jabatan pengelola anggaran. Dari hari pertama sampai jadi ahli: pelatihan dasar, tugas nyata dengan mentor, komunitas praktik, pelatihan lanjutan, lalu dinilai langsung di tempat kerja.', do: ['hideHoloK', 'holoA'] },
      { id: 'f3_05', s: 'darto',  t: 'Simulasi 360-nya Mbak Yohana ada di sini, di langkah kedua. Tapi yang menentukan urutannya, kapan dipakai, dan untuk siapa, ya jalur ini.', do: ['holoA2'] },
      { id: 'f3_06', s: 'yohana', t: 'Lho, Pak Darto pakai karya saya di jalurnya?' },
      { id: 'f3_07', s: 'darto',  t: 'Justru itu gunanya jalan, Nduk. Menyambungkan gedung-gedung yang bagus.' },
      { id: 'f3_08', s: 'bram',   t: 'Ruangan... atau jalan.', do: ['weigh'] },
    ],
    karya:   { title: 'Simulasi Kantor 360', text: 'Pelatihan imersif kamera 360 untuk pegawai baru di kantor pelayanan virtual.',
               court: { id: 'c3k', t: 'Yang Mulia, PTP membangun pelatihan imersif berbasis kamera 360!' } },
    arsitek: { title: 'Jalur Belajar Terpadu', text: 'PTP merancang perjalanan belajar satu jabatan dari pegawai baru sampai ahli, menyambungkan pelatihan dengan tugas nyata.',
               court: { id: 'c3a', t: 'Yang Mulia, PTP merancang jalur belajar yang menyambungkan pelatihan dengan pekerjaan nyata!' } },
  },
  {
    n: 4, set: 'data', title: 'Lantai 4 — Ruang Data', karyaBy: 'togar', arsitekBy: 'ayu',
    beats: [
      { id: 'f4_01', s: 'togar', t: 'Horas, Pak Bram! Lihat papan skor ini! E-learning bergamifikasi! Poin, lencana, peringkat! Pegawai rebutan nomor satu sampai lupa makan siang!', do: ['holoK'] },
      { id: 'f4_02', s: 'bram',  t: 'Saya dapat lencana!' },
      { id: 'f4_03', s: 'togar', t: 'Itu lencana Tamu Teladan, Pak. Edisi khusus.' },
      { id: 'f4_04', s: 'ayu',   t: 'Papan skornya bagus. Tapi datanya hilang setiap kali kursus selesai.' },
      { id: 'f4_05', s: 'togar', t: 'Hilang ke mana?' },
      { id: 'f4_06', s: 'ayu',   t: 'Ke mana-mana. Itu masalahnya. Pak Bram, ini Arsitektur Data Belajar. Data LMS, sistem manajemen pengetahuan, dan data kepegawaian kami sambungkan dengan aturan akses yang ketat.', do: ['hideHoloK', 'holoA'] },
      { id: 'f4_07', s: 'ayu',   t: 'Hasilnya, setiap pegawai punya rapor belajar seumur karier: apa yang sudah dipelajari, apa yang dibagikan, dan apakah kerjanya berubah. Pimpinan bisa memutuskan pengembangan pegawai berdasarkan data ini.', do: ['holoA2'] },
      { id: 'f4_08', s: 'togar', t: 'Berarti skor di papan saya ikut tercatat?' },
      { id: 'f4_09', s: 'ayu',   t: 'Kalau disambungkan dengan benar, ya. Kalau salah rancang, data ribuan pegawai berantakan, atau bocor.' },
      { id: 'f4_10', s: 'bram',  t: 'Lencana... atau rapor.', do: ['weigh'] },
    ],
    karya:   { title: 'Papan Skor Gamifikasi', text: 'E-learning bergamifikasi dengan poin, lencana, dan peringkat yang membuat pegawai berlomba belajar.',
               court: { id: 'c4k', t: 'Yang Mulia, PTP membuat e-learning bergamifikasi yang membuat pegawai berlomba belajar!' } },
    arsitek: { title: 'Rapor Belajar Seumur Karier', text: 'PTP merancang sambungan data LMS, manajemen pengetahuan, dan kepegawaian menjadi satu jejak belajar tiap pegawai.',
               court: { id: 'c4a', t: 'Yang Mulia, PTP merancang arsitektur data belajar yang dipakai pimpinan untuk memutuskan pengembangan pegawai!' } },
  },
  {
    n: 5, set: 'ailab', title: 'Lantai 5 — Lab AI', karyaBy: 'fajar', arsitekBy: 'ratna',
    beats: [
      { id: 'f5_01', s: 'fajar', t: 'Pak Bram, tanyakan apa saja ke tutor AI kami!', do: ['holoK'] },
      { id: 'f5_02', s: 'bram',  t: 'Ehm... apa beda belanja barang dan belanja modal?' },
      { id: 'f5_03', s: 'tutor', t: 'Pertanyaan bagus! Belanja barang untuk kebutuhan operasional yang habis pakai, sedangkan belanja modal untuk aset yang manfaatnya lebih dari satu tahun.' },
      { id: 'f5_04', s: 'fajar', t: 'Pelatihan berbasis generative AI! Setiap peserta punya tutor pribadi dua puluh empat jam. Ratusan peserta sekaligus!' },
      { id: 'f5_05', s: 'bram',  t: 'Seperti punya asisten pribadi.' },
      { id: 'f5_06', s: 'tutor', t: 'Dan tahukah Anda? Pagu anggaran boleh dilampaui asal niatnya baik!', do: ['glitch'] },
      { id: 'f5_07', s: 'fajar', t: 'Eh, eh! Itu halusinasi! Halusinasi!' },
      { id: 'f5_08', s: 'ratna', t: 'Makanya, Nak Fajar. Tutormu hebat, Ibu juga pakai. Tapi ini Pedoman Tata Kelola AI Pembelajaran. Berlaku untuk semua unit.', do: ['hideHoloK', 'holoA'] },
      { id: 'f5_09', s: 'ratna', t: 'Sumber jawaban AI harus terkurasi. Data pegawai tidak boleh bocor. Ada pemeriksaan kesalahan sebelum dipakai di kelas. Dan jelas siapa yang bertanggung jawab kalau AI keliru.', do: ['holoA2'] },
      { id: 'f5_10', s: 'fajar', t: 'Siapa, Bu?' },
      { id: 'f5_11', s: 'ratna', t: 'Kita. Kalau aturan ini lemah, satu chatbot yang keliru bisa mengajari ribuan pegawai hal yang salah.' },
      { id: 'f5_12', s: 'bram',  t: 'Tutor pintar... atau pagar pengaman.', do: ['weigh'] },
    ],
    karya:   { title: 'Tutor AI 24 Jam', text: 'Pelatihan berbasis generative AI dengan tutor pribadi untuk ratusan peserta sekaligus.',
               court: { id: 'c5k', t: 'Yang Mulia, PTP menghadirkan tutor AI pribadi untuk ratusan peserta!' } },
    arsitek: { title: 'Pedoman Tata Kelola AI Pembelajaran', text: 'PTP menyusun aturan penggunaan AI dalam pembelajaran yang berlaku untuk semua unit.',
               court: { id: 'c5a', t: 'Yang Mulia, PTP menyusun dan bertanggung jawab atas tata kelola AI pembelajaran di semua unit!' } },
  },
  {
    n: 6, set: 'warehouse', title: 'Lantai 6 — Gudang Modul dan Ruang Evaluasi', karyaBy: 'nanda', arsitekBy: 'yosef',
    beats: [
      { id: 'f6_01', s: 'nanda', t: 'Awas, Pak! Maaf, maaf! Ini modul cetak tahun-tahun lalu. Semua sedang kami ubah jadi e-learning!', do: ['holoK'] },
      { id: 'f6_02', s: 'nanda', t: 'Ratusan modul sudah jadi digital, Pak! Bisa diakses dari HP, ada video pendek, ada kuisnya! Pegawai di daerah terpencil pun bisa belajar.' },
      { id: 'f6_03', s: 'bram',  t: 'Ratusan? Sendirian?' },
      { id: 'f6_04', s: 'nanda', t: 'Bareng tim, Pak. Tapi lemburnya sendiri-sendiri.' },
      { id: 'f6_05', s: 'yosef', t: 'Kerja keras yang luar biasa, Nanda. Boleh saya tunjukkan sesuatu ke Pak Bram?', do: ['hideHoloK'] },
      { id: 'f6_06', s: 'yosef', t: 'Ini evaluasi dampak. Kami tidak berhenti di nilai ujian atau kepuasan peserta. Kami ukur apakah cara kerja pegawai berubah setelah pelatihan, dan apakah kinerja unitnya membaik.', do: ['holoA'] },
      { id: 'f6_07', s: 'yosef', t: 'Yang ini naik. Yang ini datar. Pelatihannya ramai peminat, nilainya bagus, tapi tidak mengubah apa-apa di kantor. Rekomendasi kami: hentikan dan rancang ulang.', do: ['holoA2'] },
      { id: 'f6_08', s: 'nanda', t: 'Jangan-jangan modul saya ada yang datar juga, Pak?' },
      { id: 'f6_09', s: 'yosef', t: 'Itulah yang harus kita tahu, Nak. Kalau evaluasi ini keliru, pelatihan yang baik dihentikan dan yang sia-sia terus dibiayai.' },
      { id: 'f6_10', s: 'bram',  t: 'Ratusan modul... atau satu grafik.', do: ['weigh'] },
    ],
    karya:   { title: 'Ratusan Modul Jadi Digital', text: 'Konversi besar-besaran modul cetak menjadi e-learning yang bisa diakses dari mana saja.',
               court: { id: 'c6k', t: 'Yang Mulia, PTP mengubah ratusan modul cetak menjadi e-learning!' } },
    arsitek: { title: 'Laporan Dampak ke Kinerja', text: 'PTP mengukur perubahan kerja dan kinerja unit setelah pelatihan, lalu merekomendasikan program mana yang dihentikan.',
               court: { id: 'c6a', t: 'Yang Mulia, PTP mengukur dampak pelatihan pada kinerja dan berani merekomendasikan penghentian program!' } },
  },
  {
    n: 7, set: 'rooftop', title: 'Lantai 7 — Perpustakaan Atap', karyaBy: 'bayu', arsitekBy: 'lestari',
    beats: [
      { id: 'f7_01', s: 'bayu',    t: 'Pak Bram, lantai terakhir nih. Santai dulu. Coba ini.', do: ['vrOn'] },
      { id: 'f7_02', s: 'bram',    t: 'Saya... saya jadi kotak-kotak!', do: ['holoK'] },
      { id: 'f7_03', s: 'bayu',    t: 'Game edukasi, Pak. Peserta belajar aturan anggaran sambil bertualang. Yang menyelesaikan kursusnya jauh lebih banyak daripada e-learning biasa.' },
      { id: 'f7_04', s: 'lestari', t: 'Mas Bayu, game-mu bagus. Tapi coba Pak Bram buka di LMS unit sebelah.' },
      { id: 'f7_05', s: 'bayu',    t: 'Nggak jalan, Bu.', do: ['hideHoloK', 'vrOff'] },
      { id: 'f7_06', s: 'lestari', t: 'Persis. Pak Bram, ini Standar Desain Pembelajaran Kemenkeu. Setiap e-learning dari unit mana pun harus punya tujuan belajar yang jelas, bisa diakses semua pegawai termasuk penyandang disabilitas, berjalan di semua LMS, dan lolos reviu mutu.', do: ['holoA'] },
      { id: 'f7_07', s: 'lestari', t: 'PTP yang menyusun standarnya, dan PTP yang mereviu. Kalau standar ini longgar, ribuan konten di Kemenkeu berjalan sendiri-sendiri dan tidak bisa dipakai bersama.', do: ['holoA2'] },
      { id: 'f7_08', s: 'bayu',    t: 'Berarti game saya harus ikut standar Ibu?' },
      { id: 'f7_09', s: 'lestari', t: 'Justru standar ini yang membuat game-mu bisa dimainkan di seluruh Kemenkeu, Nak.' },
      { id: 'f7_10', s: 'bram',    t: 'Lima belas menit lagi. Gigitan terakhir. Game... atau standar.', do: ['weigh'] },
    ],
    karya:   { title: 'Game Edukasi Petualangan', text: 'Game edukasi yang membuat peserta belajar aturan anggaran sambil bermain, dengan tingkat penyelesaian tinggi.',
               court: { id: 'c7k', t: 'Yang Mulia, PTP membuat game edukasi yang membuat pegawai betah belajar!' } },
    arsitek: { title: 'Standar Desain Pembelajaran Kemenkeu', text: 'PTP menyusun dan mereviu standar mutu yang wajib dipenuhi e-learning dari semua unit.',
               court: { id: 'c7a', t: 'Yang Mulia, PTP menyusun standar mutu pembelajaran yang wajib diikuti semua unit!' } },
  },
];

export const TO_COURT = [
  { id: 'tc_01', s: 'bram', t: 'Bram Buldog... kuasa hukum PTP... hadir, Yang Mulia.' },
];

export const COURT_OPEN = [
  { id: 'co_01', s: 'panitera', t: 'Sidang permohonan kenaikan grading Jabatan Fungsional Pengembang Teknologi Pembelajaran Kementerian Keuangan... dibuka!', do: ['gavel'] },
  { id: 'co_02', s: 'hakim', t: 'Kuasa hukum PTP. Pengadilan ini telah menerima pertimbangan bahwa risiko pekerjaan PTP setara dengan Pranata Keuangan dan Pranata APBN. Karena itu grading PTP ditetapkan dua belas.' },
  { id: 'co_03', s: 'hakim', t: 'Apa yang Saudara bawa untuk mengubah timbangan ini?', do: ['hakimLean'] },
  { id: 'co_04', s: 'bram',  t: 'Tujuh berkas, Yang Mulia. Tujuh gigitan.', do: ['liftBag'] },
];

export const REACT = {
  karya: [
    { id: 'rk_1', s: 'hakim', t: 'Hm. Indah sekali.' },
    { id: 'rk_2', s: 'hakim', t: 'Mengesankan. Saya sudah melihat banyak yang seperti ini.' },
    { id: 'rk_3', s: 'hakim', t: 'Bagus. Lanjutkan.' },
  ],
  arsitek: [
    { id: 'ra_1', s: 'hakim', t: 'Hm. Itu berat.' },
    { id: 'ra_2', s: 'hakim', t: 'Dan siapa yang menanggung bila keputusan itu keliru? Kalian? Menarik.' },
    { id: 'ra_3', s: 'hakim', t: 'Catat itu, Panitera.' },
  ],
};

export const SPOKES = [
  { id: 'sp_01', s: 'hakim', t: 'Sebelum pengadilan memutus, Juru Bicara PTP dipersilakan menyampaikan pembelaan penutup.' },
  { id: 'sp_02', s: 'hakim', t: 'Pengadilan mencatat pembelaan Saudara.' },
];

export const DELIB = [
  { id: 'dl_01', s: 'hakim', t: 'Pengadilan... telah menimbang.', do: ['rise'] },
];

export const VERDICTS = {
  A: {
    label: 'DITOLAK — Level Produksi',
    beats: [
      { id: 'vA_01', s: 'hakim', t: 'Karya PTP sangat mengesankan. Tapi dampak pekerjaan PTP baru mencakup level produksi pelatihan saja. Risikonya tidak besar. Masih banyak jabatan fungsional lain yang risikonya lebih besar dari PTP, tapi grading-nya sama dengan PTP.' },
      { id: 'vA_02', s: 'hakim', t: 'Pengadilan ini tidak menaikkan grading karena karya yang indah. Pengadilan menaikkan grading karena beban yang dipikul. Tunjukkan keputusan apa yang PTP pegang, dan apa akibatnya bila keputusan itu keliru.' },
      { id: 'vA_03', s: 'hakim', t: 'Permohonan... ditolak!', do: ['gavel', 'sad'] },
      { id: 'vA_04', s: 'bram',  t: 'Kita membawa terlalu banyak kilau, dan terlalu sedikit beban.' },
    ],
    hint: 'Hakim butuh bukti beban: keputusan tingkat sistem yang dipegang PTP.',
  },
  B: {
    label: 'DITUNDA',
    beats: [
      { id: 'vB_01', s: 'hakim', t: 'Berkas Saudara mulai menunjukkan arah yang benar. Ada keputusan yang dipegang PTP, dan ada karya yang membuktikan kemampuannya.' },
      { id: 'vB_02', s: 'hakim', t: 'Tapi bebannya belum cukup terlihat. Bukti bahwa PTP memegang keputusan tingkat sistem masih kalah banyak dibanding pameran karya.' },
      { id: 'vB_03', s: 'hakim', t: 'Sidang... ditunda! Lengkapi berkas, ajukan kembali.', do: ['gavel'] },
      { id: 'vB_04', s: 'wendi', t: 'Ditunda? Bukan ditolak? Berarti masih ada harapan, kayak gebetan yang bilang, nanti dulu, ya.' },
      { id: 'vB_05', s: 'bram',  t: 'Sedikit lagi. Kita hanya perlu menggigit lebih dalam.' },
    ],
    hint: 'Arahnya benar, tapi bukti keputusan tingkat sistem masih kurang banyak.',
  },
  C: {
    label: 'DIKABULKAN — Kenaikan Grading',
    beats: [
      { id: 'vC_01', s: 'hakim', t: 'Berkas ini menunjukkan PTP memegang keputusan tingkat sistem. Bila keputusan itu keliru, seluruh Kemenkeu ikut menanggung. Itulah risiko.' },
      { id: 'vC_02', s: 'hakim', t: 'Dan karya-karya nyata PTP membuktikan bahwa keputusan itu bukan sekadar rencana. PTP mampu mewujudkannya.' },
      { id: 'vC_03', s: 'hakim', t: 'Permohonan kenaikan grading PTP... dikabulkan!', do: ['gavel', 'celebrate'] },
      { id: 'vC_04', s: 'hakim', t: 'Adapun untuk menyamai Widyaiswara, itu perjalanan yang lebih panjang. Widyaiswara memikul beban itu selama puluhan tahun. PTP baru lahir tahun dua ribu sembilan belas. Teruslah memikul, dan kembalilah dengan bukti.', do: ['calm'] },
      { id: 'vC_05', s: 'bram',  t: 'Sekali gigit... tidak lepas!', do: ['liftBag'] },
    ],
    hint: '',
  },
  D: {
    label: 'DITOLAK — Arsitek di Atas Kertas',
    beats: [
      { id: 'vD_01', s: 'hakim', t: 'Berkas Saudara penuh rancangan besar: peta, jalur, tata kelola, standar. Tapi hampir semuanya masih berupa konsep dan rencana.', do: ['blueprint'] },
      { id: 'vD_02', s: 'hakim', t: 'Pengadilan ini tidak menaikkan grading berdasarkan janji. Arsitek dinilai dari bangunan yang benar-benar berdiri, dan saya tidak melihat satu pun hasil nyata yang membuktikan PTP mampu mewujudkan rancangan ini.' },
      { id: 'vD_03', s: 'hakim', t: 'Lagi pula, kalau semua ini pekerjaan PTP... siapa yang selama ini membuat media pembelajarannya?' },
      { id: 'vD_04', s: 'hakim', t: 'Permohonan... ditolak!', do: ['gavel', 'sad'] },
      { id: 'vD_05', s: 'wendi', t: 'Tapi... bukankah ini yang selama ini diminta dari kami?' },
      { id: 'vD_06', s: 'bram',  t: 'Rupanya hakim juga ingin melihat bangunannya berdiri, bukan cuma gambarnya.' },
    ],
    hint: 'Bukti keputusan saja tidak cukup; hakim juga butuh karya nyata yang membuktikan PTP mampu mewujudkannya.',
  },
};

export function verdictFor(arsitekCount) {
  if (arsitekCount <= 2) return 'A';
  if (arsitekCount === 3) return 'B';
  if (arsitekCount <= 5) return 'C';
  return 'D';
}

// Semua baris yang perlu disuarakan
export function allLines() {
  const out = [];
  const push = (arr) => arr.forEach(b => out.push(b));
  push(PROLOG); push(ROUND2_FAIL); push(ROUND2_WIN); push(BITE);
  FLOORS.forEach(f => { push(f.beats); out.push({ ...f.karya.court, s: 'bram' }); out.push({ ...f.arsitek.court, s: 'bram' }); });
  push(TO_COURT); push(COURT_OPEN); push(REACT.karya); push(REACT.arsitek); push(SPOKES); push(DELIB);
  Object.values(VERDICTS).forEach(v => push(v.beats));
  return out;
}
