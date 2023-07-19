import React from "react";
import "./styles.css";
import { RiGlobalLine } from "react-icons/ri";
import Dropdown from "../Dropdown";
const StickyNavbar = () => {
  return (
    <nav className="sticky-bar">
      <div>
        <ul className="nav-list">
        <li><RiGlobalLine />
          <Dropdown title="اللغة">
          <ul>
            <li>
              <span onClick={()=>{localStorage.setItem("lan","ar");
              window.location.reload()}}>العربية</span> 
            </li>
            <li>
              <span onClick={()=>{localStorage.setItem("lan","en");window.location.reload()}}>الانجليزية</span>
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
