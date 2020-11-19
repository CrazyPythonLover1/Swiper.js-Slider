import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Slide.css'
// 
import { Swiper, SwiperSlide} from 'swiper/react';
// import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
// import 'swiper/swiper.scss'

// import Swiper from 'react-id-swiper';

// SwiperCore.use([Navigation, Pagination])
const Slider = ({works}) => {

  const [isShown, setIsShown] = useState(false)
  
  const [right, setRight] = useState()


  const [cssProperty, setCssProperty] = useState({});





const mouseHover = (e) => {
  const {width, left, top, bottom} = e.target.parentNode.getBoundingClientRect()
  setCssProperty({width, left, top, bottom})
  console.log(e.target.parentNode)
}
// console.log(cssProperty)

// useEffect(() => {
//   const {left} = ref.current.getBoundingClientRect();
//   console.log(left);
// }, [isShown])

// const handleClick = () => {
//   const {width} = ref.current.getBoundingClientRect();
//   console.log(width);
// }
    return (
        <div>
         {/*  */}
         {cssProperty.top && <div className="job-bg" style={{transform:`translateX(${cssProperty.left-30}px)`, width:`${cssProperty.width}px`, height:`${cssProperty.bottom-cssProperty.top}px`, minHeight:"500px", minWidth:"300px"}}>  </div> }
            <Swiper
            id="main"
            tag="section"
            wrapperTag="ul"
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() =>  setIsShown(!isShown)  }
            onSwiper={(swiper)=> console.log()}
            loop="true"
            breakpoints={{
              575:{
                width: 100,
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
                  <SwiperSlide key={`slide-${index}`} tag="li" style={{listStyle:"none"}} className="swiper-li" 
                  
                  >  
                     
                    {/* <div className="job-bg" style={{opacity:0, transform:`translateX(${left}px)`}}></div> */}
                    <div  onMouseOver={(e)=> mouseHover(e)}>
                    <div className="job-info" style={{marginBottom:"5px", padding: "0 10px"}}
                    ref={el => {
                      // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
                      if (!el) return;
              
                    //  console.log(el.getBoundingClientRect().left); 
                    }}
                    
                    >
                      <div className="job-dates">
                        <div class="job-date" style={{borderBottom:"2px solid ", display:"inline-block",height:"78px", marginBottom:"20px", paddingBottom:"10px"}}>
                            {work?.startDate && <span className="date" style={{color: "#a5c261", fontSize:"32px"}}> {work?.startDate} </span>} <br/>
                            {work?.month && <span className="date" style={{color: "#fff", fontSize:"1rem"}}> {work?.month} </span>}
                        </div>
                        <div class="job-date" style={{borderBottom:"2px solid ", display:"inline-block",height:"78px", marginBottom:"20px", paddingBottom:"10px"}}>
                            {work?.endDate && <span className="date" style={{color: "#a5c261", fontSize:"32px"}}> {work?.endDate} </span>} <br/>
                            {work?.endMonth && <span className="date" style={{color: "#fff", fontSize:"1rem"}}> {work?.endMonth} </span>}
                        </div>
                      </div>
                      <div class="news__title" style={{height: "88px", fontSize:"24px"}}>
                        {work.company} <br/>
                        {work.position}
                      </div>
                    </div>
                    <p class="job-description">
                    {work.summary} <br/> <br/>
                    {work.highlights && "Highlights"} <br/>
                      {work.highlights}
                    </p>
                    </div>
                  </SwiperSlide>
                ) )
              }
              
              
            </Swiper>
            
        </div>
    );
};

export default Slider;

