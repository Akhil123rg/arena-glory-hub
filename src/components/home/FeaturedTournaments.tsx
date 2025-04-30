
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GamepadIcon, Trophy, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for tournaments
const tournaments = [
  {
    id: 1,
    title: "Apex Legends Championship",
    game: "Apex Legends",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    date: "May 15, 2025",
    prizePool: "$10,000",
    participants: 64,
    registrationOpen: true,
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
  },
];

const TournamentCard = ({ tournament }: { tournament: typeof tournaments[0] }) => {
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
              <span>{tournament.game}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const FeaturedTournaments = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Tournaments</h2>
            <p className="text-muted-foreground">
              Register for upcoming tournaments and compete for glory
            </p>
          </div>
          <Link 
            to="/tournaments" 
            className="text-esports-purple hover:text-esports-deep-purple flex items-center gap-1"
          >
            View All
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTournaments;
