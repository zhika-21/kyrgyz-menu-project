import React from 'react'
import "./Footer.css"
import {RiFacebookFill} from "react-icons/ri"
import {GrInstagram} from "react-icons/gr"
import {FiTwitter} from "react-icons/fi"

const Footer = () => {
  return (
   
    <footer>
      <a href="#" className='footer__logo'>Seytech</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>     
      </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/zhyldyz.sultanova/"><RiFacebookFill/></a>
        <a href="https://www.instagram.com/"><GrInstagram/></a>
        <a href="https://www.twitter.com/"><FiTwitter/></a>

      </div>

      <div className='footer__copyright'>
        <small>&copy; All rights reserved</small>

      </div>

    

    </footer>
  )
}

export default Footer