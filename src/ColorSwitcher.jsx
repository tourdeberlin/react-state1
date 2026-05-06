import { useState } from "react";

const ColorSwitcher = () => {
  const [color, setColor] = useState("blue");


  function colorSwitch() {
    setColor((prev) => (prev === "blue" ? "pink" : "blue"));
  }

  return (
    <div>
      <div style={{ backgroundColor: color, width: "200px", height: "200px" }}>
        <button onClick={colorSwitch}>Изменить цвет</button>
      </div>
    </div>
  );
};

export default ColorSwitcher;
