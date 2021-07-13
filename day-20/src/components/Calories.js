import React, { useEffect, useState } from "react";
import Food from "./Food";
import "./Calories.css";

const Calories = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const newList = [
      { name: "Pizza", value: 13 },
      { name: "Burger", value: 34 },
      { name: "Coke", value: 234 },
      { name: "Browne", value: 34 },
      { name: "Fried Rice", value: 43 },
      { name: "Lassania", value: 43 },
      { name: "Pani Puri", value: 42 },
    ];
    setFoods(newList);
  }, []);

  return (
    <div className="Calories">
      <h1 style={{ textAlign: "center" }}>Calorie Read Only</h1>
      {foods.map((calorie, idx) => {
        return (
          <Food
            key={idx}
            id={idx}
            name={calorie.name}
            calorie={calorie.value}
            setCalorie={setFoods}
          />
        );
      })}
    </div>
  );
};
export default Calories;
