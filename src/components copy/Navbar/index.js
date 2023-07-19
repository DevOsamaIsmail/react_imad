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
          <li>Complaints</li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>Who are we</li>
            <li>
              <NavLink to="/scholarships">Scholarships</NavLink>
            </li>
            <li>
              <Dropdown title="Institutes and Universities">
                <ul>
                  <li>Institutes and Universities 1</li>
                  <li>Institutes and Universities 2</li>
                  <li>Institutes and Universities 3</li>
                </ul>
              </Dropdown>
            </li>
            <li>
              <Dropdown title="University Studies">
                <ul>
                  <li>Certificate Equivalency</li>
                  <li>Authentication of Documents</li>
                  <li>Guidelines</li>
                </ul>
              </Dropdown>
            </li>
            <li>
              <Dropdown title="Scientific Research">
                <ul>
                 <li>Priorities and Awards</li>
                 <li>National priorities for scientific research</li>
                 <li>Annual Scientific Research Award</li>
                 <li></li>
                </ul>
              </Dropdown>
            </li>
            <li>
              <Dropdown title="Ministry">
                <ul>
                  <li>The establishment of the Ministry</li>
                  <li>vision and mission</li>
                  <li>Plans and Strategies</li>
                  <li>Plans and Strategies</li>
                  <li>The higher education system in Palestine</li>

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
