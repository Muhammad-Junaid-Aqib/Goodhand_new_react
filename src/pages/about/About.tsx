import React from 'react'
import abc from '../../assets/mia.mp4'

const About = () => {
  return (
    <div>
      <h1> video </h1>
      <video  width="50%"  autoPlay muted loop>
        <source src={abc} />
      </video>
    </div>
  )
}

export default About
