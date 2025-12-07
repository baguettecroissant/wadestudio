import Navbar from "@/components/Navbar";
import HeroV2 from "@/components/HeroV2";
import LogoTicker from "@/components/LogoTicker";
import WorkSection from "@/components/WorkSection";
import TestimonialTicker from "@/components/TestimonialTicker";
import BentoGrid from "@/components/BentoGrid";

import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroV2 />
      <LogoTicker />
      <WorkSection />
      <BentoGrid />
      <TestimonialTicker />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
