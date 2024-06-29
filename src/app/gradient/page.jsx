"use client";
import { useState, useEffect } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { MdContentCopy } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import "react-color-palette/css";
export default function Gradient() {
  const [color, setColor] = useColor("#1fb6ff");
  const [degrees, setDegrees] = useState("0");
  const [linearToggle, setLinearToggle] = useState(true);
  const [position, setPosition] = useState("0");
  const [gradientColors, setGradientColors] = useState([
    {
      hex: "#1fb6ff",
      rgb: { r: 31, g: 182, b: 255, a: 1 },
      hsv: { h: 200, s: 100, v: 100, a: 1 },
      position: "0",
      id: "firstID",
    },
    {
      hex: "#0000ff",
      rgb: { r: 0, g: 0, b: 255, a: 1 },
      hsv: { h: 240, s: 100, v: 100, a: 1 },
      position: "100",
      id: "#secondID",
    },
  ]);
  const [gradient, setGradient] = useState("");
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
            position: gradient.position,
            id: gradient.id,
          };
        }
      })
    );
  }, [color]);
  //Changes the position of the active value
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
            position: position,
            id: gradient.id,
          };
        }
      })
    );
  }, [position]);
  //Changes gradient text
  useEffect(() => {
    let text = `${linearToggle ? "linear" : "radial"}-gradient(${
      linearToggle ? `${degrees}deg` : "circle"
    }, `;
    for (let i in gradientColors) {
      let rgba;
      if (i != gradientColors.length - 1) {
        rgba = `rgba(${Math.floor(gradientColors[i].rgb.r)},${Math.floor(
          gradientColors[i].rgb.g
        )},${Math.floor(gradientColors[i].rgb.b)},${Math.floor(
          gradientColors[i].rgb.a
        )}) ${gradientColors[i].position}%, `;
      } else {
        rgba = `rgba(${Math.floor(gradientColors[i].rgb.r)},${Math.floor(
          gradientColors[i].rgb.g
        )},${Math.floor(gradientColors[i].rgb.b)},${Math.floor(
          gradientColors[i].rgb.a
        )}) ${gradientColors[i].position}%)`;
      }
      text += rgba;
    }
    setGradient(text);
  }, [gradientColors, linearToggle, degrees]);
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
                position={gradient.position}
                setActive={setActive}
                color={gradient}
                remove={removeColor}
                gradientColors={gradientColors}
                setPosition={setPosition}
              />
            );
          })}
        </div>
        <div className=" h-[2rem] my-2 flex">
          <input
            type="text"
            className="w-16 border-x border-y border-gray-dark rounded-lg text-gray-dark p-2 text-center"
            value={`${degrees}`}
            onChange={(e) => {
              setDegrees(e.target.value);
            }}
          />
          <span className="text-2xl">°</span>
          <button
            onClick={() => {
              setLinearToggle(!linearToggle);
            }}
            className="font-bold border-2 w-1/3 mx-auto rounded-xl bg-blue border-none text-background text-2xl cursor-pointer  hover:scale-105 transition-all shadow-md shadow-code"
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
                  position: "50",
                  id: Math.floor(Math.random() * 10000000 + 10000000),
                },
              ]);
            }}
            className="font-bold border-2 w-1/3 mx-auto rounded-xl bg-blue border-none text-background text-2xl cursor-pointer  hover:scale-105 transition-all shadow-md shadow-code"
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
            background: `${gradient}`,
          }}
        ></div>
        <div className="rounded-lg h-[16rem] p-4 my-auto bg-code text-gray-light text-xl">
          <span className="text-code-text">background:</span> {gradient};
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(`background: ${gradient};`);
          }}
          className="font-bold flex items-center justify-center py-2 border-2 w-1/3 mx-auto rounded-xl bg-blue border-none text-background text-2xl cursor-pointer  hover:scale-105 transition-all shadow-md shadow-code"
        >
          <MdContentCopy color={"#d3dce6"} /> Copy CSS
        </button>
      </section>
    </main>
  );
}
const ColorInput = (props) => {
  let { id, color, setActive, position, setPosition } = props;
  return (
    <div className="flex">
      <input
        type="range"
        id={id}
        value={position}
        className="w-full cursor-pointer"
        style={{ accentColor: color.hex }}
        onClick={(e) => {
          setActive(e.target.id);
        }}
        onChange={(e) => {
          setPosition(e.target.value);
        }}
        min={0}
        max={100}
      />
      <button className="mx-1 w-[3rem] text-gray-dark">
        {position ? position.toString() : ""}%
      </button>
      <button
        onClick={() => {
          if (props.gradientColors.length == 2) {
            return;
          }
          props.remove({
            id: id,
          });
        }}
        className="mx-1 w-[1.5rem] text-gray-dark"
      >
        X
      </button>
    </div>
  );
};
