import React from "react";
import DashHeader from "./dashHeader";
import DashSideBar from "./dashSide";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-row h-screen w-screen overflow-hidden">
        <DashSideBar />
        <div className="">
          <DashHeader />
          <div>{<Outlet />}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;