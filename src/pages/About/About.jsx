import React from 'react'
import "./about.css"
import AboutImage from '../../assets/pexels-pixabay-208321.jpg'
import Hero from '../../components/HeroSection/Hero'
import { CgEnter } from 'react-icons/cg'

const About = () => {
  return (
    <>

    <div className="aboutDiv">
        <Hero theme="About Us" content="Learn more about us"/>
        <div className="best">
            <div className="img">
                <img src={AboutImage} alt="" />
            </div>
            <div className="aboutText">
                <h4>Our Company</h4>
                <h2>We always give the <span className='h2'>best</span>  experience</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, illo inventore excepturi fuga, quam delectus earum nulla velit tenetur doloribus qui voluptate nam hic nesciunt? Veritatis corporis similique sit voluptatibus!</p>
                <button className='button'><h4>Contact Us Now</h4></button>
            </div>
        </div>
        <div className="best">
            <div className="leftWhat">
            <h4>What we do</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis corporis tempora dolorum deleniti. Doloremque quibusdam inventore quo, distinctio a in esse dolorem omnis provident quas modi? Suscipit porro eum distinctio?</p>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <h5>Lorem ipsum dolor sit amet.</h5>
            </div>
           
           <div className="rightWhat">
              <div className="right">
                <h3>2000+</h3>
                <p>Reliable Employees</p>
              </div>
              <div className="right">
                <h3>3800+</h3>
                <p>Satisfied Clients</p>
              </div>
              <div className="right">
                <h3>1000+</h3>
                <p>Completed Projects</p>
              </div>
              <div className="right">
                <h3>50</h3>
                <p>Well-deserved awards</p>
              </div>
           </div>
        </div>
        <div className="why" style={{
          backgroundImage: `url(${AboutImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}>

          <h4>Lorem ipsum dolor sit amet.</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi excepturi reiciendis delectus dignissimos cum praesentium?</p>
          <button>Contact us</button>

        </div>
    </div>
      
    </>
  )
}

export default About
