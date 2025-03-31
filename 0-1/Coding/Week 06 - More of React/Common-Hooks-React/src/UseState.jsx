import React, { useState } from "react";

const UseState = () => {
  const [counter, setCount] = useState(0);
  const handleCounter = () => {
    setCount(counter + 1);
  };
  const handleCounter2 = () => {
    setCount(counter - 1);
  };
  return (
    <div>
      <div>
        <button>Counter - {counter}</button>
      </div>
      <button onClick={handleCounter}>+</button>
      <button onClick={handleCounter2}>-</button>
    </div>
  );
};

export default UseState;
