"use client";
import React from "react";
import ServiceSection from "@/common/ServiceSection";

import StepsSection from "./StepsSection";

import AboutBanner from "@/common/AboutBanner";

export default function GetServices() {

  const smothScroll = (id: string, duration = 1000) => {
    const target = document.getElementById(id);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    const startTime = performance.now();

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, start + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <section className="bg-white py-10 px-5">
      <div className="container max-w-7xl mx-auto">
        <ul className="flex justify-center space-x-10">
          <li className="text-[22px] text-primary hover:underline cursor-pointer">
            <button
              className="hover:underline cursor-pointer"
              onClick={() => smothScroll("Recruiting", 1000)}>
              Recruiting
            </button>
          </li>
          <li className="text-[22px] text-primary hover:underline cursor-pointer">
            <button
              className="hover:underline cursor-pointer"
              onClick={() => smothScroll("Headhunting", 1000)}>
              Headhunting
            </button>
          </li>
          <li className="text-[22px] text-primary ">
            <button
              className="hover:underline cursor-pointer"
              onClick={() => smothScroll("Interim", 1000)}>
              Interim
            </button>
          </li>
        </ul>
      </div>
      <div className="container  mx-auto">
        <ServiceSection
          id="Recruiting"
          title="Recruiting"
          subtitle="Service"
          imageSrc="/images/service1.jpg"
          reverse // ⬅️ Image on the right
          paragraphs={[
            "We will provide you with suitable candidates for key positions without costing you a lot of time and energy. Our recruitment process is designed to ensure that you, the client, get the best talent for your organisation.",
            "We start by thoroughly understanding your recruitment needs, including job requirements, qualifications and required skills. We will then use our extensive network and various search methods to source qualified candidates. Our consultants will then carefully review and assess each candidate’s experience, expertise, qualities and motivation. We’ll provide you with a curated list of the best candidates, along with comprehensive profiles and recommendations to help you make the right decisions.",
            "We ensure open and transparent communication throughout the process, keeping you informed of progress and working closely with you to successfully fill your vacancies",
          ]}
        />
        <StepsSection />
        <ServiceSection
          id="Headhunting"
          title="Headhunting"
          subtitle="Service"
          imageSrc="/images/service2.jpg"
          paragraphs={[
            "Headhunting, or executive search, is a specialist consultancy service for the highly effective identification, sourcing and attraction of top talent. We’ll find, reach out and get you the professionals with the experience and quality you need to bring the value you need.When it comes to finding the best talent for your organization, sometimes the traditional recruitment process just doesn’t cut it. This is where headhunting services come in. Our team of experienced headhunters have a proven track record of finding, approaching and recruiting top talent who are not actively seeking new opportunities.",
            "With our extensive network of contacts and our in-depth knowledge of the industry, we can find the right person for even the most challenging assignments. We take the time to understand your business, culture and recruitment needs so we can find candidates who not only have the right skills and experience, but also those who are the right fit for your team. Plus, our confidential approach ensures that your search remains discreet and you only pay for success. Let us help you find the best talent for your organization with our headhunting services. Contact us today to find out more.",
          ]}
        />
        <ServiceSection
          id="Interim"
          title="Interim"
          subtitle="Service"
          imageSrc="/images/service3.jpg"
          reverse //
          paragraphs={[
            "We will provide you with an expert who will bring high efficiency to your processes. An interim manager is a person who temporarily becomes part of your company. You can hire an interim manager to deal with changes, new projects, strategic tasks or unpopular moves. This professional is highly qualified, has a range of work experience and has completed a wide variety of projects. The interim manager does not need adaptation, he/she solves the entrusted tasks immediately.",
            "If your organisation is facing a significant change that requires the rapid involvement of an experienced manager, an interim service is the solution you need. Our team of interim managers has extensive experience in leading organisations through periods of change and transformation. Whether you need a CEO, CFO, CMO, or any other leadership position, we can provide you with an interim manager. He/she will have the skills, experience and expertise to engage immediately in processes and deliver results.",
            "With our flexible service model, you can use an interim manager for as long as you need, whether that’s a few weeks, months or longer. We take the time to understand your business, culture and goals so that we can provide you with an interim manager that will be a good fit for your organization. Let us help you navigate change and achieve results with our interim management services.",
          ]}
        />
      </div>
      <AboutBanner
        image="/images/meet.webp"
        title="Our Team"
        subtitle="Meet Our Consultants"
        desc=" Expertise is the fundamental pillar on which our company stands and
            also what our partners can rely on 100%. Expertise is what we pride
            ourselves on and continually develop in our consultants."
      />
    </section>
  );
}
