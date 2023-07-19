import React from "react";
import { AiOutlineSearch, AiOutlineCalendar } from "react-icons/ai";
import "./styles.css";

const Filters = ({ row }) => {
  return (
    <div
      className={`filters ${!row && "mr-10"} flex ${
        row ? "flex-row justify-evenly" : "flex-col"
      }`}
    >
      <div>
        <label className="relative text-gray-400 focus-within:text-gray-600 block mb-5">
          <div className="">
            <AiOutlineSearch className="pointer-events-none w-12 h-full absolute top-1/2 transform -translate-y-1/2 left-0 bg-black text-white" />
          </div>
          <input
            placeholder="البحث"
            className="border-solid border py-1 px-5 border-black form-input w-full"
          />
        </label>
      </div>
      <div>
        <label className="relative text-gray-400 focus-within:text-gray-600 block mb-5">
          <div className="">
            <AiOutlineCalendar className="pointer-events-none w-12 h-full absolute top-1/2 transform -translate-y-1/2 left-0 bg-black text-white" />
          </div>
          <input
            placeholder="تاريخ البداية"
            className="border-solid border py-1 px-5 border-black form-input w-full"
          />
        </label>
      </div>
      <div>
        <label className="relative text-gray-400 focus-within:text-gray-600 block mb-5">
          <div className="">
            <AiOutlineCalendar className="pointer-events-none w-12 h-full absolute top-1/2 transform -translate-y-1/2 left-0 bg-black text-white" />
          </div>
          <input
            placeholder="تاريخ النهاية"
            className="border-solid border py-1 px-5 border-black form-input w-full"
          />
        </label>
      </div>
      <button className="py-2 px-5 bg-black text-white h-fit">فلترة</button>
    </div>
  );
};

export default Filters;
