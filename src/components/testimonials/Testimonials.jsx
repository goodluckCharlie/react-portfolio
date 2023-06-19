import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.png'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
{
  avatar: AVATAR1,
  name:'Shaheed Ibrahim',
  review:'lorem2  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro debitisrem expedita ipsam unde, assumenda maxime molestias iusto nihil consectetur ad iuregkjhlahlhgalhga?'
},

{
  avatar: AVATAR1,
  name:'Shaheed Ibrahim',
  review:'lorem2  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro debitisrem expedita ipsam unde, assumenda maxime molestias iusto nihil consectetur ad iuregkjhlahlhgalhga?'
},
{
  avatar: AVATAR1,
  name:'Shaheed Ibrahim',
  review:'lorem2  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro debitisrem expedita ipsam unde, assumenda maxime molestias iusto nihil consectetur ad iuregkjhlahlhgalhga?'
},
{
  avatar: AVATAR1,
  name:'Shaheed Ibrahim',
  review:'lorem2  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro debitisrem expedita ipsam unde, assumenda maxime molestias iusto nihil consectetur ad iuregkjhlahlhgalhga?'
},
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container' 
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        > 
      {
       data.map (({avatar, name, review}, index) => {
        return(
          <SwiperSlide key={index} className='testimonial'>
            <div className='client_avatar'>
              <img src={avatar} />
            </div>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
          </SwiperSlide>
        )
       }
       ) 
       }
      </Swiper>
    </section>
  )
}

export default testimonials