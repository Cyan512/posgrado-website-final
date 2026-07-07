import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white shadow-sm ${
        hover
          ? "transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-md hover:border-slate-300"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
