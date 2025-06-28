import React from "react";
import AboutHero from "@/components/AboutPages/AboutHero";
import OurStory from "@/components/AboutPages/OurStory";
import Team from "@/components/AboutPages/Team";
import Ourway from "@/components/AboutPages/Ourway";

export default function Page() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <Team />
      <Ourway />
    </main>
  );
}
