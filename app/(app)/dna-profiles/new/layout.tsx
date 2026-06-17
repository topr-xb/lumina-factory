import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("هوية بصرية جديدة", "ابنِ هوية استوديو مرجعية لاستنساخها على المنتجات");

export default function NewDNALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
