import { CheckCircle2 } from 'lucide-react';

const capabilities = [
  "Check new leads instantly",
  "Update pipelines by text",
  "Send follow-ups automatically",
  "Pull reports on demand",
  "Assign leads to team members",
  "Summarize conversations"
];

export function SolutionSection() {
  return (
    <section className="py-24 bg-background border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              The Solution
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Meet Your <span className="text-primary">GHL AI Agent</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A custom-trained AI assistant connected directly to your GoHighLevel account that executes actions, retrieves data, and manages workflows — all through simple messages.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {capabilities.map((cap, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-gray-300">{cap}</span>
                </li>
              ))}
            </ul>

            <div className="bg-secondary/30 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="font-medium text-white">
                "If you can type it, your AI agent can do it."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-50"></div>
            <div className="relative bg-secondary border border-border rounded-2xl p-8 shadow-2xl">
                {/* Abstract representation of the AI Agent connection */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                            </div>
                            <span className="font-medium text-white">WhatsApp / Telegram</span>
                        </div>
                        <div className="h-0.5 w-16 bg-primary/50"></div>
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="h-0.5 w-16 bg-primary/50"></div>
                        <div className="flex items-center gap-3">
                             <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                            </div>
                            <span className="font-medium text-white">GoHighLevel</span>
                        </div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                        Seamless Two-Way Sync
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
