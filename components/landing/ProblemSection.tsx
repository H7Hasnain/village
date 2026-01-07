import { AlertCircle, Clock, Database, Laptop, MousePointer2 } from 'lucide-react';

const painPoints = [
  {
    icon: MousePointer2,
    title: "Click Fatigue",
    description: "Too many tabs, workflows, and menus just to do simple tasks."
  },
  {
    icon: Clock,
    title: "Training Bottlenecks",
    description: "No time to train team properly on complex CRM features."
  },
  {
    icon: AlertCircle,
    title: "Missed Updates",
    description: "CRM updates get delayed or skipped because it takes too long."
  },
  {
    icon: Database,
    title: "Buried Data",
    description: "Important data is buried inside dashboards you rarely check."
  },
  {
    icon: Laptop,
    title: "Desktop Chains",
    description: "You need a laptop just to manage simple pipeline changes."
  }
];

export function ProblemSection() {
  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            GoHighLevel Is Powerful. <br />
            <span className="text-muted-foreground/60">But Humans Are The Bottleneck.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Most agencies only use 30% of GHL's power because the interface slows them down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* First Card - Highlighted/Larger if needed, or keeping uniform grid */}
          {painPoints.map((point, idx) => (
            <div 
                key={idx} 
                className="group relative bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                <point.icon className="w-7 h-7 text-red-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{point.description}</p>
            </div>
          ))}
          
           {/* Summary Card to fill the grid nicely if odd number, or just styled differently */}
           <div className="flex items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
               <div className="text-center">
                   <p className="text-lg font-medium text-white mb-2">The Solution?</p>
                   <p className="text-muted-foreground">Remove the interface.</p>
                   <p className="text-primary font-bold mt-1">Talk to your CRM.</p>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
}
