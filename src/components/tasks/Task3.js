import React from "react";
import Square from "../Square";

/**
 * Перебрать массив data
 * с помощью метода map
 * и создать компоненты <Square/>
 * так же передав им пропсы color и title

 * К прим.:

 <div>
    [1,2,3,4,5].map(function(item, index){
      return (
        <h1 key={'number-'+index}>
          {item}
        </h1>
      )
    })
 </div>

 */

const data = [
  {
    size: 10,
    color: "#F00",
  },
  {
    size: 20,
    color: "#4caf50",
  },
  {
    size: 15,
    color: "#03a9f4",
  },
  {
    size: 5,
    color: "#e91e63",
  },
];

const Task3 = () => {
  return (
    <div>
      {data.map((item) => {
        return <Square size={item.size} color={item.color} />;
      })}
    </div>
  );
};

export default Task3;
