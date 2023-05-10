import React from "react";
import logo from "../assets/logo-removebg.png";
import "../css/Footer.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiFillLinkedin } from "react-icons/ai";
import { MdForwardToInbox, MdAddIcCall } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare, FaInstagram } from "react-icons/fa";
import {IoLogoYoutube} from "react-icons/io"
const Footer = () => {
  return (
    <div className="Footer container-fluid">
      <div className="">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
          <div className="logo col">
            <img src={logo} />
          </div>
          <div className="col mb-5">
            <h1 className="mb-5">OUR STRETCH</h1>
            <p>
              Virtually Reality(VR) Technology Research and product Development
              Tech Tech (Innovation/career) Development Hub
            </p>
          </div>
          <div className="col mb-5">
            <h1 className="mb-5">QUICK LINKS</h1>
            <div className="d-flex gap-5">
              <div>
                <h5 className="mb-4">
                  <NavLink className="text-white text-decoration-none" to="">
                    Home
                  </NavLink>
                </h5>
                <h5 className="mb-4">
                  <NavLink className="text-white text-decoration-none" to="">
                    About
                  </NavLink>
                </h5>
                <h5 className="mb-4">
                  <NavLink className="text-white text-decoration-none" to="">
                    Success Stories
                  </NavLink>
                </h5>
              </div>
              <div>
                <h5 className="mb-4">
                  <NavLink className="text-white text-decoration-none" to="">
                    Opportunities
                  </NavLink>
                </h5>
                <h5 className="mb-4">
                  <NavLink className="text-white text-decoration-none" to="">
                    updates
                  </NavLink>
                </h5>
                <h5 className="mb-4">
                  <NavLink className="text-white text-decoration-none" to="">
                    contacts
                  </NavLink>
                </h5>
              </div>
            </div>
          </div>
          <div className="footer-contact col mb-5">
            <h1 className="mb-5">CONTACT INFO</h1>
            <p>
              <AiOutlineHome />
              <span className="m-3">NYARUGENGE, 11KN 89 St, Kigali-Rwanda</span>
            </p>
            <p>
              <MdForwardToInbox />
              <span className="m-3">info@santechrwanda.com</span>
            </p>
            <p>
              <MdAddIcCall />
              <span className="m-3">(+250) 783250033/(+250) 780309833</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container-copyright">
      <div>
        <hr />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          &copy; Copyright San Tech Ltd Rwanda 2022. All Rights Reserved
        </div>
        <div className="">
          <BsFacebook className="fs-2 m-2" />
          <FaTwitterSquare className="fs-2 m-2"/>
          <IoLogoYoutube className="fs-2 m-2" />
          <AiFillLinkedin className="fs-2 m-2" />
          <FaInstagram className="fs-2 m-2" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
