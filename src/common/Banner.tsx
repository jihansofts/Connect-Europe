import React from "react";

export default function banner() {
  return (
    <div className="bg-heading py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center items-center text-center">
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">20+</h4>
            <span className="text-white text-[16px]">Years of Experience</span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">100+</h4>
            <span className="text-white text-[16px]">Happy Clients</span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">100+</h4>
            <span className="text-white text-[16px]">Projects Completed</span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">50+</h4>
            <span className="text-white text-[16px]">Team Members</span>
          </div>
        </div>
      </div>
    </div>
  );
}
