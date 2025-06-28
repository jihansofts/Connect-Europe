"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const timeline = [
  {
    year: "2004",
    text: "Entering the market and establishing a TC in competition with recruitment agencies",
  },
  {
    year: "2008",
    text: "Change of legal form / coping with the financial crisis",
  },
  {
    year: "2010",
    text: "Entry to international markets, improvement of know-how",
  },
  {
    year: "2015",
    text: "The largest personnel agency in the Banska Bystrica region",
  },
  {
    year: "2018",
    text: "Significant expansion of the team of external consultants, thereby expanding our scope to the entire territory of the Slovak Republic",
  },
];

export default function OurStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 10,
  });

  const dotY = useTransform(springScroll, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-white py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          Our story
        </h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          The year 2004 marked our entry into the market of consultancy services
          in the field of human resources management and recruitment agencies.
        </p>
      </div>

      {/* Timeline container */}
      <div ref={containerRef} className="relative max-w-5xl mx-auto mt-20 px-4">
        {/* Vertical Line */}
        <div className="absolute top-0 left-3 md:left-1/2 w-[2px] bg-red-200 h-full transform md:-translate-x-1/2 z-0" />

        {/* Moving red dot with pulse */}
        <motion.div
          className="absolute left-3 md:left-1/2 w-5 h-5 rounded-full bg-red-600 z-10 md:-translate-x-1/2"
          style={{ top: dotY }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
        />

        {/* Timeline entries */}
        <div className="relative flex flex-col gap-16 py-20">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`w-full flex ${
                index % 2 === 0
                  ? "justify-start md:pr-10"
                  : "justify-start md:justify-end md:pl-10"
              }`}>
              <div className="bg-white shadow-md rounded-xl p-6 max-w-md">
                <p className="text-red-600 font-bold mb-2">{item.year}</p>
                <p className="text-gray-700">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
