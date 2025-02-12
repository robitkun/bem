import { dataPengurus } from '../../constants/utils';
import './AllPengurus.css';

const AllPengurus = () => {
  return (
    <div className="pengurus">
      {dataPengurus.map((el, idx) => {
        const leader = el.pengurus[0]; // Kepala Divisi
        const members = el.pengurus.slice(1); // Anggota Tim

        return (
          <div className="team-container" key={idx}>
            <h1>{el.divisi}</h1>

            {/* Kepala Divisi */}
            <div className="leader-card">
              <img src={leader.img} alt={leader.nama} className="profile-img" />
              <h2>{leader.nama}</h2>
              <p>{leader.jabatan}</p>
            </div>

            {/* Anggota Tim */}
            <div className="member-container">
              {members.map((member, i) => (
                <div className="member-card" key={i}>
                  <img
                    src={member.img}
                    alt={member.nama}
                    className="profile-img"
                  />
                  <h3>{member.nama}</h3>
                  <p>{member.jabatan}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllPengurus;
