import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Imgs/logo.png";
import DropMenu from "../DropMenu/DropMenu";
import NavMobile from "../NavMobile/NavMobile";
import { BiMenu } from "react-icons/bi";
import "./NavBar.scss";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    setIsNavOpen(isNavOpen);
  }, [isNavOpen]);
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
    <nav className="nav">
      <div className=" container">
        <div className="lg:flex hidden">
          {navLinks.map((item) => {
            return (
              <NavLink to={item.link}>
                <DropMenu
                  title={item.title}
                  link={item.link}
                  subTitles={item.subTitles}
                />
              </NavLink>
            );
          })}
        </div>
        <div className="nav-mobile lg:hidden">
          <BiMenu
            className="nav-mobile-btn"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
            }}
          />
          <NavMobile isNavOpen={isNavOpen} />
        </div>
        <img className="logo" src={logo} />
      </div>
    </nav>
  );
};

export default NavBar;
