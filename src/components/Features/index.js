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
          "التعليم العالي" تبحث مع وفد من السفارة اليابانية تعزيز التعاون في
          المجالات الأكاديمية والبحثية
        </p>
      </div>
      <div className="left-side">
        <ul className="features-list">
          <li>
            <Feature
              description=" تعلن وزارة التعليم العالي والبحث العلمي عن توفر منحتين دراسيتين في جامعة
    مالطا"
            />
          </li>
          <li>
            <Feature
              description=" تعلن وزارة التعليم العالي والبحث العلمي عن توفر منحتين دراسيتين في جامعة
    مالطا"
            />
          </li>
          <li>
            <Feature
              description=" تعلن وزارة التعليم العالي والبحث العلمي عن توفر منحتين دراسيتين في جامعة
    مالطا"
            />
          </li>
          <li>
            <Feature
              description=" تعلن وزارة التعليم العالي والبحث العلمي عن توفر منحتين دراسيتين في جامعة
    مالطا"
            />
          </li>
          <li>
            <Feature
              description=" تعلن وزارة التعليم العالي والبحث العلمي عن توفر منحتين دراسيتين في جامعة
    مالطا"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
