import React from "react";
import { useState } from "react";
import { send } from "../socketApi";

function Palatte() {
  const [color, setColor] = useState("#000");
  return (
    <div className="palette">
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>click</button>
      {color}
    </div>
  );
}

export default Palatte;
