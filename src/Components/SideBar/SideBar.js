import React from "react";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <section className="side lg:ml-10">
      <aside className="side-bar">
        <p className="text-lg font-semibold side-head">تبويب القسم</p>
        <div>قرار المجلس الأعلى للأزهر</div>
        <div>تقارير فحص لرسالة علمية</div>
        <div>لائحة الدراسات العليا</div>
        <div>إفادةالمجالات لتشكيل مناقشة الدكتوراه</div>
      </aside>
    </section>
  );
};

export default SideBar;
