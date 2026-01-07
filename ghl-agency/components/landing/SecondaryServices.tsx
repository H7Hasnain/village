import { Brain, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function InternalAISection() {
  return (
    <section className="py-24 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 order-2 lg:order-1">
             <div className="bg-gradient-to-br from-secondary to-background border border-border rounded-2xl p-8 h-[400px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
                <Brain className="w-32 h-32 text-purple-500/20 absolute animate-pulse" />
                <div className="z-10 space-y-4 max-w-sm w-full">
                    <div className="bg-secondary/80 backdrop-blur border border-border p-4 rounded-lg shadow-lg">
                        <div className="h-2 w-24 bg-purple-500/50 rounded mb-2"></div>
                        <div className="h-2 w-full bg-border rounded"></div>
                        <div className="h-2 w-2/3 bg-border rounded mt-1"></div>
                    </div>
                     <div className="bg-secondary/80 backdrop-blur border border-border p-4 rounded-lg shadow-lg ml-8">
                        <div className="h-2 w-24 bg-purple-500/50 rounded mb-2"></div>
                        <div className="h-2 w-full bg-border rounded"></div>
                    </div>
                </div>
             </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Your Team’s <span className="text-purple-500">Private AI Brain</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We build internal AI assistants trained on your SOPs, documents, sheets, and internal knowledge — so your team never wastes time searching again.
            </p>
            <ul className="space-y-3 mb-8">
              {['Instant answers for staff', 'Faster onboarding', 'Reduced support load', 'Consistent information'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-sm text-muted-foreground italic">
              Custom setup + monthly access
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function VoiceAISection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              A Professional Voice That <span className="text-orange-500">Never Forgets</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our Voice AI receptionists handle calls, qualify inquiries, log details into GHL, and send summaries automatically — without sounding robotic.
            </p>
            <ul className="space-y-3 mb-8">
              {['Professional image', 'Call summaries', 'CRM updates', 'Follow-up automation'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  {item}
                </li>
              ))}
            </ul>
             <Button variant="outline" className="text-orange-500 border-orange-500/20 hover:bg-orange-500/10">
                Hear a Sample
            </Button>
          </div>
          <div className="flex-1">
             <div className="bg-gradient-to-br from-secondary to-background border border-border rounded-2xl p-8 h-[400px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
                <div className="relative z-10 w-48 h-48 rounded-full border-4 border-orange-500/20 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-orange-500" />
                    <div className="absolute inset-0 rounded-full border-2 border-orange-500/40 animate-ping opacity-20"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
