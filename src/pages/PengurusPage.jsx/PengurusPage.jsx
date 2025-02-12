import AllPengurus from '../../components/AllPengurus/AllPengurus';
import Departemen from '../../components/Departemen/Departemen';
import './PengurusPage.css';

const PengurusPage = () => {
  return (
    <div className="pengurus-page">
      <Departemen />
      <AllPengurus />
    </div>
  );
};

export default PengurusPage;
