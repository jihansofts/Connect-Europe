import React from "react";
import Image from "next/image";

export default function Patner() {
  return (
    <div className="bg-white">
      <div className="container mx-auto grid grid-cols-2 justify-between items-center">
        <div className="col-span-1 flex justify-center items-end space-x-5">
          <Image src="/manager.png" alt="logo" width={400} height={400} />
          <div className="mb-10">
            <h1 className="text-[40px] font-bold text-heading font-sans">
              Miriam Krpelánová
            </h1>
            <p className="text-[20px] font-normal text-heading font-sans">
              Managing Director
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-start space-x-5">
          <div className="mt-10">
            <h1 className="text-[40px] font-bold text-heading font-sans">
              Miroslav Lichy
            </h1>
            <p className="text-[20px] font-normal text-heading font-sans">
              Managing Partner
            </p>
          </div>
          <Image src="/patner.webp" alt="logo" className="mt-5" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
