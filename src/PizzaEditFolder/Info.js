import React from "react";

const Info = (props) => {
  // console.log(props.ingrediants);

  return (
    <div>
      <p>
        {props.ingrediants.map((e) => {
          return <p>{e}</p>;
        })}
      </p>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default Info;
