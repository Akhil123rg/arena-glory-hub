
import { useState } from "react";
import { Navbar } from "@/components";
import { Footer } from "@/components";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GamepadIcon, Users, Search } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for games
const games = [
  {
    id: 1,
    title: "Valorant",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    activeTournaments: 24,
    registeredPlayers: "15K+",
    genre: "FPS",
    description: "A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.",
    teams: ["Cloud9", "Sentinels", "100 Thieves", "TSM", "FaZe Clan", "NRG", "T1", "Gen.G"]
  },
  {
    id: 2,
    title: "League of Legends",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    activeTournaments: 18,
    registeredPlayers: "28K+",
    genre: "MOBA",
    description: "A team-based strategy game where two teams of five champions battle to destroy the enemy's base.",
    teams: ["T1", "DRX", "Gen.G", "Cloud9", "Fnatic", "G2 Esports", "Team Liquid", "Evil Geniuses"]
  },
  {
    id: 3,
    title: "Fortnite",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    activeTournaments: 32,
    registeredPlayers: "22K+",
    genre: "Battle Royale",
    description: "A battle royale game with building mechanics where players fight to be the last one standing.",
    teams: ["NRG", "FaZe Clan", "100 Thieves", "TSM", "Team Liquid", "Sentinels", "XSET", "Ghost Gaming"]
  },
  {
    id: 4,
    title: "Apex Legends",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    activeTournaments: 15,
    registeredPlayers: "12K+",
    genre: "Battle Royale",
    description: "A free-to-play battle royale game where legendary competitors battle for glory and fortune.",
    teams: ["TSM", "NRG", "Cloud9", "Team Liquid", "100 Thieves", "G2 Esports", "Complexity", "FURIA"]
  },
  {
    id: 5,
    title: "Call of Duty: Warzone",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    activeTournaments: 21,
    registeredPlayers: "18K+",
    genre: "FPS",
    description: "A free-to-play battle royale game from the Call of Duty franchise.",
    teams: ["Atlanta FaZe", "OpTic Texas", "Seattle Surge", "Los Angeles Thieves", "Boston Breach", "Minnesota RØKKR", "New York Subliners", "London Royal Ravens"]
  },
  {
    id: 6,
    title: "Counter-Strike 2",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    activeTournaments: 27,
    registeredPlayers: "25K+",
    genre: "FPS",
    description: "A tactical first-person shooter with a focus on team play and strategy.",
    teams: ["FaZe Clan", "Natus Vincere", "G2 Esports", "Team Vitality", "Heroic", "Astralis", "ENCE", "Team Liquid"]
  },
  {
    id: 7,
    title: "DOTA 2",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    activeTournaments: 14,
    registeredPlayers: "19K+",
    genre: "MOBA",
    description: "A free-to-play multiplayer online battle arena game with complex strategy and team play.",
    teams: ["Team Secret", "OG", "Team Liquid", "PSG.LGD", "Evil Geniuses", "Virtus.pro", "Vici Gaming", "Nigma Galaxy"]
  },
  {
    id: 8,
    title: "Rocket League",
    image: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf",
    activeTournaments: 12,
    registeredPlayers: "10K+",
    genre: "Sports",
    description: "A vehicular soccer game with rocket-powered cars and aerial maneuvers.",
    teams: ["NRG", "G2 Esports", "Team Vitality", "Spacestation Gaming", "FURIA", "Team BDS", "FaZe Clan", "The General NRG"]
  },
  {
    id: 9,
    title: "Rainbow Six Siege",
    image: "https://images.unsplash.com/photo-1542549237432-a176cb9d5e5e",
    activeTournaments: 16,
    registeredPlayers: "14K+",
    genre: "Tactical FPS",
    description: "A tactical shooter focusing on environmental destruction and team play.",
    teams: ["Spacestation Gaming", "TSM", "DarkZero Esports", "Ninjas in Pyjamas", "Team Liquid", "FaZe Clan", "G2 Esports", "FURIA"]
  },
  {
    id: 10,
    title: "Overwatch 2",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    activeTournaments: 18,
    registeredPlayers: "16K+",
    genre: "FPS",
    description: "A team-based action game set in an optimistic future with diverse heroes.",
    teams: ["San Francisco Shock", "Dallas Fuel", "Shanghai Dragons", "Seoul Dynasty", "Houston Outlaws", "Los Angeles Gladiators", "Atlanta Reign", "Florida Mayhem"]
  },
  {
    id: 11,
    title: "Hearthstone",
    image: "https://images.unsplash.com/photo-1525711857929-4272fb4a040f",
    activeTournaments: 10,
    registeredPlayers: "8K+",
    genre: "Card Game",
    description: "A digital collectible card game based on the Warcraft universe.",
    teams: ["Team Liquid", "G2 Esports", "Tempo Storm", "Alliance", "SK Gaming", "Natus Vincere", "Golden Guardians", "T1"]
  },
  {
    id: 12,
    title: "FIFA 25",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
    activeTournaments: 20,
    registeredPlayers: "13K+",
    genre: "Sports",
    description: "The latest entry in the FIFA football simulation series.",
    teams: ["GUILD", "FNATIC", "Excel", "Complexity", "FaZe Clan", "Team Vitality", "QLASH", "Team Heretics"]
  }
];

