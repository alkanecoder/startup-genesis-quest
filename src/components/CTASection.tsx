
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Heart } from 'lucide-react';

interface CTASectionProps {
  onStartGame: () => void;
}

const CTASection = ({ onStartGame }: CTASectionProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-gradient-to-br from-slate-50 to-red-50 border-2 border-red-200 shadow-xl">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Start Your Journey?
          </CardTitle>
          <p className="text-xl text-slate-700 italic">
            "You've come far, my boy."
          </p>
        </CardHeader>
        <CardContent className="text-center pb-12 space-y-6">
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Someone put real effort into building this.
          </p>
          
          <Button 
            onClick={onStartGame}
            size="lg"
            className="bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white px-12 py-4 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <Play className="w-6 h-6 mr-3" />
            Begin the Grind
          </Button>
          
          <p className="text-slate-600 text-sm flex items-center justify-center mt-6">
            <Heart className="w-4 h-4 mr-2 text-red-500" />
            Compliment them — one way or another.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CTASection;
