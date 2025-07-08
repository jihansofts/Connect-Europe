"use client";
import TestimonialCard from "@/common/TestimonialCard";
import { TestimonialCardProps } from "@/types/types";
import { motion, Variants } from "framer-motion";
import React from "react";

const data: TestimonialCardProps[] = [
  {
    companyLogo: "/brand1.png",
    company: "HIMAS",
    quote: "Trigon had us in a key position within 2 weeks",
    name: "Ing. Mária Pepichová",
    title: "Executive Director",
    positions: ["Technical Director", "Electrician", "Janitor"],
  },
  {
    companyLogo: "/brand2.png",
    company: "DITEC",
    quote: "We have the highest number of relevant candidates from Trigon.",
    name: "Patrik Hasaj",
    title: "Director of Software Division",
    positions: ["IT architect", "SLA Manager", "IT analyst"],
  },
  {
    companyLogo: "/brand3.png",
    company: "PPS",
    quote: "TRIGON is our preferred recruitment agency",
    name: "Ing. Jozef Výbošťok",
    title: "Personnel Director",
    positions: ["Supply chain manager", "Technologist", "Project Manager"],
  },
  {
    companyLogo: "/brand4.png",
    company: "amari banero",
    quote: "9 years of exclusive cooperation.",
    name: "Ing. Miroslav Cvengroš",
    title: "Executive Director",
    positions: ["External trader", "Internal trader", "CNC operator"],
  },
  {
    companyLogo: "/brand5.png",
    company: "KovexTech",
    quote: "Trigon always delivers skilled technicians fast.",
    name: "Lucia Bartová",
    title: "Operations Manager",
    positions: ["Welder", "Mechanical Engineer", "Assembler"],
  },
  {
    companyLogo: "/brand6.png",
    company: "SoftServ",
    quote: "We rely on Trigon for top-tier IT candidates.",
    name: "Tomáš Šimko",
    title: "CTO",
    positions: ["Frontend Developer", "Backend Developer", "DevOps Engineer"],
  },
  {
    companyLogo: "/brand7.png",
    company: "BuildCorp",
    quote: "Exceptional turnaround and quality hires.",
    name: "Zuzana Kováčová",
    title: "HR Business Partner",
    positions: ["Construction Manager", "Architect", "Planner"],
  },
  {
    companyLogo: "/brand8.png",
    company: "GreenLogic",
    quote: "Their sustainability-minded talent impressed us.",
    name: "Peter Lenárt",
    title: "Sustainability Officer",
    positions: ["Energy Consultant", "R&D Engineer", "Environmental Analyst"],
  },
  {
    companyLogo: "/brand9.png",
    company: "PharmaLux",
    quote: "Hard-to-fill positions were solved quickly.",
    name: "Ivana Filo",
    title: "Regulatory Affairs Manager",
    positions: ["Lab Technician", "QA Manager", "Pharmacist"],
  },
  {
    companyLogo: "/brand10.png",
    company: "SkyNetics",
    quote: "Trigon helped scale our tech teams in record time.",
    name: "Erik Baláž",
    title: "Software Engineering Manager",
    positions: ["Full Stack Engineer", "Scrum Master", "QA Tester"],
  },
];

export default function TestimonialSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto w-7xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 p-8 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {data.map((card, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <TestimonialCard {...card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
