import React from 'react'
import "./Footer.css"
import Github from "../../assets/github.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      
      <div className="footer">
        <div className='social-links'>
          <a href="https://github.com/martinsosafer">
            <img src={Github} alt="GitHub logo" />
          </a>
          <a href="https://www.linkedin.com/in/mart%C3%ADn-fernandez-53917b245">
            <img src={LinkedIn} alt="LinkedIn logo" />
          </a>
        </div>
      <div className='logo-f'>
        <img src={Logo} alt='fitness-club Logo'/>
      </div>
      </div>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
   </div>
  )
}

export default Footer
