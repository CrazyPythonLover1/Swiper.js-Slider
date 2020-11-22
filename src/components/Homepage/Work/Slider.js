import React, {  useEffect, useState } from 'react';
import './Slider.css'
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import audio1 from '../../../data/audio/audio1.mp3';

SwiperCore.use([Navigation, Pagination])
  const Slider = ({works}) => {

  const [isShown, setIsShown] = useState(false)


  const [cssProperty, setCssProperty] = useState({});


  const mouseHover = (e) => {
    const {width, left, top, bottom} = e.target.parentNode.getBoundingClientRect()
    setCssProperty({width, left, top, bottom, opacity:1})
  }

  const mouseLeave = (e) => {
    setIsShown(false)
    setCssProperty({opacity:0, mouseLeaveClass:"mouseLeaveClass"})
  }


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


const audios = works.map(work => {
  const audio= require(`../../../data/audio/audio${work.id}.mp3`)
  const audioPath = audio["default"];
  return new Audio(audioPath);
})

console.log(audios[0])

const audio = require(`../../../data/audio/audio1.mp3`)

console.log(audio)

//  const audio = audioData.map(item => {
//   return new Audio(item)
// })


const [active, setActive] = useState(false);
if (works[0].id) {
    const audioData = require(`../../../data/audio/audio${works[0].id}.mp3`)
    var audioPath = audioData["default"];
    console.log(audioData);
    console.log(audioPath);
}

const handlePlayMusic = (audioNum) => {
    audios[audioNum].play();
    setActive(!active);
    audios[audioNum].addEventListener('ended', () => setActive(false));
}

const handlePauseMusic = (audioNum) => {
    audios[audioNum].pause();
    setActive(!active);
}



    return (
        <div>
          
          {/* (100<cssProperty.left<420 && "100px") || (cssProperty.left<788 && "460px") ||  (790<cssProperty.left<1154 && "825px") */}
         {/* 100<cssProperty.left<420 && "90" || 400<cssProperty.left<788 && "460" ||  790<cssProperty.left<1154 && "825" || cssProperty.left */}
          { <div className={`job-bg ${cssProperty.mouseLeaveClass}`} style={{transform:`translateX(${cssProperty.left-2}px)`, 
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
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={() => mouseLeave() }
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
                  <SwiperSlide key={`slide-${index}`} tag="li" style={{listStyle:"none"}} className=""  >  
                     
                    {/* <div className="job-bg" style={{opacity:0, transform:`translateX(${left}px)`}}></div> */}
                    <div  onMouseEnter={(e)=> mouseHover(e)}  onMouseLeave={() => mouseLeave()}  className="job-item"  >
                    <div className="job-info" style={{marginBottom:"5px", margin: "0 10px"}}>
                      <div className="job-dates" >

                          <span className="single-job-date">
                            <span className="job-date-items">
                              {work?.month && <span className="month" style={{color: "#fff", fontSize:"1rem", opacity:".7"}}  > {work?.month} </span>}
                              {work?.startDate && <span className="date" style={{color: "#fff", fontSize:"32px"}}  > {work?.startDate} </span>} <br/>
                            </span>
                          </span>
                          
                           
                        
                        <span className="end-single-job-date" >
                          <span className="job-date-items" style={{marginRight:"15px"}}>
                          {work?.endMonth && <span className="month" style={{color: "#fff", fontSize:"1rem",  opacity: ".7"}} onMouseEnter={(e)=> e.stopPropagation()}> {work?.endMonth} </span>}
                            {work?.endDate && <span className="date" style={{color: "#fff", fontSize:"32px", }} onMouseEnter={(e)=> e.stopPropagation()}> {work?.endDate} </span>} <br/>
                          </span>
                        </span>
                            
                      </div>

                      <div class="job__title" style={{height: "110px", fontSize:"23px",color: "white !important", fontWeight:"500", transition:"all .5s", position:"relative"}}>
                        {work.company} <br/>
                        <span style={{fontSize:"16px",}}> {work.position} </span>

                        {/* PLAY Music BUTTON  */}
                        <div className="btn-play-pause" onClick={(e) => e.stopPropagation() } >
                        {!active ? <FontAwesomeIcon onClick={() => handlePlayMusic(work.id)} icon={faPlay} />
                            : <FontAwesomeIcon onClick={() => handlePauseMusic(work.id)} icon={faPause} />}
                        </div>
                        {/* PLAY Music BUTTON  */}
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

