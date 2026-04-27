import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Layers, Wrench, Shield } from 'lucide-react';

const materials = [
  { name: 'Gravel', desc: 'Coarse stones for initial filtration', color: 'bg-muted-foreground/60' },
  { name: 'Sand', desc: 'Fine sand for particle removal', color: 'bg-earth-tan' },
  { name: 'Charcoal', desc: 'Activated charcoal for chemical filtration', color: 'bg-foreground/70' },
  { name: 'Clay Pot', desc: 'Container — locally sourced and affordable', color: 'bg-accent/60' },
];

const features = [
  { icon: Layers, title: 'Layered Filtration', desc: 'Multi-stage process ensures thorough purification' },
  { icon: Shield, title: 'Removes Impurities', desc: 'Eliminates dirt, bacteria, chemicals, and odor' },
  { icon: Wrench, title: 'Easy Maintenance', desc: 'Replace layers every 2-3 months with local materials' },
];

const PrototypeSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="prototype" ref={ref} className="section-padding bg-sand-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">The Build</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            Prototype Design
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Diagram */}
          <div className="animate-on-scroll">
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="font-serif font-bold text-lg text-foreground mb-6 text-center">Filtration Layers</h3>
              <div className="space-y-3">
                {/* Visual purifier diagram */}
                <div className="relative mx-auto w-48">
                  <div className="border-2 border-earth-brown/30 rounded-t-3xl rounded-b-lg overflow-hidden">
                    <div className="bg-water-blue/30 h-12 flex items-center justify-center text-xs font-medium text-foreground">
                      Water Input
                    </div>
                    <div className="bg-muted-foreground/30 h-10 flex items-center justify-center text-xs font-medium text-primary-foreground">
                      Gravel
                    </div>
                    <div className="bg-earth-tan h-10 flex items-center justify-center text-xs font-medium text-foreground">
                      Sand
                    </div>
                    <div className="bg-foreground/70 h-10 flex items-center justify-center text-xs font-medium text-primary-foreground">
                      Charcoal
                    </div>
                    <div className="bg-primary/80 h-12 flex items-center justify-center text-xs font-bold text-primary-foreground">
                      ✓ Clean Water
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                {materials.map((m) => (
                  <div key={m.name} className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-sm ${m.color}`} />
                    <span className="text-sm font-medium text-foreground">{m.name}</span>
                    <span className="text-xs text-muted-foreground">— {m.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
            <h3 className="font-serif font-bold text-2xl text-foreground">Key Features</h3>
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 p-4 rounded-xl bg-background border border-border hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground">{f.title}</h4>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;
