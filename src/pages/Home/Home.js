import React from 'react'
import './Home.css'
import HomeImg from '../../asset/images/home.svg'

const Home = () => {
  return (
    <div className="container">
      <h2 className="title">หน้าแรกของเว็บไซต์</h2>
      <img src={HomeImg} alt="Home Main" />
    </div>
  )
}

export default Home