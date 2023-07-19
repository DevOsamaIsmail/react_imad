import React from "react";
import "./styles.css";
import { RiGlobalLine } from "react-icons/ri";
import Dropdown from "../Dropdown";

const StickyNavbar = () => {
  return (
    <nav className="sticky-bar">
      <div>
        <ul className="nav-list">
          <li><RiGlobalLine/>
          <Dropdown title="Language"> 
          <ul>
            <li>
              <span onClick={()=>{localStorage.setItem("lan","ar");window.location.reload()}}>Arabic</span> 
            </li>
            <li>
              <span onClick={()=>{localStorage.setItem("lan","en");window.location.reload()}}>English</span> 
            </li>          </ul>
        </Dropdown>          </li>
          <li>jobs</li>
          <li>covide-19</li>
        </ul>
      </div>
      <div>
        <span className="subtitle">
        This site is officially licensed by the Palestinian Authority
        </span>
      </div>
    </nav>
  );
};

export default StickyNavbar;
