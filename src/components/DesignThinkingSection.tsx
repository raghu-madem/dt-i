import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Heart, Search, Lightbulb, Wrench } from 'lucide-react';

const stages = [
  {
    icon: Heart, title: 'Empathize', color: 'text-accent', bg: 'bg-accent/10',
    points: ['Understand rural users\' daily struggles', 'Long distances for water collection', 'Financial constraints limit options', 'Difficulty maintaining devices'],
  },
  {
    icon: Search, title: 'Analyze', color: 'text-water-blue', bg: 'bg-water-light',
    points: ['Identify key pain points', 'Cost must be under ₹500', 'Usability for all age groups', 'Durability and accessibility'],
  },
  {
    icon: Lightbulb, title: 'Ideate', color: 'text-primary', bg: 'bg-leaf-light',
    points: ['Brainstorm low-cost filtration', 'Easy-to-use layered system', 'Locally sourced materials', 'Community-driven maintenance'],
  },
  {
    icon: Wrench, title: 'Prototype', color: 'text-earth-brown', bg: 'bg-sand-warm',
    points: ['Clay container with layers', 'Gravel → Sand → Charcoal', 'Affordable and repairable', 'Field-tested with users'],
  },
];

const DesignThinkingSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="design-thinking" ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Approach</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            Design Thinking Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A human-centered approach to solving the rural water crisis
          </p>
        </div>

        {/* Connector line */}
        <div className="hidden lg:block relative mb-8">
          <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
          <div className="flex justify-between px-[10%]">
            {stages.map((s, i) => (
              <div key={i} className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 relative animate-on-scroll">
                <span className="text-primary font-bold">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((s, i) => (
            <div
              key={s.title}
              className="animate-on-scroll group rounded-xl p-6 border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${s.bg} flex items-center justify-center mb-5`}>
                <s.icon className={`w-7 h-7 ${s.color}`} />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-4">{s.title}</h3>
              <ul className="space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${s.bg} flex-shrink-0`} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignThinkingSection;
