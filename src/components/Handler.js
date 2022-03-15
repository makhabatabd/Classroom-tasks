import React from "react";

const Handler = (props) => {
  return (
    <input
      onChange={(e) => props.onInputChange(e.target.value)}
      placeholder={"Write something"}
    ></input>
  );
};

export default Handler;
