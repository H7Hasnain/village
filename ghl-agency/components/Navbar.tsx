import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white tracking-tight">
                GHL<span className="text-primary">AI</span>
            </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Capabilities
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Services
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button size="sm">Book Demo</Button>
        </div>
      </div>
    </nav>
  );
}
