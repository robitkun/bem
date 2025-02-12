import bphIcon from './../assets/bph.png';
import internalIcon from './../assets/internal.png';
import externalIcon from './../assets/external.png';
import teknologiIcon from './../assets/teknologi.png';
import ekrafIcon from './../assets/ekraf.png';
import persIcon from './../assets/pers.png';
import pelantikan from './../assets/about-bem.JPG';

import mosa from '../assets/bph/Rheika Mosa Larasati.JPG';
import nicky from '../assets/bph/Nicky Atikah Zhalifunnas.jpg';
import jihan from '../assets/bph/Jihan Galuh Putri.jpg';
import jeki from '../assets/bph/Achmad Muzaqi Jazuli.jpg';
import shinta from '../assets/bph/Helwa Nuftiana Fadoil Putri.jpg';
import helwa from '../assets/bph/Helwa Nuftiana Fadoil Putri.jpg';

import imam from '../assets/tekno/Imam Wahyu Tri Sujianto.jpg';
import robit from '../assets/tekno/Muhammad Robit Zainul.jpg';
import ozah from '../assets/tekno/Ahmad Faozah.jpg';
import lintang from '../assets/tekno/Lintang Kesit Haniko.jpg';

import fandi from '../assets/luarnegri/Fandi Apriyanto Dimu.jpg';
import aldika from '../assets/luarnegri/Aldika Gagah Prasetya.jpg';
import fawaz from '../assets/luarnegri/Fawaz Ari Najib.jpg';
import hasna from '../assets/luarnegri/Hasna Kamalia Hakim.jpg';
import arif from '../assets/luarnegri/Muhammad Arif Rivandi.jpg';

import bela from '../assets/ekraf/Desty Bela Putri Oktaviani.jpg';
import sidqi from '../assets/ekraf/Biharus Sidqi.jpg';
import robi from '../assets/ekraf/Robbi Shurnii Al-Aqiilah.jpg';
import dewi from '../assets/ekraf/Dewi Santika.jpg';

import yosan from '../assets/dalamnegri/Yossan Adi Santoso.jpg';
import ersa from '../assets/dalamnegri/Ersa Kinanti.jpg';
import nurul from '../assets/dalamnegri/Nurul Qonaah Salsabila.jpg';
import putgay from '../assets/dalamnegri/Trio Putra Kusuma.jpg';
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
        img: mosa,
      },
      {
        nama: 'Nicky Atikah Zhalifunnas',
        jabatan: 'Wakil Ketua Gubernur BEM FMIKOM',
        img: nicky,
      },
      {
        nama: 'Jihan Galuh Putri',
        jabatan: 'Sekertatis I',
        img: jihan,
      },
      {
        nama: 'Achmad Muzaqi Jazuli',
        jabatan: 'Sekertaris II',
        img: jeki,
      },
      {
        nama: 'Shinta Fajar Cahyani',
        jabatan: 'Bendahara I',
        img: shinta,
      },
      {
        nama: 'Helwa Nuftiana Fadoil Putri',
        jabatan: 'Bendahara II',
        img: helwa,
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
        img: imam,
      },
      {
        nama: 'Muhammad Robit Zainul Haq',
        jabatan: 'Anggota Departemen Teknologi',
        img: robit,
      },
      {
        nama: 'Ahmad Faozah',
        jabatan: 'Anggota Divisi Teknologi',
        img: ozah,
      },
      {
        nama: 'Lintang Kesit Haniko',
        jabatan: 'Anggota Divisi Teknologi',
        img: lintang,
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
        img: bela,
      },
      {
        nama: 'Biharus Sidqi',
        jabatan: 'Anggota Departemen Ekraf',
        img: sidqi,
      },
      {
        nama: 'Robbi Shurnii Al-Aqiilah',
        jabatan: 'Anggota Departemen Ekraf',
        img: robi,
      },
      {
        nama: 'Dewi Santika',
        jabatan: 'Anggota Departemen Ekraf',
        img: dewi,
      },
    ],
  },
  {
    id: 104,
    divisi: 'Departemen Pers',
    pengurus: [
      {
        nama: 'Ghani Arif Baehaqiw',
        jabatan: 'Ketua Departemen Pers',
      },
      {
        nama: 'Rafli',
        jabatan: 'Anggota Departemen Pers',
      },
      {
        nama: 'Anggita',
        jabatan: 'Anggota Departemen Pers',
      },
      {
        nama: 'John Doe',
        jabatan: ' Anggota Departemen Pers',
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
        img: yosan,
      },
      {
        nama: 'Ersa Kinanti',
        jabatan: 'Anggota Departemen Dalam Negri',
        img: ersa,
      },
      {
        nama: 'Nurul Qonaah Salsabila',
        jabatan: 'Anggota Departemen Dalam Negri',
        img: nurul,
      },
      {
        nama: 'Trio Putra Kusuma',
        jabatan: 'Anggota Departemen Dalam Negri',
        img: putgay,
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
        img: fandi,
      },
      {
        nama: 'Aldika Gagah Prasetya',
        jabatan: 'Anggota Departemen Luar Negri',
        img: aldika,
      },
      {
        nama: 'Fawaz Ari Najib',
        jabatan: 'Anggota Departemen Luar Negri',
        img: fawaz,
      },
      {
        nama: 'Hasna Kamalia Hakim',
        jabatan: 'Anggota Departemen Luar Negri',
        img: hasna,
      },
      {
        nama: 'Muhammad Arif Rivandi',
        jabatan: 'Anggota Departemen Luar Negri',
        img: arif,
      },
    ],
  },
];
export { navigasi, pengurus, programKerja, dataPengurus };
