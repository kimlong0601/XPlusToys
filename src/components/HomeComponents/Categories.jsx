import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';

import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

import categories from '../../data/categories'


const Categories = () => {
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="container">
       <div className="content">
       <div className="content-container">
          <div className="content-box">
            <h2 className="content-box__heading__small">EYE SPY SOME SPACE CYCLOP</h2>
            <h1 className="content-box__heading__large">RARITIES</h1>
          </div>
        </div>
       </div>
      <Swiper
        modules={[Navigation]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          // when window width is >= 640px
          480: {
            width: 480,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
            spaceBetween: 150
          },
        }}
      >
        {
          categories.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="categoriesCard">
                <img src={item.image} alt={item.name} className="categoriesCard__image" />
                <h3 className="categoriesCard__name">{item.name}</h3>
              </div>
            </SwiperSlide>
          ))
        }
        <div className="SwiperBtn">
          <div ref={prevRef} className="PrevButton"><i class='bx bx-left-arrow-alt'></i></div>
          <div ref={nextRef} className="NextButton"><i class='bx bx-right-arrow-alt' ></i></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Categories