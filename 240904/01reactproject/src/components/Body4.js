import React, { useState } from "react";
import Viewer from "./Viewer";

// const Viewer = ({ number }) => {
//   return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
// };

const Body4 = () => {
  const [number, setNumber] = useState(0);

  const onDecrease = () => {
    setNumber(number - 1);
  };
  const onIncrease = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h2>{number}</h2>
      <Viewer number={number} />
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};

export default Body4;
