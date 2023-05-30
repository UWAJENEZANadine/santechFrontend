import React from "react";

import { HiOutlineSearch, HiOutlineChat, HiOutlineBell } from "react-icons/hi";
const DashHeader = () => {
  return (
    <div className="grid grid-cols-3 items-center bg-gray-700 h-16 px-4 w-screen">
      <div className="w-32">
       
      </div>
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="search..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-blue-300 rounded-sm px-4 pl-11 pr-4"
        />
      </div>
      <div className="text-white flex items-center gap-4 ml-48">
        <HiOutlineChat fontSize={24} />
        <HiOutlineBell fontSize={24} />
      </div>
    </div>
  );
};

export default DashHeader;
