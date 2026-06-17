import { MarketingNav } from "@/components/landing/marketing-nav";
import { Hero } from "@/components/landing/hero";
import { LogoCloud } from "@/components/landing/logo-cloud";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { UseCases } from "@/components/landing/use-cases";
import { ShowcaseGallery } from "@/components/landing/showcase-gallery";
import { Pricing } from "@/components/landing/pricing";
import { Testimonials } from "@/components/landing/testimonials";
import { FAQ } from "@/components/landing/faq";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { StaggerContainer, StaggerItem } from "@/components/motion/page-transition";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingNav />
      <main className="flex-1">
        <Hero />
        <StaggerContainer stagger={0.08}>
          <StaggerItem><LogoCloud /></StaggerItem>
          <StaggerItem><Features /></StaggerItem>
          <StaggerItem><HowItWorks /></StaggerItem>
          <StaggerItem><UseCases /></StaggerItem>
          <StaggerItem><ShowcaseGallery /></StaggerItem>
          <StaggerItem><Pricing /></StaggerItem>
          <StaggerItem><Testimonials /></StaggerItem>
          <StaggerItem><FAQ /></StaggerItem>
          <StaggerItem><CTASection /></StaggerItem>
        </StaggerContainer>
      </main>
      <Footer />
    </div>
  );
}
