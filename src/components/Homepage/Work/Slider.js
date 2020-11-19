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
  setCssProperty({width, left, top, bottom, opacity:1})

  setIsShown(true)
}

const mouseLeave = (e) => {
  setIsShown(false)
  setCssProperty({opacity:0})
}


// useEffect(() => {
//   const {left} = ref.current.getBoundingClientRect();
//   console.log(left);
// }, [isShown])

// const handleClick = () => {
//   const {width} = ref.current.getBoundingClientRect();
//   console.log(width);
// }


//width:cssProperty.width, left:cssProperty.left, top:cssProperty.top, bottom:cssProperty.bottom,

useEffect( () => {
  if(window.innerWidth > 1300 ){
    if(cssProperty.left<422){
        setCssProperty({left:130})
        console.log(cssProperty.left)
    } else if(  cssProperty.left < 800){
        setCssProperty({ left:500})
        console.log(cssProperty.left)
    } else if(  cssProperty.left < 1164){
        setCssProperty({ left:870})
        console.log(cssProperty.left)
    } else if( cssProperty.left<100){
        setCssProperty({left:90})
        console.log(cssProperty.left)
    }
  }
  
  if(window.innerWidth < 650){
    if(cssProperty.left<40){
      setCssProperty({left:39})
      console.log(cssProperty.left)
  } else if( cssProperty.left < 65){
      setCssProperty({ left:65})
      console.log(cssProperty.left)
  } else if( cssProperty.left < 110){
    setCssProperty({ left:90})
    console.log(cssProperty.left)
} 
  }
  
}, [cssProperty.left] )

console.log(cssProperty.left)
    return (
        <div>
          {/* (100<cssProperty.left<420 && "100px") || (cssProperty.left<788 && "460px") ||  (790<cssProperty.left<1154 && "825px") */}
         {/* 100<cssProperty.left<420 && "90" || 400<cssProperty.left<788 && "460" ||  790<cssProperty.left<1154 && "825" || cssProperty.left */}
          { <div className="job-bg" style={{transform:`translateX(${cssProperty.left}px)`, 
              width:`${cssProperty.width+30}px`, height:`${cssProperty.bottom-cssProperty.top}px`, 
              minHeight:"500px", minWidth:"300px", opacity:`${cssProperty.opacity}`, 
              }}
            >  
            </div> 
          }
            <Swiper
            id="main"
            tag="section"
            wrapperTag="ul"
            spaceBetween={10}
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
                    <div  onMouseEnter={(e)=> mouseHover(e)}  onMouseLeave={() => mouseLeave()}>
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
                            {work?.month && <span className="month" style={{color: "#fff", fontSize:"1rem"}}> {work?.month} </span>}
                        </div>
                        <div class="job-date" style={{borderBottom:"2px solid ", display:"inline-block",height:"78px", marginBottom:"20px", paddingBottom:"10px"}}>
                            {work?.endDate && <span className="date" style={{color: "#a5c261", fontSize:"32px"}}> {work?.endDate} </span>} <br/>
                            {work?.endMonth && <span className="month" style={{color: "#fff", fontSize:"1rem"}}> {work?.endMonth} </span>}
                        </div>
                      </div>
                      <div class="job__title" style={{height: "100px", fontSize:"24px",color: "white !important", fontWeight:"500"}}>
                        {work.company} <br/>
                        <span style={{fontSize:"16px", opacity:".7", transition: "opacity .3s"}}> {work.position} </span>
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

