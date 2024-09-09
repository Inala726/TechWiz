import React, { useState } from "react";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navDiv">
        <div className="logo" style={{fontWeight: "bold"}}>TechWiz</div>

        <ul className="navFeatures">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return isActive ? { color: "blue" } : { color: "black" };
            }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/services"
            style={({ isActive }) => {
              return isActive ? { color: "blue" } : { color: "black" };
            }}
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            to="/aboutUs"
            style={({ isActive }) => {
              return isActive ? { color: "blue" } : { color: "black" };
            }}
          >
            <li>About Us</li>
          </NavLink>
          <NavLink
            to="/contactUs"
            style={({ isActive }) => {
              return isActive ? { color: "blue" } : { color: "black" };
            }}
          >
            <li>Contact Us</li>
          </NavLink>
        </ul>

        <input type="checkbox" id="checkbox" onClick={toggleMenu} />
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>

        {isOpen && (
          <ul className="dropdown">
            <Link to="/" className="navList">
            <li>
            Home
            </li>
            </Link>
          
            <Link to="/services" className="navList"> 
            <li>
              Services
              </li>
            </Link>
            
            <Link to="/aboutUs" className="navList">
            <li>
              About Us
              </li>
            </Link>
           
            <Link to="/contactUs" className="navList">
            <li>
              Contact Us
              </li>
            </Link>
           
          </ul>
        )}
      </div>
    </>
  );
};





