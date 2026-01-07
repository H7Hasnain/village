import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="py-24 bg-black border-y border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">See It In Action</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Watch how we manage an entire sales pipeline in 60 seconds without opening a single dashboard.
        </p>

        <div className="relative max-w-4xl mx-auto aspect-video bg-secondary/20 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
            {/* Placeholder for video - in real implementation this would be an iframe or video tag */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            
            <div className="w-20 h-20 rounded-full bg-primary/90 text-white flex items-center justify-center z-20 shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 ml-1 fill-white" />
            </div>
            
            <div className="absolute bottom-8 left-8 z-20 text-left">
                <div className="text-white font-bold text-lg">GHL AI Agent Demo</div>
                <div className="text-sm text-gray-300">1:45 • Walkthrough</div>
            </div>
        </div>
      </div>
    </section>
  );
}
