import React from "react";
import SlideWideImage from "../../assets/img/SlideWideImage.svg";
import Feature from "../Feature";
import "./styles.css";

const Features = () => {
  return (
    <div className="flex features">
      <div className="right-side">
        <img width={500} src={SlideWideImage} alt="" />
        <p>
        "Higher Education" discusses with a delegation from the Japanese Embassy to enhance cooperation in
          Academic and research fields
        </p>
      </div>
      <div className="left-side">
        <ul className="features-list">
          <li>
            <Feature
              description="The Ministry of Higher Education and Scientific Research announces the availability of two scholarships at the University of
              Malta"
           
          
            />
          </li>
          <li>
            <Feature
              description="The Ministry of Higher Education and Scientific Research announces the availability of two scholarships at the University of
              Malta"
           
          
            />
          </li>    <li>
            <Feature
              description="The Ministry of Higher Education and Scientific Research announces the availability of two scholarships at the University of
              Malta"
           
          
            />
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Features;
