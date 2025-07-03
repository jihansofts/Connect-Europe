import Banner from "@/common/Banner";
import Hero from "@/components/HomePages/Hero";
// import Patner from "@/components/HomePages/Patner";
import Industry from "@/components/HomePages/Industry";
import Service from "@/components/HomePages/Services";
import Brand from "@/components/HomePages/Brand";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      {/* <Patner /> */}
      <Industry />
      <Service />
      <Brand />
    </main>
  );
}
