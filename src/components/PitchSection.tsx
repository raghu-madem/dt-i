import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mic, ArrowRight } from 'lucide-react';

const pitchSteps = [
  { label: 'Problem', text: 'Over 160 million rural Indians lack access to safe drinking water, leading to waterborne diseases and economic hardship.' },
  { label: 'Solution', text: 'A low-cost, empathy-driven water purifier using layered filtration with locally sourced materials — gravel, sand, and charcoal.' },
  { label: 'Innovation', text: 'Designed through the Design Thinking process, our solution costs under ₹500, requires no electricity, and can be built by anyone.' },
  { label: 'Impact', text: 'Improved health outcomes, reduced medical costs, and empowered rural communities taking control of their water safety.' },
  { label: 'Call to Action', text: 'Support this initiative — help us bring clean water to every rural home. Together, we can make safe water a reality.' },
];

const PitchSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="pitch" ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">The Pitch</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            3-Minute Pitch
          </h2>
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Mic className="w-4 h-4" />
            <span className="text-sm">Elevator pitch for stakeholders</span>
          </div>
        </div>

        {/* Pitch flow */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {pitchSteps.map((step, i) => (
            <div
              key={step.label}
              className="animate-on-scroll flex gap-4 md:gap-6 items-start"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {i + 1}
                </div>
                {i < pitchSteps.length - 1 && <div className="w-0.5 h-12 bg-primary/20 mt-1" />}
              </div>
              <div className="bg-card rounded-xl p-5 border border-border flex-1 hover:shadow-md transition-all">
                <h4 className="font-serif font-bold text-foreground mb-1">{step.label}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flowchart */}
        <div className="mt-16 animate-on-scroll">
          <h3 className="font-serif font-bold text-xl text-foreground text-center mb-6">Pitch Flow</h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {pitchSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
                  {step.label}
                </span>
                {i < pitchSteps.length - 1 && <ArrowRight className="w-4 h-4 text-primary/40" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PitchSection;
