import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import resumeData from '../../../data/data.json';
import Work from '../Work/Work';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Popup from '../Popup/Popup';


const Home = () => {
    const [siteInfo, setSiteInfo] = useState({
        bgColor: "white",
        count: 1,
    });
    const works = [];
    resumeData?.work.map(item => {
        return works.push(item)
    })
    useEffect(() => {
        works[0] && setSiteInfo({ ...siteInfo, work: works[0] })
    }, [])
    if (works.length === siteInfo.count) {
        setSiteInfo({ ...siteInfo, count: 0 })
    }
    const handleClick = () => {
        setSiteInfo({ bgColor: works[siteInfo.count].bgColor, count: siteInfo.count + 1, work: works[siteInfo.count] })
        
    }
    const [workBgColor, setWorkBgColor] = useState("#232323");

    const handleWorkBgcolor = () => {
        if ( works[siteInfo.count].bgColor) {
            setWorkBgColor( works[siteInfo.count].bgColor)
        }
    }
    return (
        <div className="background"  id="home" style={{ background: siteInfo.bgColor, minHeight: "100vh" }} onClick={() => {
            // handleClick()
            handleWorkBgcolor()}}>

            <Navbar color={siteInfo.work?.color} fontColor={siteInfo.work?.fontColor} />
            {/* <Popup/> */}
            <Header color={siteInfo.work?.color} fontColor={siteInfo.work?.fontColor} bgColor={siteInfo.work?.bgColor} />
            <div className="container-fluid">
                <div className="row mx-auto" style={{maxWidth: "1300px"}}>
                    {/* <div className="col-md-2 col-sm-1 col-xs-1 " > </div> */}

                    <div className="col-md-12 col-sm-9 col-xs-9 mx-auto work-column p-0 m-0" >
                        
                        {/* {
                            works && works.map(work => <Work work={siteInfo.work} handleClick={handleClick} workBgColor={workBgColor} />)
                        } */}

                        <Work work={siteInfo.work} handleClick={handleClick} workBgColor={workBgColor} works={works} />
                        <div style={{ width: " 100%", minHeight: "50px" }}> </div>
                    </div>

                    {/* <div className="col-md-2 col-sm-1 col-xs-1" ></div> */}
                </div>

                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1 px-3 "></div>

                    <div className=" col-lg-9 col-md-9 col-sm-10 p-0 mx-auto" >
                        <Education education={resumeData.education} color={siteInfo.work?.color} fontColor={siteInfo.work?.fontColor}  />
                        <div style={{ width: " 100%", minHeight: "50px" }} > </div>
                        <Skills color={siteInfo.work?.color} />
                        <div style={{ width: " 100%", minHeight: "130px" }} > </div>
                    </div>

                    <div className="  col-md-1 col-sm-1 px-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Home;