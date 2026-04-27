import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Droplets, Coins, Zap, Leaf, ArrowDown } from 'lucide-react';

const layers = [
  { label: 'Water Input', desc: 'Untreated water poured in', color: 'bg-water-blue' },
  { label: 'Gravel Layer', desc: 'Removes large debris', color: 'bg-muted-foreground' },
  { label: 'Sand Layer', desc: 'Filters smaller particles', color: 'bg-earth-tan' },
  { label: 'Charcoal Layer', desc: 'Removes chemicals & odor', color: 'bg-foreground' },
  { label: 'Clean Water', desc: 'Safe to drink!', color: 'bg-primary' },
];

const highlights = [
  { icon: Coins, text: 'Low cost (under ₹500)' },
  { icon: Zap, text: 'No electricity required' },
  { icon: Droplets, text: 'Easy to build at home' },
  { icon: Leaf, text: '100% eco-friendly materials' },
];

const SolutionSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="solution" ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            The Purification Process
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Flow diagram */}
          <div className="animate-on-scroll">
            <div className="space-y-0">
              {layers.map((layer, i) => (
                <div key={layer.label}>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-md transition-all">
                    <div className={`w-10 h-10 rounded-full ${layer.color} flex-shrink-0`} style={{ opacity: layer.color === 'bg-foreground' ? 0.7 : 1 }} />
                    <div>
                      <h4 className="font-serif font-bold text-foreground">{layer.label}</h4>
                      <p className="text-sm text-muted-foreground">{layer.desc}</p>
                    </div>
                  </div>
                  {i < layers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-5 h-5 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="animate-on-scroll space-y-6" style={{ transitionDelay: '200ms' }}>
            <h3 className="font-serif font-bold text-2xl text-foreground">Why This Works</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our layered filtration system uses naturally available materials to remove impurities, 
              bacteria, and harmful chemicals — providing safe drinking water without any external power source.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.text} className="flex items-center gap-3 p-4 rounded-lg bg-leaf-light border border-primary/20">
                  <h.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{h.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
