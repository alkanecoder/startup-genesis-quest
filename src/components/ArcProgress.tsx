
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, Clock } from 'lucide-react';

interface ArcProgressProps {
  currentArc: number;
  arcProgress: number[];
}

const ArcProgress = ({ currentArc, arcProgress }: ArcProgressProps) => {
  const arcs = [
    {
      title: 'Find Your Big Idea',
      description: 'Discover your breakthrough concept and validate the market need',
      icon: '💡',
      color: 'from-red-500 to-yellow-600'
    },
    {
      title: 'Build Your Dream Team',
      description: 'Recruit co-founders and key team members who share your vision',
      icon: '👥',
      color: 'from-yellow-500 to-red-600'
    },
    {
      title: 'Build MVP & Get Users',
      description: 'Create your minimum viable product and acquire first customers',
      icon: '🚀',
      color: 'from-red-600 to-yellow-500'
    },
    {
      title: 'Survive the Grind',
      description: 'Navigate challenges, iterate on feedback, and maintain momentum',
      icon: '💪',
      color: 'from-yellow-600 to-red-500'
    },
    {
      title: 'Secure Investment',
      description: 'Pitch to investors and raise funding to scale your business',
      icon: '💰',
      color: 'from-red-500 to-yellow-600'
    },
    {
      title: 'Scale & Exit',
      description: 'Grow rapidly and plan your successful exit strategy',
      icon: '🏆',
      color: 'from-yellow-500 to-red-600'
    }
  ];

  const getArcStatus = (index: number) => {
    if (index < currentArc) return 'completed';
    if (index === currentArc) return 'current';
    return 'upcoming';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Your Startup Journey</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {arcs.map((arc, index) => {
              const status = getArcStatus(index);
              const progress = arcProgress[index] || 0;
              
              return (
                <Card
                  key={index}
                  className={`transition-all duration-300 ${
                    status === 'current'
                      ? 'ring-2 ring-red-500 shadow-lg'
                      : status === 'completed'
                      ? 'bg-yellow-50 border-yellow-200'
                      : 'opacity-75'
                  }`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${arc.color} flex items-center justify-center text-xl`}>
                          {arc.icon}
                        </div>
                        <div>
                          <Badge
                            variant={status === 'completed' ? 'default' : status === 'current' ? 'secondary' : 'outline'}
                            className={`mb-2 ${
                              status === 'completed' ? 'bg-yellow-600 text-white' : 
                              status === 'current' ? 'bg-red-100 text-red-700' : 
                              'border-slate-300'
                            }`}
                          >
                            Arc {index + 1}
                          </Badge>
                          <CardTitle className="text-base leading-tight">
                            {arc.title}
                          </CardTitle>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {status === 'completed' ? (
                          <CheckCircle className="w-6 h-6 text-yellow-600" />
                        ) : status === 'current' ? (
                          <Clock className="w-6 h-6 text-red-600" />
                        ) : (
                          <Circle className="w-6 h-6 text-slate-400" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {arc.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Progress</span>
                        <span className="font-medium">
                          {status === 'completed' ? '100%' : `${Math.round(progress)}%`}
                        </span>
                      </div>
                      <Progress
                        value={status === 'completed' ? 100 : progress}
                        className="h-2"
                      />
                    </div>
                    
                    {status === 'current' && progress < 100 && (
                      <div className="text-center">
                        <Badge variant="secondary" className="animate-pulse bg-red-100 text-red-700">
                          Active Phase
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArcProgress;
