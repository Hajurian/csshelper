"use client";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { MdContentCopy } from "react-icons/md";
export default function ColorPage() {
  const [color, setColor] = useColor("#1fb6ff");
  return (
    <main className="w-screen h-screen flex justify-center">
      <section className="w-4/5 h-full flex justify-center animate-expand">
        <div className="w-[20rem] md:w-[25rem] lg:w-[25rem] xxl:w-1/3 h-max p-8 flex flex-col border-2 border-gray-light rounded-md">
          <h1 className="text-center mb-4 text-2xl xxl:text-5xl text-blue font-extrabold">
            Color Picker
          </h1>
          <div
            className="w-32 h-32 mx-auto mb-16 border-2 border-gray-light rounded-lg "
            style={{ backgroundColor: color.hex }}
          ></div>
          <ColorPicker hideInput={["hsv"]} color={color} onChange={setColor} />
          <div className="w-full lg:flex xxl:flex justify-center">
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `rgb(${Math.round(color.rgb.r)},${Math.round(
                    color.rgb.g
                  )},${Math.round(color.rgb.b)},${color.rgb.a})`
                );
              }}
              className="buttons"
            >
              <MdContentCopy color={"#d3dce6"} /> Copy RGB
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText(`${color.hex}`);
              }}
              className="buttons"
            >
              <MdContentCopy color={"#d3dce6"} /> Copy HEX
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
