
import { useState } from "react";
import { Navbar } from "@/components";
import { Footer } from "@/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Trophy, Users, Star, Medal, Award } from "lucide-react";

// Mock data for players
const playersData = [
  {
    id: 1,
    rank: 1,
    name: "NinjaWarrior",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=ninja",
    game: "Fortnite",
    kills: 3482,
    wins: 348,
    points: 15890,
    tier: "Diamond",
  },
  {
    id: 2,
    rank: 2,
    name: "ShroudMaster",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=shroud",
    game: "Apex Legends",
    kills: 3254,
    wins: 302,
    points: 14320,
    tier: "Diamond",
  },
  {
    id: 3,
    rank: 3,
    name: "DrDisrespect",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=doctor",
    game: "Call of Duty",
    kills: 2987,
    wins: 287,
    points: 13750,
    tier: "Platinum",
  },
  {
    id: 4,
    rank: 4,
    name: "Tfue",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=tfue",
    game: "Fortnite",
    kills: 2654,
    wins: 265,
    points: 12840,
    tier: "Platinum",
  },
  {
    id: 5,
    rank: 5,
    name: "Myth",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=myth",
    game: "Valorant",
    kills: 2432,
    wins: 243,
    points: 11970,
    tier: "Gold",
  },
  {
    id: 6,
    rank: 6,
    name: "Pokimane",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=pokimane",
    game: "League of Legends",
    kills: 2345,
    wins: 234,
    points: 11650,
    tier: "Gold",
  },
  {
    id: 7,
    rank: 7,
    name: "TimTheTatman",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=tim",
    game: "Call of Duty",
    kills: 2265,
    wins: 226,
    points: 11320,
    tier: "Gold",
  },
  {
    id: 8,
    rank: 8,
    name: "Bugha",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=bugha",
    game: "Fortnite",
    kills: 2187,
    wins: 218,
    points: 11050,
    tier: "Gold",
  },
  {
    id: 9,
    rank: 9,
    name: "Faker",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=faker",
    game: "League of Legends",
    kills: 2109,
    wins: 210,
    points: 10780,
    tier: "Silver",
  },
  {
    id: 10,
    rank: 10,
    name: "ScreaM",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=scream",
    game: "CS2",
    kills: 2035,
    wins: 203,
    points: 10520,
    tier: "Silver",
  },
];

// Mock data for teams
const teamsData = [
  {
    id: 1,
    rank: 1,
    name: "Team Liquid",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=liquid",
    game: "League of Legends",
    wins: 186,
    totalMatches: 230,
    winRate: "80.9%",
    points: 9850,
  },
  {
    id: 2,
    rank: 2,
    name: "Cloud9",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=cloud9",
    game: "CS2",
    wins: 178,
    totalMatches: 225,
    winRate: "79.1%",
    points: 9620,
  },
  {
    id: 3,
    rank: 3,
    name: "Fnatic",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=fnatic",
    game: "Valorant",
    wins: 172,
    totalMatches: 220,
    winRate: "78.2%",
    points: 9350,
  },
  {
    id: 4,
    rank: 4,
    name: "G2 Esports",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=g2",
    game: "Fortnite",
    wins: 165,
    totalMatches: 215,
    winRate: "76.7%",
    points: 9120,
  },
  {
    id: 5,
    rank: 5,
    name: "100 Thieves",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=100t",
    game: "Call of Duty",
    wins: 156,
    totalMatches: 210,
    winRate: "74.3%",
    points: 8840,
  },
  {
    id: 6,
    rank: 6,
    name: "TSM",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=tsm",
    game: "Apex Legends",
    wins: 149,
    totalMatches: 205,
    winRate: "72.7%",
    points: 8620,
  },
  {
    id: 7,
    rank: 7,
    name: "Sentinels",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=sentinels",
    game: "Valorant",
    wins: 142,
    totalMatches: 200,
    winRate: "71.0%",
    points: 8390,
  },
  {
    id: 8,
    rank: 8,
    name: "NRG",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=nrg",
    game: "Fortnite",
    wins: 135,
    totalMatches: 195,
    winRate: "69.2%",
    points: 8160,
  },
  {
    id: 9,
    rank: 9,
    name: "FaZe Clan",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=faze",
    game: "Call of Duty",
    wins: 128,
    totalMatches: 190,
    winRate: "67.4%",
    points: 7930,
  },
  {
    id: 10,
    rank: 10,
    name: "T1",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=t1",
    game: "League of Legends",
    wins: 121,
    totalMatches: 185,
    winRate: "65.4%",
    points: 7700,
  },
];

const getTierColor = (tier: string) => {
  switch(tier) {
    case "Diamond": return "bg-cyan-500/20 text-cyan-400 border-cyan-500/50";
    case "Platinum": return "bg-indigo-500/20 text-indigo-400 border-indigo-500/50";
    case "Gold": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
    case "Silver": return "bg-slate-300/20 text-slate-300 border-slate-300/50";
    case "Bronze": return "bg-amber-700/20 text-amber-600 border-amber-700/50";
    default: return "bg-gray-500/20 text-gray-400 border-gray-500/50";
  }
};

