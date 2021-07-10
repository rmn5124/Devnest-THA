import React from "react";
import "./Food.css";

const Food = (props) => {
  const { Name, Calories } = props;
  return (
    <div className="food-item">
      <h2>{Name}</h2>
      <p>You have consumed {Calories} cals today</p>
    </div>
  );
};

export default Food;
