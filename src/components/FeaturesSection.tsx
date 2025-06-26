
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const characters = [
    { emoji: '🧑', title: 'Student', description: 'Young, broke, but full of energy and time' },
    { emoji: '👔', title: 'Corporate Professional', description: 'Money and network, but limited time' },
    { emoji: '💻', title: 'Freelancer', description: 'Balanced resources, jack of all trades' },
    { emoji: '💡', title: 'Ex-Founder', description: 'Been there, done that, rich in experience' }
  ];

  const gameFlow = [
    '💡 Idea',
    '👥 Team', 
    '🚀 Product',
    '😤 Grind',
    '💰 Investment',
    '🏆 Exit'
  ];

  const startingStats = [
    '💰 Money',
    '🧠 Mental Health', 
    '🧲 Customers',
    '💼 Investor Relations'
  ];

  return (
    <div className="space-y-16">
      {/* Choose Who You Are */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          🧑‍🎓 Choose Who You Are
        </h2>
        <p className="text-xl text-center text-slate-600 mb-12">
          Before the game starts:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((char, index) => (
            <Card key={index} className="bg-white border-slate-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 text-center">
              <CardHeader className="pb-4">
                <div className="text-4xl mb-3">{char.emoji}</div>
                <CardTitle className="text-lg text-slate-900">{char.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{char.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-slate-700 mb-6">
            Each role starts with a different game state:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {startingStats.map((stat, index) => (
              <div key={index} className="bg-slate-100 px-4 py-2 rounded-lg text-slate-700 font-medium">
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gameplay Flow */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-8">
          📈 Gameplay Flow
        </h2>
        
        <Card className="bg-white border-slate-200">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <p className="text-lg text-slate-700 mb-4">
                  Go through 6 arcs:
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  {gameFlow.map((arc, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-gradient-to-r from-red-600 to-yellow-600 text-white px-4 py-2 rounded-lg font-medium">
                        {arc}
                      </div>
                      {index < gameFlow.length - 1 && (
                        <div className="mx-2 text-slate-400">→</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2 text-slate-700">
                <p>• After each arc, stats change.</p>
                <p>• Choices shape your story and strategy.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturesSection;
