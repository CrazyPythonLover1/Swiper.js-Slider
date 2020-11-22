import React, { useEffect, useState } from 'react';
import './Work.css';
// import './Work.scss';


import Slider from './Slider';


const Work = ({ work, handleClick, workBgColor, works, setCssProperty}) => {
   
    
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

    

    return (
        <div  >
            <div id="work"  >
                <div className="button-group mb-5" onClick={() => handleClick()} >
                    <a href="../../../data/Resume/IL.docx" download > <button className="resume" onClick={(e) => e.stopPropagation() }> <span> RESUME   </span>  </button> </a>
                    <a href="../../../data/Resume/US.docx" download> <button className="letter" onClick={(e) => e.stopPropagation() }> <span>   LETTER   </span>  </button> </a>
                    <span className="or"> or </span>
                </div>
                    <Slider works={works} setCssProperty={setCssProperty} />  

            </div>
           
            
        </div>
    );
};

export default Work;