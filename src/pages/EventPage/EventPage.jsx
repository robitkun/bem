import './EventPage.css';

const events = [
  {
    id: 1,
    title: 'FMIKOM FEST 2025',
    date: 'Februari 21-22, 2025',
    location: 'UNUGHA CILACAP',
    description: `FMIKOM FEST 2025 telah sukses diselenggarakan sebagai festival tahunan yang menggabungkan teknologi, kompetisi, edukasi, dan hiburan dalam satu acara spektakuler. Acara ini mencakup:
    - **Lomba Mobile Legends**: Turnamen seru yang mempertemukan tim-tim terbaik dalam persaingan ketat untuk menjadi juara.
    - **Kompetisi Robotika**: Ajang inovasi yang menampilkan karya-karya terbaik di bidang robotika dan otomasi.
    - **Seminar Teknologi**: Diskusi inspiratif bersama para pakar industri mengenai perkembangan teknologi terbaru, kecerdasan buatan, dan transformasi digital.
    - **Konser Band**: Penampilan memukau dari band lokal dan nasional yang sukses menutup festival dengan suasana yang meriah.
    Terima kasih kepada seluruh peserta, pembicara, dan pengunjung yang telah membuat FMIKOM FEST 2025 menjadi acara yang tak terlupakan! Sampai jumpa di edisi berikutnya!`,
    images: [
      'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem/event/pelantikan.JPG',
      'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem/event/kejuaraan.JPG',
      'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem/event/robotika.JPG',
      'https://tqpfmbrgebdtnojrlvne.supabase.co/storage/v1/object/public/bem/event/seminar.JPG',
    ],
  },
];

const EventPage = () => {
  return (
    <div className="event-container">
      <div className="event-content">
        <h1 className="event-title">Past Events</h1>
        <div className="event-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h2 className="event-name">{event.title}</h2>
              <p className="event-info">
                {event.date} - {event.location}
              </p>
              <p className="event-description">{event.description}</p>
              <div className="event-gallery">
                <h3 className="gallery-title">Dokumentasi</h3>
                <div className="gallery-grid">
                  {event.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Dokumentasi ${event.title} ${index + 1}`}
                      className="gallery-image"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
