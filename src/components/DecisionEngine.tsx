
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GameState, Choice } from '@/types/game';
import { X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { getDecisionForCurrentArc } from '@/data/gameDecisions';
import DecisionChoice from '@/components/DecisionChoice';
import DecisionResult from '@/components/DecisionResult';

interface DecisionEngineProps {
  gameState: GameState;
  setGameState: (state: GameState) => void;
  onClose: () => void;
}

const DecisionEngine = ({ gameState, setGameState, onClose }: DecisionEngineProps) => {
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [showConsequence, setShowConsequence] = useState(false);

  const decision = getDecisionForCurrentArc(gameState.currentArc);

  const handleChoiceSelect = (choice: Choice) => {
    setSelectedChoice(choice);
    setShowConsequence(true);
  };

  const applyConsequences = () => {
    if (!selectedChoice) return;

    const newResources = {
      time: Math.max(0, Math.min(100, gameState.resources.time + (selectedChoice.consequences.resources.time || 0))),
      network: Math.max(0, Math.min(100, gameState.resources.network + (selectedChoice.consequences.resources.network || 0))),
      cash: Math.max(0, Math.min(100, gameState.resources.cash + (selectedChoice.consequences.resources.cash || 0)))
    };

    const newArcProgress = [...gameState.arcProgress];
    newArcProgress[gameState.currentArc] = Math.min(100, newArcProgress[gameState.currentArc] + selectedChoice.consequences.progressGain);

    let newCurrentArc = gameState.currentArc;
    if (newArcProgress[gameState.currentArc] >= 100 && gameState.currentArc < 5) {
      newCurrentArc = gameState.currentArc + 1;
      toast({
        title: "Arc Complete!",
        description: `You've completed "${decision.title}". Moving to the next phase!`,
      });
    }

    setGameState({
      ...gameState,
      resources: newResources,
      arcProgress: newArcProgress,
      currentArc: newCurrentArc,
      decisions: [...gameState.decisions, {
        arcIndex: gameState.currentArc,
        choice: selectedChoice.text,
        consequences: selectedChoice.consequences
      }]
    });

    toast({
      title: "Decision Applied",
      description: selectedChoice.consequences.message,
    });

    onClose();
  };

  const handleGoBack = () => {
    setShowConsequence(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{decision.title}</CardTitle>
              <Badge variant="outline" className="mt-2">
                Arc {gameState.currentArc + 1}
              </Badge>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-slate-700 leading-relaxed">{decision.description}</p>

          {!showConsequence ? (
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-800">Choose your approach:</h3>
              {decision.choices.map((choice, index) => (
                <DecisionChoice
                  key={index}
                  choice={choice}
                  index={index}
                  onSelect={handleChoiceSelect}
                />
              ))}
            </div>
          ) : selectedChoice && (
            <DecisionResult
              selectedChoice={selectedChoice}
              onGoBack={handleGoBack}
              onApply={applyConsequences}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DecisionEngine;
