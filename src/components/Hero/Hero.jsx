import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import '../App.css'
import zlatan from "../../assets/zlatan-ibrahimovic-png-41053.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {

  const transition = {type:'spring',duration:3}
  const mobile
   = window.innerWidth<=768 ? true: false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
              <motion.div
                initial={{left: mobile? "218": '238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition,type:'tween'}}
              ></motion.div>
              <span>the best training from the top players</span>
            </div>

          {/*Heading for top players  */}
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Train </span>
              <span>Like</span>
            </div>
            <div>
              <span>The best</span>
            </div>
            <div>
              <span>
                The only site out there that has daily 
                updated training sessions from the best players in the game
               </span>   
            </div>
          </div>
          {/*figures*/}
          <div className="figures">
            <div>
              <span>
                <NumberCounter end={40} start={10} delay="4" preFix="+"/>
              </span>
              <span>Professional Players</span>
            </div>
            <div>
              <span>
              <NumberCounter end={3} start={0} delay="3" preFix="+"/>
              </span>
              <span>Standouts of the Week</span>
            </div>
            <div>
              <span>
              <NumberCounter end={120} start={80} delay="3.5" preFix="+"/>
              </span>
              <span>Unique training</span>
            </div>
          </div>
          {/* Hero buttons */}
          <div className="hero-buttons">
            <button className="btn">Subscribe</button>
            <button className="btn">Blog</button>

          </div>
        </div>
        <div className="right-h">
          <button className="btn">Join Now</button>

          <motion.div 
          initial = {{right: "-1rem" }}
          whileInView={{right: "4rem" }}
          className="heart-rate">
            <img src={Heart} alt=""/>
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>
          {/*hero images*/}
          <img src={zlatan} alt="" className="hero-image" />
          <motion.img
          initial={{right:'11rem'}}
          whileInView={{right: '20rem'}}
          transition={transition}
          src={hero_image_back} alt="" className="hero-image-back" />
        </div>
    </div>
  )
}

export default Hero