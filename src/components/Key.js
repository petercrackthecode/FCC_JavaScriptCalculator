import React from "react";

export function Key(props) {
  const LookupTable = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
    decimal: ".",
    equals: "=",
    subtract: "-",
    add: "+",
    divide: "/",
    multiply: "*",
    clear: "AC"
  };

  const handleChange= (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div
      id={props.m_id}
      className={"key" + (props.m_className ? " " + props.m_className : "")}
      onClick={handleChange}>
      {LookupTable[props.m_id]}
    </div>
  );
}
