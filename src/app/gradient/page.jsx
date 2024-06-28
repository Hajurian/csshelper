"use client";
import { useState, useEffect } from "react";
import { ColorPicker, Hue, useColor } from "react-color-palette";
import "react-color-palette/css";
export default function Gradient() {
  const [color, setColor] = useColor("#1fb6ff");
  const [degrees, setDegrees] = useState("0");
  const [linearToggle, setLinearToggle] = useState(true);
  const [gradientColors, setGradientColors] = useState([
    {
      hex: "#1fb6ff",
      rgb: { r: 31, g: 182, b: 255, a: 1 },
      hsv: { h: 200, s: 100, v: 100, a: 1 },
      id: "firstID",
    },
    {
      hex: "#0000ff",
      rgb: { r: 0, g: 0, b: 255, a: 1 },
      hsv: { h: 240, s: 100, v: 100, a: 1 },
      id: "#secondID",
    },
  ]);
  //Active state
  const [active, setActive] = useState(gradientColors[0].id);

  //removing color
  const removeColor = (toRemove) => {
    setGradientColors(
      gradientColors.filter((gradient) => gradient.id != toRemove.id)
    );
  };
  //Changes the color of active value
  useEffect(() => {
    setGradientColors(
      gradientColors.map((gradient) => {
        if (gradient.id != active) {
          return gradient;
        } else {
          return {
            hex: color.hex,
            rgb: color.rgb,
            hsv: color.hsv,
            id: gradient.id,
          };
        }
      })
    );
  }, [color]);

  //setting the color picker to the first color value
  useEffect(() => {
    gradientColors.map((gradient) => {
      if (gradient.id == active) {
        setColor({
          hex: gradient.hex,
          rgb: gradient.rgb,
          hsv: gradient.hsv,
        });
      }
    });
  }, [active]);
  return (
    <main className=" w-full h-screen flex justify-center">
      <section className="border-2 border-gray-light w-[32rem] mr-16 h-[40rem] rounded-lg p-4">
        <div className="flex flex-col h-[8rem] w-full overflow-scroll overflow-x-hidden">
          {gradientColors.map((gradient, id) => {
            return (
              <ColorInput
                key={id}
                id={gradient.id}
                setActive={setActive}
                color={gradient}
                remove={removeColor}
                gradientColors={gradientColors}
              />
            );
          })}
        </div>
        <div className=" h-[2rem] my-2 flex">
          <input
            type="text"
            className="w-16 border-x border-y border-gray-dark rounded-lg text-gray-dark p-2 text-center"
            value={degrees}
            onChange={(e) => {
              if (e.target.value.length > 3) {
                return;
              }
              setDegrees(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setLinearToggle(!linearToggle);
            }}
            className="border-2 w-1/3 mx-auto rounded-xl bg-blue border-none text-background text-2xl cursor-pointer  hover:scale-105 transition-all shadow-md shadow-code"
          >
            {linearToggle ? "Linear" : "Radial"}
          </button>
          <button
            onClick={() => {
              setGradientColors([
                ...gradientColors,
                {
                  hex: gradientColors[0].hex,
                  rgb: gradientColors[0].rgb,
                  hsv: gradientColors[0].hsv,
                  id: Math.floor(Math.random() * 10000000 + 10000000),
                },
              ]);
            }}
            className="border-2 w-1/3 mx-auto rounded-xl bg-blue border-none text-background text-2xl cursor-pointer  hover:scale-105 transition-all shadow-md shadow-code"
          >
            Add
          </button>
        </div>
        <ColorPicker hideInput={["hsv"]} color={color} onChange={setColor} />
      </section>
      <section className="border-2 border-gray-light w-[32rem] h-[40rem] rounded-lg p-4 flex flex-col">
        <div
          className="border-2 h-[16rem] my-auto"
          style={{
            background: `${linearToggle ? "linear" : "radial"}-gradient(${
              linearToggle ? `${degrees}deg` : "circle"
            }, rgba(${gradientColors[0].rgb.r},${gradientColors[0].rgb.g},${
              gradientColors[0].rgb.b
            },${gradientColors[0].rgb.a}) 0%,
              rgba(${gradientColors[1].rgb.r},${gradientColors[1].rgb.g},${
              gradientColors[1].rgb.b
            },${gradientColors[1].rgb.a}) 100%)`,
          }}
        ></div>
        <div className="rounded-lg h-[16rem] my-auto bg-code"></div>
      </section>
    </main>
  );
}
const ColorInput = (props) => {
  let { id, color, setActive } = props;
  return (
    <div className="flex">
      <input
        type="range"
        id={id}
        className="w-full"
        style={{ accentColor: color.hex }}
        onClick={(e) => {
          setActive(e.target.id);
        }}
      />
      <button
        onClick={() => {
          if (props.gradientColors.length == 2) {
            return;
          }
          props.remove({
            id: id,
          });
        }}
      >
        Remove
      </button>
    </div>
  );
};
