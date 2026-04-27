import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import DesignThinkingSection from '@/components/DesignThinkingSection';
import JourneyMapSection from '@/components/JourneyMapSection';
import SolutionSection from '@/components/SolutionSection';
import PrototypeSection from '@/components/PrototypeSection';
import PitchSection from '@/components/PitchSection';
import ImpactSection from '@/components/ImpactSection';
import FooterSection from '@/components/FooterSection';

const Index = () => (
  <main className="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <DesignThinkingSection />
    <JourneyMapSection />
    <SolutionSection />
    <PrototypeSection />
    <PitchSection />
    <ImpactSection />
    <FooterSection />
  </main>
);

export default Index;
