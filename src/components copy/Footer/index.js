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
              <span>About Us</span>
            </div>
            <li>Strategic Plans</li>
            <li>Ministers of Higher Education</li>
            <li>Ministers of Electronic Forms</li>
          </ul>
          <ul className="mx-10">
            {" "}
            <div className="title-wrapper">
              <span>Grant Services</span>
            </div>
            <li>Equivalency of Certificates</li>
            <li>Undergraduate Scholarships</li>
            <li>Postgraduate Scholarships</li>
          </ul>
          <ul className="mx-10">
          <div className="title-wrapper">
              <span>Ministry Laws</span>
            </div>
            <li>Laws & Regulations</li>
            <li>Important Links</li>
            <li>News</li>
          </ul>
        </div>
        <div className="nav-logo">
          <ReactLogo width={200} />
        </div>
      </div>
      <div className="copyrights">
      <span>
          Copyright Ministry of Higher Education and Scientific Research
          Palestinian 2023
        </span>
      </div>
    </footer>
  );
};

export default Footer;
