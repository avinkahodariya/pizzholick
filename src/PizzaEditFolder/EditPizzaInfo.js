import React from "react";

const EditPizzaInfo = (props) => {
  return (
    <>
      <div>
        <p>{props.name}</p>
        <p>
          {" "}
          {props.ingreinfo.map((e) => {
            return <p>{e[0]}</p>;
          })}
        </p>
        <p>{props.price}</p>
      </div>
    </>
  );
};

export default EditPizzaInfo;
