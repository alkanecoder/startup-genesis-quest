
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CharacterType } from '@/types/game';
import { User, Users, Clock, DollarSign } from 'lucide-react';

const CharacterSelection = ({ onStartGame }: { onStartGame: (character: CharacterType) => void }) => {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType | null>(null);

  const characters = [
    {
      type: 'student' as CharacterType,
      title: 'The Student',
      description: 'Young, ambitious, and full of energy. Time is your greatest asset.',
      resources: { time: 90, network: 20, cash: 10 },
      color: 'from-red-500 to-yellow-600',
      icon: User
    },
    {
      type: 'corporate' as CharacterType,
      title: 'The Corporate',
      description: 'Industry insider with connections and capital. Network is power.',
      resources: { time: 50, network: 80, cash: 70 },
      color: 'from-yellow-500 to-red-600',
      icon: Users
    },
    {
      type: 'freelancer' as CharacterType,
      title: 'The Freelancer',
      description: 'Balanced skills and moderate resources. Jack of all trades.',
      resources: { time: 80, network: 50, cash: 40 },
      color: 'from-red-600 to-yellow-500',
      icon: Clock
    },
    {
      type: 'exfounder' as CharacterType,
      title: 'The Ex-Founder',
      description: 'Been there, done that. Rich in experience and connections.',
      resources: { time: 30, network: 90, cash: 80 },
      color: 'from-yellow-600 to-red-500',
      icon: DollarSign
    }
  ];

  const getResourceColor = (value: number) => {
    if (value >= 70) return 'text-yellow-600 bg-yellow-50';
    if (value >= 40) return 'text-red-600 bg-red-50';
    return 'text-slate-600 bg-slate-50';
  };

  const getResourceLevel = (value: number) => {
    if (value >= 70) return 'High';
    if (value >= 40) return 'Medium';
    return 'Low';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4 leading-tight">
            <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
              Startup Journey
            </span>
          </h1>
          <p className="text-xl text-slate-600">Choose your founder archetype and begin your entrepreneurial adventure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {characters.map((char) => {
            const Icon = char.icon;
            const isSelected = selectedCharacter === char.type;
            
            return (
              <Card
                key={char.type}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isSelected ? 'ring-4 ring-red-500 shadow-xl' : 'hover:shadow-lg'
                }`}
                onClick={() => setSelectedCharacter(char.type)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${char.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800">{char.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600 text-center leading-relaxed">{char.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700">Time</span>
                      <Badge className={getResourceColor(char.resources.time)}>
                        {getResourceLevel(char.resources.time)}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700">Network</span>
                      <Badge className={getResourceColor(char.resources.network)}>
                        {getResourceLevel(char.resources.network)}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700">Cash</span>
                      <Badge className={getResourceColor(char.resources.cash)}>
                        {getResourceLevel(char.resources.cash)}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-md mx-auto">
          <Button
            onClick={() => selectedCharacter && onStartGame(selectedCharacter)}
            disabled={!selectedCharacter}
            className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 transition-all duration-300"
            size="lg"
          >
            {selectedCharacter ? 'Start Your Journey' : 'Select Character'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;
