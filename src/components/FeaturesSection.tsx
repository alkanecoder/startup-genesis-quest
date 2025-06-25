
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Users, Target, TrendingUp } from 'lucide-react';

const FeaturesSection = () => {
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
  );
};

export default FeaturesSection;
