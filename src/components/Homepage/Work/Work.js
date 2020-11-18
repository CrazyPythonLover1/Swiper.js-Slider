import React, { useEffect, useState } from 'react';
import './Work.css';
import $ from 'jquery';
import './Work.scss';
import Swiper from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

import Slider from './Slider';


const Work = ({ work, handleClick, workBgColor, works }) => {
    const [audio, setAudio] = useState();
    const [active, setActive] = useState(false);
    if (work?.id) {
        const audioData = require(`../../../data/audio/audio${work.id}.mp3`)
        var audioPath = audioData["default"];
    }

    useEffect(() => { setAudio(new Audio(audioPath)) }, [work?.id])
    const handlePlayMusic = () => {
        audio.play();
        setActive(!active);
        audio.addEventListener('ended', () => setActive(false));
    }

    const handlePauseMusic = () => {
        audio.pause();
        setActive(!active);
    }
    
    // const handleWorkBgcolor = () => {
    //     if (work?.bgColor) {
    //         setBackgroundColor(work?.bgColor)
    //     }
    // }
    // useEffect(() => {
    //     if (work?.bgColor !== "#f8f8fa") {
    //         setBackgroundColor(work?.bgColor)
    //     }
    // }, [work])


    useEffect(()=>{
        var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                $('.item-bg').addClass('active');
                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');


                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}


var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');

            var sliderItem = activeItem.querySelector('.news__item');

            $('.swiper-slide-active .news__item').addClass('active');

            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;


            $('.item-bg').addClass('active');

            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
        }
    }
});

swiper.on('touchEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');

    var sliderItem = activeItem.querySelector('.news__item');

    $('.swiper-slide-active .news__item').addClass('active');

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;


    $('.item-bg').addClass('active');

    bg.style.width = width + 'px';
    bg.style.height = height + 'px';
    bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
});



    },[])
    

    return (
        <div  >
            <div id="work"  >
                <div className="button-group mb-5" onClick={() => handleClick()} >
                    <a href="../../../data/Resume/IL.docx" download > <button className="resume" onClick={(e) => e.stopPropagation() }> <span> RESUME   </span>  </button> </a>
                    <a href="../../../data/Resume/US.docx" download> <button className="letter" onClick={(e) => e.stopPropagation() }> <span>   LETTER   </span>  </button> </a>
                    <span className="or"> or </span>
                </div>
                    {/* <Slider works={works} /> */}
                    <div class="wrapper">

<div className="" >
  {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132206/news-slider/background.jpg" alt=""/> */}
</div>
<div class="item-bg"></div>

<div class="news-slider">
  <div class="news-slider__wrp swiper-wrapper">

    <div class="news-slider__item swiper-slide">
      <a href="#" class="news__item">
        <div class="news-date">
          <span class="news-date__title">24</span>
          <span class="news-date__txt">May</span>
        </div>
        <div class="news__title">
          Lorem Ipsum Dolor Sit Amed
        </div>

        <p class="news__txt" >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
        </p>

        <div class="news__img">
          {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-2.jpg" alt="news"/> */}
        </div>
      </a>
    </div>

    <div class="news-slider__item swiper-slide">
      <a href="#" class="news__item">
        <div class="news-date">
          <span class="news-date__title">25</span>
          <span class="news-date__txt">May</span>
        </div>
        <div class="news__title">
          Lorem Ipsum Dolor Sit Amed
        </div>

        <p class="news__txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
        </p>

        <div class="news__img">
          {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-3.jpg" alt="news"/> */}
        </div>
      </a>
    </div>

    <div class="news-slider__item swiper-slide">
      <a href="#" class="news__item">
        <div class="news-date">
          <span class="news-date__title">26</span>
          <span class="news-date__txt">May</span>
        </div>
        <div class="news__title">
          Lorem Ipsum Dolor Sit Amed
        </div>

        <p class="news__txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
        </p>

        <div class="news__img">
          {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-4.jpg" alt="news"/> */}
        </div>
      </a>
    </div>

    <div class="news-slider__item swiper-slide">
      <a href="#" class="news__item">
        <div class="news-date">
          <span class="news-date__title">27</span>
          <span class="news-date__txt">May</span>
        </div>
        <div class="news__title">
          Lorem Ipsum Dolor Sit Amed
        </div>

        <p class="news__txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
        </p>

        <div class="news__img">
          {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-2.jpg" alt="news"/> */}
        </div>
      </a>
    </div>

    <div class="news-slider__item swiper-slide">
      <a href="#" class="news__item">
        <div class="news-date">
          <span class="news-date__title">28</span>
          <span class="news-date__txt">May</span>
        </div>
        <div class="news__title">
          Lorem Ipsum Dolor Sit Amed
        </div>

        <p class="news__txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        </p>

        <div class="news__img">
          {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-5.jpg" alt="news" /> */}
        </div>
      </a>
    </div>

    <div class="news-slider__item swiper-slide">
      <a href="#" class="news__item">
        <div class="news-date">
          <span class="news-date__title">29</span>
          <span class="news-date__txt">May</span>
        </div>
        <div class="news__title">
          Lorem Ipsum Dolor Sit Amed
        </div>

        <p class="news__txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
        </p>

        <div class="news__img">
          {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1537132205/news-slider/item-4.jpg" alt="news"/> */}
        </div>
      </a>
    </div>
  </div>

  <div class="news-slider__ctr">

    <div class="news-slider__arrows">
      <button class="news-slider__arrow news-slider-prev">
        <span class="icon-font">
          <svg class="icon icon-arrow-left"><use xlinkHref="#icon-arrow-left"></use></svg>
        </span>
      </button>
      <button class="news-slider__arrow news-slider-next">
        <span class="icon-font">
          <svg class="icon icon-arrow-right"><use xlinkHref="#icon-arrow-right"></use></svg>
        </span>
      </button>
    </div>

    <div class="news-slider__pagination"></div>

  </div>

</div>

</div>

<svg hidden="hidden">
<defs>
  <symbol id="icon-arrow-left" viewBox="0 0 32 32">
    <title>arrow-left</title>
    <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z"></path>
  </symbol>
  <symbol id="icon-arrow-right" viewBox="0 0 32 32">
    <title>arrow-right</title>
    <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z"></path>
  </symbol>
</defs>
</svg>

<div class="swiper-container">
    
    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <div class="swiper-scrollbar"></div>
</div>
                    

            </div>
           
            
        </div>
    );
};

export default Work;