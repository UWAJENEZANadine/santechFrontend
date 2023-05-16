import React, { useState, useEffect } from "react";
import "../css/header.css";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import business from "../assets/business.png";
import { MdOutlineRadio } from "react-icons/md"
import logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="container-fluid">
          <div className="row header-container-top">
            <div className="col">
              <h4>
                <img src={business} /> Smart Applications and Networking
                Technology
              </h4>
            </div>
            <div className="col header-container-link">
              <h5>
                <NavLink className="header-top-link" to="">
                  Tech blog
                </NavLink>
              </h5>
              <h5>
                <NavLink className="header-top-link" to="">
                  Media
                </NavLink>
              </h5>
              <h5>
                <NavLink className="header-top-link" to="">
                  Career
                </NavLink>
              </h5>
              <h5>
                <NavLink className="header-top-link" to="">
                  Credit Application
                </NavLink>
              </h5>
            </div>
          </div>
        </div>
        <div className="header-container-middle">
          <div className="row">
            <div className="col">
              <h1>
                <span className="text-white" style={{ fontWeight: "700" }}>
                  SAN
                </span>
                <span style={{ color: "#88898d", fontWeight: "700" }}>
                  TECH
                </span>
              </h1>
              <div className="header-container-middle-line-text"></div>
            </div>
            <div className="col">
              <input
                type="text"
                className="search__input"
                placeholder="search"
              />
              <button className="search__button">
                <BiSearch className="search__icon" />
              </button>
            </div>
            <div className="col header-container-middle-left-side">
              <h5>info@santechrwanda.com</h5>
            </div>
            <div className="col-2 header-container-middle-left-side">
              <h5>Others</h5>
            </div>
          </div>
        </div>
        <div className="header-container-bottom">
          <div className="row">
            <div className="col">
              <h3>
                <select
                  style={{
                    width: "",
                    fontSize: "1.5rem",
                    textTransform: "uppercase",
                    letterSpacing: ".2rem",
                    fontWeight: "600",
                  }}
                >
                  <option selected> Initiatives</option>
                  <option>San tech Hub</option>
                  <option>E-visitors system</option>
                  <option>Annika Technology</option>
                </select>
              </h3>
            </div>
            <div className="col header-container-link-bottom">
              <h5>
                <NavLink className="header-bottom-link" to="">
                  Home
                </NavLink>
              </h5>
              <h5>
                <NavLink className="header-bottom-link" to="">
                  About
                </NavLink>
              </h5>
              <h5>
                <NavLink className="header-bottom-link" to="">
                  Success stories
                </NavLink>
              </h5>
              <h5>
                <NavLink className="header-bottom-link" to="">
                  Resources
                </NavLink>
              </h5>
              <h5>
                <NavLink className="header-bottom-link" to="">
                  Contact
                </NavLink>
              </h5>
            </div>
            <div className="col-2">
              <h5><NavLink target="_blank" to="https://zeno.fm/radio/san-tech/" className="header-bottom-link"> <MdOutlineRadio style={{fontSize:"1.4rem", marginTop:"-2px"}}/> Radio </NavLink></h5>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
