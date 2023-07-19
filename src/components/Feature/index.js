import React from "react";
import SlideImage from "../../assets/img/SlideImage.svg";
import "./styles.css";

const Feature = ({ description }) => {
  return (
    <div className="feature">
      <img src={SlideImage} alt="" className="image" width={70} />
      <p className="description">{description}</p>
    </div>
  );
};

export default Feature;
