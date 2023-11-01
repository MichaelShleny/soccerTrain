import React from 'react'
import './Programs.css' 
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
export const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/*Header*/}
        <div className="programs-header">
            <span className = "stroke-text">Explore</span>
            <span>Your Favorite</span>
            <span className = "stroke-text">Positions</span>
        </div>

        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        {/*
                        <span>View</span>
                        <img src={RightArrow} />
                        */}
                        
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs
