import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Cases from "@/components/sections/Cases";
import Metrics from "@/components/sections/Metrics";
import TechStack from "@/components/sections/TechStack";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import CtaFinal from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Cases />
      <Metrics />
      <TechStack />
      <Pricing />
      <Faq />
      <CtaFinal />
    </>
  );
}
