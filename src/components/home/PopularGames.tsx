
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GamepadIcon, Users } from "lucide-react";
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
  },
  {
    id: 2,
    title: "League of Legends",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    activeTournaments: 18,
    registeredPlayers: "28K+",
    genre: "MOBA",
  },
  {
    id: 3,
    title: "Fortnite",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    activeTournaments: 32,
    registeredPlayers: "22K+",
    genre: "Battle Royale",
  },
  {
    id: 4,
    title: "Apex Legends",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    activeTournaments: 15,
    registeredPlayers: "12K+",
    genre: "Battle Royale",
  },
  {
    id: 5,
    title: "Call of Duty: Warzone",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    activeTournaments: 21,
    registeredPlayers: "18K+",
    genre: "FPS",
  },
  {
    id: 6,
    title: "Counter-Strike 2",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    activeTournaments: 27,
    registeredPlayers: "25K+",
    genre: "FPS",
  },
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

const PopularGames = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Popular Games</h2>
            <p className="text-muted-foreground">
              Browse tournaments by your favorite games
            </p>
          </div>
          <Link
            to="/games"
            className="text-esports-purple hover:text-esports-deep-purple flex items-center gap-1"
          >
            View All Games
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularGames;
