import { Shield, Target, Zap, Workflow } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: "Built specifically for GoHighLevel",
    description: "Deep integration with GHL's API, snapshots, and automation engine."
  },
  {
    icon: Zap,
    title: "Custom-trained AI",
    description: "Not generic bots. We train models on your specific business logic."
  },
  {
    icon: Workflow,
    title: "Real business workflows",
    description: "Designed for revenue operations, not just chatting."
  },
  {
    icon: Shield,
    title: "Security-first integrations",
    description: "Enterprise-grade security to keep your data safe."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Choose Us</h2>
          <p className="text-xl font-medium text-primary">
            "We don’t sell AI tools. We build AI operators for your business."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-background border border-border p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
