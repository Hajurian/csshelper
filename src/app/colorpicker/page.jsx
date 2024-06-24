"use client";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
export default function ColorPage() {
  const [color, setColor] = useColor("#000");
  return (
    <main className="w-screen h-screen flex justify-center">
      <div className="w-4/5 h-full flex justify-center">
        <div className="w-1/3 h-max p-8 flex flex-col border-2 border-gray-light rounded-md">
          <h1 className="text-center mb-4 text-3xl text-blue font-bold">
            Color Picker
          </h1>
          <div
            className="w-32 h-32 mx-auto mb-16 border-2 "
            style={{ backgroundColor: color.hex }}
          ></div>
          <ColorPicker hideInput={["hsv"]} color={color} onChange={setColor} />
          <div className="w-full flex justify-center">
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `rgb(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
                );
              }}
              className="border-2 w-1/3 mt-4 mx-auto rounded-xl bg-blue border-none text-background text-2xl cursor-pointer  hover:scale-105 transition-all shadow-md shadow-code"
            >
              Copy RGB
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(`${color.hex}`);
              }}
              className="border-2 w-1/3 mt-4 mx-auto rounded-xl bg-blue border-none text-background text-2xl cursor-pointer  hover:scale-105 transition-all shadow-md shadow-code"
            >
              Copy HEX
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
