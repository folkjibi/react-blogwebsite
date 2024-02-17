import React from 'react'
import './About.css'
import AboutImg from '../../asset/images/about.svg'

const About = () => {
  return (
    <div className="container">
      <h2 className="title">เกี่ยวกับเรา</h2>
      <img src={AboutImg} alt="About Main" />
    </div>
  )
}

export default About