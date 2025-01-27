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
    title: 'Departement',
    href: '/departement',
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

export { navigasi, pengurus, programKerja };
