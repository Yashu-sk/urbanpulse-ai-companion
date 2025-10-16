import { Wind, Car, Calendar, Droplets } from "lucide-react";
import MetricCard from "./MetricCard";

const CityMetrics = () => {
  return (
    <section id="metrics" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Live City <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time data to help you make informed decisions about your day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            icon={Wind}
            title="Air Quality Index"
            value="42"
            subtitle="Good • Downtown District"
            status="good"
          />
          <MetricCard
            icon={Car}
            title="Traffic Flow"
            value="65%"
            subtitle="Moderate • Peak hours"
            status="warning"
          />
          <MetricCard
            icon={Calendar}
            title="Upcoming Events"
            value="12"
            subtitle="This weekend"
            status="good"
          />
          <MetricCard
            icon={Droplets}
            title="Water Usage"
            value="87L"
            subtitle="Today • 12% below avg"
            status="good"
          />
        </div>
      </div>
    </section>
  );
};

export default CityMetrics;
