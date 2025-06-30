import HeroBanner from "@/common/HeroBanner";
import BannerCount from "@/components/Reference/BannerCount";
import BrandAds from "@/components/Reference/BrandAds";
import TestimonialSection from "@/components/Reference/TestimonialSection";
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
