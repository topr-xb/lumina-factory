import type { Metadata } from "next";

export function createMetadata(title: string, description?: string): Metadata {
  const fullTitle = `${title} | Lumina Factory`;
  const desc =
    description ||
    "استنسخ الهوية البصرية لاستوديوك وانتج آلاف صور المنتجات بالذكاء الاصطناعي";

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      siteName: "Lumina Factory",
      locale: "ar_SA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
  };
}
