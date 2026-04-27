import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Eye, Target, Search, Droplets, Settings, Sparkles } from 'lucide-react';

const stages = [
  {
    icon: Eye, label: 'Awareness', action: 'Learns about water issues', thought: '"Is my water really unsafe?"', emotion: 'Curious', emotionColor: 'bg-water-blue',
  },
  {
    icon: Target, label: 'Need', action: 'Family member falls ill', thought: '"We need a solution now"', emotion: 'Worried', emotionColor: 'bg-accent',
  },
  {
    icon: Search, label: 'Search', action: 'Explores options locally', thought: '"Everything is too expensive"', emotion: 'Frustrated', emotionColor: 'bg-destructive',
  },
  {
    icon: Droplets, label: 'Usage', action: 'Starts using the purifier', thought: '"This is simple and works!"', emotion: 'Hopeful', emotionColor: 'bg-primary',
  },
  {
    icon: Settings, label: 'Maintenance', action: 'Cleans and replaces layers', thought: '"I can do this myself"', emotion: 'Confident', emotionColor: 'bg-leaf-green',
  },
  {
    icon: Sparkles, label: 'Impact', action: 'Family health improves', thought: '"This changed our lives"', emotion: 'Satisfied', emotionColor: 'bg-primary',
  },
];

const JourneyMapSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="journey" ref={ref} className="section-padding bg-leaf-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">User Experience</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            Customer Journey Map
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Following a rural user from awareness to lasting impact
          </p>
        </div>

        {/* Emotion line visual */}
        <div className="hidden md:flex items-center justify-center gap-1 mb-8 animate-on-scroll">
          <span className="text-sm text-muted-foreground">😟 Frustration</span>
          <div className="flex-1 h-8 mx-4 relative">
            <svg viewBox="0 0 600 40" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,35 C100,35 100,30 200,20 C300,10 350,5 400,5 C450,5 500,3 600,3" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-sm text-muted-foreground">😊 Satisfaction</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stages.map((s, i) => (
            <div
              key={s.label}
              className="animate-on-scroll bg-background rounded-xl p-4 text-center border border-border hover:shadow-md transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-serif font-bold text-sm text-foreground mb-2">{s.label}</h4>
              <p className="text-xs text-muted-foreground mb-2">{s.action}</p>
              <p className="text-xs italic text-foreground/70 mb-2">{s.thought}</p>
              <span className={`inline-block text-xs px-2 py-0.5 rounded-full text-primary-foreground ${s.emotionColor}`}>
                {s.emotion}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyMapSection;
