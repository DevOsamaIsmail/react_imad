import React from "react";
import "./styles.css";
import { AiOutlineDown } from "react-icons/ai";

const Dropdown = ({ title, children }) => {
  return (
    <div className="dropdown flex">
      <AiOutlineDown />
      <span>{title}</span>
      <div className="content hidden">
        <p className="title my-1 text-right font-bold bg-slate-300 text-[#062135] py-1 px-2">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
