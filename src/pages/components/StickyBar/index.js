import React from "react";
import "./styles.css";
import { RiGlobalLine } from "react-icons/ri";
import Dropdown from "../Dropdown";

const StickyNavbar = () => {
  return (
    <nav className="sticky-bar">
      <div>
        <ul className="nav-list">
        <li>
          <Dropdown title="اللغة"><RiGlobalLine />
          <ul>
            <li>
              <span onClick={()=>{localStorage.setItem("lan","ar");window.location.reload()}}>العربية</span> <RiGlobalLine />
            </li>
            <li>
              <span onClick={()=>{localStorage.setItem("lan","en");window.location.reload()}}>الانجليزية</span> <RiGlobalLine />
            </li>          </ul>
        </Dropdown>          </li>
          <li>الوظائف</li>
          <li>كوفيد-19</li>
        </ul>
      </div>
      <div>
        <span className="subtitle">
          هذا الموقع مرخص بشكل رسمي من السلطة الفلسطينية
        </span>
      </div>
    </nav>
  );
};

export default StickyNavbar;
