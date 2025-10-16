import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-cityscape.jpg";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Smart City Visualization" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-primary-foreground">Powered by Real-Time Data & AI</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{
        animationDelay: '0.1s'
      }}>
          Welcome to <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">UrbanPulse</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto animate-fade-in" style={{
        animationDelay: '0.2s'
      }}>
          Your intelligent companion for navigating city life. Make smarter decisions with real-time insights on traffic, air quality, events, and more.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{
        animationDelay: '0.3s'
      }}>
          <Button size="lg" onClick={() => scrollToSection('metrics')} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-elevated">
            Explore Dashboard
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('ai-assistant')} className="border-primary-foreground/30 text-primary-foreground backdrop-blur-sm font-semibold px-8 bg-green-600 hover:bg-green-500">
            Ask AI Assistant
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;