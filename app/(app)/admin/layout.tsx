import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata("لوحة الإدارة", "إدارة المستخدمين وإعدادات النظام");

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
