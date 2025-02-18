"use client";
import Banner from "@/components/home/Banner";
import Projects from "@/components/home/Projects";
import { useRef } from "react";

export default function Home() {
  return (
    <div className=" w-full relative flex flex-col items-center justify-center   ">
      <Banner />
      <Projects />
    </div>
  );
}
