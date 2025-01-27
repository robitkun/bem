import AboutHome from '../../components/AboutHome/AboutHome';
import ContactUs from '../../components/ContactUs/ContactUs';
import Hero from '../../components/Hero/Hero';
import PengurusHome from '../../components/PengurusHome/PengurusHome';
import Proker from '../../components/Proker/Proker';
import './HomePage.css';
const HomePages = () => {
  return (
    <div className="container">
      <Hero />
      <AboutHome />
      <PengurusHome />
      <Proker />
      <ContactUs />
    </div>
  );
};

export default HomePages;
