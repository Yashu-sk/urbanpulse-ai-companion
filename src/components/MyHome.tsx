import { Home, Activity, Gauge, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const MyHome = () => {
  const handleRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="my-home" className="py-20 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Home className="w-10 h-10 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">
              My Smart <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Home</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor, control, and manage all your connected smart home devices in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Device Monitoring</CardTitle>
              <CardDescription>
                View status and health of all connected devices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full" 
                onClick={() => handleRedirect('https://monitoring.smarthome.example.com')}
              >
                Open Monitoring
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                <Settings className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle>Device Control</CardTitle>
              <CardDescription>
                Control lights, thermostats, locks, and more
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full"
                onClick={() => handleRedirect('https://control.smarthome.example.com')}
              >
                Open Control Panel
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <Gauge className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>Real-Time Dashboard</CardTitle>
              <CardDescription>
                Live energy usage, security, and automation insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full"
                onClick={() => handleRedirect('https://dashboard.smarthome.example.com')}
              >
                Open Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MyHome;
