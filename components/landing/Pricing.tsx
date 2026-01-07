import { Button } from '@/components/ui/Button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$297",
    description: "Perfect for solo agency owners.",
    features: [
      "1 AI Agent (GHL Connected)",
      "WhatsApp or Telegram Integration",
      "Unlimited Commands",
      "Basic Reporting",
      "Email Support"
    ]
  },
  {
    name: "Growth",
    price: "$497",
    popular: true,
    description: "For growing teams needing more power.",
    features: [
      "3 AI Agents (Sales, Admin, Support)",
      "Custom Workflow Training",
      "Advanced Revenue Reporting",
      "Voice Receptionist Add-on Available",
      "Priority Support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full automation for large agencies.",
    features: [
      "Unlimited AI Agents",
      "White-label Solution",
      "Custom SOP Integration",
      "Dedicated Success Manager",
      "SLA Guarantee"
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">Start automating today. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl p-8 border ${
                plan.popular 
                  ? 'bg-secondary/30 border-primary shadow-2xl shadow-primary/10' 
                  : 'bg-background border-white/10'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className="w-full"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
