import React from 'react'
import './Tips.css'
import {tipsData} from '../../data/tipsData'
import whiteTick from '../../assets/whiteTick.png'

const Tips = () => {
  return (
    <div className="tips-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" style={{gap:'2rem'}}>
            <span className='stroke-text'>15</span>
            <span>Tips from </span>
            <span className='stroke-text'> Ronaldo</span>
        </div>

        <div className="tips">
            {tipsData.map((plan,i)=>(
                <div className="tip" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>

                    <div className="features">
                        {plan.features.map((feature,i) =>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Tips