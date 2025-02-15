import bphIcon from './../assets/bph.png';
import internalIcon from './../assets/internal.png';
import externalIcon from './../assets/external.png';
import teknologiIcon from './../assets/teknologi.png';
import ekrafIcon from './../assets/ekraf.png';
import persIcon from './../assets/pers.png';
import pelantikan from './../assets/about-bem.JPG';

const navigasi = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/tentang',
  },
  {
    title: 'Pengurus',
    href: '/pengurus',
  },
  {
    title: 'Event',
    href: '/event',
  },
];

const pengurus = [
  {
    id: 1,
    name: 'BPH',
    icon: bphIcon,
    description:
      'BPH terdiri atas Gubernur BEM, Wakil Gubernur, Sekertaris, dan Bendahara',
  },
  {
    id: 2,
    name: 'Departemen Dalam Negri',
    icon: internalIcon,
    description:
      'Departemen yang mengatur segala urusan di dalam Badan Eksekutif Mahasiswa (BEM) dan seluruh mahasiswa FMIKOM',
  },
  {
    id: 3,
    name: 'Departemen Luar Negri',
    icon: externalIcon,
    description:
      'Departemen yang mengatur segala urusan di luar Badan Eksekutif Mahasiswa (BEM) atau Masyarakat',
  },
  {
    id: 4,
    name: 'Departemen Teknologi',
    icon: teknologiIcon,
    description: 'Departemen yang mengatur dan mengelola di bidang Teknologi',
  },
  {
    id: 5,
    name: 'Departemen Ekonomi Kreatif',
    icon: ekrafIcon,
    description:
      'Departemen yang bertanggung jawab dalam pencarian dana untuk dapat membantu keuangan dalam kinerja BEM FMIKOM',
  },
  {
    id: 6,
    name: 'Departemen Pers',
    icon: persIcon,
    description:
      'Departemen yang mengatur dan mengelola seluruh asset kekayaan digital di FMIKOM',
  },
];

