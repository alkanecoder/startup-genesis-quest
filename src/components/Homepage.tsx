
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Users, Zap, Target, TrendingUp, Lightbulb } from 'lucide-react';

interface HomepageProps {
  onStartGame: () => void;
}

const Homepage = ({ onStartGame }: HomepageProps) => {
  const features = [
    {
      icon: Lightbulb,
      title: "Find Your Big Idea",
      description: "Discover and validate your startup concept"
    },
    {
      icon: Users,
      title: "Build Your Team",
      description: "Recruit the right people for success"
    },
    {
      icon: Target,
      title: "Get Traction",
      description: "Build MVP and acquire your first users"
    },
    {
      icon: TrendingUp,
      title: "Secure Funding",
      description: "Navigate the investment landscape"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Play the Game of 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Founder's Life
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Try your stakes, see what you know and need to know. Navigate the thrilling journey 
            from idea to exit in this realistic startup simulation.
          </p>
          
          <Button 
            onClick={onStartGame}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Zap className="w-5 h-5 mr-2" />
            Start Your Journey
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-slate-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Game Preview */}
        <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-800 mb-2">
              What Awaits You
            </CardTitle>
            <p className="text-slate-600">
              Experience the complete startup journey through 6 challenging phases
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">Character Types</h3>
                <p className="text-sm text-slate-600">Student, Corporate, Freelancer, Ex-founder</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">Resources</h3>
                <p className="text-sm text-slate-600">Time, Network, Cash</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">6</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">Game Phases</h3>
                <p className="text-sm text-slate-600">From idea to successful exit</p>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-slate-600 mb-6">
                Make strategic decisions, manage your resources wisely, and see if you have what it takes to build a successful startup.
              </p>
              
              <Button 
                onClick={onStartGame}
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Begin Your Startup Adventure
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Homepage;
