import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { InternalAISection, VoiceAISection } from "@/components/landing/SecondaryServices";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { CTASection } from "@/components/landing/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ProblemSection />
      <div id="features">
        <SolutionSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <UseCasesSection />
      <div id="services">
        <InternalAISection />
        <VoiceAISection />
      </div>
      <WhyChooseUs />
      <CTASection />
    </div>
  );
}
