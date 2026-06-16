import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Tajawal, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-heading-ar",
  subsets: ["arabic", "latin"],
  weight: ["500", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading-en",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumina-factory.netlify.app"),
  title: "Lumina Factory | مصنع الضوء",
  description: "استنسخ الهوية البصرية لاستوديوك وانتج آلاف صور المنتجات بالذكاء الاصطناعي",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lumina Factory | مصنع الضوء",
    description: "استنسخ الهوية البصرية لاستوديوك وانتج آلاف صور المنتجات بالذكاء الاصطناعي",
    url: "https://lumina-factory.netlify.app",
    siteName: "Lumina Factory",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Factory | مصنع الضوء",
    description: "استنسخ الهوية البصرية لاستوديوك وانتج آلاف صور المنتجات بالذكاء الاصطناعي",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${ibmPlexSansArabic.variable} ${tajawal.variable} ${inter.variable} ${spaceGrotesk.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-arabic">{children}</body>
    </html>
  );
}