const programKerja = [
  {
    id: 101,
    nama: 'Belajar Bareng BEM FMIKOM',
    deskripsi:
      'Sebuah program pelatihan dan workshop yang bertujuan untuk meningkatkan pemahaman mahasiswa dalam bidang teknologi, khususnya dalam penggunaan NodeMCU, Arduino, dan Flutter. Kegiatan ini memberikan kesempatan bagi mahasiswa untuk mempelajari konsep dasar hingga implementasi dalam proyek berbasis IoT dan pengembangan aplikasi mobile. Selain itu, peserta juga diberikan sesi praktik langsung dengan bimbingan dari mentor yang berpengalaman.',
    status: 'Selesai',
    kategori: 'Teknologi',
    img_dokumentasi:
      'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem/proker-bem/pelatihanBEM.jpg',
  },
  {
    id: 102,
    nama: 'Pengelolaan Website',
    deskripsi:
      'Program ini bertujuan untuk meredesain dan mengelola website BEM FMIKOM agar lebih modern, responsif, dan mudah diakses oleh mahasiswa. Dalam program ini, tim yang bertanggung jawab akan melakukan analisis kebutuhan website, memperbaiki tampilan UI/UX, serta menambahkan fitur-fitur baru agar website dapat menjadi pusat informasi yang lebih interaktif dan informatif bagi mahasiswa FMIKOM.',
    status: 'Sedang Berlangsung',
    kategori: 'Teknologi',
    img_dokumentasi:
      'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem/proker-bem/pengelolaan%20web.png',
  },
  {
    id: 103,
    nama: 'Expo Teknologi',
    deskripsi:
      'Sebuah acara tahunan yang mempertemukan mahasiswa dengan berbagai inovasi dan perkembangan terbaru di dunia teknologi. Dalam Expo Teknologi ini, akan ada demonstrasi perangkat IoT, pemaparan teknologi terbaru, serta showcase proyek-proyek mahasiswa yang berkaitan dengan bidang teknologi. Acara ini bertujuan untuk memberikan wawasan yang lebih luas tentang perkembangan teknologi serta memotivasi mahasiswa untuk terus berinovasi.',
    status: 'Selesai',
    kategori: 'Teknologi',
    img_dokumentasi: pelantikan,
  },
  {
    id: 201,
    nama: 'Pelantikan',
    deskripsi:
      'Acara resmi yang menjadi awal dari masa kepengurusan BEM FMIKOM. Pelantikan ini bertujuan untuk meresmikan kepengurusan baru, memperkenalkan struktur organisasi, serta memberikan pemahaman tentang visi dan misi yang akan dijalankan dalam satu periode kepengurusan. Kegiatan ini juga menjadi momen penting untuk memperkuat komitmen setiap anggota dalam menjalankan tugas dan tanggung jawabnya.',
    status: 'Selesai',
    kategori: 'Gubernur dan Wakil',
    img_dokumentasi: pelantikan,
  },
  {
    id: 202,
    nama: 'Rapat Kerja (Raker)',
    deskripsi:
      'Rapat kerja merupakan agenda penting dalam organisasi yang dilakukan untuk menyusun rencana strategis dan program kerja BEM selama satu periode. Dalam rapat ini, setiap divisi akan memaparkan program-program unggulannya, mendiskusikan target yang ingin dicapai, serta memastikan adanya sinergi antar bidang dalam menjalankan kegiatan BEM.',
    status: 'Selesai',
    kategori: 'Gubernur dan Wakil',
    img_dokumentasi: pelantikan,
  },
  {
    id: 203,
    nama: 'Rapat Koordinasi',
    deskripsi:
      'Sebuah rapat yang dilakukan secara berkala oleh Badan Pengurus Harian (BPH) dan seluruh departemen untuk memastikan program kerja berjalan sesuai dengan rencana. Rapat ini juga digunakan untuk mengevaluasi progres kegiatan, menyelesaikan kendala yang ada, serta mengkoordinasikan strategi kerja yang lebih efektif agar organisasi dapat berjalan dengan lebih baik.',
    status: 'Sedang Berlangsung',
    kategori: 'Gubernur dan Wakil',
    img_dokumentasi:
      'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem/proker-bem/Rakor%20pers%2015%20mei%202024.jpg',
  },
  {
    id: 204,
    nama: 'Diskusi Mengenai BEM',
    deskripsi:
      'Forum diskusi yang bertujuan untuk menganalisis urgensi dan peran BEM dalam dunia kemahasiswaan. Diskusi ini akan membahas bagaimana peran BEM dalam memperjuangkan aspirasi mahasiswa, memperkuat sistem organisasi, serta memberikan dampak positif bagi lingkungan kampus. Melalui diskusi ini, diharapkan muncul gagasan-gagasan baru yang dapat meningkatkan efektivitas peran BEM.',
    status: 'Dalam Perencanaan',
    kategori: 'Gubernur dan Wakil',
    img_dokumentasi: pelantikan,
  },
  {
    id: 205,
    nama: 'Kotak Aspirasi',
    deskripsi:
      'Program ini bertujuan untuk memberikan ruang bagi mahasiswa agar dapat menyampaikan kritik, saran, dan aspirasi terkait berbagai permasalahan yang ada di kampus. Kotak aspirasi ini akan dikelola secara transparan, dan setiap masukan akan ditindaklanjuti dengan diskusi serta koordinasi dengan pihak yang terkait agar solusi yang diberikan dapat tepat sasaran.',
    status: 'Dalam Perencanaan',
    kategori: 'Gubernur dan Wakil',
    img_dokumentasi: pelantikan,
  },
  {
    id: 301,
    nama: 'Masterplan Satu Periode',
    deskripsi:
      'Masterplan ini merupakan dokumen perencanaan jangka panjang yang dibuat oleh sekretaris untuk mengatur dan mengarahkan jalannya organisasi selama satu periode kepengurusan. Masterplan ini mencakup visi, misi, strategi kerja, serta indikator keberhasilan yang harus dicapai oleh setiap divisi dalam organisasi.',
    status: 'Selesai',
    kategori: 'Sekretaris',
    img_dokumentasi: pelantikan,
  },
  {
    id: 302,
    nama: 'Pengarsipan Surat & Administrasi',
    deskripsi:
      'Sebuah sistem yang dirancang untuk mengelola berbagai dokumen administratif organisasi seperti surat masuk, surat keluar, serta dokumen penting lainnya. Dengan adanya sistem pengarsipan yang baik, setiap dokumen dapat diakses dengan mudah dan digunakan sebagai referensi dalam menjalankan program kerja organisasi.',
    status: 'Sedang Berlangsung',
    kategori: 'Sekretaris',
    img_dokumentasi: pelantikan,
  },
  {
    id: 303,
    nama: 'Sosialisasi SOP',
    deskripsi:
      'Program ini bertujuan untuk memberikan pemahaman kepada seluruh anggota BEM mengenai Standar Operasional Prosedur (SOP) organisasi. Sosialisasi ini mencakup aturan kerja, mekanisme pelaporan, serta kode etik yang harus dipatuhi oleh setiap anggota dalam menjalankan tugasnya. Dengan adanya SOP yang jelas, diharapkan organisasi dapat berjalan dengan lebih efektif dan profesional.',
    status: 'Selesai',
    kategori: 'Sekretaris',
    img_dokumentasi: pelantikan,
  },
  {
    id: 401,
    nama: 'Pengelolaan Kas',
    deskripsi:
      'Bendahara bertanggung jawab atas pengelolaan keuangan organisasi, termasuk mencatat setiap pemasukan dan pengeluaran kas. Program ini bertujuan untuk memastikan bahwa anggaran digunakan secara efisien dan sesuai dengan kebutuhan organisasi. Selain itu, laporan keuangan juga akan dibuat secara berkala agar transparansi dalam pengelolaan dana tetap terjaga.',
    status: 'Selesai',
    kategori: 'Bendahara',
    img_dokumentasi: pelantikan,
  },
  {
    id: 402,
    nama: 'Arsip Pemasukan & Pengeluaran',
    deskripsi:
      'Sebuah sistem pencatatan keuangan yang berfungsi untuk mendokumentasikan setiap transaksi keuangan yang dilakukan oleh organisasi. Dengan adanya arsip yang tertata dengan baik, laporan keuangan dapat dibuat dengan lebih akurat dan dapat dipertanggungjawabkan dalam setiap evaluasi organisasi.',
    status: 'Selesai',
    kategori: 'Bendahara',
    img_dokumentasi: pelantikan,
  },
  {
    id: 501,
    nama: 'Turba dan Halal Bihalal',
    deskripsi:
      'Turun ke Bawah (Turba) dan Halal Bihalal adalah program yang bertujuan untuk membangun kedekatan antara pengurus dan anggota BEM, serta mempererat hubungan antar mahasiswa. Kegiatan ini biasanya diisi dengan diskusi ringan, sharing pengalaman, serta momen kebersamaan yang dapat memperkuat solidaritas dalam organisasi.',
    status: 'Selesai',
    kategori: 'Departemen Dalam Negeri',
    img_dokumentasi:
      'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem/proker-bem/halal%20bi%20halal.JPG',
  },
  {
    id: 502,
    nama: 'Makrab',
    deskripsi:
      'Kegiatan yang bertujuan untuk membangun hubungan yang lebih erat antar anggota organisasi melalui berbagai kegiatan seru seperti games, diskusi santai, dan sesi motivasi. Makrab ini menjadi wadah untuk memperkuat rasa kebersamaan agar komunikasi dalam organisasi dapat berjalan dengan lebih baik.',
    status: 'Selesai',
    kategori: 'Departemen Dalam Negeri',
    img_dokumentasi: pelantikan,
  },
  {
    id: 503,
    nama: 'Siap Skripsi',
    deskripsi:
      'Program pendampingan bagi mahasiswa yang sedang mempersiapkan skripsi. Dalam program ini, mahasiswa akan mendapatkan bimbingan dari dosen atau alumni yang telah menyelesaikan skripsi mereka. Selain itu, akan ada sesi sharing pengalaman dan strategi dalam menyelesaikan skripsi dengan efektif.',
    status: 'Selesai',
    kategori: 'Departemen Dalam Negeri',
    img_dokumentasi: pelantikan,
  },
  {
    id: 504,
    nama: 'Event Akbar',
    deskripsi:
      'Kegiatan besar yang melibatkan mahasiswa dalam skala luas dengan tujuan untuk meningkatkan partisipasi dan keterlibatan mahasiswa dalam kegiatan organisasi. Event ini bisa berupa seminar nasional, talkshow inspiratif, atau festival mahasiswa yang menghadirkan narasumber kompeten di bidangnya.',
    status: 'Dalam Perencanaan',
    kategori: 'Departemen Dalam Negeri',
    img_dokumentasi: pelantikan,
  },
  {
    id: 601,
    nama: 'Studi Banding',
    deskripsi:
      'Sebuah program yang dilakukan untuk mempelajari sistem kerja organisasi lain sebagai bahan evaluasi dan peningkatan kualitas organisasi BEM FMIKOM. Studi banding ini juga dapat membuka peluang kerja sama antara organisasi dalam berbagai program atau kegiatan ke depan.',
    status: 'Selesai',
    kategori: 'Departemen Luar Negeri',
    img_dokumentasi: pelantikan,
  },
  {
    id: 602,
    nama: 'Sosialisasi ke SMK/SMA',
    deskripsi:
      'Program ini bertujuan untuk memberikan informasi dan motivasi kepada siswa SMK/SMA tentang dunia perkuliahan, peran organisasi mahasiswa, serta manfaat aktif dalam kegiatan kemahasiswaan. Sosialisasi ini juga dapat menjadi ajang promosi bagi kampus untuk menarik calon mahasiswa baru.',
    status: 'Dalam Perencanaan',
    kategori: 'Departemen Luar Negeri',
    img_dokumentasi: pelantikan,
  },
];

