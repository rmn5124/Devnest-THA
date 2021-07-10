import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function helper() {
    setCount((x) => {
      return x + 1;
    });
  }
  return (
    <div className="counter">
      <button onClick={helper}>{count}</button>
    </div>
  );
};

export default Counter;
