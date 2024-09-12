import React from 'react'
import { Navbar } from '../NavBar/Navbar'
import "./hero.css"

const Hero = (props) => {
  return (
    <>

    <div className="hero" style={{
        backgroundImage: `url(${props.background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay"
    }}>
        <Navbar/>
        <div className="heroText">
            <h2 className='theme'>{props.theme}</h2>
            <p className='content'>{props.content}</p>
        </div>
    </div>
      
    </>
  )
}

export default Hero
