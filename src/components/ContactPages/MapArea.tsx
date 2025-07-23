import AboutBanner from "@/common/AboutBanner";
import React from "react";

export default function MapArea() {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="w-full h-[400px] my-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1744745907927!2d-0.016195106632005574!3d51.528359636514075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d5ad7c224d7%3A0x326bb242c5c2b2d7!2s5%20Bolinder%20Wy.%2C%20London%20E3%203UH%2C%20UK!5e0!3m2!1sen!2sbd!4v1753268055781!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <AboutBanner
        image="/card1.webp"
        title=" Top Talent, On Demand"
        subtitle="10 Years of Impact Across Europe"
        desc="Expertise is the fundamental pillar on which our company stands and also what our partners can rely on 100%. Expertise is what we pride ourselves on and continually develop in our consultants."
      />
    </section>
  );
}
