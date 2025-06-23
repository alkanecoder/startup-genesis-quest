
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { GameState } from '@/types/game';
import ResourceDashboard from '@/components/ResourceDashboard';
import ArcProgress from '@/components/ArcProgress';
import DecisionEngine from '@/components/DecisionEngine';
import { RotateCcw } from 'lucide-react';

interface GameDashboardProps {
  gameState: GameState;
  setGameState: (state: GameState) => void;
  onResetGame: () => void;
}

const GameDashboard = ({ gameState, setGameState, onResetGame }: GameDashboardProps) => {
  const [showDecision, setShowDecision] = useState(false);

  const characterTitles = {
    student: 'The Student',
    corporate: 'The Corporate',
    freelancer: 'The Freelancer',
    exfounder: 'The Ex-Founder'
  };

  const currentArcTitle = [
    'Find Your Big Idea',
    'Build Your Dream Team',
    'Build MVP & Get Users',
    'Survive the Grind',
    'Secure Investment',
    'Scale & Exit'
  ][gameState.currentArc];

  const gameComplete = gameState.currentArc >= 6;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Startup Journey
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <Badge variant="outline" className="text-sm">
                  {characterTitles[gameState.character]}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {gameState.sector}
                </Badge>
              </div>
            </div>
            <Button
              onClick={onResetGame}
              variant="outline"
              className="flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              New Game
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <ResourceDashboard resources={gameState.resources} />
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Phase</CardTitle>
              </CardHeader>
              <CardContent>
                {gameComplete ? (
                  <div className="text-center space-y-4">
                    <div className="text-4xl">🎉</div>
                    <div>
                      <h3 className="font-bold text-green-600 text-lg">Congratulations!</h3>
                      <p className="text-sm text-slate-600 mt-2">
                        You've completed your startup journey!
                      </p>
                    </div>
                    <Button onClick={onResetGame} className="w-full">
                      Start New Journey
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-slate-800">Arc {gameState.currentArc + 1}</h3>
                      <p className="text-sm text-slate-600">{currentArcTitle}</p>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-slate-600 mb-2">
                        <span>Progress</span>
                        <span>{Math.round(gameState.arcProgress[gameState.currentArc])}%</span>
                      </div>
                      <Progress value={gameState.arcProgress[gameState.currentArc]} className="h-2" />
                    </div>
                    <Button
                      onClick={() => setShowDecision(true)}
                      disabled={gameState.arcProgress[gameState.currentArc] >= 100}
                      className="w-full"
                    >
                      Make Decision
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ArcProgress 
              currentArc={gameState.currentArc} 
              arcProgress={gameState.arcProgress} 
            />
          </div>
        </div>
      </div>

      {/* Decision Modal */}
      {showDecision && !gameComplete && (
        <DecisionEngine
          gameState={gameState}
          setGameState={setGameState}
          onClose={() => setShowDecision(false)}
        />
      )}
    </div>
  );
};

export default GameDashboard;
