import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const services = () => {
  return (
    <section id ='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>U/UX Design</h3>
          </div>
        
        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Custom Web Design & Development.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Corporate Branding & Graphics Design.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Wireframing.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Product Design.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Mobile App Design.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Wearables App Design</p>
          </li>
        </ul>
        </article>
     {/*U/UX Design*/}

     <article className='service'>
          <div className='service_head'>
            <h3>System Development</h3>
          </div>
        
        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Custom Software Development.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Mobile Application Developmen.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>IT Consulting.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Software Prototyping.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Enterprise Software Development.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Application Maintenance and Support.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Software Testing and Quality Assurance.</p>
          </li>
        </ul>
        </article>
        {/* End of System Development*/}


        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
        
        <ul className='service_list'>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Custom Web Application Development.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>eCommerce Development.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Front-End Design & Development.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Back-End Web Development.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Website/App Support & Maintenance.</p>
          </li>
          <li>
            <BsCheck className='service_list-icon'/>
            <p>Domain Names & Web Hosting.</p>
          </li>
        </ul>
        </article>
         {/* End of Web Development*/}

      </div>
    
    </section>
  )
}

export default services