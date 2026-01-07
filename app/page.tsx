import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { InternalAISection, VoiceAISection } from "@/components/landing/SecondaryServices";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { CTASection } from "@/components/landing/CTASection";
import { SocialProof } from "@/components/landing/SocialProof";
import { ComparisonTable } from "@/components/landing/ComparisonTable";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { VideoSection } from "@/components/landing/VideoSection";
import { ExitIntentPopup } from "@/components/ui/ExitIntentPopup";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SocialProof />
      <ProblemSection />
      <div id="features">
        <SolutionSection />
      </div>
      <ComparisonTable />
      <VideoSection />
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <UseCasesSection />
      <div id="services">
        <InternalAISection />
        <VoiceAISection />
      </div>
      <Pricing />
      <WhyChooseUs />
      <div id="faq">
        <FAQ />
      </div>
      <CTASection />
      <ExitIntentPopup />
    </div>
  );
}
