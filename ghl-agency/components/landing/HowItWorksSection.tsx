import { Link, Settings, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: Link,
    title: "We connect securely",
    description: "We connect securely to your GoHighLevel account via API."
  },
  {
    icon: Settings,
    title: "We train the AI",
    description: "We train the AI on your specific pipelines, workflows, and SOPs."
  },
  {
    icon: MessageSquare,
    title: "You control everything",
    description: "You control your entire CRM from Telegram, WhatsApp, or chat."
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to automate your agency operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-border -z-10"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-6 shadow-lg relative z-10">
                <step.icon className="w-10 h-10 text-primary" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold border-4 border-background">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-6 py-2 text-primary font-medium">
            No disruption. No rebuilding. No learning curve.
          </div>
        </div>
      </div>
    </section>
  );
}
