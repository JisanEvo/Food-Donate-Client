
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
// import Slide22 from './Slide22';
import Slide3 from './Slide3';
import Slide4 from './Slide4';



export default function Carousel() {
  return (
    <div className='container   px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide></Slide></SwiperSlide>
        {/* <SwiperSlide><Slide22></Slide22>  </SwiperSlide> */}
        <SwiperSlide><Slide3></Slide3></SwiperSlide>
        <SwiperSlide><Slide4></Slide4></SwiperSlide>

      </Swiper>
    </div>
  );
}