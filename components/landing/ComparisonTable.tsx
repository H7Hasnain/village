import { Check, X } from 'lucide-react';

export function ComparisonTable() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Old Way vs. New Way</h2>
          <p className="text-xl text-muted-foreground">See the difference AI makes in your daily operations.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-lg font-semibold text-muted-foreground w-[30%]">Task</th>
                <th className="px-6 py-4 text-left text-lg font-semibold text-red-400 w-[35%]">Before AI Agent</th>
                <th className="px-6 py-4 text-left text-lg font-semibold text-green-400 w-[35%]">After AI Agent</th>
              </tr>
            </thead>
            <tbody>
              {[
                { task: "Update 50 leads status", before: "45 min (Manual Clicking)", after: "30 sec (One text command)" },
                { task: "Send pipeline report", before: "20 min (Screenshots/Compiling)", after: "Instant (Auto-generated)" },
                { task: "Qualify a new lead", before: "15-30 min (Phone tag)", after: "2 min (AI Conversation)" },
                { task: "Onboard new staff", before: "2 weeks (Training videos)", after: "1 hour (Ask AI for SOPs)" },
                { task: "Missed follow-ups", before: "Frequent (Human error)", after: "Zero (Automated checks)" },
              ].map((row, idx) => (
                <tr key={idx} className="group transition-all hover:-translate-y-1">
                  <td className="bg-white/[0.02] border-y border-l border-white/5 rounded-l-xl px-6 py-4 align-middle font-medium text-white group-hover:bg-white/[0.04] transition-colors">
                    {row.task}
                  </td>
                  <td className="bg-white/[0.02] border-y border-white/5 px-6 py-4 align-middle text-gray-400 group-hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5 text-red-500" />
                      </div>
                      <span>{row.before}</span>
                    </div>
                  </td>
                  <td className="bg-green-500/[0.03] border-y border-r border-green-500/10 border-l border-l-green-500/10 rounded-r-xl px-6 py-4 align-middle text-white font-medium group-hover:bg-green-500/[0.08] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      <span className="text-green-100">{row.after}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
