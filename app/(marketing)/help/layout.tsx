import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مركز المساعدة | Lumina Factory",
  description: "إجابات مفصلة لأهم الأسئلة حول استخدام Lumina Factory ومصنع الضوء.",
};

export default function HelpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
