import React, { useState } from 'react'
import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import {Link} from "react-scroll"
import './Header.css'
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const[menuOpened,setMenuOpened]=useState(false)
  return (
    <div className='header'>
      <img src={Logo} alt="fitnessLogo" className='logo' />
      {(menuOpened === false && mobile === true)?(
        <div style={{
          backgroundColor: "var(--appColor)",
          padding: "0.5rem",
          borderRadius: "5px"
        }}
        onClick={()=>setMenuOpened(true)}
        >
          
          
          <img src={Bars} alt='bars hamburguericon' style={{ width: "1.5rem", height: "1.5rem" }} /></div>
      ):( <ul className='header-menu'>
        <li onClick={()=>setMenuOpened(false)}><Link to="home" smooth={true} >Home</Link></li>
        <li onClick={()=>setMenuOpened(false)}><Link to="programs" smooth={true} duration={500}>Programs</Link></li>
        <li onClick={()=>setMenuOpened(false)}><Link to="reasons" smooth={true} duration={1000}>Why us</Link></li>
        <li onClick={()=>setMenuOpened(false)}><Link to="plans" smooth={true} duration={1500}>Plans</Link></li>
        <li onClick={()=>setMenuOpened(false)}><Link to="testimonials" smooth={true} duration={1500}>Testimonials</Link></li>
      </ul>
      )}
     
    </div>
  )
}

export default Header
