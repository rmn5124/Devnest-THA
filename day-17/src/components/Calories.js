import React from "react";
import Food from "./Food";
import "./Calories.css";

const Calories = () => {
  return (
    <div className="container">
      <h1 className="container-heading">Calories Read Only</h1>
      <div className="container-food">
        <Food Name="Pizza" Calories={56} />
        <Food Name="Burger" Calories={45} />
        <Food Name="Pani Puri" Calories={26} />
        <Food Name="Fried-Rice" Calories={36} />
        <Food Name="Lasagna" Calories={76} />
      </div>
    </div>
  );
};

export default Calories;
