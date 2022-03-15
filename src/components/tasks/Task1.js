import React from "react";
import Square from "../Square";

/*
  Компонент Square
  принимает пропсы (color, size)
  
  * Square должен создавать div с 
  задним фоном равный color,
  высотой и шириной равный size
*/

const Task1 = () => {
  return (
    <div>
      <Square size={10} color="black" />
      <Square size={20} color="black" />
      <Square size={30} color="black" />
      <Square size={40} color="black" />
      <Square size={50} color="black" />
    </div>
  );
};

export default Task1;
