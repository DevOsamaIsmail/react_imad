import React, { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineCalendar } from "react-icons/ai";
import Feature from "../Feature/index";
import "./styles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Pagination } from "@sajari/react-components";
import {allFeatures} from "./data"



const Filters = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleFilter = () => {
    onSearch(searchValue, startDate, endDate);
  };

  return (
    <div className="filters flex flex-col">
      <div className="mb-5">
        <label className="relative text-gray-400 focus-within:text-gray-600">
          <div className="">
            <AiOutlineSearch className="pointer-events-none w-12 h-full absolute top-1/2 transform -translate-y-1/2 left-0 bg-black text-white" />
          </div>
          <input
            placeholder="search"
            className="border-solid border py-1 px-5 border-black form-input w-full"
            value={searchValue}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="mb-5">
        <label className="relative text-gray-400 focus-within:text-gray-600">
          <div className="">
            <AiOutlineCalendar className="pointer-events-none w-12 h-full absolute top-1/2 transform -translate-y-1/2 left-0 bg-black text-white" />
          </div>
          <DatePicker
            placeholderText="start date "
            className="border-solid border py-1 px-5 border-black form-input w-full"
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="yyyy-MM-dd"
            isClearable
          />
        </label>
      </div>
      <div className="mb-5">
        <label className="relative text-gray-400 focus-within:text-gray-600">
          <div className="">
            <AiOutlineCalendar className="pointer-events-none w-12 h-full absolute top-1/2 transform -translate-y-1/2 left-0 bg-black text-white" />
          </div>
          <DatePicker
            placeholderText="end date "
            style={{
              paddingRight: "0.25rem",
              paddingLeft: "10.25rem",
            }}
            className="border-solid border py-1 px-5 border-black form-input w-full"
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="yyyy-MM-dd"
            isClearable
          />
        </label>
      </div>
      <button
        style={{ paddingLeft: "28.50rem" }}
        className="py-2 px-5 bg-black text-white h-fit self-end"
        onClick={handleFilter}
      >
        search
      </button>
    </div>
  );
};

const ServiceList = () => {
  

  const perPage = 5;
  const [features, setFeatures] = useState(allFeatures);
  const [currentSlice, setCurrentSlice] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    setCurrentSlice(features.slice(startIndex<features.length?startIndex:features.length, endIndex<features.length?endIndex:features.length));
  }, [features, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (searchValue, startDate, endDate) => {
    let filteredFeatures = allFeatures;

    if (searchValue) {
      filteredFeatures = filteredFeatures.filter((feature) =>
        feature.description.includes(searchValue)
      );
    }
    if (startDate!=null && endDate==null) {
      filteredFeatures = filteredFeatures.filter((feature) => {
        const featureDate = new Date(feature.date);
        return featureDate >= startDate ;
      });
    }
    if (startDate==null && endDate!=null) {
      filteredFeatures = filteredFeatures.filter((feature) => {
        const featureDate = new Date(feature.date);
        return  featureDate <= endDate ;
      });
    }
    if (startDate && endDate) {
      filteredFeatures = filteredFeatures.filter((feature) => {
        const featureDate = new Date(feature.date);
        return featureDate >= startDate && featureDate <= endDate;
      });
    }

    setFeatures(filteredFeatures);
    setCurrentPage(1);
  };

  return (
    <div className="service-list flex">
      <div className="mr-auto">
        {currentSlice.map((feature, index) => (
          <Feature key={index} description={feature.description} />
        ))}
        <Pagination
          totalResults={features.length}
          resultsPerPage={5}
          currentPage={currentPage}
          // pageCount={4}
          onChange={handlePageChange} 
          // scrollToTop 
          // nextClassName = {{flexDirection: "row-reverse"}}
          // prevClassName ={{flexDirection: "row-reverse"}}
          styles={{flexDirection: "row-reverse"}}
        />
      </div>
      <div className="ml-auto" style={{ marginRight: "96px" }}>
        <Filters onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default ServiceList;
