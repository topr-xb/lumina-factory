import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("تفاصيل الدفعة", "تفاصيل الدفعة والصور المولدة");

export default function BatchDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
