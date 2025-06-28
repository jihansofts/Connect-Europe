import HeroBanner from "@/common/HeroBanner";
import GetServices from "@/components/GetEmloyeePages/GetServices";

export default function Page() {
  return (
    <main>
      <HeroBanner title=" I need an employee" desc="we find top candidates" />
      <GetServices />
    </main>
  );
}
