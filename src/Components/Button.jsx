import React from "react";

const Button = ({ color, setSelectedColor, children }) => {
  console.log(children);
  console.log(color);
  function setColor(color) {
    console.log(color);
    setSelectedColor(color);
  }
  return (
    <button onClick={() => setColor(color)} style={{ backgroundColor: color }}>
      {children}
    </button>
  );
};

export default Button;
