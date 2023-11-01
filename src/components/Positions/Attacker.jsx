import React,  {useState} from 'react'
import Header from '../Header/Header'
import './Attacker.css'
import  attackerData from '../../data/attackerData'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import Footer from '../Footer/Footer'
import {motion} from 'framer-motion'

export const Attacker = () => {
    const transition = { type: "spring", duration: 3};
    const [selected,setSelected] = useState(0);
    const tLength = attackerData.length;
  return (
    <div className="attacker-main">
        <div className="position-header">
        <Header/>
        </div>
        <div className="intro-container">
            <div className="intro-content">
                    <span>
                        <span> Attackers</span>
                    </span>
                <p>
                Welcome to the soccer attacker's training program! This program is designed to help you improve your technical skills, physical conditioning, and tactical awareness as an attacker on the field.
                </p>
                <p>
                Whether you want to score goals like Aubameyang or create scoring opportunities for your teammates, this training program will guide you through various drills and exercises to enhance your game.
                </p>
            </div>
        </div>
         <div className="attacker">    
            <div className="left-t">
                    <span>
                        <span className = "stroke-text">Explore </span>
                        <span> Attackers</span>
                    </span>
                    <motion.span
                     key = {selected}
                     initial={{ opacity: 0, x: -100}}
                     animate= {{opacity: 1, x: 0}}
                     exit={{opacity:0, x : 100}}
                     transition = {{ ...transition, duration:3}}
                    >{attackerData[selected].review}{<br></br>}{<br></br>}
                    {attackerData[selected].review2}{<br></br>}{<br></br>}
                    {}{attackerData[selected].review3}{<br></br>}{<br></br>}
                    {attackerData[selected].review4}{<br></br>}{<br></br>}
                    {attackerData[selected].review5}{<br></br>}{<br></br>}
                    {attackerData[selected].review6}{<br></br>}{<br></br>}
                    {attackerData[selected].review7}{<br></br>}{<br></br>}
                    {attackerData[selected].review8}{<br></br>}{<br></br>}
                    {attackerData[selected].review9}{<br></br>}{<br></br>}
                    {attackerData[selected].review10}{<br></br>}{<br></br>}
                    {attackerData[selected].review11}{<br></br>}{<br></br>}

                    </motion.span>
                    <span>
                        <span style ={{color: 'var(--orange)'}}>
                            {attackerData[selected].name}
                        </span>{" "}
                        - {attackerData[selected].status}
                    </span>
                </div>
                <div className="right-t">
                    <div></div>
                    <motion.div
                    initial={{ opacity: 0, x: -100}}
                    transition = {{ ...transition, duration:2}}
                    whileInView={{ opacity: 1, x: 0}}
                    ></motion.div>
                    <div></div>
                    <motion.div
                    initial={{ opacity: 0, x: 100}}
                    transition = {{ ...transition, duration:2}}
                    whileInView={{ opacity: 1, x: 0}}
                    ></motion.div>
                    <motion.img 
                    key = {selected}
                    initial={{ opacity: 0, x: 100}}
                    animate= {{opacity: 1, x: 0}}
                    exit={{opacity:0, x : -100}}
                    transition = {{ ...transition, duration:2}}
                    src={attackerData[selected].image} alt="" />

                    <div className="arrows">
                        <img 
                        onClick={()=>{
                            selected===0
                            ? setSelected(tLength -1)
                            : setSelected((prev)=> prev -1)
                        }}
                        
                        src={leftArrow} alt="" />
                        <img 
                        /* If at last testimnial, then goes to first (0) */
                        onClick={()=>{
                            selected === tLength - 1
                            ? setSelected(0)
                            : setSelected((prev)=> prev +1)
                        }}
                        
                        src={rightArrow} alt="" />
                    </div>
                </div>
            </div>
        <Footer />
    </div>
  )
}
export default Attacker;






















