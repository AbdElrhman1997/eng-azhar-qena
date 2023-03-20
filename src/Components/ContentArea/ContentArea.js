import React from "react";
import Conferences from "../Conferences/Conferences";
import PostText from "../PostText/PostText";
import SideBar from "../SideBar/SideBar";
import "./ContentArea.scss";

const ContentArea = () => {
  return (
    <section className="content-area">
      <div className=" container grid grid-cols-12">
        <SideBar />
        <div className="lg:col-span-9 col-span-12">
          <PostText />
          <Conferences />
        </div>
      </div>
    </section>
  );
};

export default ContentArea;
