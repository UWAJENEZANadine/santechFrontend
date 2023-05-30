import React from "react";
import { IoBagHandle } from "react-icons/io5";

const Dashboard = () => {
  return (
    <>
    <div className="flex pr-40 gap-4 px-2 pt-2">
      <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total categories
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $145
            </strong>
            <span className="text-sm text-green-500 pl-2">+243</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total categories
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $145
            </strong>
            <span className="text-sm text-green-500 pl-2">+243</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total categories
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $145
            </strong>
            <span className="text-sm text-green-500 pl-2">+243</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total categories
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $145
            </strong>
            <span className="text-sm text-green-500 pl-2">+243</span>
          </div>
        </div>
      </div>
    </div>

    <div>

    </div>
    </>
  );
};

export default Dashboard;
