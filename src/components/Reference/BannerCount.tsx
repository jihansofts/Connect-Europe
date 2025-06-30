import React from "react";

export default function BannerCount() {
  return (
    <div className="bg-heading py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 justify-center items-center text-center">
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">21+</h4>
            <span className="text-white text-[16px]">rokov skúseností</span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">455+</h4>
            <span className="text-white text-[16px]">clients</span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">
              28 200
            </h4>
            <span className="text-white text-[16px]">
              candidates in the dataset
            </span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">94%</h4>
            <span className="text-white text-[16px]">relevant candidates</span>
          </div>
          <div>
            <h4 className="text-white text-[56px] font-sans font-bold">
              1 600 +
            </h4>
            <span className="text-white text-[16px]">interviews per year</span>
          </div>
        </div>
      </div>
    </div>
  );
}
