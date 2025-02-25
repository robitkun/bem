import './DetailPage.css';
import { programKerja } from '../../constants/utils';
import { useParams } from 'react-router-dom';
const DetailPage = () => {
  const { id } = useParams();
  const proker = programKerja.find((el) => el.id === parseInt(id));
  return (
    <div className="detail-page">
      <div className="detail-content">
        <h1 className="label-detail">Detail Proker : </h1>
        <div className="detail-proker">
          <h1>{proker.nama}</h1>
          <div className="content-detail">
            <img src={proker.img_dokumentasi} alt={proker.nama} />
            <p>{proker.deskripsi}</p>
          </div>

          <div className="detail-label">
            <span>Departemen Teknologi</span>
            <span>01 Januari 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
