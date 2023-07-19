import React from "react";
import ScholarshipCard from "../ScholarshipCard/index";

const ScholarshipCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <ScholarshipCard
        title="Grant 1"
        description="The Ministry of Higher Education and Scientific Research announces the availability of a number of scholarships in the field of first university degrees (Bachelor's) and graduate studies (Master's and PhD) offered by the Government of Mexico for the academic year 2023/2024."
      />
      <ScholarshipCard
        title="Grant 2"
        description="The Ministry of Higher Education and Scientific Research announces the availability of a number of scholarships in the field of first university degrees (Bachelor's) and graduate studies (Master's and PhD) offered by the Government of Mexico for the academic year 2023/2024."
      />
      <ScholarshipCard
        title="Grant 3"
        description="The Ministry of Higher Education and Scientific Research announces the availability of a number of scholarships in the field of first university degrees (Bachelor's) and graduate studies (Master's and PhD) offered by the Government of Mexico for the academic year 2023/2024."
      />
      <ScholarshipCard
        title="Grant 4"
        description="The Ministry of Higher Education and Scientific Research announces the availability of a number of scholarships in the field of first university degrees (Bachelor's) and graduate studies (Master's and PhD) offered by the Government of Mexico for the academic year 2023/2024."
      />
      <ScholarshipCard
        title="Grant 5"
        description="The Ministry of Higher Education and Scientific Research announces the availability of a number of scholarships in the field of first university degrees (Bachelor's) and graduate studies (Master's and PhD) offered by the Government of Mexico for the academic year 2023/2024."
      />
    </div>
  );
};

export default ScholarshipCards;
