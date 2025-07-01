import HeroBanner from "@/common/HeroBanner";
import React from "react";
import RecruitingPages from "../../../components/RecruitingPages/RecruitingPages";

export default function page() {
  return (
    <main>
      <HeroBanner title="Recruiting" desc="we will find the best for you" />
      <RecruitingPages />
    </main>
  );
}
