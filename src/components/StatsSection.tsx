
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Lock } from 'lucide-react';

const StatsSection = () => {
  return (
    <div className="max-w-4xl mx-auto mb-20">
      <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
        Choose Your Mode
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Classic Mode */}
        <Card className="bg-white border-2 border-green-200 hover:shadow-xl transition-all duration-200 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-500 text-white">
              <CheckCircle className="w-4 h-4 mr-1" />
              Available
            </Badge>
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              Classic Mode
              <span className="text-sm font-normal text-slate-600 italic">(for beginners)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              6 structured arcs that simulate the startup grind.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Make real decisions, see the outcomes, and quietly absorb the lessons.
            </p>
            <p className="text-slate-700 font-medium">
              No lectures. Just founder scars.
            </p>
          </CardContent>
        </Card>

        {/* Chaotic Mode */}
        <Card className="bg-slate-100 border-2 border-slate-300 relative overflow-hidden opacity-75">
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="border-slate-400 text-slate-600">
              <Lock className="w-4 h-4 mr-1" />
              Coming Soon
            </Badge>
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-slate-700 flex items-center gap-2">
              Chaotic Mode
              <span className="text-sm font-normal text-slate-500 italic">(coming soon)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-slate-600">
              <p className="font-medium">You bet… you lose.</p>
              <p>Your cofounder disappears. Your friend dies. Parents disown you.</p>
              <p>Everything breaks — including you.</p>
              <p className="font-medium">Play it when you're ready.</p>
              <p className="italic text-slate-500">Coming soon.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatsSection;
