"use client";
import { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import { MdContentCopy } from "react-icons/md";
import "react-color-palette/css";

export default function BoxShadow() {
  const [shadowX, setShadowX] = useState("0");
  const [shadowY, setShadowY] = useState("0");
  const [blurRad, setBlurRad] = useState("0");
  const [blurSpread, setBlurSpread] = useState("0");
  const [color, setColor] = useColor("#000000");
  const [inset, setInset] = useState(false);
  return (
    <>
      <section className="w-full lg:w-1/2 h-[45rem] xxl:h-[55rem] p-8 mb-4 lg:mr-4 flex flex-col items-center border-2 border-gray-light rounded-md opacity-0 animate-expand animate-delay-300 animate-fill-forwards">
        <Box
          shadowX={shadowX}
          shadowY={shadowY}
          blurRad={blurRad}
          blurSpread={blurSpread}
          inset={inset}
          color={color}
        />
        <TextBox
          shadowX={shadowX}
          shadowY={shadowY}
          blurRad={blurRad}
          blurSpread={blurSpread}
          inset={inset}
          color={color}
        />
        <div className="w-full h-16 xxl:mt-2 flex flex-col">
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `box-shadow: ${shadowX}px ${shadowY}px ${blurRad}px ${blurSpread}px rgba(
                  ${Math.floor(color.rgb.r)},${Math.floor(color.rgb.g)},
                  ${Math.floor(color.rgb.b)},
                  ${Math.round(color.rgb.a * 100) / 100});`
              );
            }}
            className="buttons"
          >
            <MdContentCopy color={"#d3dce6"} /> Copy CSS
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `shadow-[${shadowX}px_${shadowY}px_${blurRad}px_${blurSpread}px_rgba(
                  ${Math.floor(color.rgb.r)},${Math.floor(color.rgb.g)},
                  ${Math.floor(color.rgb.b)},
                  ${Math.round(color.rgb.a * 100) / 100});]`
              );
            }}
            className="buttons"
          >
            <MdContentCopy color={"#d3dce6"} /> Copy Tailwind
          </button>
        </div>
      </section>
      <section className="w-full lg:w-1/2 h-[45rem] xxl:h-[55rem] p-6  flex flex-col items-center border-2 border-gray-light rounded-md opacity-0 animate-expand animate-delay-300 animate-fill-forwards">
        <h1 className="text-center text-3xl pb-8 font-bold text-blue">
          Box Shadow
        </h1>
        <Input type="Horizontal Length" state={shadowX} setState={setShadowX} />
        <Input type="Vertical Length" state={shadowY} setState={setShadowY} />
        <Input type="Blur Radius" state={blurRad} setState={setBlurRad} />
        <Input type="Blur Spread" state={blurSpread} setState={setBlurSpread} />
        <div className="w-1/2 flex flex-col">
          <div className="flex">
            <label className="text-lg mr-auto">Color</label>
            <label className="text-lg mr-2">Inset</label>
            <input
              type="checkbox"
              checked={inset}
              onChange={() => {
                setInset(!inset);
              }}
              className="mr-auto accent-blue"
            />
          </div>
          <ColorPicker hideInput={["hsv"]} color={color} onChange={setColor} />
        </div>
      </section>
    </>
  );
}
//shadow-[${props.shadowX}px_${props.shadowY}px_${props.blurRad}px_rgba(0,0,0,1)]
const Box = (props) => {
  return (
    <div
      className={`w-[12rem] h-[12rem] mb-16 xxl:mb-32 border-2 border-code flex justify-center items-center text-2xl cursor-pointer hover:scale-105 transition-all text-blue `}
      style={{
        boxShadow: `${props.shadowX}px ${props.shadowY}px ${props.blurRad}px ${
          props.blurSpread
        }px rgba(${props.color.rgb.r},${props.color.rgb.g},${
          props.color.rgb.b
        },${props.color.rgb.a}) ${props.inset ? "inset" : ""}`,
      }}
    >
      Container
    </div>
  );
};
const TextBox = (props) => {
  return (
    <div className="w-[15rem] lg:w-full h-[8.25rem] xxl:mb-4 bg-code flex flex-col justify-center rounded-3xl cursor-pointer px-4 hover:scale-105 transition-all inset-4 shadow-md shadow-code">
      <p className="text-white text-xs xxl:text-xl leading-9">
        <span className="text-code-text">box-shadow</span>: {props.shadowX}px{" "}
        {props.shadowY}px {props.blurRad}px {props.blurSpread}px rgba(
        {Math.floor(props.color.rgb.r)},{Math.floor(props.color.rgb.g)},
        {Math.floor(props.color.rgb.b)},
        {Math.round(props.color.rgb.a * 100) / 100}){" "}
        {props.inset ? "inset" : ""};
      </p>
      <p className="text-white text-xs xxl:text-xl leading-9">
        <span className="text-code-text ">shadow</span>-[{props.shadowX}px_
        {props.shadowY}px_{props.blurRad}px_{props.blurSpread}px_rgba(
        {Math.floor(props.color.rgb.r)},{Math.floor(props.color.rgb.g)},
        {Math.floor(props.color.rgb.b)},
        {Math.round(props.color.rgb.a * 100) / 100})
        {props.inset ? "_inset" : ""}]
      </p>
    </div>
  );
};
const Input = (props) => {
  return (
    <>
      <div className="w-1/2 h-8 flex mt-2 mb-2 text-lg">
        <label className="w-36 mr-auto">{props.type}</label>
        <input
          type="text"
          onChange={(e) => {
            props.setState(e.target.value);
          }}
          value={props.state}
          className="w-12 text-center text-code border-2 rounded-xl"
        />
        <p>px</p>
      </div>
      <input
        type="range"
        className="w-1/2 accent-blue mb-2"
        value={props.state}
        onChange={(e) => {
          props.setState(e.target.value);
        }}
        min={-150}
        max={150}
        step={1}
      />
    </>
  );
};
