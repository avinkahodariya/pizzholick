import React, { memo } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.Handleclick} className={props.className}>
        <p>{props.name} </p>
      </button>
    </>
  );
};

export default Button;
