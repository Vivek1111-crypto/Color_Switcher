import React from "react";
const ColorBox = ({ color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="m-auto w-[300px] h-[300px] rounded-2xl font-extrabold text-center content-center"
    >
      {color}
    </div>
  );
};

export default ColorBox;
