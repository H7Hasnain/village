import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
          Stop Managing GHL. <br />
          <span className="text-primary">Start Commanding It.</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Book a free demo and see how AI can run your GoHighLevel for you — live, on your workflows.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto gap-2">
            Book My Free Demo
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
