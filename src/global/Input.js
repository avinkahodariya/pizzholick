import React, { memo } from "react";

const input = memo((props) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        defaultValue={props.defayltvalue}
        checked={props.checked}
        className={props.classname}
        onChange={props.onChange}
        onClick={props.onClick}
      />
    </>
  );
});

export default input;
