import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";
import kick from "../../assets/soccerkick.png"

export const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
        <div className="left-r">
            <img src={image1} alt=""/>
            <img src={image2} alt=""/>
            <img src={image3} alt=""/>
            <img src={image4} alt=""/>
        </div>
        <div className="right-r">
            {/*<span>some reasons</span>*/}
            <div>
                <span className="stroke-text">Only </span>
                <span>the best</span>
            </div>
            <div className="details-r">
              <div>
                <img src={tick} alt=""></img>
                <span>Train with Modern technology</span>
              </div>
              <div>
                <img src={tick} alt="" />
                <span>Filter by positions</span>
              </div>
              <div>
                <img src={tick} alt="" />
                <span>Proven to work at the utmost highest level</span>
              </div>
              <div>
                <img src={tick} alt="" />
                <span>reliable partners</span>
              </div>
            </div>
        </div>
        <div className = "kick">
          <img src={kick} alt="" className="kickimg"/>
        </div>
    </div>
  )
}

export default Reasons