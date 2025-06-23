
import { useState, useEffect } from 'react';
import CharacterSelection from '@/components/CharacterSelection';
import GameDashboard from '@/components/GameDashboard';
import { GameState, CharacterType, GameArc } from '@/types/game';

const Index = () => {
  const [gameState, setGameState] = useState<GameState | null>(null);

  useEffect(() => {
    // Load saved game state
    const savedGame = localStorage.getItem('startupJourney');
    if (savedGame) {
      setGameState(JSON.parse(savedGame));
    }
  }, []);

  useEffect(() => {
    // Save game state whenever it changes
    if (gameState) {
      localStorage.setItem('startupJourney', JSON.stringify(gameState));
    }
  }, [gameState]);

  const startNewGame = (character: CharacterType, sector: string) => {
    const newGameState: GameState = {
      character,
      sector,
      resources: getStartingResources(character),
      currentArc: 0,
      arcProgress: Array(6).fill(0),
      decisions: [],
      achievements: [],
      gameStarted: Date.now()
    };
    setGameState(newGameState);
  };

  const getStartingResources = (character: CharacterType) => {
    const resourceMap = {
      student: { time: 90, network: 20, cash: 10 },
      corporate: { time: 50, network: 80, cash: 70 },
      freelancer: { time: 80, network: 50, cash: 40 },
      exfounder: { time: 30, network: 90, cash: 80 }
    };
    return resourceMap[character];
  };

  const resetGame = () => {
    localStorage.removeItem('startupJourney');
    setGameState(null);
  };

  if (!gameState) {
    return <CharacterSelection onStartGame={startNewGame} />;
  }

  return <GameDashboard gameState={gameState} setGameState={setGameState} onResetGame={resetGame} />;
};

export default Index;
