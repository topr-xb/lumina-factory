"use client";

import NumberFlow from "@number-flow/react";

interface AnimatedNumberProps {
  value: number;
  format?: Intl.NumberFormatOptions;
  suffix?: string;
  className?: string;
}

export function AnimatedNumber({ value, format, suffix, className }: AnimatedNumberProps) {
  return (
    <span className={className}>
      <NumberFlow value={value} format={format as any} />
      {suffix}
    </span>
  );
}
