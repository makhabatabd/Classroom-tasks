import React from "react";

const Square = (props) => {
  return (
    <div
      style={{
        // marginLeft: "20px",
        // marginBottom: "10px",
        height: props.size,
        width: props.size,
        backgroundColor: props.color,
      }}
    ></div>
  );
};

export default Square;
