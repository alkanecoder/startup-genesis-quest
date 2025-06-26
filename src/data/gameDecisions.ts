
import { Choice } from '@/types/game';

export interface GameDecision {
  title: string;
  description: string;
  choices: Choice[];
}

export const getDecisionForCurrentArc = (arcIndex: number): GameDecision => {
  const decisions: GameDecision[] = [
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

  return decisions[arcIndex] || decisions[0];
};
