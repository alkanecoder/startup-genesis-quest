
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Choice } from '@/types/game';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface DecisionChoiceProps {
  choice: Choice;
  index: number;
  onSelect: (choice: Choice) => void;
}

const DecisionChoice = ({ choice, index, onSelect }: DecisionChoiceProps) => {
  const getResourceIcon = (value: number) => {
    if (value > 0) return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (value < 0) return <TrendingDown className="w-4 h-4 text-red-600" />;
    return <Minus className="w-4 h-4 text-gray-600" />;
  };

  const getResourceColor = (value: number) => {
    if (value > 0) return "text-green-600 bg-green-50";
    if (value < 0) return "text-red-600 bg-red-50";
    return "text-gray-600 bg-gray-50";
  };

  return (
    <Card
      key={index}
      className="cursor-pointer hover:shadow-md transition-all duration-200 border-2 hover:border-blue-200"
      onClick={() => onSelect(choice)}
    >
      <CardContent className="p-4">
        <div className="space-y-3">
          <p className="font-medium text-slate-800">{choice.text}</p>
          
          <div className="flex flex-wrap gap-2">
            {choice.consequences.resources.time !== undefined && (
              <Badge className={getResourceColor(choice.consequences.resources.time)}>
                <div className="flex items-center gap-1">
                  {getResourceIcon(choice.consequences.resources.time)}
                  Time {choice.consequences.resources.time > 0 ? '+' : ''}{choice.consequences.resources.time}
                </div>
              </Badge>
            )}
            {choice.consequences.resources.network !== undefined && (
              <Badge className={getResourceColor(choice.consequences.resources.network)}>
                <div className="flex items-center gap-1">
                  {getResourceIcon(choice.consequences.resources.network)}
                  Network {choice.consequences.resources.network > 0 ? '+' : ''}{choice.consequences.resources.network}
                </div>
              </Badge>
            )}
            {choice.consequences.resources.cash !== undefined && (
              <Badge className={getResourceColor(choice.consequences.resources.cash)}>
                <div className="flex items-center gap-1">
                  {getResourceIcon(choice.consequences.resources.cash)}
                  Cash {choice.consequences.resources.cash > 0 ? '+' : ''}{choice.consequences.resources.cash}
                </div>
              </Badge>
            )}
            <Badge variant="secondary">
              +{choice.consequences.progressGain}% Progress
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DecisionChoice;
