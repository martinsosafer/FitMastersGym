import React from 'react'
import "./Plan.css"
import { plansData } from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"
const Plans = () => {
  return (
    <div className="plans-container" id='plans'>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span className='stroke-text'> READY</span>
        <span>TO START</span>
        <span className='stroke-text'> WITH US?</span>
      </div>
      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="thick icon" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span className='arrowIcon'>See more benefits &rarr;</span>
            </div>
              <button className="btn">Join now </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
