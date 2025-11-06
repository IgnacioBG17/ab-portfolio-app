// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import './styles.css';

// import required modules
import { Pagination, Autoplay  } from 'swiper/modules';

import testimonials from './data';
import Testimonial from "./Testimonial";
import './testimonials.css';


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Lo que dicen mis clientes</h2>
      <p>
        Estos son testimonios imparciales de algunos de mis clientes.
      </p>
      <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
            601: {slidesPerView: 2},
            1025: {slidesPerView: 3}
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay= {true}
        className="mySwiper"
      >
        {
          testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials