import React from 'react'
import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import adidas from "../../assets/adidas.png"
import nb from "../../assets/nb.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="man with disk" />
        <img src={image2} alt="man with weights" />
        <img src={image3} alt="man with dumbells" />
        <img src={image4} alt="man doing biceps" />
        
       
      </div>
      <div className="right-r">
        <span >This is why</span>
        <div>
          <span className='stroke-text'>you </span>
          <span>should choose us</span>
        </div>

        <div className='details-r'>
          <div>
            <img src={tick} alt="tick"></img>
            <span>OVER +140 EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>TRAIN SMARTER AND FASTER</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>RELIABLE PARTNERS</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>1 FREE PROGRAM FOR NEW MEMEBERS</span>
          </div>
        </div>
        <span className='partners'>OUR PARTNERS</span>
        <div className="partnersimg">
          <img src={nb} alt="ng logo" />
          <img src={adidas} alt="adidas logo" />
          <img src={nike} alt="nike logo " /></div>
      </div>
   </div>
  )
}

export default Reasons
