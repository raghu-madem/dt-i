import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Droplets, Bug, DollarSign, AlertTriangle } from 'lucide-react';

const problems = [
  { icon: Droplets, title: 'Limited Access', desc: 'Millions lack access to clean drinking water, relying on contaminated sources' },
  { icon: Bug, title: 'Waterborne Diseases', desc: 'Communities suffer from cholera, typhoid, and diarrhea due to unsafe water' },
  { icon: DollarSign, title: 'Expensive Systems', desc: 'Current purification systems are too costly and complex for rural households' },
  { icon: AlertTriangle, title: 'Maintenance Gaps', desc: 'Lack of awareness and difficulty maintaining existing purification devices' },
];

const ProblemSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="problem" ref={ref} className="section-padding bg-sand-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">The Challenge</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            The Water Crisis in Rural India
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Over 160 million people in rural areas lack access to safe drinking water, leading to preventable diseases and economic hardship.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="animate-on-scroll bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
