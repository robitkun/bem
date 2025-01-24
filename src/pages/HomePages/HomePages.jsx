import AboutHome from '../../components/AboutHome/AboutHome';
import GalleryKegiatan from '../../components/GalleryKegiatan/GalleryKegiatan';
import Hero from '../../components/Hero/Hero';
import PengurusHome from '../../components/PengurusHome/PengurusHome';
import './HomePage.css';
const HomePages = () => {
  return (
    <div className="container">
      <Hero />
      <AboutHome />
      <PengurusHome />
      <GalleryKegiatan />
    </div>
  );
};

export default HomePages;
