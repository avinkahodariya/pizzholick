import React from "react";

const Pizza_Navbar = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>
        <img src={props.img} />
      </div>
      <div>
        <div>tometo</div>
        <div>capsicam</div>
        <div>cheese</div>
        <div>olive</div>
        <div>masroom</div>
        <div>paper</div>
        {/* {props.ingredients.map((ingre) => {
          return <checkbox>{ingre} </checkbox>;
        })} */}
      </div>
    </div>
  );
};

export default Pizza_Navbar;
