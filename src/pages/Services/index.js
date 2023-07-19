import React from "react";
import ServiceList from "../../components/ServicesList";
import "./styles.css";
import Filters from "../../components/Filters";

const Services = () => {
  return (
    <div className="services">
      <div className="flex">
        <ServiceList />
      </div>
    </div>
  );
};

export default Services;
