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
        <div className="navFeatures">
          <NavLink
          to="/"
            style={({ isActive }) => {
              return isActive ? { color: "white" } : { color: "black" };
            }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
          to="/"
           style={({ isActive }) => {
            return isActive ? { color: "white" } : { color: "black" };
          }}
          >
            <li>inala</li>
          </NavLink>
          <NavLink 
          to="//"
           style={({ isActive }) => {
            return isActive ? { color: "white" } : { color: "black" };
          }}
          >
            <li>inala</li>
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
        </div>

        <input type="checkbox" id="checkbox" onClick={toggleMenu} />
        <label for="checkbox" class="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>

        {isOpen && (
          <div className="navFeatures">
            <Link>
              <li>inala</li>
            </Link>
            <Link>
              <li>inala</li>
            </Link>
            <Link>
              {" "}
              <li>inala</li>
            </Link>
            <Link>
              <li>About Us</li>
            </Link>
            <Link>
              <li>Contact Us</li>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
