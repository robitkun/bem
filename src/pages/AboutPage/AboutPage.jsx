import MaknaLogo from '../../components/MaknaLogo/MaknaLogo';
import SectionAbout from '../../components/SectionAbout/SectionAbout';
import Himpunan from '../../components/Himpunan/Himpunan';
import './AboutPage.css';
const AboutPage = () => {
  return (
    <div className="about-page">
      <SectionAbout />
      <MaknaLogo />
      <Himpunan />
    </div>
  );
};

export default AboutPage;
