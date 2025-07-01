import HeroBanner from "@/common/HeroBanner";
import BannerCount from "@/components/ReferencePages/BannerCount";
import BrandAds from "@/components/ReferencePages/BrandAds";
import TestimonialSection from "@/components/ReferencePages/TestimonialSection";
import React from "react";

export default function page() {
  return (
    <main>
      <HeroBanner
        title="References"
        desc="our results speak for themselves"
        btn
      />
      <BannerCount />
      <TestimonialSection />
      <BrandAds />
    </main>
  );
}
