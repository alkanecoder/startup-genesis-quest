
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Users, Zap, Target, TrendingUp, Lightbulb, Rocket, Star, ArrowRight, Play } from 'lucide-react';

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

  const stats = [
    { number: "4", label: "Character Types", icon: Star },
    { number: "6", label: "Game Phases", icon: Target },
    { number: "3", label: "Resources", icon: Zap },
    { number: "∞", label: "Possibilities", icon: Rocket }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white border-slate-200 hover:shadow-md transition-shadow duration-200">
                <CardContent className="text-center p-6">
                  <Icon className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white border-slate-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg mb-4 shadow-sm">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
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
      </div>
    </div>
  );
};

export default Homepage;
