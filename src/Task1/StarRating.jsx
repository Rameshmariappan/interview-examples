import React from "react";
import { useState } from "react";
import SvgComponent from "./Star";
const StarRating = () => {
  const [rate, setRate] = useState(0);
  const handleStarChange = (index) => {
    setRate(index + 1);
  };
  return (
    <div>
      {[...Array(5)].map((item, index) => {
        return (
          <SvgComponent
            fill={rate === index + 1 || rate > index + 1 ? "red" : "#999"}
            style={{ width: "30px", height: "auto" }}
            stroke="blue"
            key={index}
            onClick={() => handleStarChange(index)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
