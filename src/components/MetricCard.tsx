import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
  status: "good" | "warning" | "alert";
  className?: string;
}

const MetricCard = ({ icon: Icon, title, value, subtitle, status, className }: MetricCardProps) => {
  const statusColors = {
    good: "text-accent",
    warning: "text-yellow-500",
    alert: "text-destructive"
  };

  const statusBg = {
    good: "bg-accent/10",
    warning: "bg-yellow-500/10",
    alert: "bg-destructive/10"
  };

  return (
    <Card className={cn(
      "p-6 bg-card hover:shadow-elevated transition-all duration-300 cursor-pointer group border-border/50",
      className
    )}>
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-3 rounded-xl", statusBg[status])}>
          <Icon className={cn("w-6 h-6", statusColors[status])} />
        </div>
        <span className={cn("text-xs font-semibold px-2 py-1 rounded-full", statusBg[status], statusColors[status])}>
          {status === "good" ? "Good" : status === "warning" ? "Moderate" : "Alert"}
        </span>
      </div>
      
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      <p className="text-3xl font-bold text-foreground mb-1 group-hover:scale-105 transition-transform">{value}</p>
      <p className="text-xs text-muted-foreground">{subtitle}</p>
    </Card>
  );
};

export default MetricCard;
