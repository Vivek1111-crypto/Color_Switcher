import "./App.css";
import { useState } from "react";
import Button from "./Components/Button";
import ColorBox from "./Components/ColorBox";

function App() {
  let color = ["pink", "blue", "red", "lightseagreen", "tomato"];
  const [selectedColor, setSelectedColor] = useState("transparent");
  return (
    <>
      <h1>Color Switcher</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      >
        {color.map((item) => {
          return (
            <Button key={item} color={item} setSelectedColor={setSelectedColor}>
              {item}
            </Button>
          );
        })}
      </div>
      <ColorBox color={selectedColor} />
    </>
  );
}

export default App;
