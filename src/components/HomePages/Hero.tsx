"use client";
import React from "react";
import { useInputModel } from "@/context/ModelContext";
export default function Hero() {
  const { openModel } = useInputModel();

  return (
    <section className="bg-primary py-10">
      <div className="mx-auto max-w-7xl">
        <div>
          <video
            typeof="video/mp4"
            width="100%"
            height="100%"
            autoPlay
            src="/video.mp4"></video>
        </div>
        <div className="mt-5">
          <h1 className="text-[55px] font-bold text-center text-white font-sans">
            Preferred Recruitment Agency
          </h1>
          <p className="text-white font-normal text-center font-sans text-[20px]">
            we can find a candidate for every position we succeed even where
            others do not
          </p>
          <div className="flex justify-center mt-5">
            <button
              onClick={openModel}
              className="border border-white text-white hover:bg-heading hover:border-heading cursor-pointer duration-200 uppercase px-10 py-3 font-semibold rounded font-sans">
              i need an employee
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
