import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({ title, subtitle, children, className }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-8 md:p-10",
        className
      )}
    >
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px]" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />
      <div className="relative">
        <h1 className="font-heading-ar text-3xl font-bold text-white md:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}
