import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("المساحة اللانهائية", "تصفح الدفعات بصرياً وتابع تقدمها");

export default function CanvasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
