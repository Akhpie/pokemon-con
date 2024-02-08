import React, { useState } from "react";
import "./Hook.css";

const Hook = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const clear = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h2>UseState example</h2>
      <hr />
      <h2>Counter: {count}</h2>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default Hook;
