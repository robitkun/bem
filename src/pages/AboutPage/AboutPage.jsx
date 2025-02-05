import MaknaLogo from '../../components/MaknaLogo/MaknaLogo';
import './AboutPage.css';
const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="section-about">
        <div className="bg-overlay"></div>
        <div className="content">
          <h1>Tentang BEM FMIKOM</h1>
          <p>
            BEM FMIKOM bersifat demokratis, aspiratif, solutif, edukatif, dan
            pergerakan.
          </p>
        </div>
      </div>
      <MaknaLogo />
    </div>
  );
};

export default AboutPage;
