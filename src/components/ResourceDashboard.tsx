
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Resources } from '@/types/game';
import { Clock, Users, DollarSign } from 'lucide-react';

interface ResourceDashboardProps {
  resources: Resources;
}

const ResourceDashboard = ({ resources }: ResourceDashboardProps) => {
  const resourceConfig = [
    {
      key: 'time' as keyof Resources,
      label: 'Time',
      icon: Clock,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    },
    {
      key: 'network' as keyof Resources,
      label: 'Network',
      icon: Users,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700'
    },
    {
      key: 'cash' as keyof Resources,
      label: 'Cash',
      icon: DollarSign,
      color: 'from-red-600 to-yellow-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-red-700'
    }
  ];

  const getResourceStatus = (value: number) => {
    if (value >= 70) return { status: 'Excellent', color: 'text-yellow-600' };
    if (value >= 50) return { status: 'Good', color: 'text-red-600' };
    if (value >= 30) return { status: 'Fair', color: 'text-orange-600' };
    if (value >= 10) return { status: 'Low', color: 'text-red-600' };
    return { status: 'Critical', color: 'text-red-700' };
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Resources</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {resourceConfig.map((config) => {
          const Icon = config.icon;
          const value = resources[config.key];
          const status = getResourceStatus(value);
          
          return (
            <div key={config.key} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${config.color} flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-medium text-slate-700">{config.label}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-slate-800">{value}</div>
                  <div className={`text-xs font-medium ${status.color}`}>
                    {status.status}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Progress 
                  value={value} 
                  className="h-3"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>0</span>
                  <span>100</span>
                </div>
              </div>
            </div>
          );
        })}
        
        <div className="pt-4 border-t border-slate-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-800">
              {Math.round((resources.time + resources.network + resources.cash) / 3)}
            </div>
            <div className="text-sm text-slate-600">Overall Score</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceDashboard;
