
import { Button } from '@/components/ui/button';
import { Trophy, Play, ArrowRight, Rocket } from 'lucide-react';

interface HeroSectionProps {
  onStartGame: () => void;
}

const HeroSection = ({ onStartGame }: HeroSectionProps) => {
  return (
    <div className="text-center mb-20">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-yellow-600 rounded-full mb-6 shadow-lg">
          <Trophy className="w-10 h-10 text-white" />
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
        Play the Game of 
        <span className="block bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
          Founder's Life
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
        Try your stakes, see what you <span className="text-red-600 font-semibold">know</span> and need to <span className="text-yellow-600 font-semibold">know</span>
      </p>
      
      <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
        Navigate the thrilling journey from idea to exit in this realistic startup simulation
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          onClick={onStartGame}
          size="lg"
          className="bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white px-10 py-6 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Play className="w-5 h-5 mr-3" />
          Start Your Journey
          <ArrowRight className="w-5 h-5 ml-3" />
        </Button>
        
        <div className="flex items-center text-slate-500 text-sm">
          <Rocket className="w-4 h-4 mr-2 text-yellow-600" />
          No registration required
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
