import React from 'react'
import "./Hero.css";
import cocabaner from '../assets/cocabaner.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={cocabaner} alt="" className='hero__image' />
      <p className='hero__text'>Refreshing Africa since 1989 </p>
    </div>
    
  )
}

export default Hero