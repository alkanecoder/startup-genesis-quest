
import { Button } from '@/components/ui/button';
import { Choice } from '@/types/game';

interface DecisionResultProps {
  selectedChoice: Choice;
  onGoBack: () => void;
  onApply: () => void;
}

const DecisionResult = ({ selectedChoice, onGoBack, onApply }: DecisionResultProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-2">Decision Result</h3>
        <p className="text-blue-700">{selectedChoice.consequences.message}</p>
      </div>

      <div className="flex justify-between gap-4">
        <Button variant="outline" onClick={onGoBack}>
          Go Back
        </Button>
        <Button onClick={onApply} className="bg-gradient-to-r from-blue-600 to-purple-600">
          Apply Decision
        </Button>
      </div>
    </div>
  );
};

export default DecisionResult;
