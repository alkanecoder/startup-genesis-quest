
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

interface HeroSectionProps {
  onStartGame: () => void;
}

const HeroSection = ({ onStartGame }: HeroSectionProps) => {
  return (
    <div className="text-center mb-20">
      <div className="mb-12">
        <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
          It's{' '}
          <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
            Founder's Life
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-slate-700 mb-8 font-medium">
          Can you <span className="text-red-600 font-bold italic">live it</span> — and{' '}
          <span className="text-yellow-600 font-bold italic">learn it</span>?
        </p>
      </div>
      
      <Button 
        onClick={onStartGame}
        size="lg"
        className="bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white px-12 py-6 text-2xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
      >
        <Play className="w-6 h-6 mr-3" />
        Start Playing
      </Button>
    </div>
  );
};

export default HeroSection;
