import React, { useEffect, useState } from "react";
import NavBarItem from "../NavMobileItem/NavMobileItem";
import "./NavMobile.scss";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { toggleSideBar } from "../../Store/SideBarSlice";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropleft, IoMdArrowDropdown } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const MobileSideBar = ({ isNavOpen }) => {
  const [isOpen, setIsOpen] = useState(isNavOpen);

  useEffect(() => {
    setIsOpen(isNavOpen);
  }, [isNavOpen]);
  return (
    <section
      className={`mobile-sideBar lg:hidden ${isOpen ? `fade-in` : `fade-out`}`}
    >
      <aside className="side-bar">
        <div className="side-head mb-8">
          <div>
            <div className="text-lg text-main font-semibold">Menu</div>
          </div>
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <AiOutlineClose className=" cursor-pointer" />
          </div>
        </div>

        <NavBarItem title="الرئيسية" content={[]} />
        <NavBarItem
          title="عن الكلية"
          content={[
            { product: "Sports", count: "45" },
            { product: "Formal", count: "75" },
            { product: "Casual", count: "35" },
            { product: "Safety Shoes", count: "26" },
          ]}
        />
        <NavBarItem
          title="الأقسام الأكاديمية"
          content={[
            { product: "Earrings", count: "46" },
            { product: "Couple Rings", count: "73" },
            { product: "Necklace", count: "50" },
          ]}
        />
        <NavBarItem
          title="خدمات إلكترونية"
          content={[
            { product: "Clothes Perfume", count: "12" },
            { product: "Deodorant", count: "60" },
            { product: "Jacket", count: "50" },
            { product: "Dress & Frock", count: "87" },
          ]}
        />
        <NavBarItem
          title="مركز ووحدات"
          content={[
            { product: "Shampoo", count: "30" },
            { product: "Sunscreen", count: "60" },
            { product: "Body Wash", count: "50" },
            { product: "Makeup Kit", count: "23" },
          ]}
        />
        <NavBarItem
          title="مجلة الكلية"
          content={[
            { product: "Sunglasses", count: "50" },
            { product: "Lenses", count: "37" },
          ]}
        />
        <NavBarItem
          title="أعضاء هيئة التدريس"
          content={[
            { product: "Shopping Bag", count: "62" },
            { product: "Gym Backpack", count: "85" },
            { product: "Purse", count: "50" },
            { product: "Wallet", count: "30" },
          ]}
        />
        <NavBarItem
          title="أعضاء هيئة التدريس"
          content={[
            { product: "Shopping Bag", count: "62" },
            { product: "Gym Backpack", count: "85" },
            { product: "Purse", count: "50" },
            { product: "Wallet", count: "30" },
          ]}
        />
        <NavBarItem
          title="الدراسات العليا"
          content={[
            { product: "Shopping Bag", count: "62" },
            { product: "Gym Backpack", count: "85" },
            { product: "Purse", count: "50" },
            { product: "Wallet", count: "30" },
          ]}
        />
        <NavBarItem
          title="إتصل بنا"
          content={[
            { product: "Shopping Bag", count: "62" },
            { product: "Gym Backpack", count: "85" },
            { product: "Purse", count: "50" },
            { product: "Wallet", count: "30" },
          ]}
        />

        <div className="icons">
          <a href="" target="_blank">
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/abdelrhman-mohamed-73215022a/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="github.com/AbdElrhman1997" target="_blank">
            <FaGithub />
          </a>
          <a href="https://abdelrahmanm.com/" target="_blank">
            <TbWorld />
          </a>
        </div>
      </aside>
    </section>
  );
};

export default MobileSideBar;
