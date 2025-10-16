import { useState } from "react";
import { ArrowLeft, Power, Lightbulb, Thermometer, Lock, Camera, Droplets, Wind, Zap, TrendingDown, TrendingUp, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const MyHome = () => {
  const [devices, setDevices] = useState({
    lights: { living: true, bedroom: false, kitchen: true },
    temperature: 22,
    doorLock: true,
    camera: true,
    waterUsage: 45,
    hvac: true
  });

  const toggleDevice = (device: string, room?: string) => {
    if (room) {
      setDevices(prev => ({
        ...prev,
        [device]: { ...prev[device as keyof typeof prev] as any, [room]: !((prev[device as keyof typeof prev] as any)[room]) }
      }));
    } else {
      setDevices(prev => ({ ...prev, [device]: !(prev[device as keyof typeof prev] as boolean) }));
    }
  };

  const setTemperature = (value: number[]) => {
    setDevices(prev => ({ ...prev, temperature: value[0] }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to UrbanPulse
            </Button>
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Smart Home
          </h1>
          <Badge variant="outline" className="gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            All Systems Online
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="control" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="control">Control</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>

          {/* Control Tab */}
          <TabsContent value="control" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Lights Control */}
              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Lightbulb className={`w-5 h-5 ${devices.lights.living ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Living Room</CardTitle>
                        <CardDescription>Smart Lights</CardDescription>
                      </div>
                    </div>
                    <Switch 
                      checked={devices.lights.living} 
                      onCheckedChange={() => toggleDevice('lights', 'living')}
                    />
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Lightbulb className={`w-5 h-5 ${devices.lights.bedroom ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Bedroom</CardTitle>
                        <CardDescription>Smart Lights</CardDescription>
                      </div>
                    </div>
                    <Switch 
                      checked={devices.lights.bedroom} 
                      onCheckedChange={() => toggleDevice('lights', 'bedroom')}
                    />
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Lightbulb className={`w-5 h-5 ${devices.lights.kitchen ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Kitchen</CardTitle>
                        <CardDescription>Smart Lights</CardDescription>
                      </div>
                    </div>
                    <Switch 
                      checked={devices.lights.kitchen} 
                      onCheckedChange={() => toggleDevice('lights', 'kitchen')}
                    />
                  </div>
                </CardHeader>
              </Card>

              {/* Thermostat Control */}
              <Card className="hover-scale md:col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Thermometer className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Thermostat</CardTitle>
                      <CardDescription>Climate Control</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-foreground mb-2">{devices.temperature}°C</div>
                      <p className="text-sm text-muted-foreground">Target Temperature</p>
                    </div>
                    <Slider 
                      value={[devices.temperature]} 
                      onValueChange={setTemperature}
                      min={16}
                      max={30}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>16°C</span>
                      <span>30°C</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security */}
              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Lock className={`w-5 h-5 ${devices.doorLock ? 'text-accent' : 'text-destructive'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Front Door</CardTitle>
                        <CardDescription>Smart Lock</CardDescription>
                      </div>
                    </div>
                    <Switch 
                      checked={devices.doorLock} 
                      onCheckedChange={() => toggleDevice('doorLock')}
                    />
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Camera className={`w-5 h-5 ${devices.camera ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Security Camera</CardTitle>
                        <CardDescription>Front Entrance</CardDescription>
                      </div>
                    </div>
                    <Switch 
                      checked={devices.camera} 
                      onCheckedChange={() => toggleDevice('camera')}
                    />
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Wind className={`w-5 h-5 ${devices.hvac ? 'text-secondary' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">HVAC System</CardTitle>
                        <CardDescription>Climate System</CardDescription>
                      </div>
                    </div>
                    <Switch 
                      checked={devices.hvac} 
                      onCheckedChange={() => toggleDevice('hvac')}
                    />
                  </div>
                </CardHeader>
              </Card>
            </div>
          </TabsContent>

          {/* Monitoring Tab */}
          <TabsContent value="monitoring" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Energy Usage</CardTitle>
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <CardDescription>Current consumption</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-foreground">2.4 kWh</div>
                    <Progress value={65} className="h-2" />
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <TrendingDown className="w-4 h-4" />
                      <span>12% lower than yesterday</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Water Usage</CardTitle>
                    <Droplets className="w-5 h-5 text-secondary" />
                  </div>
                  <CardDescription>Today's consumption</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-foreground">{devices.waterUsage}L</div>
                    <Progress value={45} className="h-2" />
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Within normal range</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Indoor Temp</CardTitle>
                    <Thermometer className="w-5 h-5 text-accent" />
                  </div>
                  <CardDescription>All rooms average</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-foreground">{devices.temperature}°C</div>
                    <Progress value={70} className="h-2" />
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <span>Optimal comfort level</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Security Status</CardTitle>
                    <Lock className="w-5 h-5 text-accent" />
                  </div>
                  <CardDescription>All entry points</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="outline" className="w-full justify-center py-2 bg-accent/10 text-accent border-accent/20">
                      All Secured
                    </Badge>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Front Door:</span>
                        <span className="text-accent font-medium">Locked</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Windows:</span>
                        <span className="text-accent font-medium">Closed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Alarm:</span>
                        <span className="text-accent font-medium">Armed</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Air Quality</CardTitle>
                    <Wind className="w-5 h-5 text-primary" />
                  </div>
                  <CardDescription>Indoor air monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="outline" className="w-full justify-center py-2 bg-accent/10 text-accent border-accent/20">
                      Excellent
                    </Badge>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">PM2.5:</span>
                        <span className="text-foreground font-medium">12 μg/m³</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Humidity:</span>
                        <span className="text-foreground font-medium">45%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">CO₂:</span>
                        <span className="text-foreground font-medium">420 ppm</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Active Devices</CardTitle>
                    <Power className="w-5 h-5 text-secondary" />
                  </div>
                  <CardDescription>Currently running</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-foreground">8/12</div>
                    <Progress value={67} className="h-2" />
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>4 devices in standby</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="animate-fade-in">
            <div className="space-y-6">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <CardHeader className="pb-3">
                    <CardDescription>Daily Energy Cost</CardDescription>
                    <CardTitle className="text-2xl">$4.80</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <TrendingDown className="w-4 h-4" />
                      <span>$0.60 saved</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                  <CardHeader className="pb-3">
                    <CardDescription>Carbon Footprint</CardDescription>
                    <CardTitle className="text-2xl">3.2 kg</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <TrendingDown className="w-4 h-4" />
                      <span>18% reduction</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                  <CardHeader className="pb-3">
                    <CardDescription>Automation Rules</CardDescription>
                    <CardTitle className="text-2xl">12</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <span>All active</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                  <CardHeader className="pb-3">
                    <CardDescription>System Health</CardDescription>
                    <CardTitle className="text-2xl">98%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <span>Excellent</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Last 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 pb-4 border-b border-border">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-4 h-4 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Living room lights turned on</p>
                        <p className="text-xs text-muted-foreground">Automated at sunset - 2 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 pb-4 border-b border-border">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Thermometer className="w-4 h-4 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Temperature adjusted to 22°C</p>
                        <p className="text-xs text-muted-foreground">Energy saving mode - 4 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 pb-4 border-b border-border">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Lock className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Front door locked</p>
                        <p className="text-xs text-muted-foreground">Manual action - 6 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-4 h-4 text-destructive" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">Water leak detected (resolved)</p>
                        <p className="text-xs text-muted-foreground">Sensor alert - Yesterday at 3:45 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Energy Insights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Energy Distribution</CardTitle>
                    <CardDescription>Current usage by category</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">HVAC System</span>
                        <span className="font-medium text-foreground">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Lighting</span>
                        <span className="font-medium text-foreground">25%</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Appliances</span>
                        <span className="font-medium text-foreground">20%</span>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Other</span>
                        <span className="font-medium text-foreground">10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Efficiency Tips</CardTitle>
                    <CardDescription>Personalized recommendations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
                      <TrendingDown className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Lower thermostat by 1°C</p>
                        <p className="text-xs text-muted-foreground">Could save $8/month</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Optimize lighting schedule</p>
                        <p className="text-xs text-muted-foreground">Could save $4/month</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/5 border border-secondary/20">
                      <Wind className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Enable eco mode for HVAC</p>
                        <p className="text-xs text-muted-foreground">Could save $12/month</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default MyHome;
