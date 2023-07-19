import React , {useState}  from "react";
import "./styles.css";
import HomeScholarship from "../HomeScholarship";
import { scholarshipsData } from "./data";


const HomeScholarships = () => {
  const [selectedButton, setSelectedButton] = useState('button1');



  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const renderScholarships = () => {

    const selectedScholarships = scholarshipsData[selectedButton];

    return selectedScholarships.map((scholarship, index) => (
      <HomeScholarship
        key={index}
        title={scholarship.title}
        description={scholarship.description}
      />
    ));
  };

  return (
    <div className="homeScholarships">
      <div className="buttons">
        <button
          className={`button ${selectedButton === 'button1' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('button1')}
        >
          المنح
        </button>
        <button
          className={`button ${selectedButton === 'button2' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('button2')}
        >
          الإعلانات
        </button>
        <button
          className={`button ${selectedButton === 'button3' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('button3')}
        >
          الأخبار
        </button>
      </div>
      <div className="scholarships">{renderScholarships()}</div>
    </div>
  );
};

export default HomeScholarships;