const getRankIcon = (rank: number) => {
  switch(rank) {
    case 1: return <Trophy className="h-5 w-5 text-yellow-500" />;
    case 2: return <Trophy className="h-5 w-5 text-slate-300" />;
    case 3: return <Trophy className="h-5 w-5 text-amber-700" />;
    default: return <span className="font-medium text-muted-foreground">{rank}</span>;
  }
};

const Leaderboards = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGame, setSelectedGame] = useState("all");
  const [sortBy, setSortBy] = useState("rank");
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Trophy className="h-8 w-8 text-esports-purple" />
            <span>Leaderboards</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track the top performers across all games and tournaments. Rise through the ranks and earn your place among the best.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <Tabs defaultValue="players" className="w-full max-w-md mx-auto md:mx-0">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="players">
                <Users className="h-4 w-4 mr-2" />
                <span>Players</span>
              </TabsTrigger>
              <TabsTrigger value="teams">
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
                  className="h-4 w-4 mr-2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Teams</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search players..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={selectedGame} onValueChange={setSelectedGame}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Game" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Games</SelectItem>
                <SelectItem value="valorant">Valorant</SelectItem>
                <SelectItem value="fortnite">Fortnite</SelectItem>
                <SelectItem value="apex">Apex Legends</SelectItem>
                <SelectItem value="lol">League of Legends</SelectItem>
                <SelectItem value="cod">Call of Duty</SelectItem>
                <SelectItem value="cs2">Counter-Strike 2</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rank">Rank</SelectItem>
                <SelectItem value="wins">Wins</SelectItem>
                <SelectItem value="kills">Kills</SelectItem>
                <SelectItem value="points">Points</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Tabs defaultValue="players">
          <TabsContent value="players">
            <Card>
              <CardHeader className="pb-0">
                <CardTitle>Top Players</CardTitle>
                <CardDescription>
                  Player rankings based on tournament performance and statistics
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border">
                      <tr className="text-left">
                        <th className="pb-4 px-4 w-[80px]">Rank</th>
                        <th className="pb-4 px-4">Player</th>
                        <th className="pb-4 px-4">Game</th>
                        <th className="pb-4 px-4 text-right">Kills</th>
                        <th className="pb-4 px-4 text-right">Wins</th>
                        <th className="pb-4 px-4 text-right">Points</th>
                        <th className="pb-4 px-4 text-right">Tier</th>
                        <th className="pb-4 px-4 w-[80px] text-right">Awards</th>
                      </tr>
                    </thead>
                    <tbody>
                      {playersData.map((player) => (
                        <tr key={player.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                          <td className="py-4 px-4">
                            <div className="flex items-center justify-center h-9 w-9">
                              {getRankIcon(player.rank)}
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
                          <td className="py-4 px-4 text-right">{player.kills.toLocaleString()}</td>
                          <td className="py-4 px-4 text-right">{player.wins.toLocaleString()}</td>
                          <td className="py-4 px-4 text-right font-medium">{player.points.toLocaleString()}</td>
                          <td className="py-4 px-4 text-right">
                            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getTierColor(player.tier)}`}>
                              {player.tier}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex justify-end gap-1">
                              {player.rank === 1 && (
                                <>
                                  <Medal className="h-5 w-5 text-yellow-500" />
                                  <Star className="h-5 w-5 text-yellow-500" />
                                  <Award className="h-5 w-5 text-esports-purple" />
                                </>
                              )}
                              {player.rank === 2 && (
                                <>
                                  <Medal className="h-5 w-5 text-slate-300" />
                                  <Star className="h-5 w-5 text-slate-300" />
                                </>
                              )}
                              {player.rank === 3 && (
                                <>
                                  <Medal className="h-5 w-5 text-amber-700" />
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-center pt-6">
                  <Button variant="outline" className="text-esports-purple border-esports-purple hover:bg-esports-purple/10">
                    Load More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="teams">
            <Card>
              <CardHeader className="pb-0">
                <CardTitle>Top Teams</CardTitle>
                <CardDescription>
                  Team rankings based on tournament performance and statistics
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border">
                      <tr className="text-left">
                        <th className="pb-4 px-4 w-[80px]">Rank</th>
                        <th className="pb-4 px-4">Team</th>
                        <th className="pb-4 px-4">Game</th>
                        <th className="pb-4 px-4 text-right">Wins</th>
                        <th className="pb-4 px-4 text-right">Matches</th>
                        <th className="pb-4 px-4 text-right">Win Rate</th>
                        <th className="pb-4 px-4 text-right">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamsData.map((team) => (
                        <tr key={team.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                          <td className="py-4 px-4">
                            <div className="flex items-center justify-center h-9 w-9">
                              {getRankIcon(team.rank)}
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full overflow-hidden bg-secondary">
                                <img 
                                  src={team.logo}
                                  alt={team.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium">{team.name}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">{team.game}</td>
                          <td className="py-4 px-4 text-right">{team.wins}</td>
                          <td className="py-4 px-4 text-right">{team.totalMatches}</td>
                          <td className="py-4 px-4 text-right">{team.winRate}</td>
                          <td className="py-4 px-4 text-right font-medium">{team.points.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="flex justify-center pt-6">
                  <Button variant="outline" className="text-esports-purple border-esports-purple hover:bg-esports-purple/10">
                    Load More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Leaderboards;
