import React from "react";
import cardImg from "../../Assets/Imgs/college.jpg";
import "./AdsCard.scss";

const AdsCard = ({ title, date }) => {
  return (
    <div className="card bg-white shadow-xl">
      <img
        className="w-full h-64 object-cover"
        src={cardImg}
        alt="Card image"
      />
      <div className="p-6">
        <h2 className="card-content text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h2>
        <p className="card-date text-gray-700">{date}</p>
        <a href="#" className="card-end font-medium hover:underline">
          التفاصيل
        </a>
      </div>
    </div>
  );
};

export default AdsCard;
