import { Leaf, Activity, Phone, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Smart Living <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools to help you live smarter, healthier, and more sustainably
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Leaf}
            title="Carbon Footprint"
            description="Track and reduce your environmental impact with personalized insights on commute, diet, and shopping habits."
          />
          <FeatureCard
            icon={Activity}
            title="Health Insights"
            description="Visualize sleep patterns, activity levels, and heart rate trends to optimize your wellbeing."
          />
          <FeatureCard
            icon={Phone}
            title="Telehealth Portal"
            description="Secure access to log symptoms, connect with healthcare providers, and manage prescriptions online."
          />
          <FeatureCard
            icon={Zap}
            title="Smart Home Hub"
            description="Monitor energy and water usage from smart meters to reduce bills and live sustainably."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
