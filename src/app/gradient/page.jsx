"use client";
import { useState, useEffect } from "react";
import { ColorPicker, Hue, useColor } from "react-color-palette";
import "react-color-palette/css";
export default function Gradient() {
  const [color, setColor] = useColor("#ff0000");
  const [active, setActive] = useState("0");
  const [linearToggle, setLinearToggle] = useState(true);
  const [gradientColors, setGradientColors] = useState([
    {
      hex: "#ff0000",
      rgb: { r: 255, g: 0, b: 0, a: 1 },
      hsv: { h: 0, s: 100, v: 100, a: 1 },
    },
    {
      hex: "#00ff00",
      rgb: { r: 0, g: 255, b: 0, a: 1 },
      hsv: { h: 100, s: 100, v: 100, a: 1 },
    },
  ]);

  useEffect(() => {
    setGradientColors(
      gradientColors.map((gradient, id) => {
        if (id != active) {
          return gradient;
        } else {
          return { hex: color.hex, rgb: color.rgb, hsv: color.hsv };
        }
      })
    );
  }, [color]);
  useEffect(() => {
    setColor({
      hex: gradientColors[active].hex,
      rgb: gradientColors[active].rgb,
      hsv: gradientColors[active].hsv,
    });
  }, [active]);
  return (
    <main className=" w-full h-screen flex justify-center">
      <section className="border-2 border-gray-light w-[32rem] mr-16 h-[40rem] rounded-lg p-4">
        <div className="flex flex-col h-[8rem] w-full">
          {gradientColors.map((input, id) => {
            return (
              <ColorInput
                key={id}
                id={id}
                setActive={setActive}
                color={input}
              />
            );
          })}
        </div>
        <div className=" h-[2rem] my-2">
          <button
            onClick={() => {
              console.log(gradientColors);
            }}
          >
            Linear
          </button>
          <button>Add</button>
        </div>
        <ColorPicker hideInput={["hsv"]} color={color} onChange={setColor} />
      </section>
      <section className="border-2 border-gray-light w-[32rem] h-[40rem] rounded-lg p-4 flex flex-col">
        <div className="border-2 h-[16rem] my-auto">
          {gradientColors[active].hex}
        </div>
        <div className="rounded-lg h-[16rem] my-auto bg-code"></div>
      </section>
    </main>
  );
}
const ColorInput = (props) => {
  let { id, color, setActive } = props;
  return (
    <div>
      <input
        type="range"
        id={id}
        className="w-full"
        style={{ accentColor: color.hex }}
        onClick={(e) => {
          setActive(e.target.id);
        }}
      />
    </div>
  );
};
