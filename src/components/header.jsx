import React from "react";
import "../css/header.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <>
      <div className="header-box container-fluid d-flex justify-content-between align-items-center">
        <div className=""></div>
        <div className="">
          <NavLink className="header-links-social-media" to="">
            Blog |
          </NavLink>
          <NavLink className="header-links-social-media" to="">
            Media |
          </NavLink>
          <NavLink className="header-links-social-media" to="">
            Careers |
          </NavLink>
          <NavLink className="header-links-social-media" to="">
            Contact US |
          </NavLink>
        </div>
      </div>
      <div className="header-links-logo-container container-fluid d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <img src={logo} style={{height: "10vh" }} />
        </div>
        <div className="header-links-container ">
          <NavLink className="header-links text-decoration-none" to="home">
            Home
          </NavLink>
          <NavLink className="header-links text-decoration-none" to="">
            About
          </NavLink>
          <NavLink className="header-links text-decoration-none" to="">
            Initiatives
          </NavLink>
          <NavLink className="header-links text-decoration-none" to="">
            Success Stories
          </NavLink>
          <NavLink className="header-links text-decoration-none" to="">
            Opportunities
          </NavLink>
          <NavLink className="header-links text-decoration-none" to="">
            updates
          </NavLink>
          <NavLink className="header-links text-decoration-none" to="">
            contacts
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
