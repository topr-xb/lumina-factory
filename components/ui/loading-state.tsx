"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  text?: string;
  className?: string;
}

export function LoadingState({ text = "جاري التحميل...", className }: LoadingStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex flex-col items-center justify-center gap-3 py-12 text-muted-foreground ${className || ""}`}
    >
      <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
      <p className="text-sm">{text}</p>
    </motion.div>
  );
}
