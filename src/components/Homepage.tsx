
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';

interface HomepageProps {
  onStartGame: () => void;
}

const Homepage = ({ onStartGame }: HomepageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <div className="container mx-auto px-4 py-16">
        <HeroSection onStartGame={onStartGame} />
        <StatsSection />
        <FeaturesSection />
        <CTASection onStartGame={onStartGame} />
      </div>
    </div>
  );
};

export default Homepage;
