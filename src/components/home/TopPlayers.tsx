
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Mock data for top players
const topPlayers = [
  {
    id: 1,
    name: "NinjaWarrior",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=ninja",
    game: "Fortnite",
    wins: 348,
    earnings: "$125,000",
    tier: "Diamond",
    rank: 1,
  },
  {
    id: 2,
    name: "ShroudMaster",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=shroud",
    game: "Apex Legends",
    wins: 302,
    earnings: "$98,000",
    tier: "Diamond",
    rank: 2,
  },
  {
    id: 3,
    name: "DrDisrespect",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=doctor",
    game: "Call of Duty",
    wins: 287,
    earnings: "$87,500",
    tier: "Platinum",
    rank: 3,
  },
  {
    id: 4,
    name: "Tfue",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=tfue",
    game: "Fortnite",
    wins: 265,
    earnings: "$76,200",
    tier: "Platinum",
    rank: 4,
  },
  {
    id: 5,
    name: "Myth",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=myth",
    game: "Valorant",
    wins: 243,
    earnings: "$64,800",
    tier: "Gold",
    rank: 5,
  }
];

const getRankColor = (rank: number) => {
  switch(rank) {
    case 1: return "from-yellow-500 to-amber-300";
    case 2: return "from-slate-300 to-slate-100";
    case 3: return "from-amber-700 to-amber-500";
    default: return "from-esports-purple to-esports-blue";
  }
};

const getTierColor = (tier: string) => {
  switch(tier) {
    case "Diamond": return "bg-cyan-500/20 text-cyan-400 border-cyan-500/50";
    case "Platinum": return "bg-indigo-500/20 text-indigo-400 border-indigo-500/50";
    case "Gold": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
    default: return "bg-gray-500/20 text-gray-400 border-gray-500/50";
  }
};

const TopPlayers = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Top Players</h2>
            <p className="text-muted-foreground">
              The best competitors across all game titles
            </p>
          </div>
          <Link 
            to="/leaderboards" 
            className="text-esports-purple hover:text-esports-deep-purple flex items-center gap-1"
          >
            View Full Leaderboards
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-left">
              <tr className="border-b border-border">
                <th className="py-4 px-4 font-medium text-muted-foreground">Rank</th>
                <th className="py-4 px-4 font-medium text-muted-foreground">Player</th>
                <th className="py-4 px-4 font-medium text-muted-foreground">Game</th>
                <th className="py-4 px-4 font-medium text-muted-foreground">Wins</th>
                <th className="py-4 px-4 font-medium text-muted-foreground">Earnings</th>
                <th className="py-4 px-4 font-medium text-muted-foreground">Tier</th>
              </tr>
            </thead>
            <tbody>
              {topPlayers.map((player) => (
                <tr 
                  key={player.id} 
                  className="border-b border-border hover:bg-secondary/50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${getRankColor(player.rank)}`}>
                      {player.rank}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img 
                          src={player.avatar} 
                          alt={player.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{player.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">{player.game}</td>
                  <td className="py-4 px-4">{player.wins}</td>
                  <td className="py-4 px-4">{player.earnings}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getTierColor(player.tier)}`}>
                      {player.tier}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TopPlayers;
