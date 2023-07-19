import React from "react";
import "./styles.css";
import { ReactComponent as ReactLogo } from "../../assets/img/NavbarLogo.svg";
import {
  BiLogoInstagram,
  BiLogoTelegram,
  BiLogoYoutube,
  BiLogoFacebook,
} from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="right-side">
        <div className="social-icons">
          <ul>
            <li>
              <BiLogoInstagram size={20} />
            </li>
            <li>
              <BsTwitter size={20} />
            </li>
            <li>
              <BiLogoTelegram size={20} />
            </li>
            <li>
              <BiLogoYoutube size={20} />
            </li>
            <li>
              <BiLogoFacebook size={20} />
            </li>
          </ul>
        </div>
        <div className="nav-links">
          <ul>
            <li>الشكاوى</li>
            <li>
              <NavLink to="/services">الخدمات</NavLink>
            </li>
            <li>من نحن</li>
            <li>
              <NavLink to="/scholarships">المنح</NavLink>
            </li>
            <li>
              <Dropdown title="المعاهد والجامعات">
                <ul>
                  <li>المعاهد والجامعات 1</li>
                  <li>المعاهد والجامعات 2</li>
                  <li>المعاهد والجامعات 3</li>
                </ul>
              </Dropdown>
            </li>
            <li>
              <Dropdown title="الدراسات الجامعية">
                <ul>
                  <li>معادلة الشهادة</li>
                  <li>تصديق الوئاثق</li>
                  <li>النشرة الارشادية</li>
                </ul>
              </Dropdown>
            </li>
            <li>
              <Dropdown title="البحث العلمي">
                <ul>
                 <li>الاولويات والجوائز</li>
                 <li>الاولويات الوطنية للبحث العلمي</li>
                 <li>جائزة البحث العلمي السنوية</li>
                 <li></li>
                </ul>
              </Dropdown>
            </li>
            <li>
              <Dropdown title="الوزارة">
                <ul>
                  <li>نشأة الوزارة </li>
                  <li> الرؤية والرسالة</li>
                  <li> الخطط والاستراتيجيات</li>
                  <li> الخطط والاستراتيجيات</li>
                  <li> نظام التعليم العالي في فلسطين</li>

                </ul>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-logo">
        <NavLink to="/">
          <ReactLogo width={200} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
