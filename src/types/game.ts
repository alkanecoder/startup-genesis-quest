
export type CharacterType = 'student' | 'corporate' | 'freelancer' | 'exfounder';

export interface Resources {
  time: number;
  network: number;
  cash: number;
}

export interface Decision {
  arcIndex: number;
  choice: string;
  consequences: {
    resources: Partial<Resources>;
    message: string;
  };
}

export interface GameArc {
  id: number;
  title: string;
  description: string;
  icon: string;
  decisions: DecisionCard[];
}

export interface DecisionCard {
  id: string;
  title: string;
  description: string;
  choices: Choice[];
}

export interface Choice {
  text: string;
  consequences: {
    resources: Partial<Resources>;
    message: string;
    progressGain: number;
  };
}

export interface GameState {
  character: CharacterType;
  sector: string;
  resources: Resources;
  currentArc: number;
  arcProgress: number[];
  decisions: Decision[];
  achievements: string[];
  gameStarted: number;
}
