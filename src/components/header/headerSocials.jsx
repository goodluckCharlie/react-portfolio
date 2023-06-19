import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const headerSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/charlie-goodluck-ling-ande-b225a2145/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/goodluckCharlie" target="_blank"><BsGithub/></a>
        <a href="https://facebook.com" target="_blank"><FaFacebookF/></a>

    </div>
  )
}

export default headerSocials