
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
      description: "Discover and validate your startup concept",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Build Your Team",
      description: "Recruit the right people for success",
      gradient: "from-yellow-500 to-red-500"
    },
    {
      icon: Target,
      title: "Get Traction",
      description: "Build MVP and acquire your first users",
      gradient: "from-red-600 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Secure Funding",
      description: "Navigate the investment landscape",
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  const stats = [
    { number: "4", label: "Character Types", icon: Star },
    { number: "6", label: "Game Phases", icon: Target },
    { number: "3", label: "Resources", icon: Zap },
    { number: "∞", label: "Possibilities", icon: Rocket }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-yellow-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-yellow-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-600/10 to-yellow-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="mb-8 relative">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 rounded-full mb-6 shadow-2xl shadow-red-500/25 animate-pulse">
                <Trophy className="w-12 h-12 text-white animate-bounce" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              Play the Game of 
              <span className="block bg-gradient-to-r from-red-400 via-yellow-400 to-red-500 bg-clip-text text-transparent animate-pulse">
                Founder's Life
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed font-light">
              Try your stakes, see what you <span className="text-yellow-400 font-semibold">know</span> and need to <span className="text-red-400 font-semibold">know</span>
            </p>
            
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              Navigate the thrilling journey from idea to exit in this realistic startup simulation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={onStartGame}
                size="lg"
                className="group bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-700 hover:via-red-600 hover:to-yellow-600 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 border-2 border-yellow-400/20"
              >
                <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center text-slate-400 text-sm">
                <Rocket className="w-4 h-4 mr-2 text-yellow-400" />
                No registration required
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10">
                  <CardContent className="text-center p-6">
                    <Icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
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
                <Card key={index} className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:shadow-2xl overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <CardHeader className="text-center pb-4 relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-yellow-200 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <Card className="max-w-5xl mx-auto bg-gradient-to-r from-red-900/50 to-yellow-900/50 backdrop-blur-sm border-red-500/30 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-yellow-600/10"></div>
            <CardHeader className="text-center relative z-10 pb-4">
              <CardTitle className="text-4xl font-bold text-white mb-4">
                Ready to Build Your Empire?
              </CardTitle>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Experience the complete startup journey through 6 challenging phases. 
                Make strategic decisions, manage your resources, and see if you have what it takes.
              </p>
            </CardHeader>
            <CardContent className="text-center relative z-10 pb-12">
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">Choose Your Path</h3>
                  <p className="text-slate-300">Student, Corporate, Freelancer, or Ex-founder</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">Master Resources</h3>
                  <p className="text-slate-300">Balance Time, Network, and Cash wisely</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">Achieve Success</h3>
                  <p className="text-slate-300">Navigate from idea to successful exit</p>
                </div>
              </div>

              <Button 
                onClick={onStartGame}
                size="lg"
                className="group bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-600 hover:from-yellow-600 hover:via-red-600 hover:to-yellow-700 text-white px-10 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 border-2 border-white/20"
              >
                <Rocket className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Begin Your Startup Adventure
                <Zap className="w-5 h-5 ml-3 group-hover:animate-pulse" />
              </Button>
              
              <p className="text-slate-400 text-sm mt-4 flex items-center justify-center">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Join thousands of aspiring entrepreneurs
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
