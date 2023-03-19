import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import "./TopHeader.scss";

const TopHeader = () => {
  return (
    <header className="top-header text-white py-2">
      <div className="container">
        <div className="flex items-center">
          <p className="font-bold ml-3">+02 23868020</p>
          <FiPhoneCall className=" text-main" />
        </div>
        <button className="logIn-btn">
          <a href="#">تسجيل دخول</a>
        </button>
      </div>
    </header>
  );
};

export default TopHeader;
