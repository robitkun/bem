import { Link } from 'react-router-dom';
import './ListEvent.css';
const ListEvent = () => {
  return (
    <Link className="" to="/event">
      <div className="list-event">
        <img
          src="https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem/event/thumb.png"
          alt="anjdaj"
          width={100}
        />
        <h3>FMIKOM FEST 2025</h3>
      </div>
    </Link>
  );
};

export default ListEvent;
