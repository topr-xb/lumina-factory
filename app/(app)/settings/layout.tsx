import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("الإعدادات", "إدارة حسابك، أمانك، وتفضيلاتك");

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
