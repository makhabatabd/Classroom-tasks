import React, { useState } from "react";
import Handler from "../Handler";

/*
  В компоненте Handler есть input.

  * сделайте так чтобы при каждом 
  изменении инпута вызывалась 
  функция handleInput 
*/

const Task2 = () => {
  const handleInput = (value) => {
    console.log(value);
  };
  return (
    <div>
      <Handler onInputChange={handleInput} />
    </div>
  );
};
export default Task2;
