import { GraduationCap, Microscope } from "lucide-react";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  "graduation-cap": <GraduationCap className="h-6 w-6" />,
  microscope: <Microscope className="h-6 w-6" />,
};

interface IconBadgeProps {
  icon: string;
  className?: string;
}

export default function IconBadge({ icon, className = "" }: IconBadgeProps) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ${className}`}
    >
      {iconMap[icon] ?? <GraduationCap className="h-6 w-6" />}
    </div>
  );
}
