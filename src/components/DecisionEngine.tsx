
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GameState, Choice } from '@/types/game';
import { X, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface DecisionEngineProps {
  gameState: GameState;
  setGameState: (state: GameState) => void;
  onClose: () => void;
}

const DecisionEngine = ({ gameState, setGameState, onClose }: DecisionEngineProps) => {
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [showConsequence, setShowConsequence] = useState(false);

  const getDecisionForCurrentArc = () => {
    const decisions = [
      // Arc 0: Find Your Big Idea
      {
        title: "Market Research Discovery",
        description: "You've identified a potential problem to solve. How do you validate your idea?",
        choices: [
          {
            text: "Conduct extensive online surveys and research",
            consequences: {
              resources: { time: -15, network: 5, cash: -5 },
              message: "Your thorough research provides valuable insights but takes significant time.",
              progressGain: 35
            }
          },
          {
            text: "Talk directly to potential customers",
            consequences: {
              resources: { time: -10, network: 10, cash: 0 },
              message: "Direct customer feedback is invaluable and builds your network.",
              progressGain: 40
            }
          },
          {
            text: "Build a quick prototype to test",
            consequences: {
              resources: { time: -20, network: 0, cash: -10 },
              message: "Your prototype reveals technical challenges but proves concept viability.",
              progressGain: 30
            }
          }
        ]
      },
      // Arc 1: Build Your Dream Team
      {
        title: "Co-founder Search",
        description: "You need a technical co-founder. Where do you find the right person?",
        choices: [
          {
            text: "Reach out through your professional network",
            consequences: {
              resources: { time: -5, network: -10, cash: 0 },
              message: "Your network connections lead to a strong technical co-founder.",
              progressGain: 45
            }
          },
          {
            text: "Attend startup events and meetups",
            consequences: {
              resources: { time: -15, network: 15, cash: -5 },
              message: "Networking events expand your connections and you find a good match.",
              progressGain: 35
            }
          },
          {
            text: "Post on job boards and hire freelancers",
            consequences: {
              resources: { time: -10, network: 0, cash: -15 },
              message: "You find capable help but struggle with commitment and equity discussions.",
              progressGain: 25
            }
          }
        ]
      },
      // Arc 2: Build MVP & Get Users
      {
        title: "MVP Development Strategy",
        description: "Time to build your minimum viable product. What's your approach?",
        choices: [
          {
            text: "Focus on core features with clean design",
            consequences: {
              resources: { time: -20, network: 5, cash: -10 },
              message: "Your focused approach creates a polished MVP that users love.",
              progressGain: 40
            }
          },
          {
            text: "Add many features to impress users",
            consequences: {
              resources: { time: -30, network: 0, cash: -20 },
              message: "Feature bloat delays launch but you learn valuable lessons about user needs.",
              progressGain: 25
            }
          },
          {
            text: "Launch quickly with basic functionality",
            consequences: {
              resources: { time: -10, network: 0, cash: -5 },
              message: "Quick launch gets early feedback but requires significant iterations.",
              progressGain: 35
            }
          }
        ]
      },
      // Arc 3: Survive the Grind
      {
        title: "Burnout Management",
        description: "The team is exhausted and progress is slowing. How do you handle this critical moment?",
        choices: [
          {
            text: "Push harder to meet deadlines",
            consequences: {
              resources: { time: -25, network: -5, cash: 0 },
              message: "Short-term gains but team morale suffers. Some team members consider leaving.",
              progressGain: 30
            }
          },
          {
            text: "Take a strategic break and regroup",
            consequences: {
              resources: { time: 10, network: 5, cash: -10 },
              message: "The break refreshes the team and leads to breakthrough insights.",
              progressGain: 35
            }
          },
          {
            text: "Hire additional help to share the load",
            consequences: {
              resources: { time: 5, network: 10, cash: -25 },
              message: "New team members bring fresh energy and specialized skills.",
              progressGain: 40
            }
          }
        ]
      },
      // Arc 4: Secure Investment
      {
        title: "Funding Strategy",
        description: "You need capital to scale. What's your funding approach?",
        choices: [
          {
            text: "Bootstrap and maintain full control",
            consequences: {
              resources: { time: -15, network: 0, cash: 20 },
              message: "Slow but steady growth while maintaining full ownership and control.",
              progressGain: 30
            }
          },
          {
            text: "Seek angel investors and VCs",
            consequences: {
              resources: { time: -20, network: 20, cash: 50 },
              message: "Successful funding round provides capital and valuable mentor network.",
              progressGain: 45
            }
          },
          {
            text: "Launch crowdfunding campaign",
            consequences: {
              resources: { time: -25, network: 15, cash: 30 },
              message: "Crowdfunding validates market demand and builds customer base.",
              progressGain: 35
            }
          }
        ]
      },
      // Arc 5: Scale & Exit
      {
        title: "Exit Strategy",
        description: "Your startup is successful! How do you plan your exit?",
        choices: [
          {
            text: "IPO - Go public with your company",
            consequences: {
              resources: { time: -30, network: 25, cash: 100 },
              message: "Successful IPO makes you and your team wealthy. You're now a public company CEO!",
              progressGain: 50
            }
          },
          {
            text: "Strategic acquisition by larger company",
            consequences: {
              resources: { time: -20, network: 20, cash: 75 },
              message: "Acquisition provides great returns and your product reaches millions of users.",
              progressGain: 45
            }
          },
          {
            text: "Stay independent and build long-term",
            consequences: {
              resources: { time: -10, network: 10, cash: 50 },
              message: "You maintain control and build a sustainable, profitable business.",
              progressGain: 40
            }
          }
        ]
      }
    ];

    return decisions[gameState.currentArc] || decisions[0];
  };

  const decision = getDecisionForCurrentArc();

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
                <Card
                  key={index}
                  className="cursor-pointer hover:shadow-md transition-all duration-200 border-2 hover:border-blue-200"
                  onClick={() => handleChoiceSelect(choice)}
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
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">Decision Result</h3>
                <p className="text-blue-700">{selectedChoice?.consequences.message}</p>
              </div>

              <div className="flex justify-between gap-4">
                <Button variant="outline" onClick={() => setShowConsequence(false)}>
                  Go Back
                </Button>
                <Button onClick={applyConsequences} className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Apply Decision
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DecisionEngine;
