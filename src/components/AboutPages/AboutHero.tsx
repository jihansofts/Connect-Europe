import React from "react";
import Image from "next/image";
export default function AboutHero() {
  return (
    <section className="bg-primary py-20">
      <div className="container px-5 max-w-7xl mx-auto mt-20">
        <h1 className="text-[55px] font-bold text-center text-white font-sans">
          About
        </h1>
        <p className="text-white font-normal text-center font-sans text-[20px]">
          Get to know us and our story
        </p>

        <div className="bg-white mx-auto w-full lg:p-10 md:p-5 sm:p-4 p-4 rounded-3xl mt-16">
          <div className="grid grid-cols-1 justify-center gap-5 items-center md:grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 md:col-span-1 space-y-10">
              <h4 className="text-[24px] font-bold text-heading font-sans">
                We find top people on call
              </h4>
              <p className="text-[16px] font-normal text-gray-700 font-sans mt-5">
                We are a team of experienced industry professionals. For more
                than 20 years, our consultants have been helping companies
                attract the best people to their teams.
              </p>
              <p className="text-[16px] font-normal text-gray-700 font-sans mt-5">
                Our experience is both local and international. We have
                extensive experience in recruitment, executive search and
                business development. This creates a strong synergy that
                benefits our clients.
              </p>
              <span className="text-[18px] font-bold text-primary font-sans">
                - Ing. Miriam Krpelánová, Managing Director
              </span>
            </div>
            <div className="lg:col-span-7 md:col-span-1">
              <Image
                src="/images/team.jpg"
                alt="logo"
                className="w-full h-full rounded-2xl"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
