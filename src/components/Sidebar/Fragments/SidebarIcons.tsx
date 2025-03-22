import {
  HelpCircle,
  Laptop,
  Monitor,
  Smartphone,
  Tablet,
  Tv,
  TvMinimal,
} from "lucide-react";

const iconMap = {
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  Tv,
  TvMinimal,
} as const;

export type IconName = keyof typeof iconMap;

const SidebarIcons = ({ name, size }: { name: IconName; size?: number }) => {
  const LucideIcon = iconMap[name] ?? HelpCircle; // Fallback icon
  return <LucideIcon size={size} />;
};

export default SidebarIcons;
