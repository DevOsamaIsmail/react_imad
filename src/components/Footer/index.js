import React from "react";
import "./styles.css";
import { ReactComponent as ReactLogo } from "../../assets/img/NavbarLogo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="nav-links">
          <ul className="mx-10">
            <div className="title-wrapper">
              <span>من نحن</span>
            </div>
            <li>الخطط الاستراتيجية</li>
            <li>وزراء التعليم العالي</li>
            <li>وزراء النماذج الالكترونية</li>
          </ul>
          <ul className="mx-10">
            {" "}
            <div className="title-wrapper">
              <span>خدمات المنح</span>
            </div>
            <li>معادلة الشهادات</li>
            <li>منح بكالوريوس</li>
            <li>منح الدراسات العليا</li>
          </ul>
          <ul className="mx-10">
            <div className="title-wrapper">
              <span>قوانين الوزارة</span>
            </div>
            <li>الأنظمة والقوانين</li>
            <li>روابط مهمة</li>
            <li>الأخبار</li>
          </ul>
        </div>
        <div className="nav-logo">
          <ReactLogo width={200} />
        </div>
      </div>
      <div className="copyrights">
        <span>
          حقوق الطبع والنشر محفوظة لــ وزارة التعليم العالي والبحث العلمي
          الفلسطينية 2023
        </span>
      </div>
    </footer>
  );
};

export default Footer;
