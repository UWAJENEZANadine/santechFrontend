import React from "react";
import logo from "../assets/logo-removebg.png";
import "../css/Footer.css";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiFillLinkedin } from "react-icons/ai";
import { MdForwardToInbox, MdAddIcCall } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import pic from "../assets/image1.PNG";

const Footer = () => {
  return (
    <>
      <div className="Footer container-fluid">
        <div className="">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
            <div className="logo col">
              <img src={logo} />
            </div>
            <div className="col mb-5">
              <h1 className="mb-5">OUR STRETCH</h1>
              <ul className="list">
                <li className="list-item">Virtually Reality(VR) Technology</li>
                <li className="list-item">Reasearch and Product development</li>
                <li className="list-item">
                  Innovation and career tech hub development{" "}
                </li>
              </ul>
            </div>
            <div className="col mb-5">
              <h1 className="mb-5">QUICK LINKS</h1>
              <div className="d-flex gap-5">
                <div>
                  <h5 className="mb-4">
                    <NavLink
                      className="text-white text-decoration-none"
                      to="/home"
                    >
                      Home
                    </NavLink>
                  </h5>
                  <h5 className="mb-4">
                    <NavLink
                      className="text-white text-decoration-none"
                      to="/about"
                    >
                      About us
                    </NavLink>
                  </h5>
                  <h5 className="mb-4">
                    <NavLink
                      className="text-white text-decoration-none"
                      to="/story"
                    >
                      Success Stories
                    </NavLink>
                  </h5>
                </div>
                <div>
                  <h5 className="mb-4">
                    <NavLink className="text-white text-decoration-none" to="">
                      Resources
                    </NavLink>
                  </h5>
                  <h5 className="mb-4">
                    <NavLink
                      className="text-white text-decoration-none"
                      to="/contact"
                    >
                      contact us
                    </NavLink>
                  </h5>
                </div>
              </div>
            </div>
            <div className="footer-contact col mb-5">
              <h1 className="mb-5">CONTACT INFO</h1>
              <p>
                <AiOutlineHome />
                <span className="m-3">
                  NYARUGENGE, 11KN 89 St, Kigali-Rwanda
                </span>
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
              <NavLink
                to="https://www.facebook.com/SANTechRwanda/"
                target="__blank"
                className="text-white"
              >
                {" "}
                <BsFacebook className="fs-2 m-2" />
              </NavLink>
              <NavLink
                to="https://twitter.com/santechltd3?lang=en"
                target="__blank"
                className="text-white"
              >
                <FaTwitterSquare className="fs-2 m-2" />
              </NavLink>
              <NavLink
                to="https://www.youtube.com/@santech2809/videos"
                target="__blank"
                className="text-white"
              >
                <IoLogoYoutube className="fs-2 m-2" />
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/san-tech-ltd-80b1a71a2/"
                target="__blank"
                className="text-white"
              >
                <AiFillLinkedin className="fs-2 m-2" />
              </NavLink>
              <NavLink
                to="https://www.facebook.com/SANTechRwanda/"
                target="__blank"
                className="text-white"
              >
                <FaInstagram className="fs-2 m-2" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-image">
        <img src={pic} style={{ width: "100%" }} />
      </div>
    </>
  );
};

export default Footer;
