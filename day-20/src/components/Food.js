import React from "react";
import "./Food.css";

const Food = (props) => {
  const { id, name, calorie, setCalorie } = props;
  function handleDelete(id) {
    setCalorie((prevState) => {
      let newlist = prevState.filter((todo, idx) => idx !== id);
      return newlist;
    });
  }
  return (
    <div className="food-item">
      <div className="title">
        <h2>{name}</h2>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
      <p>You have consumed {calorie} cals today</p>
    </div>
  );
};

export default Food;
