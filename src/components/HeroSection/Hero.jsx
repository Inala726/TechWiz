import React from 'react'
import { Navbar } from '../NavBar/Navbar'

const Hero = (props) => {
  return (
    <>

    <div className="hero" style={{
        backgroundImage: `url(${props.background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}>
        <Navbar/>
    </div>
      
    </>
  )
}

export default Hero
