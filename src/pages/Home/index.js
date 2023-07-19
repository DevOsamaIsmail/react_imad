import React from "react";
import "./styles.css";
import Features from "../../components/Features";
import HomeScholarships from "../../components/HomeScholarships";

const Home = () => {
  return (
    <div className="home">
      <Features />
      <HomeScholarships />
    </div>
  );
};

export default Home;
