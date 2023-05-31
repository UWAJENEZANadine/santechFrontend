import React from "react";
import "../../css/LayoutDash.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-removebg.png"
import { MdOutlineDashboard,MdOutlineIndeterminateCheckBox } from "react-icons/md"
import { SiMicrodotblog } from "react-icons/si"
import { FiSettings } from "react-icons/fi"
import { TfiComments } from "react-icons/tfi"
const DashSideBar = () => {
  return (
    <>
      <input type="checkbox" id="menu-toggle" />
      <div className="sidebar">
        <div className="side-header">
          <h3>
            <img src={logo}  style={{width:"100%", height:"10vh"}}/>
          </h3>
        </div>

        <div className="side-content">
          <div className="side-menu">
            <ul>
              <li>
                <NavLink to="/dashboard" className="active side-menu-link">
                  <span> < MdOutlineDashboard /> <small>Dashboard</small></span>
                 
                </NavLink>
              </li>
              <li>
                <NavLink to="blog" className="side-menu-link">
                <span> <SiMicrodotblog/>  <small>Blogs</small></span>
                 
                </NavLink>
              </li>
              <li>
                <NavLink to="technology" className="side-menu-link">
                <span>< MdOutlineIndeterminateCheckBox/>  <small>technology</small></span>
                
                </NavLink>
              </li>
              <li>
                <NavLink to="testmonials" className="side-menu-link">
                <span><TfiComments /> <small>Testmonials</small></span>
               
                </NavLink>
              </li>
              <li>
                <NavLink to="settings" className="side-menu-link">
                <span> <FiSettings /> <small>Settings</small></span>
                 
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashSideBar;
