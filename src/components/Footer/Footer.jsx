import { Link } from 'react-router-dom';
import { BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi';
import { navigasi } from '../../constants/utils';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="footer_informasi">
          <div className="footer_logo">
            <img
              src="https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem/logo_himpunan/bem.jpeg"
              alt="Logo_BEM_FOOTER"
              width={60}
            />
            <span>BEM FMIKOM</span>
          </div>
          <p>
            Jalan Kemerdekaan Barat, Kesugihan,
            <br /> Cilacap, Jawa Tengah,
            <br /> 54327, Indonesia
          </p>
          <div className="footer_sosial">
            <h3>Media Sosial</h3>
            <div className="sosial">
              <a href="#">
                <BiLogoInstagram />
                <span>@bemfmikom</span>
              </a>
              <a href="#">
                <BiLogoYoutube />
                <span>hhh</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer_navigasi">
          <h3>Navigasi</h3>
          <div className="navigasi">
            {navigasi.map((el, index) => {
              return (
                <Link key={index} to={el.href}>
                  {el.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="footer_event">
          <h3>Event Terbaru</h3>
          <div className="event"></div>
        </div>
      </div>
      <p className="footer_copyright">
        Made with 🧡️ by Dpartement Teknoologi BEM FMIKOM UNUGHA
      </p>
    </div>
  );
};

export default Footer;
