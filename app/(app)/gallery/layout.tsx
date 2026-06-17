import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("معرض الصور", "جميع صورك المولدة بنجاح في مكان واحد");

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
