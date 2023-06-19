import React from 'react'
import './about.css'
import ME from '../../assets/aboutMe.jpg'
import {BiFolderOpen} from 'react-icons/bi'
import {TbAward} from 'react-icons/tb'
import {RiUserStarLine} from 'react-icons/ri'

const about = () => {
  return ( 
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about_content'> 
         <div className='about_cards'>
          <article className='about_card'>
            <TbAward className='about_icon'/>
            <h5>Experience</h5>
            <small>4+ Years Working</small> 
          </article>

          <article className='about_card'>
            <RiUserStarLine className='about_icon'/>
            <h5>Clients</h5>
            <small>200+ Africawide</small>
          </article>

          <article className='about_card'>
            <BiFolderOpen className='about_icon'/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>
        <p>
         Detail-oriented and passionate developer, with a focus on the development 
         and implementation of modern digital solutions. 4+ years of experience in 
         developing a wide range of technology solutions. Skilled and creative
         GUI/GUX designer, and a proud muslim.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}   

export default about