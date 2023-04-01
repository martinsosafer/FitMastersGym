import React, { useState } from 'react'
import "./Testimonials.css"
import { testimonialsData } from '../../data/testimonialsData'
import rightArrow from "../../assets/rightArrow.png"
import leftArrow from "../../assets/leftArrow.png"
import { motion } from "framer-motion"
const Testimonials = () => {
  const transition={type:"spring",duration:3}
  const [selected, setSelected] = useState(0)
  const testimonialsLength = testimonialsData.length;
  return (
    <div className="testimonials" id='testimonials'>
      <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>what our </span>
        <span >fitness fam </span>
        <span className='stroke-text'>say about us</span>
        <motion.span
          key={selected}
          initial={{opacity:0 ,x:-100}}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className='testimonial-name'>
            {testimonialsData[selected].name}
          </span>
          -{testimonialsData[selected].status}
        </span>
      </div>
      
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition,duration:2}}
          whileInView={{opacity:1 , x:0}}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition,duration:2}}
          whileInView={{opacity:1 , x:0}}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{opacity:0 ,x:100}}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image} alt='testimonials people' className='testimonial-photo' />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(testimonialsLength - 1)
                : setSelected((prev) => prev - 1)
            }}
            src={leftArrow} alt='rightArrow' />
          <img
             onClick={() => {
              selected ===testimonialsLength-1
                ? setSelected(0)
                : setSelected((prev) => prev +1)
            }}
            src={rightArrow} alt='rightArrow' />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