const GameCard = ({ game }: { game: typeof games[0] }) => {
  return (
    <Link to={`/games/${game.id}`} className="group">
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-esports-purple/20 border-border group-hover:border-esports-purple/50">
        <div className="relative">
          <div className="h-36 overflow-hidden">
            <img 
              src={game.image} 
              alt={game.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute bottom-3 left-3">
            <Badge variant="outline" className="bg-esports-purple/10 text-esports-purple border-esports-purple/50">
              {game.genre}
            </Badge>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-3">{game.title}</h3>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <GamepadIcon className="h-4 w-4 text-esports-purple" />
                <span>Active Tournaments</span>
              </div>
              <span className="font-medium text-foreground">{game.activeTournaments}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-esports-purple" />
                <span>Players</span>
              </div>
              <span className="font-medium text-foreground">{game.registeredPlayers}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const GameDetail = ({ game }: { game: typeof games[0] }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <div className="relative rounded-lg overflow-hidden h-64">
          <img 
            src={game.image} 
            alt={game.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent/20"></div>
        </div>
        <div className="mt-4">
          <Badge className="bg-esports-purple hover:bg-esports-deep-purple">
            {game.genre}
          </Badge>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <GamepadIcon className="h-4 w-4 text-esports-purple" />
              <span>Active Tournaments</span>
            </div>
            <span className="font-medium">{game.activeTournaments}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-esports-purple" />
              <span>Registered Players</span>
            </div>
            <span className="font-medium">{game.registeredPlayers}</span>
          </div>
        </div>
      </div>
      
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">{game.title}</h2>
        <p className="text-muted-foreground mb-6">{game.description}</p>

        <h3 className="text-lg font-semibold mb-4">Participating Teams</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {game.teams.map((team, index) => (
            <div key={index} className="bg-secondary/50 rounded-lg p-3 text-center text-sm">
              {team}
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <Button className="bg-esports-purple hover:bg-esports-deep-purple">
            View Tournaments
          </Button>
        </div>
      </div>
    </div>
  );
};

const Games = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const selectedGame = games.find(game => game.id === selectedGameId);
  
  // Filter games based on search
  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="container py-10">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Games</h1>
            <p className="text-muted-foreground">
              Explore all available games and their tournaments
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search games..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Games</TabsTrigger>
              <TabsTrigger value="fps">FPS</TabsTrigger>
              <TabsTrigger value="moba">MOBA</TabsTrigger>
              <TabsTrigger value="battle-royale">Battle Royale</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
            </TabsList>
          </Tabs>

          {selectedGame ? (
            <div>
              <Button 
                variant="outline" 
                onClick={() => setSelectedGameId(null)}
                className="mb-6"
              >
                ← Back to all games
              </Button>
              <GameDetail game={selectedGame} />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.length > 0 ? (
                filteredGames.map((game) => (
                  <div 
                    key={game.id} 
                    onClick={() => setSelectedGameId(game.id)}
                    className="cursor-pointer"
                  >
                    <GameCard game={game} />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <h3 className="text-xl font-medium mb-2">No games found</h3>
                  <p className="text-muted-foreground">Try adjusting your search query</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
