import HeroBanner from "@/common/HeroBanner";
import GetServices from "@/components/GetEmloyeePages/GetServices";

export default function Page() {
  return (
    <main>
      <HeroBanner
        title="Need an Employee?"
        desc="We connect you with top candidates  fast, reliable, and tailored to your needs."
      />
      <GetServices />
    </main>
  );
}
