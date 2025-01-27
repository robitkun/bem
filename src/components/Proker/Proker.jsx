import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiArrowSmRight } from 'react-icons/hi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Proker.css';
import { Link } from 'react-router-dom';
import { programKerja } from '../../constants/utils';

const Proker = () => {
  return (
    <div className="proker">
      <h1>PROGRAM KERJA</h1>
      <p>Program Kerja BEM FMIKOM tahun 2024</p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        draggable={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        onInit={(swiper) => {
          console.log('Swiper initialized', swiper.params.breakpoints);
        }}
        className="yew"
      >
        {programKerja.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <div className="card">
                <div className="card-img">
                  <img src={el.img_dokumentasi} alt="bg" />
                </div>
                <div className="card-text">
                  <h1>{el.nama}</h1>
                  <p>
                    {el.deskripsi} Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nesciunt delectus quae eos maiores aliquam
                    sequi, itaque eum tenetur ad vel?
                  </p>
                  <Link className="cta-link" to={`/program-kerja/${el.id}`}>
                    <span>Lihat Detail</span>
                    <HiArrowSmRight />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Proker;
