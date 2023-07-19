import React from "react";
import "./styles.css";
import { useState } from "react";
const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    // Assuming you have a totalFeatures variable that represents the total number of features
    const totalFeatures = 10; // Replace with the actual total number of features
    const totalPages = Math.ceil(totalFeatures / 5); // Each page displays 5 features

    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <nav>
        <ul className="flex items-center justify-center mr-10 my-5">
          <li className="bg-[#EFEDED] mx-2 py-1 px-1">
            <button
              className="text-center w-[40px] height-[40px] items-center"
              onClick={handlePreviousPage}
            >
              prev
            </button>
          </li>
          {/* Render the page numbers dynamically */}
          {Array.from({ length: 5 }).map((_, index) => {
            const pageNumber = currentPage + index;

            return (
              <li className="bg-[#EFEDED] mx-2 py-1 px-1" key={pageNumber}>
                <button
                  className="text-center w-[40px] height-[40px] items-center"
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            );
          })}
          <li className="bg-[#EFEDED] mx-2 py-1 px-1">
            <button
              className="text-center w-[40px] height-[40px] items-center"
              onClick={handleNextPage}
            >
              next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
