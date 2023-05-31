import React from "react";
import "../../css/LayoutDash.css";

import { HiOutlineSearch, HiOutlineChat, HiOutlineBell } from "react-icons/hi";
const DashHeader = () => {
  return (
    <div className="main-content">
      <header>
        <div className="header-content">
          <label for="menu-toggle">
            <span className="las la-bars"></span>
          </label>

          <div className="header-menu">
            <label for="">
              <span className="las la-search"></span>
            </label>

            <div className="notify-icon">
              <span className="las la-envelope"></span>
              <span className="notify">4</span>
            </div>

            <div className="notify-icon">
              <span className="las la-bell"></span>
              <span className="notify">3</span>
            </div>

            <div className="user">
              <div className="bg-img"></div>

              <span className="las la-power-off"></span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="page-header">
          <h1>Overview</h1>
        </div>
      </main>
    </div>
  );
};

export default DashHeader;
