import Contact from "@/components/ContactPages/Contact";
import ContactArea from "@/components/ContactPages/ContactArea";
import MapArea from "@/components/ContactPages/MapArea";
import React from "react";

export default function page() {
  return (
    <main>
      <Contact />
      <ContactArea />
      <MapArea />
    </main>
  );
}
