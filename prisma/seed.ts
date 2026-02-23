import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Seed Game Configs
  const games = [
    {
      gameId: 'neon-sky-runner',
      name: 'Neon Sky Runner',
      slug: 'neon-sky-runner',
      description: 'Race through neon-lit skies in this fast-paced endless runner.',
      category: 'Endless Runner',
      maxScore: 1000000,
      minDuration: 5,
      maxScorePerSecond: 500,
      active: true,
    },
    {
      gameId: 'tilenova',
      name: 'TileNova Circuit Surge',
      slug: 'tilenova',
      description: 'Master the grid in this electrifying puzzle game.',
      category: 'Puzzle',
      maxScore: 100000,
      minDuration: 30,
      maxScorePerSecond: 100,
      active: true,
    },
    {
      gameId: 'flappy',
      name: 'Flappy Bird',
      slug: 'flappy',
      description: 'Navigate through pipes in this classic arcade game.',
      category: 'Arcade',
      maxScore: 500,
      minDuration: 5,
      maxScorePerSecond: 10,
      active: true,
    },
  ];

  for (const game of games) {
    await prisma.gameConfig.upsert({
      where: { gameId: game.gameId },
      update: game,
      create: game,
    });
    console.log(`  Game: ${game.name}`);
  }

  // Seed Quests
  const quests = [
    {
      id: 'first-game',
      name: 'First Steps',
      description: 'Play your first game on Genie Arcade',
      xpReward: 50,
      requirementType: 'play_games',
      requirementValue: 1,
      active: true,
    },
    {
      id: 'play-5-games',
      name: 'Getting Started',
      description: 'Play 5 games across any title',
      xpReward: 150,
      requirementType: 'play_games',
      requirementValue: 5,
      active: true,
    },
    {
      id: 'play-20-games',
      name: 'Arcade Veteran',
      description: 'Play 20 games across any title',
      xpReward: 500,
      requirementType: 'play_games',
      requirementValue: 20,
      active: true,
    },
    {
      id: 'neon-score-5000',
      name: 'Neon Runner',
      description: 'Score 5,000 or higher in Neon Sky Runner',
      xpReward: 200,
      requirementType: 'reach_score',
      requirementValue: 5000,
      active: true,
    },
    {
      id: 'tilenova-score-5000',
      name: 'Circuit Breaker',
      description: 'Score 5,000 or higher in TileNova',
      xpReward: 200,
      requirementType: 'reach_score',
      requirementValue: 5000,
      active: true,
    },
    {
      id: 'flappy-score-50',
      name: 'Pipe Master',
      description: 'Score 50 or higher in Flappy Bird',
      xpReward: 300,
      requirementType: 'reach_score',
      requirementValue: 50,
      active: true,
    },
  ];

  for (const quest of quests) {
    await prisma.quest.upsert({
      where: { id: quest.id },
      update: quest,
      create: quest,
    });
    console.log(`  Quest: ${quest.name}`);
  }

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
