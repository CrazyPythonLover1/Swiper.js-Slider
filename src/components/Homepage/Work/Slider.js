import React, {  useEffect, useState } from 'react';
import './Slider.css'
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


SwiperCore.use([Navigation, Pagination])

  const Slider = ({works}) => {

  const [isShown, setIsShown] = useState(false)


  const [cssProperty, setCssProperty] = useState({});


  const mouseHover = (e,id) => {
    const {width, left, top, bottom} = e.target.parentNode.getBoundingClientRect()
    setCssProperty({width, left, top, bottom, opacity:1,  id:id})
    setIsShown(!isShown);
  }

  const mouseLeave = (e) => {
    setIsShown(false)
    setCssProperty({opacity:0, mouseLeaveClass:"mouseLeaveClass"})
  }


useEffect( () => {

  if( window.innerWidth > 1500 ){
    if( cssProperty.left !== 500 && cssProperty.left<=580){
        setCssProperty({left:130})
        console.log(cssProperty.left !== 500)
        console.log(cssProperty.left)

    } else if( cssProperty.left !== 870 && cssProperty.left<955){
        setCssProperty({ left:500})
        console.log(cssProperty.left !== 870 )

        console.log(cssProperty.left)

    } else if(   cssProperty.left <= 1384){
        setCssProperty({ left:870})
        console.log(cssProperty.left)
    } 
  }

  if(1499 > window.innerWidth && window.innerWidth > 1300 ){
    if( cssProperty.left !== 500 && cssProperty.left<432){
        setCssProperty({left:130})
    } else if(cssProperty.left !== 130 &&  cssProperty.left !== 870 && cssProperty.left < 810){
        setCssProperty({ left:500})
        console.log(cssProperty.left)
    } else if(  cssProperty.left < 1184){
        setCssProperty({ left:870})
        console.log(cssProperty.left)
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

//   if( 650 <= window.innerWidth && window.innerWidth <= 768){
//     if( cssProperty.left < 80 ){
//       setCssProperty({left: 70})
//     }
//     else if (cssProperty.left !==70 && cssProperty.left<=110){
//       setCssProperty({left:120})
//       console.log(cssProperty.left)
//   } else if(cssProperty.left !==120 && cssProperty.left<=134){
//     setCssProperty({left:134})
//   } 
// //   else if(  cssProperty.left <40){
// //     setCssProperty({ left:40})
// //     console.log(cssProperty.left)
// // } else if(  cssProperty.left < 55){
// //     setCssProperty({ left:50})
// //     console.log(cssProperty.left)
// // } else if( cssProperty.left<60){
// //     setCssProperty({left:60})
// //     console.log(cssProperty.left)
// // } 
//   }
  
  
  if( 320 < window.innerWidth && window.innerWidth < 650){

    
  //   if (cssProperty.left<=15){
  //     setCssProperty({left:15})
  // } 
//   else if(cssProperty.left !==15 && cssProperty.left<=30){
//     setCssProperty({left:30})
//   } else if( cssProperty.left !==30 && cssProperty.left <40){
//     setCssProperty({ left:40})
//     console.log(cssProperty.left)

//   } else if( cssProperty.left !==40 &&   cssProperty.left < 55){
//       setCssProperty({ left:50})
//       console.log(cssProperty.left)
//   } else if( cssProperty.left !==50 && cssProperty.left !==40 &&  cssProperty.left<60){
//       setCssProperty({left:60})
//       console.log(cssProperty.left)
//   } else if( cssProperty.left !==50 && cssProperty.left !==40 &&  cssProperty.left<80){
//     setCssProperty({left:100})
//     console.log(cssProperty.left)
// }
  // else if( cssProperty.left !==40 && cssProperty.left !==50 && cssProperty.left !==60 &&  cssProperty.left<85){
  //   setCssProperty({left:40})
  //   console.log(cssProperty.left)
  // } 
  // else if ( cssProperty.left < 170){
  //   setCssProperty({left:40})
  // }
// }

  // if(window.innerWidth <= 320 ) {
  //   if (cssProperty.left<=15){
  //     setCssProperty({left:15})
  //   } else if (cssProperty.left <=30){
  //     setCssProperty({left:25})
  //   }
  }
  if(window.innerWidth < 376){
    setCssProperty({left:30})
  }
  
}, [cssProperty.left] )


const audios = works.map(work => {
  const audio= require(`../../../data/audio/audio${work.id}.mp3`)
  const audioPath = audio["default"];
  return new Audio(audioPath);
})


const [handlePlay, setHandlePlay] = useState(0);
const [handleClass, setHandleClass] = useState("")

const handlePlayMusic = (audioNum) => {
    audios[audioNum-1].play();
    setHandlePlay(audioNum)
    setHandleClass("job-active")
    audios[audioNum-1].addEventListener('ended', () => setHandlePlay(0));
}

const handlePauseMusic = (audioNum) => {
    audios[audioNum-1].pause();
    setHandlePlay(0)
}



    return (
        <div>
          
      
          { <div className={`job-bg ${cssProperty.mouseLeaveClass}`} style={{transform:`translateX(${cssProperty.left-2}px)`, 
              width:`${cssProperty.width+30}px`, height:`${cssProperty.bottom-cssProperty.top}px`, 
              minHeight:"500px", minWidth:"300px", opacity:`${cssProperty.opacity}`
              }}
              onMouseLeave={() => mouseLeave()}
            >  
            </div> 
          }
            <Swiper
            id="main"
            tag="section"
            wrapperTag="ul"
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={() => {
              mouseLeave()
              setHandleClass("")
            } }
            onSwiper={(swiper)=> console.log()}
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
           
            > 
            
           
              {
                works.map((work,index) => (
                  <SwiperSlide key={`slide-${index}`} tag="li" style={{listStyle:"none"}} className={handleClass}  >  
                     
                    {/* <div className="job-bg" style={{opacity:0, transform:`translateX(${left}px)`}}></div> */}

                    
                    <div  onMouseEnter={(e)=> mouseHover(e, work.id)}  onMouseLeave={() => mouseLeave()}  className="job-item"  >
                    <div className="job-info" style={{marginBottom:"5px", margin: "0 10px"}}>
                      <div className="job-dates" >

                          <span className="single-job-date">
                            <span className="job-date-items">
                              {work?.month && <span className="month" style={{color: "#fff", fontSize:"1rem", opacity:".7"}}  > {work?.month} </span>}
                              {work?.startDate && <span className="date" style={{color: "#fff", fontSize:"32px"}}  > {work?.startDate} </span>} <br/>
                            </span>
                          </span>
                          
                           
                        
                        <span className="end-single-job-date" onMouseEnter={(e)=> e.stopPropagation()}>
                          <span className="job-date-items" style={{marginRight:"15px"}} onMouseEnter={(e)=> e.stopPropagation()}>
                          {work?.endMonth && <span className="month" style={{color: "#fff", fontSize:"1rem",  opacity: ".7"}} onMouseEnter={(e)=> e.stopPropagation()}  > {work?.endMonth} </span>}
                            {work?.endDate && <span className="date" style={{color: "#fff", fontSize:"32px", }} onMouseEnter={(e)=> e.stopPropagation()}> {work?.endDate} </span>} <br/>
                          </span>
                        </span>
                            
                      </div>

                      <div class="job__title" style={{height: "110px", fontSize:"23px",color: "white !important", fontWeight:"500", transition:"all .5s", position:"relative"}}>
                        {work.company} <br/>
                        <span style={{fontSize:"16px",}}> {work.position} </span>

                        {/* PLAY Music BUTTON  */}
                        <div className="btn-play-pause" >
                        { handlePlay === work.id? "" : <FontAwesomeIcon onClick={(e) => {
                          handlePlayMusic(work.id) 
                          mouseHover(e, work.id)}
                          } icon={faPlay} /> }

                             { handlePlay === work.id &&<FontAwesomeIcon onClick={() => handlePauseMusic(work.id)} icon={faPause} />}
                            <span className="play-text" style={{display: "inline-block", opacity:'0'}}>
                              P l a y
                            </span>
                        </div>
                        {/* PLAY Music BUTTON  */}
                      </div>
                    </div>
                    <p class="job-description">
                    <span> {!isShown && work.summary?.toString().length > 300 ? work.summary?.toString().substr(0,275)+"...":work.summary} </span> <br/> <br/>
                    {work?.highlights?.length > 1 && "Highlights"} <br/>
                     <span>  {!isShown && work?.highlights?.toString().length > 2?  work?.highlights?.toString().substr(0,70) + "..." : work.highlights}  </span>
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

