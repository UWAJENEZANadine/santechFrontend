import React, { useState, createContext, useContext } from "react";
import "../css/header.css";
import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import business from "../assets/business.png";
import { MdOutlineRadio, MdEmail, MdCall } from "react-icons/md";
import {
  Navbar,
  Nav,
  Form,
  Button,
  InputGroup,
  Dropdown,
} from "react-bootstrap";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Header = () => {
  const [Initiatives, setInitiatives] = React.useState("");

  const handleChange = (event) => {
    setInitiatives(event.target.value);
  };

  return (
    <div className="Header-container">
      <div className="Top-part d-flex justify-content-between align-items-center">
        <div className="d-sm-none d-md-none d-lg-flex">
          <h4 className="" style={{color:"white"}}>
            <img src={business} /> Smart Applications and Networking Technology
          </h4>
        </div>
        <div className="Top-part-link-container d-flex justify-content-between align-items-center">
          <h5>
            <NavLink className="Top-part-link" to="">
              Tech blog
            </NavLink>
          </h5>
          <h5>
            <NavLink className="Top-part-link" to="">
              Media
            </NavLink>
          </h5>
          <h5>
            <NavLink className="Top-part-link" to="">
              Career
            </NavLink>
          </h5>
          <h5>
            <NavLink className="Top-part-link" to="">
              Application
            </NavLink>
          </h5>
        </div>
      </div>

      <div className="Middle-part d-flex justify-content-between align-items-center">
        <div className="">
          <h1 className="Santech-text-logo">
            <span className="Santech-text-span-1"
            >
              SAN
            </span>
            <span className="Santech-text-span2">TECH</span>
          </h1>
          <div className="Middle-part-line-text"></div>
          <h5
            className="text-uppercase Santech-text-span3  mt-3"
            
          >
            <i>Making your Ideas happen!</i>
          </h5>
        </div>
        <div className="col-3">
          <input
            type="text"
            className="search__input"
            placeholder="Search word"
          />

          <button className="search__button">
            <BiSearch className="search__icon" />
          </button>
        </div>
        <div className="col-5 d-lg-flex justify-content-between align-items-center d-sm-none d-md-flex ">
          <div className="Middle-part-call">
            <h3 className="text-center">CALL US TODAY</h3>
            <h5>
              <MdEmail /> +250 783 250 033/ +250 780 309 833
            </h5>
          </div>
          <div className="Middle-part-call">
            <h3 className="text-center">MAIL US TODAY</h3>
            <h5>
              <MdCall /> info@santechrwanda.com
            </h5>
          </div>
        </div>
      </div>
      <div className="last-part">
        <Navbar expand="xl">
          <div className="col-3">
            <Navbar.Brand href="">
              <Box sx={{ minWidth: 100 }}>
                <FormControl fullWidth className="mt-3" >
                  <InputLabel id="demo-simple-select-label" >Initiatives</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Initiatives"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>SAN TECH HUB</MenuItem>
                    <MenuItem value={20}>E-vistors system</MenuItem>
                    <MenuItem value={30}>Annika Technology</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="col-9">
              <Nav className="">
                <Nav.Link className="last-link"
                  href="home"
                  style={{
                    padding:"1rem",
                    fontSize: "1.5rem",
                    marginLeft: "10rem",
                    color:"#3b82f6",
                  }}
                >
                  HOME
                </Nav.Link>
                <Nav.Link className="last-link"
                  href="about"
                  style={{ fontSize: "1.5rem",  padding:"1rem",color:"#3b82f6" }}
                >
                  ABOUT
                </Nav.Link>
                <Nav.Link className="last-link"
                  href="story"
                  style={{ fontSize: "1.5rem" , padding:"1rem",color:"#3b82f6"}}
                >
                  SUCCESS STORIES
                </Nav.Link>
                <Nav.Link className="last-link"
                  href="#services"
                  style={{fontSize: "1.5rem",  padding:"1rem" ,color:"#3b82f6"}}
                >
                  RESOURCES
                </Nav.Link>
                <Nav.Link className="last-link"
                  href="contact"
                  style={{ fontSize: "1.5rem",  padding:"1rem",color:"#3b82f6" }}
                >
                  CONTACT US
                </Nav.Link>
              </Nav>
            </div>
            <div className="col">
              <Nav>
                <Nav.Link className="last-link"
                  href="#home"
                  style={{ marginLeft: "3rem", fontSize: "1.5rem",color:"#3b82f6" }}
                >
                  <MdOutlineRadio style={{marginTop:"-7px"}}/> SANTECH RADIO
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
