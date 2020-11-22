import React, {  useEffect, useState } from 'react';
import './Slider.css'
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import $ from 'jquery';

SwiperCore.use([Navigation, Pagination])
const Slider = ({works}) => {

  const [isShown, setIsShown] = useState(false)

  const [ sliderClassName, setSliderClassName] = useState(false);


  const [cssProperty, setCssProperty] = useState({});


const mouseHover = (e) => {
  const {width, left, top, bottom} = e.target.parentNode.getBoundingClientRect()
  setCssProperty({width, left, top, bottom, opacity:1})
  console.log(left)
  setIsShown(true)
}

const mouseLeave = (e) => {
  setIsShown(false)
  setCssProperty({opacity:0, activeClass:"activeClass"})
}

const middleSwiper = () => {
  const swiper = document.getElementsByClassName("swiper-slide-active")[0];
  console.log(swiper)

  const {left} = document.getElementsByClassName("job-info")[0].parentNode.getBoundingClientRect();
  // const left = middleSwiper.getBoundingClientRect();
  console.log(left)
  setCssProperty({ left:left})
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
    if(cssProperty.left<432){
        setCssProperty({left:130})
    } else if(  cssProperty.left < 810){
        setCssProperty({ left:500})
    } else if(  cssProperty.left < 1184){
        setCssProperty({ left:870})
    } else if( cssProperty.left<100){
        setCssProperty({left:90})
    }
  }

  // if(window.innerWidth > 992 ){
  //   if(cssProperty.left<432){
  //       setCssProperty({left:80})
  //   } else if(  cssProperty.left < 810){
  //       setCssProperty({ left:500})
  //   } else if(  cssProperty.left < 1184){
  //       setCssProperty({ left:870})
  //   } else if( cssProperty.left<100){
  //       setCssProperty({left:90})
  //   }
  // }
  
  
  if(window.innerWidth < 650){

    
    if (cssProperty.left<=15){
      setCssProperty({left:15})
  } else if(cssProperty.left<=30){
    setCssProperty({left:30})
  } 
//   else if(  cssProperty.left <40){
//     setCssProperty({ left:40})
//     console.log(cssProperty.left)
// } else if(  cssProperty.left < 55){
//     setCssProperty({ left:50})
//     console.log(cssProperty.left)
// } else if( cssProperty.left<60){
//     setCssProperty({left:60})
//     console.log(cssProperty.left)
// } 
  }

  if(window.innerWidth <= 320 ) {
    if (cssProperty.left<=15){
      setCssProperty({left:15})
    } else if (cssProperty.left <=30){
      setCssProperty({left:25})
    }
  }
  
}, [cssProperty.left] )



    return (
        <div>
          
          {/* (100<cssProperty.left<420 && "100px") || (cssProperty.left<788 && "460px") ||  (790<cssProperty.left<1154 && "825px") */}
         {/* 100<cssProperty.left<420 && "90" || 400<cssProperty.left<788 && "460" ||  790<cssProperty.left<1154 && "825" || cssProperty.left */}
          { <div className={`job-bg ${cssProperty.activeClass}`} style={{transform:`translateX(${cssProperty.left-2}px)`, 
              width:`${cssProperty.width+30}px`, height:`${cssProperty.bottom-cssProperty.top}px`, 
              minHeight:"500px", minWidth:"300px", opacity:`${cssProperty.opacity}`
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
            onSlideChange={() => {
              
            } }
            onSwiper={(swiper)=> console.log(swiper)}
            // onTouchEnd={(swiper,event)=>{
            //    mouseHover(event)
            //   console.log(event)}}
            onTouchEnd={() => {
              $('.job-item').removeClass('active');
              $('.swiper-slide-active .job-item').addClass('active');
            }}
            onSlideChangeTransitionEnd={()=>{
              // 
            }}
            navigation
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
            on= {{
              init: function () {
                var activeItem = document.querySelector('.swiper-slide-active');
    
                var sliderItem = activeItem.querySelector('.job-item');
    
                $('.swiper-slide-active .job-item').addClass('active');
    
                var x = sliderItem.getBoundingClientRect().left;
                var y = sliderItem.getBoundingClientRect().top;
                var width = sliderItem.getBoundingClientRect().width;
                var height = sliderItem.getBoundingClientRect().height;
                var bg = document.querySelector('.job-bg');
    
                $('.job-bg').addClass('active');
    
                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            }
            }}
            
            > 
            
           
              {
                works.map((work,index) => (
                  <SwiperSlide key={`slide-${index}`} tag="li" style={{listStyle:"none"}} className="" 
                  
                  >  
                     
                    {/* <div className="job-bg" style={{opacity:0, transform:`translateX(${left}px)`}}></div> */}
                    <div  onMouseEnter={(e)=> mouseHover(e)}  onMouseLeave={() => mouseLeave()}  className="job-item"  >
                    <div className="job-info" style={{marginBottom:"5px", margin: "0 10px"}}>
                      <div className="job-dates" >

                        <div class="job-date" style={{ display:"inline-block",height:"48px", marginBottom:"20px" }}>
                          <span className="single-job-date">
                          {work?.month && <span className="month" style={{color: "#fff", fontSize:"1rem", opacity:".7"}}  > {work?.month} </span>}
                            {work?.startDate && <span className="date" style={{color: "#fff", fontSize:"32px"}}  > {work?.startDate} </span>} <br/>
                          </span>
                           
                        </div>
                        
                        <div class="job-date" style={{ display:"inline-block",height:"48px", marginBottom:"20px" }}>
                        <span className="single-job-date" style={{marginRight:"15px"}}>
                        {work?.endMonth && <span className="month" style={{color: "#fff", fontSize:"1rem",  opacity: ".7"}} onMouseEnter={(e)=> e.stopPropagation()}> {work?.endMonth} </span>}
                            {work?.endDate && <span className="date" style={{color: "#fff", fontSize:"32px", }} onMouseEnter={(e)=> e.stopPropagation()}> {work?.endDate} </span>} <br/>
                          </span>
                            
                        </div>
                      </div>

                      <div class="job__title" style={{height: "110px", fontSize:"23px",color: "white !important", fontWeight:"500", transition:"all .5s"}}>
                        {work.company} <br/>
                        <span style={{fontSize:"16px",}}> {work.position} </span>
                      </div>
                    </div>
                    <p class="job-description">
                    <span> {!isShown && work.summary?.toString().length > 300 ? work.summary?.toString().substr(0,275)+"...":work.summary} </span> <br/> <br/>
                    {work?.highlights?.length > 1 && "Highlights"} <br/>
                     <span>  {!isShown && work?.highlights?.toString().length > 2?  work?.highlights?.toString().substr(0,80) + "..." : work.highlights}  </span>
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

