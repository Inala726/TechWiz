import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoMediumOld } from "react-icons/bi";


const Footer = () => {
  return (
    <>

    <div className="footerDiv">
        <div className="midDiv">
        <div className="mid">
           <div className="footerlogo"></div>
        </div>
        <div className="mid">
            <Link>Home</Link>
            <Link>Services</Link>
            <Link>Themes</Link>
        </div>
        <div className="mid">
            <Link>Support</Link>
            <Link>Showcase</Link>
            <Link>Get in Touch</Link>
            <Link>Connect</Link>
        </div>
        <div className="mid">
            <Link>Our Team</Link>
            <Link>About us</Link>
            <Link>Contact us</Link>
            <Link>Need Help?</Link>
            <div className="icon">
                <FaFacebookF />
                <LuInstagram />
                <FaXTwitter />
                <FaLinkedinIn />
                <BiLogoMediumOld />
            </div>
        </div>
        </div>
        <div className="last">
            <p>2024 &copy;Copyright; Designed by <span className='alpha'>Alpha Coders</span></p>
        </div>
    </div>
      
    </>
  )
}

export default Footer
