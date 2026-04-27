import { Droplets, Mail } from 'lucide-react';

const FooterSection = () => (
  <footer className="bg-foreground text-primary-foreground py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Droplets className="w-6 h-6 text-water-light" />
          <span className="font-serif font-bold text-lg">Empathy-Driven Water Purifier</span>
        </div>
        <div className="text-center md:text-right text-sm opacity-80 space-y-1">
          <p>Design Thinking Project — Unit I & II</p>
          <p>Student Innovation Showcase 2026</p>
          <div className="flex items-center justify-center md:justify-end gap-2 mt-2">
            <Mail className="w-4 h-4" />
            <span>contact@waterproject.edu</span>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-60">
        <p>Built with empathy, designed for impact. © 2026</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
