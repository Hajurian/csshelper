"use client";
import { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
export default function Gradient() {
  const [color, setColor] = useColor("#000");
  return (
    <main className=" w-full h-screen flex justify-center">
      <section className="border-2 border-gray-light w-[32rem] mr-16 h-[40rem] rounded-lg p-4">
        <div>
          {/**inputs */}
          <input type="range" />
        </div>

        <ColorPicker hideInput={["hsv"]} color={color} onChange={setColor} />
      </section>
      <section className="border-2 border-gray-light w-[32rem] h-[40rem] rounded-lg p-4 flex flex-col">
        <div className="border-2 h-[16rem] my-auto"></div>
        <div className="border-2 h-[16rem] my-auto"></div>
      </section>
    </main>
  );
}