const dataPengurus = [
  {
    id: 101,
    divisi: 'BPH',
    pengurus: [
      {
        nama: 'Rheika Mosa Larasati',
        jabatan: 'Ketua Gubernur BEM FMIKOM',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Rheika%20Mosa%20Larasati.JPG',
      },
      {
        nama: 'Nicky Atikah Zhalifunnas',
        jabatan: 'Wakil Ketua Gubernur BEM FMIKOM',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Nicky%20Atikah%20Zhalifunnas.jpg',
      },
      {
        nama: 'Jihan Galuh Putri',
        jabatan: 'Sekertatis I',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Jihan%20Galuh%20Putri.jpg',
      },
      {
        nama: 'Achmad Muzaqi Jazuli',
        jabatan: 'Sekertaris II',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Achmad%20Muzaqi%20Jazuli.jpg',
      },
      {
        nama: 'Shinta Fajar Cahyani',
        jabatan: 'Bendahara I',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Shinta%20Fajar%20Cahyani.jpg',
      },
      {
        nama: 'Helwa Nuftiana Fadoil Putri',
        jabatan: 'Bendahara II',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Helwa%20Nuftiana%20Fadoil%20Putri.jpg',
      },
    ],
  },
  {
    id: 102,
    divisi: 'Departemen Teknologi',
    pengurus: [
      {
        nama: 'Imam Wahyu Trisujianto',
        jabatan: 'Kadep Teknologi',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Imam%20Wahyu%20Tri%20Sujianto.jpg',
      },
      {
        nama: 'Muhammad Robit Zainul Haq',
        jabatan: 'Anggota Departemen Teknologi',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Muhammad%20Robit%20Zainul.jpg',
      },
      {
        nama: 'Ahmad Faozah',
        jabatan: 'Anggota Divisi Teknologi',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Ahmad%20Faozah.jpg',
      },
      {
        nama: 'Lintang Kesit Haniko',
        jabatan: 'Anggota Divisi Teknologi',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Lintang%20Kesit%20Haniko.jpg',
      },
    ],
  },
  {
    id: 103,
    divisi: 'Departemen Ekraf',
    pengurus: [
      {
        nama: 'Desty Bela Putri Oktaviani',
        jabatan: 'Kadep Ekraf',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Desty%20Bela%20Putri%20Oktaviani.jpg',
      },
      {
        nama: 'Biharus Sidqi',
        jabatan: 'Anggota Departemen Ekraf',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Biharus%20Sidqi.jpg',
      },
      {
        nama: 'Robbi Shurnii Al-Aqiilah',
        jabatan: 'Anggota Departemen Ekraf',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Robbi%20Shurnii%20Al-Aqiilah.jpg',
      },
      {
        nama: 'Dewi Santika',
        jabatan: 'Anggota Departemen Ekraf',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Dewi%20Santika.jpg',
      },
    ],
  },
  {
    id: 104,
    divisi: 'Departemen Pers',
    pengurus: [
      {
        nama: 'Novinda Fitria Ningrum',
        jabatan: 'Ketua Departemen Pers',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Novinda%20Fitria%20Ningrum%20.jpg',
      },
      {
        nama: 'Rafli Khalifah Rahman',
        jabatan: 'Anggota Departemen Pers',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Rafli%20Khalifah%20Rahman.jpg',
      },
      {
        nama: 'Anggita Pratiwi',
        jabatan: 'Anggota Departemen Pers',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Anggita%20Pratiwi%20.jpg',
      },
      {
        nama: 'Ghani Arif Bakalsukses',
        jabatan: ' Anggota Departemen Pers',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//IMG-20241003-WA0017.jpg',
      },
    ],
  },
  {
    id: 105,
    divisi: 'Departemen Dalam Negri',
    pengurus: [
      {
        nama: 'Yossan Adi Santoso',
        jabatan: 'Kadep Dalam Negri',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Yossan%20Adi%20Santoso.jpg',
      },
      {
        nama: 'Ainur Rofikoh',
        jabatan: 'Anggota Dalam Negri',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Ainur%20Rofikoh.jpg',
      },
      {
        nama: 'Ersa Kinanti',
        jabatan: 'Anggota Departemen Dalam Negri',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Ersa%20Kinanti.jpg',
      },
      {
        nama: 'Nurul Qonaah Salsabila',
        jabatan: 'Anggota Departemen Dalam Negri',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Nurul%20Qonaah%20Salsabila.jpg',
      },
      {
        nama: 'Trio Putra Kusuma',
        jabatan: 'Anggota Departemen Dalam Negri',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Trio%20Putra%20Kusuma.jpg',
      },
    ],
  },
  {
    id: 106,
    divisi: 'Departemen Luar Negri',
    pengurus: [
      {
        nama: 'Fandi Apriyanto Dimu',
        jabatan: 'Kadep Luar Negri',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Fandi%20Apriyanto%20Dimu.jpg',
      },
      {
        nama: 'Aldika Gagah Prasetya',
        jabatan: 'Anggota Departemen Luar Negri',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Aldika%20Gagah%20Prasetya.jpg',
      },
      {
        nama: 'Fawaz Ari Najib',
        jabatan: 'Anggota Departemen Luar Negri',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Fawaz%20Ari%20Najib.jpg',
      },
      {
        nama: 'Hasna Kamalia Hakim',
        jabatan: 'Anggota Departemen Luar Negri',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Hasna%20Kamalia%20Hakim.jpg',
      },
      {
        nama: 'Muhammad Arif Rivandi',
        jabatan: 'Anggota Departemen Luar Negri',
        img: 'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem//Muhammad%20Arif%20Rivandi.jpg',
      },
    ],
  },
];
export { navigasi, pengurus, programKerja, dataPengurus };
