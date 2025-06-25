
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Users, Target, Rocket, Zap, Star } from 'lucide-react';

interface CTASectionProps {
  onStartGame: () => void;
}

const CTASection = ({ onStartGame }: CTASectionProps) => {
  return (
    <Card className="max-w-4xl mx-auto bg-white border-slate-200 shadow-xl">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-3xl font-bold text-slate-900 mb-4">
          Ready to Build Your Empire?
        </CardTitle>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Experience the complete startup journey through 6 challenging phases. 
          Make strategic decisions, manage your resources, and see if you have what it takes.
        </p>
      </CardHeader>
      <CardContent className="text-center pb-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg mb-2">Choose Your Path</h3>
            <p className="text-slate-600">Student, Corporate, Freelancer, or Ex-founder</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg mb-2">Master Resources</h3>
            <p className="text-slate-600">Balance Time, Network, and Cash wisely</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 text-lg mb-2">Achieve Success</h3>
            <p className="text-slate-600">Navigate from idea to successful exit</p>
          </div>
        </div>

        <Button 
          onClick={onStartGame}
          size="lg"
          className="bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white px-10 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <Rocket className="w-5 h-5 mr-3" />
          Begin Your Startup Adventure
          <Zap className="w-5 h-5 ml-3" />
        </Button>
        
        <p className="text-slate-500 text-sm mt-4 flex items-center justify-center">
          <Star className="w-4 h-4 mr-2 text-yellow-600" />
          Join thousands of aspiring entrepreneurs
        </p>
      </CardContent>
    </Card>
  );
};

export default CTASection;
