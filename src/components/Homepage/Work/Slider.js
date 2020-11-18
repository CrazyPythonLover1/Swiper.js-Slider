import React, { useEffect } from 'react';
import './Slide.css'
// 
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
// import 'swiper/swiper.scss'

// import Swiper from 'react-id-swiper';

SwiperCore.use([Navigation, Pagination])
const Slider = ({works}) => {



    return (
        <div>
            <Swiper
            id="main"
            tag="section"
            wrapperTag="ul"
            
            navigation
            pagination
            spaceBetween={50}
            onSlideChange={() => console.log("slide change ")}
            onSwiper={(swiper)=> console.log(swiper)}
            loop="true"
            breakpoints={{
              350:{
                width: 350,
                slidesPerView: 1,
              },
              576:{
                width: 513,
                slidesPerView: 1,
              },
              768:{
                width: 768,
                slidesPerView: 2,
              },
              992:{
                width: 992,
                slidesPerView: 3,
              },
              1100:{
                width: 1100,
                slidesPerView: 3,
              }
              
            }}
            > 
              {
                works.map((work,index) => (
                  <SwiperSlide key={`slide-${index}`} tag="li" style={{listStyle:"none"}} >  
                 
                    <div class="news-date">
                        {work?.startDate && <span className="date" style={{color: "#a5c261"}}> <span> $ </span> {work?.startDate} </span>}
                        {work?.endDate && <span className="date" style={{color: "#a5c261"}}> <span> - $ </span> {work?.endDate} </span>}
                    </div>
                    <div class="news__title" style={{height: "48px"}}>
                      {work.company}
                    </div>
                    <p class="job-summary">
                      {work.summary}
                    </p>
                    <p class="job-description">
                      {work.highlights}
                    </p>
                  </SwiperSlide>
                ) )
              }
              
              
            </Swiper>
            
        </div>
    );
};

export default Slider;

