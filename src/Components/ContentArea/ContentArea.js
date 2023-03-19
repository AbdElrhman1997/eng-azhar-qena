import React from "react";
import PostText from "../PostText/PostText";
import SideBar from "../SideBar/SideBar";
import "./ContentArea.scss";

const ContentArea = () => {
  return (
    <section className="content-area">
      <div className=" container">
        <SideBar />
        <PostText />
      </div>
    </section>
  );
};

export default ContentArea;
