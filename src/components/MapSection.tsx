import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, ParkingCircle } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Interactive City <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Map</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track public transport, find parking, and navigate your city with ease
          </p>
        </div>

        <Card className="overflow-hidden shadow-elevated border-border/50">
          {/* Map Container */}
          <div className="relative h-[500px] bg-gradient-to-br from-muted to-muted/50">
            {/* Map Placeholder with Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
            
            {/* Centered Map Indicator */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
                  <Navigation className="w-10 h-10 text-primary" />
                </div>
                <p className="text-muted-foreground font-medium">Interactive Map View</p>
                <div className="flex gap-2 justify-center flex-wrap">
                  <Badge variant="secondary" className="gap-1">
                    <MapPin className="w-3 h-3" />
                    Transit
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <ParkingCircle className="w-3 h-3" />
                    Parking
                  </Badge>
                  <Badge variant="secondary" className="gap-1">
                    <MapPin className="w-3 h-3" />
                    Events
                  </Badge>
                </div>
              </div>
            </div>

            {/* Mock Data Points */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-accent rounded-full animate-ping" />
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default MapSection;
