import React from 'react';
import './Skills.css';
import resumeData from '../../../data/data.json';

const Skills = ({color}) => {
    const skills = resumeData.skills;
    return (
        <div id="skills" >
            
            <h1 className="section-title" style={{color:color}} > Skills </h1>
            <div className="row">
            {
                skills.map(skill=>{
                    return(
                        <div className="col-lg-6">
                        <div className="skill">
                            <h3 className="section-subtitle" style={{color:color}}> {skill.name} </h3>
                            <p> {skill.keywords.map(keyword=> <span> {keyword}, </span>)} </p>
                        </div>
                        </div>
                        
                    )
                })
            }
            
            </div>
            
        </div>
    );
};

export default Skills;