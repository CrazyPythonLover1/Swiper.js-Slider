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

  function changeBackground(e) {
    e.target.style.background = 'red';
  }

    return (
        <div >
            <Swiper
            id="main"
            tag="section"
            wrapperTag="ul"
            navigation
            pagination
            spaceBetween={10}
            slidesPerView={1}
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
                width: 708,
                slidesPerView: 2,
              },
              992:{
                width: 932,
                slidesPerView: 3,
              },
              1150:{
                width: 1100,
                slidesPerView: 3,
              }
              
            }}
            > 
              {
                works.map((work,index) => (
                  <SwiperSlide key={`slide-${index}`} tag="li" style={{listStyle:"none"}} className="swiper-li" >  
                    
                    <div className="job-info" style={{marginBottom:"5px", padding: "0 10px"}}>
                      <div class="job-date" style={{borderBottom:"2px solid ", display:"inline-block",height:"78px", marginBottom:"20px", paddingBottom:"10px"}}>
                          {work?.startDate && <span className="date" style={{color: "#a5c261", fontSize:"32px"}}> {work?.startDate} </span>} <br/>
                          {work?.month && <span className="date" style={{color: "#fff", fontSize:"1rem"}}> {work?.month} </span>}
                      </div>
                      <div class="news__title" style={{height: "74px", fontSize:"25px"}}>
                        {work.company}
                      </div>
                    </div>
                    <p class="job-description">
                    {work.summary} <br/> <br/>
                    {work.highlights && "Highlights"} <br/>
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

