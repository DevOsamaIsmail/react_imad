import React from "react";
import "./styles.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const HomeScholarship = ({ title, description }) => {
  return (
    <div className="home-scholarship">
      <p className="title">{title}</p>
      <p className="description">{description}</p>

      <div className="flex items-center mt-5">
        <span>المزيد...</span>

        <AiOutlineArrowLeft />
      </div>
    </div>
  );
};

export default HomeScholarship;
