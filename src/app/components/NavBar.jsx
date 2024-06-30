"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [active, setActive] = useState("Home");
  return (
    <nav className="w-full h-24 flex items-center mb-4 border-b border-gray-light animate-fade-down">
      <Link
        href="/"
        className={`mr-auto`}
        onClick={() => {
          setActive("Home");
        }}
      >
        <Image
          src="/CSSsimple.png"
          width={400}
          height={200}
          priority={true}
          alt={"CSS Simple"}
        />
      </Link>
      <div className="h-full flex">
        <Link
          href="/gradient"
          className={`links ${
            active == "Gradient" ? "border-b-4 text-blue" : ""
          }`}
          onClick={() => {
            setActive("Gradient");
          }}
        >
          Gradient
        </Link>
        <Link
          href="/boxshadow"
          className={`links ${
            active == "BoxShadow" ? "border-b-4 text-blue" : ""
          }`}
          onClick={() => {
            setActive("BoxShadow");
          }}
        >
          Box Shadow
        </Link>
        <Link
          href="/colorpicker"
          className={`links mr-4 sm:mr-8 md:mr-12 lg:mr-16 xxl:mr-16 ${
            active == "ColorPicker" ? "border-b-4 text-blue" : ""
          }`}
          onClick={() => {
            setActive("ColorPicker");
          }}
        >
          Color Picker
        </Link>
      </div>
    </nav>
  );
}
