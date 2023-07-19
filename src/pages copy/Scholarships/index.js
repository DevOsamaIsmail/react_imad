import React from "react";
import Filters from "../../components copy/Filters";
import ScholarshipCards from "../../components copy/ScholarshipCards";
import Pagination from "../../components copy/Pagination";

const Scholarships = () => {
  return (
    <div className="flex flex-col pt-5">
      <Filters row={true} />
      <ScholarshipCards />
      <Pagination />
      <div className="bg-[#F5F7FA] my-5 py-10 px-5">
      <h3 className="text-4xl mb-2">Join the donation subscription</h3>
        
<p>
          Join our grants subscription to receive alerts of the latest available grants
        </p>
        <div className="flex justify-center mt-5">
          <input
placeholder="Enter your email"
className="py-1 px-2 w-6/12 border border-solid border-black h-fit"
          />
          <button className=" bg-black py-2 px-5 text-white h-fit mr-5">
          subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
