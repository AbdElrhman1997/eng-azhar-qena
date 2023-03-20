import React, { useEffect, useState } from "react";
import NavMobileItem from "../NavMobileItem/NavMobileItem";
import "./NavMobile.scss";
import { AiOutlineClose } from "react-icons/ai";
import { toggleSideBar } from "../../Store/SideBarSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const MobileSideBar = () => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const navLinks = [
    { title: "الرئيسية", link: "#", subTitles: [] },
    {
      title: "عن الكلية",
      link: "",
      subTitles: [
        "كلمة العميد ",
        "كلمة وكيل شئون الطلاب والتعليم",
        " الرؤية والرسالة والأهداف",
        "الهيكل التنظيمى",
        "دليل الكلية",
        "قرارات مجلس الكلية",
      ],
    },
    { title: "الأقسام الأكاديمية", link: "", subTitles: [""] },
    {
      title: "خدمات إلكترونية",
      link: "",
      subTitles: [
        "نتائج الامتحانات",
        "إستخراج الشهادات",
        "الاستبيانات",
        "نظام التعليم الالكتروني",
        "البريد الالكتروني",
        "بنك المعرفة",
        "خدمات أعضاء هيئة التدريس",
      ],
    },
    {
      title: "مركز ووحدات",
      link: "",
      subTitles: [
        "وحدة ضمان الجودة بالكلية ",
        "مركز التخطيط العمراني - وحدة ذات طابع خاص",
        "وحدة التدريب",
        "وحدة الأزمات و الكوارث",
        "وحدة التعليم الالكترونى",
        "وحدة التواصل مع الخريجين",
        "وحدة القياس و التقويم",
      ],
    },
    { title: "مجلة الكلية", link: "", subTitles: [] },
    { title: "أعضاء هيئة التدريس", link: "", subTitles: [] },
    { title: "الدراسات العليا", link: "", subTitles: [] },
    { title: "إتصل بنا", link: "", subTitles: [] },
  ];

  return (
    <section
      className={`mobile-nav lg:hidden ${
        globalState.SideBar.isOpen ? `fade-in` : `fade-out`
      }`}
    >
      <aside className="nav-bar">
        <div
          onClick={() => {
            dispatch(toggleSideBar());
          }}
        >
          <AiOutlineClose className="close-btn" />
        </div>

        {navLinks.map((item, i) => {
          return (
            <NavMobileItem
              key={i}
              title={item.title}
              link={item.link}
              subTitles={item.subTitles}
            />
          );
        })}

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
            <FaTwitter />
          </a>
          <a href="https://abdelrahmanm.com/" target="_blank">
            <FaInstagram />
          </a>
        </div>
      </aside>
    </section>
  );
};

export default MobileSideBar;
