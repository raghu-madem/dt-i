import heroBg from '@/assets/hero-bg.jpg';
import { Droplets } from 'lucide-react';

const HeroSection = () => {
  const scrollToSolution = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Rural village water scene" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
          <Droplets className="w-4 h-4 text-water-light" />
          <span className="text-sm text-water-light font-medium">Design Thinking Project</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Empathy-Driven Water Purifier
          <span className="block text-water-light mt-2 text-3xl md:text-4xl lg:text-5xl">for Rural Homes</span>
        </h1>
        <p className="text-lg md:text-xl text-water-light/80 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Affordable, sustainable, and user-centered clean water solution designed through empathy and innovation
        </p>
        <button
          onClick={scrollToSolution}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Explore the Solution
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
