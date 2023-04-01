import React from 'react'
import Header from '../Header/Header'
import "./HeroSection.css"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCounter from "number-counter"
import {motion} from "framer-motion"
export const HeroSection = () => {
  
  const transition = { type: "spring", duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false;
  
  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <div className="header-container"> {/* add a container for the header */}
          <Header className="header-h" />
        </div>
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div initial={{ left: mobile?"178px":"238px" }}
            whileInView={{ left: "8px" }}
            transition={transition}>
           
          </motion.div>
          <span>THE BEST FITNESS CLUB IN TOWN</span>
        </div>
        {/* Hero Heading  */}
        <div className="hero-text">
        <div>
          <span className='stroke-text'>SHAPE </span>
          <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
            <div><span className='span-h'>
            We will help you shape and build your ideal body so you can live your life to its fullest.
            </span></div>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay="4" preFix="+"/></span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><span><NumberCounter end={983} start={500} delay="2" preFix="+"/></span></span>
            <span>members joined</span>
          </div>
          <div>
            <span ><NumberCounter end={50} start={0} delay="2" preFix="+"/></span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons  */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
           <button className="btn">Learn More</button>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="right-h">
        <button className='btn'>Join Now</button>
        <motion.div className="heart-rate"
          initial={{right:"-1rem"}}
          transition={transition}
          whileInView={{ right: "4rem" }}
        >
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span> 
        </motion.div>
          {/* Hero Images */}
          <img src={hero_image} alt="fitnessman" className='hero-image'/>
        <motion.img src={hero_image_back} alt="rays of color" className='hero-image-back'
         initial={{right:"11rem"}}
          transition={transition}
          whileInView={{ right: "23rem" }}
        />
        <motion.div className="calories"
        initial={{right:"37rem"}}
          transition={transition}
          whileInView={{ right: "28rem" }}
        >
          <img src={Calories} alt="calories graphic" className='calories-image' />
          <div>
          <span>Calories burned</span>
          <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
