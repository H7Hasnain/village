import { Calendar, Users, Bell, DollarSign } from 'lucide-react';

const useCases = [
  {
    icon: Calendar,
    query: "Show me today’s booked appointments",
    result: "Found 3 appointments: 10am (Discovery), 2pm (Onboarding), 4pm (Review)."
  },
  {
    icon: Users,
    query: "Move all hot leads to follow-up stage",
    result: "Moved 12 leads tagged 'Hot' to 'Follow-up' stage in Main Pipeline."
  },
  {
    icon: Bell,
    query: "Send reminder to leads who didn’t reply",
    result: "Sent SMS reminder to 45 leads in 'No Show' stage."
  },
  {
    icon: DollarSign,
    query: "Give me revenue summary for this month",
    result: "Total Closed: $45,200. Pipeline Value: $128,000. Projected: $68,000."
  }
];

export function UseCasesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            What You Can Do With Your GHL AI Agent
          </h2>
          <p className="text-xl text-muted-foreground">
            Just ask, and it’s done.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="bg-secondary/30 border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="bg-muted/50 rounded-lg rounded-tl-none p-3 text-sm text-foreground">
                    <span className="font-semibold text-primary block text-xs mb-1">YOU</span>
                    "{useCase.query}"
                  </div>
                  <div className="bg-primary/10 rounded-lg rounded-tr-none p-3 text-sm text-foreground/90">
                    <span className="font-semibold text-primary block text-xs mb-1">AI AGENT</span>
                    {useCase.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-xl font-medium text-white">
                This replaces hours of clicking with seconds of messaging.
            </p>
        </div>
      </div>
    </section>
  );
}
