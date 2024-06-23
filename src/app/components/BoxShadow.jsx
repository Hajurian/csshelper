"use client";

import { useState } from "react";

export default function BoxShadow() {
  const [shadowX, setShadowX] = useState("0");
  const [shadowY, setShadowY] = useState("0");
  const [blurRad, setBlurRad] = useState("0");
  const [blurSpread, setBlurSpread] = useState("0");
  return (
    <>
      <div className="w-1/2 p-8 flex flex-col items-center">
        <Box
          shadowX={shadowX}
          shadowY={shadowY}
          blurRad={blurRad}
          blurSpread={blurSpread}
        />
        <TextBox
          shadowX={shadowX}
          shadowY={shadowY}
          blurRad={blurRad}
          blurSpread={blurSpread}
        />
        <div className="w-full h-16 mt-2 flex">
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `box-shadow: ${shadowX}px ${shadowY}px ${blurRad}px ${blurSpread}px rgba(0,0,0,1);`
              );
            }}
            className="border-2 w-1/3 mx-auto rounded-xl bg-blue border-none text-background text-2xl cursor-pointer  hover:scale-105 transition-all shadow-md shadow-code"
          >
            Copy CSS
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                `shadow-[${shadowX}px_${shadowY}px_${blurRad}px_${blurSpread}px_rgba(0,0,0,1)]`
              );
            }}
            className="border-2 w-1/3 mx-auto rounded-xl bg-blue border-none text-background text-2xl cursor-pointer  hover:scale-105 transition-all shadow-md shadow-code"
          >
            Copy Tailwind
          </button>
        </div>
      </div>
      <div className="w-1/2 p-8  flex flex-col items-center">
        <h1 className="text-center text-3xl pb-8 font-bold text-blue">
          Box Shadow
        </h1>
        <Input type="Horizontal Length" state={shadowX} setState={setShadowX} />
        <Input type="Vertical Length" state={shadowY} setState={setShadowY} />
        <Input type="Blur Radius" state={blurRad} setState={setBlurRad} />
        <Input type="Blur Spread" state={blurSpread} setState={setBlurSpread} />
        <div className="w-1/2">
          <label>Color</label>
          <input type="text" />
          <label>Inset</label>
          <input type="checkbox" />
        </div>
      </div>
    </>
  );
}
//shadow-[${props.shadowX}px_${props.shadowY}px_${props.blurRad}px_rgba(0,0,0,1)]
const Box = (props) => {
  return (
    <div
      className={`w-2/5 h-1/3 mb-32 border-2 border-code flex justify-center items-center text-2xl cursor-pointer hover:scale-105 transition-all text-blue `}
      style={{
        boxShadow: `${props.shadowX}px ${props.shadowY}px ${props.blurRad}px ${props.blurSpread}px rgba(0,0,0,1)`,
      }}
    >
      Container
    </div>
  );
};
const TextBox = (props) => {
  return (
    <div className="w-full h-32 bg-code  rounded-3xl cursor-pointer p-4 hover:scale-105 transition-all inset-4 shadow-md shadow-code">
      <p className="text-white text-xl leading-9">
        <span className="text-code-text">box-shadow</span>: {props.shadowX}px{" "}
        {props.shadowY}px {props.blurRad}px {props.blurSpread}px rgba(0,0,0,1);
      </p>
      <p className="text-white text-xl leading-9">
        <span className="text-code-text ">shadow</span>-[{props.shadowX}px_
        {props.shadowY}px_{props.blurRad}px_{props.blurSpread}px_rgba(0,0,0,1)]
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
