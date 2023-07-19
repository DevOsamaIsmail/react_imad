import React from "react";
import Filters from "../../components/Filters";
import ScholarshipCards from "../../components/ScholarshipCards";
import Pagination from "../../components/Pagination";

const Scholarships = () => {
  return (
    <div className="flex flex-col pt-5">
      <Filters row={true} />
      <ScholarshipCards />
      <Pagination />
      <div className="bg-[#F5F7FA] my-5 py-10 px-5">
        <h3 className="text-4xl mb-2">انضم إلى اشتراك المنح لدنيا</h3>
        <p>
          انضم الى اشتراك المنح لدينا حتى تحصل على تنبيهات باخر المنح المتاحة
        </p>
        <div className="flex justify-center mt-5">
          <input
            placeholder="أدخل بريدك الالكتروني"
            className="py-1 px-2 w-6/12 border border-solid border-black h-fit"
          />
          <button className=" bg-black py-2 px-5 text-white h-fit mr-5">
            اشتراك
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
