import React from "react";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <section className="side lg:ml-10 lg:col-span-3 col-span-12 lg:my-0 mb-10">
      <aside className="side-bar lg:text-right text-center lg:sticky">
        <p className="text-lg font-semibold side-head">تبويب القسم</p>
        <div>
          <a href="">قرار المجلس الأعلى للأزهر</a>
        </div>
        <div>
          <a href="">تقارير فحص لرسالة علمية</a>
        </div>
        <div>
          <a href="">لائحة الدراسات العليا</a>
        </div>
        <div>
          <a href="">إفادةالمجالات لتشكيل مناقشة الدكتوراه</a>
        </div>
      </aside>
    </section>
  );
};

export default SideBar;
