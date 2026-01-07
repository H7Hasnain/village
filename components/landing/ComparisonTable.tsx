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
          <table className="w-full max-w-4xl mx-auto border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-4 text-left text-lg font-semibold text-muted-foreground w-1/3">Task</th>
                <th className="p-4 text-left text-lg font-semibold text-red-400 w-1/3">Before AI Agent</th>
                <th className="p-4 text-left text-lg font-semibold text-green-400 w-1/3">After AI Agent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { task: "Update 50 leads status", before: "45 min (Manual Clicking)", after: "30 sec (One text command)" },
                { task: "Send pipeline report", before: "20 min (Screenshots/Compiling)", after: "Instant (Auto-generated)" },
                { task: "Qualify a new lead", before: "15-30 min (Phone tag)", after: "2 min (AI Conversation)" },
                { task: "Onboard new staff", before: "2 weeks (Training videos)", after: "1 hour (Ask AI for SOPs)" },
                { task: "Missed follow-ups", before: "Frequent (Human error)", after: "Zero (Automated checks)" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-white">{row.task}</td>
                  <td className="p-4 text-gray-400 flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    {row.before}
                  </td>
                  <td className="p-4 text-white font-medium flex items-center gap-2 bg-green-500/5">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    {row.after}
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
