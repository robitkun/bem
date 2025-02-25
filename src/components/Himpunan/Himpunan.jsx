import './Himpunan.css';
import { himpunan } from '../../constants/utils';
const Himpunan = () => {
  return (
    <div className="himpunan-content">
      <h1>Daftar Himpunan yang dinaungi BEM FMIKOM</h1>
      <div className="container-card">
        {himpunan.map((el) => {
          return (
            <div className="card" key={el.id}>
              <img src={el.img} alt={el.namaHimpunan} />
              <h2>{el.namaHimpunan}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Himpunan;
