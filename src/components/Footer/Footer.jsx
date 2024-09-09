import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
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
            <div className="footerlogo"
            style={{fontWeight: "bold"}}>TechWiz
            </div>
          </div>
          <div className="mid">
            <Link to="/">Home</Link>
            <Link to="/service">Services</Link>
            <Link to="/">Themes</Link>
          </div>
          <div className="mid">
            <Link to="/support">Support</Link>
            <Link to="/show">Showcase</Link>
            <Link to="/contactUs">Get in Touch</Link>
            <Link to="/contactUs">Connect</Link>
          </div>
          <div className="mid">
            <Link to="/aboutUs">Our Team</Link>
            <Link to="/aboutUs">About us</Link>
            <Link to="/contactUs">Contact us</Link>
            <Link to="/aboutUs">Need Help?</Link>
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
          <p>
            2024 &copy;Copyright; Designed by Alpha Coders
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
