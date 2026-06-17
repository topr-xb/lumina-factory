"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const NumberFlow = dynamic(() => import("@number-flow/react").then((mod) => mod.default), {
  ssr: false,
});

interface AnimatedNumberProps {
  value: number;
  format?: Intl.NumberFormatOptions;
  suffix?: string;
  className?: string;
}

export function AnimatedNumber({ value, format, suffix, className }: AnimatedNumberProps) {
  const fallback = useMemo(
    () => new Intl.NumberFormat("en-US", format).format(value),
    [value, format]
  );

  return (
    <span className={className}>
      <NumberFlow value={value} format={format as any} />
      <noscript>{fallback}</noscript>
      {suffix}
    </span>
  );
}
