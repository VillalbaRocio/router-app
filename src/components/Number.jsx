import React from "react";
import { useParams } from "react-router-dom";

const Number = () => {
  const { number } = useParams();
  if (isNaN(+number)) {
    return (
      <div>
        <h1>{number} is not a number</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>The number is: {number}</h1>
    </div>
  );
}

export default Number;