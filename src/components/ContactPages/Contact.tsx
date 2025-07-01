import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-primary py-20">
      <div className="container px-5 max-w-7xl mx-auto mt-20">
        <h1 className="text-[55px] capitalize font-bold text-center text-white font-sans">
          We can help you anywhere in Slovakia
        </h1>
        <p className="text-white font-normal text-center font-sans text-[20px]">
          We will find you suitable candidates
        </p>
        <div className="flex justify-center max-w-[700px] items-center mx-auto mt-10">
          <Image
            src="/images/contact1.png"
            alt="logo"
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
