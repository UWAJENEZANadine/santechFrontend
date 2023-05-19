import React, { useState, createContext, useContext } from "react";
import "../css/header.css";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import business from "../assets/business.png";
import { MdOutlineRadio, MdEmail,MdCall } from "react-icons/md";

const Header = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedText, setHighlightedText] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const content = document.getElementById('content');
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const highlightedContent = content.innerHTML.replace(
      regex,
      '<span style="background-color: yellow">$1</span>'
    );
    setHighlightedText(highlightedContent);
  };

  return (
    <>
      <div className="header-container">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-1 header-container-top">
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
                  Application
                </NavLink>
              </h5>
            </div>
          </div>
        </div>
        <div className="header-container-middle">
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4">
            <div className="col">
              <h1>
                <span
                  className="text-white"
                  style={{ fontWeight: "700", padding: "1rem" }}
                >
                  SAN
                </span>
                <span style={{ color: "#88898d", fontWeight: "700" }}>
                  TECH
                </span>
               
              </h1>
              <div className="header-container-middle-line-text"></div>
               <h5 className="text-white text-uppercase mt-1" style={{letterSpacing:"2px"}}>Making your Ideas happen!</h5>
            </div>
            <div className="col d-sm-none d-md-none d-lg-block">
              <input
                type="text"
                className="search__input"
                placeholder="Search word"
              />

              <button className="search__button">
                <BiSearch className="search__icon" />
              </button>
             
              
            </div>
            <div className="col header-container-middle-left-side">
              <h3 className="text-center">CALL US TODAY</h3>
              <h5><MdEmail /> info@santechrwanda.com</h5>
            </div>
            <div className="col header-container-middle-left-side">
              <h3 className="text-center">MAIL US TODAY</h3>
              <h5><MdCall /> info@santechrwanda.com</h5>
            </div>
          </div>
        </div>
        <div className="header-container-bottom">
          <div className="row">
            <div className="col">
              <h3>
                <select
                  className="d-none d-sm-none d-md-none d-lg-block"
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
                <NavLink className="header-bottom-link" to="about">
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
                <NavLink className="header-bottom-link" to="contact">
                  Contact
                </NavLink>
              </h5>
            </div>

            <div className="col-2">
              <h5>
                <NavLink
                  target="_blank"
                  to="https://zeno.fm/radio/san-tech/"
                  className="header-bottom-link"
                >
                  
                  <MdOutlineRadio
                    style={{ fontSize: "1.4rem", marginTop: "-2px" }}
                  />
                  SanTech Radio
                </NavLink>
              </h5>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
