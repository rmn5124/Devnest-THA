import React, { useState } from "react";
import Form from "./Form";
import Content from "./Content";
import "./Main.css";

const Main = (props) => {
  const [items, setItems] = useState([]);
  console.log(items);
  return (
    <div className="calorie-app">
      <Form setItems={setItems} />
      <div className="items">
        <div className="card-item">
          {items.length === 0 ? (
            <h1>Starting Adding Items</h1>
          ) : (
            items.map((item, idx) => {
              return (
                <Content
                  id={idx}
                  setItems={setItems}
                  key={idx}
                  title={item.title}
                  calorieDetail={item.calorieDetail}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
