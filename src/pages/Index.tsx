import Hero from "@/components/Hero";
import CityMetrics from "@/components/CityMetrics";
import MapSection from "@/components/MapSection";
import Features from "@/components/Features";
import AIAssistant from "@/components/AIAssistant";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <CityMetrics />
      <MapSection />
      <Features />
      <AIAssistant />
    </main>
  );
};

export default Index;
