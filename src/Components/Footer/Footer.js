import React from "react";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
import footerImg from "../../Assets/Imgs/footer.jpg";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer p-8 lg:pb-0 pb-20">
      <div className="container">
        <div className="details">
          <div className="group">
            <p className="group-head">بيانات الإتصال</p>
            <p className="flex items-center lg:w-4/5">
              <p>
                <CiLocationOn className="text-2xl" />
              </p>
              جامعة الأزهر ، شارع المخيم الدائم ، مدينة نصر القاهرة 11884 مصر
            </p>
            <p className="flex items-center">
              <p>
                <BsTelephone className="text-2xl" />
              </p>
              +2 23868020
            </p>
            <p className="flex items-center">
              <p>
                <FiMail className="text-2xl" />
              </p>
              eng.b@azhar.edu.eg
            </p>
          </div>
          <div className="group">
            <p className="group-head">روابط سريعة</p>
            <p>المجلس الأعلى للجامعات وزارة التعليم العالى</p>
            <p>الهيئة القومية لضمان الجودة و التعليم</p>
            <p>نقابة المهندسين</p>
            <p>وحدة التعليم الإلكترونى</p>
            <p>تعليمات الاستخدام</p>
            <p>سياسة الخصوصية</p>
          </div>
          <div className="group">
            <img src={footerImg} />
          </div>
        </div>
        <hr className="line-break" />
        <div className="w-full mt-6 flex flex-col items-center">
          <p className="text-main-text w-full font-bold text-center">
            Copyright &copy; Abdelrahman Mohamed All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
