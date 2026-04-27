import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { HeartPulse, PiggyBank, Recycle, Users } from 'lucide-react';

const impacts = [
  { icon: HeartPulse, title: 'Improved Health', desc: 'Reduction in waterborne diseases like cholera, typhoid, and diarrhea', color: 'text-destructive', bg: 'bg-destructive/10' },
  { icon: PiggyBank, title: 'Reduced Medical Costs', desc: 'Families save money previously spent on treating water-related illnesses', color: 'text-primary', bg: 'bg-primary/10' },
  { icon: Recycle, title: 'Sustainable Solution', desc: 'Uses natural, biodegradable materials with minimal environmental impact', color: 'text-leaf-green', bg: 'bg-leaf-light' },
  { icon: Users, title: 'Community Empowerment', desc: 'Local communities gain the knowledge and tools to ensure their own water safety', color: 'text-water-blue', bg: 'bg-water-light' },
];

const ImpactSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="impact" ref={ref} className="section-padding bg-leaf-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Making a Difference</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            Impact & Benefits
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {impacts.map((item, i) => (
            <div
              key={item.title}
              className="animate-on-scroll flex gap-5 p-6 rounded-xl bg-background border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
