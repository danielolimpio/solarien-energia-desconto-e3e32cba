import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "primary" | "secondary";
}

const FeatureCard = ({ icon: Icon, title, description, variant = "default" }: FeatureCardProps) => {
  const variants = {
    default: "bg-card",
    primary: "bg-gradient-to-br from-primary/5 to-primary/10",
    secondary: "bg-gradient-to-br from-secondary/5 to-secondary/10",
  };

  const iconVariants = {
    default: "text-primary bg-primary/10",
    primary: "text-primary bg-primary/15",
    secondary: "text-secondary bg-secondary/15",
  };

  return (
    <div className={cn("gradient-border card-premium p-6 md:p-8", variants[variant])}>
      <div className={cn("inline-flex p-3 rounded-xl mb-4", iconVariants[variant])}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
