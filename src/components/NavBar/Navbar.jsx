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
        <div className="logo">Lovely</div>

        <ul className="navFeatures">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return isActive ? { color: "white" } : { color: "black" };
            }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/services"
            style={({ isActive }) => {
              return isActive ? { color: "white" } : { color: "black" };
            }}
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            to="/aboutUs"
            style={({ isActive }) => {
              return isActive ? { color: "white" } : { color: "black" };
            }}
          >
            <li>About Us</li>
          </NavLink>
          <NavLink
            to="/contactUs"
            style={({ isActive }) => {
              return isActive ? { color: "white" } : { color: "black" };
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
          <ul className="navFeatures dropdown">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/aboutUs">
              <li>About Us</li>
            </Link>
            <Link to="/contactUs">
              <li>Contact Us</li>
            </Link>
          </ul>
        )}
      </div>
    </>
  );
};
