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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            GoHighLevel Is Powerful — <br />
            <span className="text-muted-foreground">But Most Owners Use Only 30% of It</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            The problem isn’t GoHighLevel. The problem is how humans interact with it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, idx) => (
            <div key={idx} className="bg-secondary/20 border border-border/50 p-6 rounded-xl hover:bg-secondary/40 transition-colors">
              <point.icon className="w-10 h-10 text-red-500/80 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
