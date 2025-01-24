import bphIcon from './../assets/bph.png';
import internalIcon from './../assets/internal.png';
import externalIcon from './../assets/external.png';
import teknologiIcon from './../assets/teknologi.png';
import ekrafIcon from './../assets/ekraf.png';
import persIcon from './../assets/pers.png';
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
export { navigasi, pengurus };
