import Hero from "../components/home/Hero";
import Process from "../components/home/Process";
import QuickQuote from "../components/home/QuickQuote";
import ServiceAreas from "../components/home/ServiceAreas";
import ServicesGrid from "../components/home/ServicesGrid";
import StatsSection from "../components/home/StatsSection";
import TrustStrip from "../components/home/TrustStrip";

export default function Home() {
  return (
    <main>
        <Hero />
        <TrustStrip />
        <StatsSection />
        <ServicesGrid />
        <Process />
        <ServiceAreas />
        <QuickQuote />
      
    </main>
  );
}