
import { Card, CardContent } from '@/components/ui/card';
import { Star, Target, Zap, Rocket } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { number: "4", label: "Character Types", icon: Star },
    { number: "6", label: "Game Phases", icon: Target },
    { number: "3", label: "Resources", icon: Zap },
    { number: "∞", label: "Possibilities", icon: Rocket }
  ];

  return (
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
  );
};

export default StatsSection;
