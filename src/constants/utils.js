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
    deskripsi: 'Belajar Node MCU, Arduino, dan Flutter',
    status: 'Selesai',
    kategori: 'Teknologi',
    img_dokumentasi: pelantikan,
  },
  {
    id: 102,
    nama: 'Pengelolaan Website',
    deskripsi: 'Meredesain website BEM FMIKOM',
    status: 'Sedang Berlangsung',
    kategori: 'Teknologi',
    img_dokumentasi: pelantikan,
  },
  {
    id: 103,
    nama: 'Expo Teknologi',
    deskripsi: 'Mengadakan expo untuk mengenalkan teknologi',
    status: 'Selesai',
    kategori: 'Teknologi',
    img_dokumentasi: pelantikan,
  },
  {
    id: 201,
    nama: 'Pelantikan',
    deskripsi: 'Melaksanakan pelantikan kepengurusan',
    status: 'Selesai',
    kategori: 'Gubernur dan Wakil',
    img_dokumentasi: pelantikan,
  },
  {
    id: 202,
    nama: 'Rapat Kerja (Raker)',
    deskripsi: 'Menyusun rencana kerja satu periode',
    status: 'Selesai',
    kategori: 'Gubernur dan Wakil',
    img_dokumentasi: pelantikan,
  },
  {
    id: 203,
    nama: 'Rapat Koordinasi',
    deskripsi: 'Rapat BPH & Divisi',
    status: 'Sedang Berlangsung',
    kategori: 'Gubernur dan Wakil',
    img_dokumentasi: pelantikan,
  },
  {
    id: 204,
    nama: 'Diskusi Mengenai BEM',
    deskripsi: 'Diskusi tentang urgensi dan peran BEM',
    status: 'Dalam Perencanaan',
    kategori: 'Gubernur dan Wakil',
    img_dokumentasi: pelantikan,
  },
  {
    id: 205,
    nama: 'Kotak Aspirasi',
    deskripsi: 'Menyediakan kotak untuk menerima aspirasi mahasiswa',
    status: 'Dalam Perencanaan',
    kategori: 'Gubernur dan Wakil',
    img_dokumentasi: pelantikan,
  },
  {
    id: 301,
    nama: 'Masterplan Satu Periode',
    deskripsi: 'Menyusun masterplan untuk satu periode',
    status: 'Selesai',
    kategori: 'Sekretaris',
    img_dokumentasi: pelantikan,
  },
  {
    id: 302,
    nama: 'Pengarsipan Surat & Administrasi',
    deskripsi: 'Membuat sistem pengarsipan kesekretariatan',
    status: 'Sedang Berlangsung',
    kategori: 'Sekretaris',
    img_dokumentasi: pelantikan,
  },
  {
    id: 303,
    nama: 'Sosialisasi SOP',
    deskripsi: 'Memberikan sosialisasi terkait SOP organisasi',
    status: 'Selesai',
    kategori: 'Sekretaris',
    img_dokumentasi: pelantikan,
  },
  {
    id: 401,
    nama: 'Pengelolaan Kas',
    deskripsi: 'Mengelola kas organisasi',
    status: 'Selesai',
    kategori: 'Bendahara',
    img_dokumentasi: pelantikan,
  },
  {
    id: 402,
    nama: 'Arsip Pemasukan & Pengeluaran',
    deskripsi: 'Membuat arsip pemasukan dan pengeluaran',
    status: 'Selesai',
    kategori: 'Bendahara',
    img_dokumentasi: pelantikan,
  },
  {
    id: 501,
    nama: 'Turba dan Halal Bihalal',
    deskripsi: 'Mengadakan acara turba dan halal bihalal',
    status: 'Selesai',
    kategori: 'Departemen Dalam Negeri',
    img_dokumentasi: pelantikan,
  },
  {
    id: 502,
    nama: 'Makrab',
    deskripsi: 'Mengadakan malam keakraban',
    status: 'Selesai',
    kategori: 'Departemen Dalam Negeri',
    img_dokumentasi: pelantikan,
  },
  {
    id: 503,
    nama: 'Siap Skripsi',
    deskripsi: 'Mendukung mahasiswa yang akan mengerjakan skripsi',
    status: 'Selesai',
    kategori: 'Departemen Dalam Negeri',
    img_dokumentasi: pelantikan,
  },
  {
    id: 504,
    nama: 'Event Akbar',
    deskripsi: 'Mengadakan acara besar untuk mahasiswa',
    status: 'Dalam Perencanaan',
    kategori: 'Departemen Dalam Negeri',
    img_dokumentasi: pelantikan,
  },
  {
    id: 601,
    nama: 'Studi Banding',
    deskripsi: 'Melakukan studi banding ke organisasi lain',
    status: 'Selesai',
    kategori: 'Departemen Luar Negeri',
    img_dokumentasi: pelantikan,
  },
  {
    id: 602,
    nama: 'Sosialisasi ke SMK/SMA',
    deskripsi: 'Melakukan sosialisasi ke sekolah-sekolah',
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
