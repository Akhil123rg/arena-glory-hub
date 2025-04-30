
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Users } from "lucide-react";

interface Team {
  id: number;
  name: string;
  logo?: string;
  players: number;
  country: string;
  wins: number;
  losses: number;
}

interface TournamentTeamsProps {
  teams: Team[];
  tournamentName: string;
  game: string;
}

const TournamentTeams = ({ teams, tournamentName, game }: TournamentTeamsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-esports-purple" />
          <h3 className="text-lg font-semibold">Participating Teams</h3>
        </div>
        <Badge variant="outline" className="bg-esports-purple/10 text-esports-purple border-esports-purple/50">
          {game}
        </Badge>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Team</TableHead>
            <TableHead className="hidden md:table-cell">Country</TableHead>
            <TableHead className="text-center hidden md:table-cell">Players</TableHead>
            <TableHead className="text-center">W/L</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team) => (
            <TableRow key={team.id}>
              <TableCell className="font-medium">{team.name}</TableCell>
              <TableCell className="hidden md:table-cell">{team.country}</TableCell>
              <TableCell className="text-center hidden md:table-cell">{team.players}</TableCell>
              <TableCell className="text-center">
                <span className="text-green-500 font-medium">{team.wins}</span>
                <span className="mx-1">/</span>
                <span className="text-red-500 font-medium">{team.losses}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TournamentTeams;
