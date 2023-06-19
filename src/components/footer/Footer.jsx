import React from 'react'
import './footer.css'
import {IoLogoFacebook} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'

const footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'>Charles Ling'ande</a>
    
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</ a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className='footer_socials'>
      <a href="https://facebook.com"><IoLogoFacebook/></a>
      <a href="https://instagram.com"><AiFillInstagram/></a>
      <a href="https://twitter.com"><BsTwitter/></a>
    </div>

    <div className='footer_copyright'>
      <small>&copy;2023 Charles Ling'ande. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default footer