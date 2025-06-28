import Banner from "@/common/Banner";
import Hero from "@/components/HomePages/Home/Hero";
import Patner from "@/components/HomePages/Patners/Patner";
import Industry from "@/components/HomePages/Industry/Industry";
import Service from "@/components/HomePages/Service/Services";
import Brand from "@/components/HomePages/Brand/Brand";

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <Patner />
      <Industry />
      <Service />
      <Brand/>
    </main>
  );
}
