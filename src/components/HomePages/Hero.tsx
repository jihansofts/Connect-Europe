"use client";
import React from "react";
import { useInputModel } from "@/context/ModelContext";
export default function Hero() {
  const { openModel } = useInputModel();

  return (
    <section className="bg-primary py-10">
      <div className="mx-auto max-w-7xl">
        <div className="aspect-video w-full mt-10">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/qkVjHvR-qAg?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen></iframe>
        </div>

        {/* <div>
          <video
            typeof="video/mp4"
            width="100%"
            height="100%"
            autoPlay
            src="/https://www.youtube.com/watch?v=qkVjHvR-qAg"></video>
        </div> */}
        <div className="mt-5">
          <h1 className="text-[55px] font-bold text-center text-white font-sans">
            Smart Hiring. Real Results. Europe-Wide.
          </h1>
          <p className="text-white font-normal text-center font-sans text-[20px]">
            At Connect Europe, we don’t just fill roles we find game-changers.
            Fast, efficient, and tailored to your business goals.
          </p>
          <div className="flex justify-center mt-5">
            <button
              onClick={openModel}
              className="border border-white text-white hover:bg-heading hover:border-heading cursor-pointer duration-200 uppercase px-10 py-3 font-semibold rounded font-sans">
              Talk to Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
