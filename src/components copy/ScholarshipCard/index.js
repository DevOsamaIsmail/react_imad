import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ScholarshipCard = ({ title, description }) => {
  return (
    <div className="bg-[#F5F4F2] my-5">
      <p className="text-[18px] font-bold my-1 p-1">{title}</p>
      <p className="text-[14px] p-1">{description}</p>
      <div className="flex justify-end bg-black w-[128px] mr-auto py-2 my-5 text-white items-center">
        <AiOutlineArrowRight size={25} />
        <button className="m-auto"> more </button>{" "}
      </div>
    </div>
  );
};

export default ScholarshipCard;
