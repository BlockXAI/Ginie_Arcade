export interface Game {
  id: string
  uuid: string
  title: string
  description: string
  icon: string
  color: "cyan" | "purple" | "pink"
  players: number
  highScore: number
  category: string
  gamePath: string
}

export const games: Game[] = [
  {
    id: "neon-sky-runner",
    uuid: "bc72a878-6ebc-4adc-ad66-49b67232ea5a",
    title: "Neon Sky Runner",
    description: "Race through neon-lit skies in this fast-paced endless runner. Dodge obstacles, collect power-ups, and chase the highest score.",
    icon: "Rocket",
    color: "cyan",
    players: 12847,
    highScore: 985420,
    category: "Endless Runner",
    gamePath: "/games/neon-sky-runner/index.html",
  },
  {
    id: "tilenova",
    uuid: "ae0f9846-7011-467c-8244-eebf9028b4e1",
    title: "TileNova Circuit Surge",
    description: "Master the grid in this electrifying puzzle game. Match circuits, create chains, and surge your way to victory.",
    icon: "Puzzle",
    color: "purple",
    players: 8934,
    highScore: 742150,
    category: "Puzzle",
    gamePath: "/games/tilenova/index.html",
  },
  {
    id: "flappy",
    uuid: "d3f1a920-4b8c-4e2a-9c15-7a6b3d8e1f04",
    title: "Flappy Bird",
    description: "Navigate through pipes in this classic arcade game. Simple to learn, impossible to master.",
    icon: "Bird",
    color: "pink",
    players: 5621,
    highScore: 420,
    category: "Arcade",
    gamePath: "/games/flappy/index.html",
  },
  {
    id: "sudoku",
    uuid: "f7a2c391-8d4e-4b0a-a1c7-3e9f5d2b6a08",
    title: "Sudoku: Roast Mode",
    description: "Comedy-driven Sudoku with hilarious characters! Get roasted while solving puzzles. 60+ voice lines!",
    icon: "Grid3x3",
    color: "cyan",
    players: 3412,
    highScore: 2100,
    category: "Puzzle",
    gamePath: "/games/sudoku/index.html",
  },
  {
    id: "8ball-pool",
    uuid: "a1b2c3d4-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
    title: "8 Ball Pool",
    description: "Classic billiards with realistic physics! Pot all your balls and sink the 8-ball to win. Perfect your shot and dominate the table.",
    icon: "Circle",
    color: "purple",
    players: 0,
    highScore: 0,
    category: "Arcade",
    gamePath: "/games/8ball-pool/game.html",
  },
]

export function getGameById(id: string): Game | undefined {
  return games.find((game) => game.id === id)
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}
