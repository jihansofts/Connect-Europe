import AboutBanner from "@/common/AboutBanner";
import React from "react";

export default function MapArea() {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="w-full h-[400px] my-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d65369183.36050215!2d0!3d0!3m2!1i1024!2i768!4f13.1!2m1!1sKl%C3%A1ry%20Jarunkovej%202!5e0!3m2!1sen!2sus!4v1751286875095!5m2!1sen!2sus"
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
