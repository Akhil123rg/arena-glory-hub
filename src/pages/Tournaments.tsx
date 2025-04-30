
import { useState } from "react";
import { Navbar } from "@/components";
import { Footer } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GamepadIcon, Trophy, Users, Calendar, Search } from "lucide-react";
import { Link } from "react-router-dom";

// Extended mock data for tournaments with additional fields
const allTournaments = [
  {
    id: 1,
    title: "Apex Legends Championship",
    game: "Apex Legends",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    date: "May 15, 2025",
    prizePool: "$10,000",
    participants: 64,
    registrationOpen: true,
    format: "Battle Royale",
    platform: "PC, Console",
    region: "North America",
  },
  {
    id: 2,
    title: "Valorant Masters",
    game: "Valorant",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    date: "May 22, 2025",
    prizePool: "$15,000",
    participants: 32,
    registrationOpen: true,
    format: "5v5 Tactical",
    platform: "PC",
    region: "Europe",
  },
  {
    id: 3,
    title: "Fortnite World Cup Qualifier",
    game: "Fortnite",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    date: "June 5, 2025",
    prizePool: "$25,000",
    participants: 100,
    registrationOpen: false,
    format: "Battle Royale",
    platform: "PC, Console, Mobile",
    region: "Global",
  },
  {
    id: 4,
    title: "League of Legends Regional",
    game: "League of Legends",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    date: "June 12, 2025",
    prizePool: "$20,000",
    participants: 16,
    registrationOpen: true,
    format: "5v5 MOBA",
    platform: "PC",
    region: "Asia-Pacific",
  },
  {
    id: 5,
    title: "Call of Duty Championship",
    game: "Call of Duty",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f",
    date: "June 20, 2025",
    prizePool: "$30,000",
    participants: 32,
    registrationOpen: true,
    format: "Team Deathmatch",
    platform: "Console",
    region: "North America",
  },
  {
    id: 6,
    title: "Counter-Strike Elite Series",
    game: "CS:GO",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba",
    date: "July 1, 2025",
    prizePool: "$40,000",
    participants: 24,
    registrationOpen: true,
    format: "5v5 Tactical",
    platform: "PC",
    region: "Europe",
  },
  {
    id: 7,
    title: "DOTA 2 International Qualifier",
    game: "DOTA 2",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    date: "July 10, 2025",
    prizePool: "$50,000",
    participants: 18,
    registrationOpen: true,
    format: "5v5 MOBA",
    platform: "PC",
    region: "Global",
  },
  {
    id: 8,
    title: "Rocket League Championship",
    game: "Rocket League",
    image: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf",
    date: "July 15, 2025",
    prizePool: "$12,000",
    participants: 32,
    registrationOpen: false,
    format: "3v3 Sports",
    platform: "PC, Console",
    region: "South America",
  },
  {
    id: 9,
    title: "Rainbow Six Siege Open",
    game: "Rainbow Six Siege",
    image: "https://images.unsplash.com/photo-1542549237432-a176cb9d5e5e",
    date: "August 5, 2025",
    prizePool: "$22,000",
    participants: 24,
    registrationOpen: true,
    format: "5v5 Tactical",
    platform: "PC, Console",
    region: "Europe",
  },
  {
    id: 10,
    title: "Overwatch League Qualifier",
    game: "Overwatch",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    date: "August 12, 2025",
    prizePool: "$35,000",
    participants: 12,
    registrationOpen: true,
    format: "6v6 Team",
    platform: "PC",
    region: "North America",
  },
  {
    id: 11,
    title: "Hearthstone Masters",
    game: "Hearthstone",
    image: "https://images.unsplash.com/photo-1525711857929-4272fb4a040f",
    date: "August 20, 2025",
    prizePool: "$8,000",
    participants: 64,
    registrationOpen: true,
    format: "1v1 Card Game",
    platform: "PC, Mobile",
    region: "Global",
  },
  {
    id: 12,
    title: "FIFA World Cup",
    game: "FIFA",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    date: "September 1, 2025",
    prizePool: "$45,000",
    participants: 32,
    registrationOpen: false,
    format: "1v1 Sports",
    platform: "PC, Console",
    region: "Europe",
  },
];

const TournamentCard = ({ tournament }: { tournament: typeof allTournaments[0] }) => {
  return (
    <Link to={`/tournaments/${tournament.id}`} className="block group">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-esports-purple/20 border-border group-hover:border-esports-purple/50">
        <div className="relative">
          <div className="h-48 overflow-hidden">
            <img 
              src={tournament.image} 
              alt={tournament.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-esports-purple hover:bg-esports-deep-purple">
              {tournament.game}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            {tournament.registrationOpen ? (
              <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/50">
                Registration Open
              </Badge>
            ) : (
              <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/50">
                Coming Soon
              </Badge>
            )}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2 line-clamp-1">{tournament.title}</h3>
          
          <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Trophy className="h-4 w-4 text-esports-purple" />
              <span>{tournament.prizePool}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-esports-purple" />
              <span>{tournament.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-esports-purple" />
              <span>{tournament.participants} Teams</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GamepadIcon className="h-4 w-4 text-esports-purple" />
              <span>{tournament.format}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const Tournaments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [gameFilter, setGameFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");

  // Get unique game names for filter
  const gameOptions = Array.from(new Set(allTournaments.map(t => t.game)));
  // Get unique regions for filter
  const regionOptions = Array.from(new Set(allTournaments.map(t => t.region)));

  // Filter tournaments based on search and filters
  const filteredTournaments = allTournaments.filter(tournament => {
    const matchesSearch = tournament.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tournament.game.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGame = gameFilter === "all" || tournament.game === gameFilter;
    const matchesStatus = statusFilter === "all" || 
                         (statusFilter === "open" && tournament.registrationOpen) || 
                         (statusFilter === "closed" && !tournament.registrationOpen);
    const matchesRegion = regionFilter === "all" || tournament.region === regionFilter;

    return matchesSearch && matchesGame && matchesStatus && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="container py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">All Tournaments</h1>
              <p className="text-muted-foreground mb-4 md:mb-0">
                Browse all available tournaments and find your next competition
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="grid gap-4 mb-8 md:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search tournaments..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select value={gameFilter} onValueChange={setGameFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Game" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Games</SelectItem>
                {gameOptions.map(game => (
                  <SelectItem key={game} value={game}>{game}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Registration Open</SelectItem>
                <SelectItem value="closed">Coming Soon</SelectItem>
              </SelectContent>
            </Select>
            <Select value={regionFilter} onValueChange={setRegionFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                {regionOptions.map(region => (
                  <SelectItem key={region} value={region}>{region}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Tournament cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTournaments.length > 0 ? (
              filteredTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <h3 className="text-xl font-medium mb-2">No tournaments found</h3>
                <p className="text-muted-foreground">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tournaments;

