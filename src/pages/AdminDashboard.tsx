
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Trophy,
  Users,
  GamepadIcon,
  PlusCircle,
  Search,
  MoreVertical,
  UserCog,
  BarChart3,
  LogOut,
  Bell,
  Calendar,
  Settings,
  ChevronDown,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data for users
const users = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "Player",
    status: "Active",
    joined: "April 23, 2025",
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.williams@example.com",
    role: "Organizer",
    status: "Active",
    joined: "April 18, 2025",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: "Player",
    status: "Inactive",
    joined: "April 15, 2025",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Admin",
    status: "Active",
    joined: "April 10, 2025",
  },
  {
    id: 5,
    name: "James Wilson",
    email: "james.wilson@example.com",
    role: "Player",
    status: "Active",
    joined: "April 5, 2025",
  },
];

// Mock data for tournaments
const tournaments = [
  {
    id: 1,
    name: "Apex Legends Championship",
    game: "Apex Legends",
    participants: 64,
    status: "Ongoing",
    startDate: "April 25, 2025",
  },
  {
    id: 2,
    name: "Valorant Masters",
    game: "Valorant",
    participants: 32,
    status: "Upcoming",
    startDate: "May 5, 2025",
  },
  {
    id: 3,
    name: "Fortnite World Cup Qualifier",
    game: "Fortnite",
    participants: 100,
    status: "Registration",
    startDate: "May 15, 2025",
  },
  {
    id: 4,
    name: "League of Legends Regional",
    game: "League of Legends",
    participants: 16,
    status: "Completed",
    startDate: "April 10, 2025",
  },
  {
    id: 5,
    name: "CS2 Pro League",
    game: "Counter-Strike 2",
    participants: 24,
    status: "Upcoming",
    startDate: "May 8, 2025",
  },
];

const Sidebar = () => {
  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-secondary border-r border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-esports-purple to-esports-blue flex items-center justify-center">
            <Trophy className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-esports-purple to-esports-blue">
            ArenaGlory
          </span>
        </Link>
      </div>
      
      <div className="flex flex-col flex-1 py-6 px-3 space-y-1">
        <Link to="/admin" className="flex items-center gap-2 px-4 py-3 rounded-md bg-esports-purple/20 text-esports-purple">
          <BarChart3 className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link to="/admin/tournaments" className="flex items-center gap-2 px-4 py-3 rounded-md hover:bg-secondary/80">
          <Trophy className="h-5 w-5" />
          <span>Tournaments</span>
        </Link>
        <Link to="/admin/users" className="flex items-center gap-2 px-4 py-3 rounded-md hover:bg-secondary/80">
          <Users className="h-5 w-5" />
          <span>Users</span>
        </Link>
        <Link to="/admin/games" className="flex items-center gap-2 px-4 py-3 rounded-md hover:bg-secondary/80">
          <GamepadIcon className="h-5 w-5" />
          <span>Games</span>
        </Link>
        <Link to="/admin/events" className="flex items-center gap-2 px-4 py-3 rounded-md hover:bg-secondary/80">
          <Calendar className="h-5 w-5" />
          <span>Events</span>
        </Link>
        <Link to="/admin/settings" className="flex items-center gap-2 px-4 py-3 rounded-md hover:bg-secondary/80">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </div>
      
      <div className="p-4 border-t border-border mt-auto">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img 
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=admin" 
              alt="Admin" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@arenaglory.com</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserCog className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <div className="ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-esports-purple flex items-center justify-center text-xs">
                3
              </span>
            </div>
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img 
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=admin" 
                alt="Admin" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Users</p>
                  <p className="text-3xl font-bold">24,521</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-esports-purple/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-esports-purple" />
                </div>
              </div>
              <p className="text-xs text-green-500 mt-2">
                <span>+12.5%</span> <span className="text-muted-foreground">from last month</span>
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Tournaments</p>
                  <p className="text-3xl font-bold">156</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-esports-blue/10 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-esports-blue" />
                </div>
              </div>
              <p className="text-xs text-green-500 mt-2">
                <span>+8.2%</span> <span className="text-muted-foreground">from last month</span>
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Registered Games</p>
                  <p className="text-3xl font-bold">42</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-esports-orange/10 flex items-center justify-center">
                  <GamepadIcon className="h-6 w-6 text-esports-orange" />
                </div>
              </div>
              <p className="text-xs text-green-500 mt-2">
                <span>+3.1%</span> <span className="text-muted-foreground">from last month</span>
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Revenue</p>
                  <p className="text-3xl font-bold">$48,294</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
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
                    className="h-6 w-6 text-green-500"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M16 14V9" />
                    <path d="M12 14V9" />
                    <path d="M8 14V9" />
                    <path d="M3 9h18" />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-green-500 mt-2">
                <span>+15.3%</span> <span className="text-muted-foreground">from last month</span>
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <Tabs defaultValue="users">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
                <TabsTrigger value="games">Games</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search..." 
                    className="pl-10 w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button className="bg-esports-purple hover:bg-esports-deep-purple">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add New
                </Button>
              </div>
            </div>
            
            <TabsContent value="users">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    Manage user accounts and permissions across the platform.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead className="w-[80px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                              user.status === "Active" 
                                ? "bg-green-500/10 text-green-500" 
                                : "bg-orange-500/10 text-orange-500"
                            }`}>
                              {user.status}
                            </span>
                          </TableCell>
                          <TableCell>{user.joined}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>View User</DropdownMenuItem>
                                <DropdownMenuItem>Edit User</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-500">Delete User</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tournaments">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Tournament Management</CardTitle>
                  <CardDescription>
                    Manage tournaments, schedules, and participant registrations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Game</TableHead>
                        <TableHead>Participants</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead className="w-[80px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tournaments.map((tournament) => (
                        <TableRow key={tournament.id}>
                          <TableCell className="font-medium">{tournament.name}</TableCell>
                          <TableCell>{tournament.game}</TableCell>
                          <TableCell>{tournament.participants}</TableCell>
                          <TableCell>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                              tournament.status === "Ongoing" 
                                ? "bg-green-500/10 text-green-500" 
                                : tournament.status === "Upcoming"
                                ? "bg-blue-500/10 text-blue-500"
                                : tournament.status === "Registration"
                                ? "bg-esports-purple/10 text-esports-purple"
                                : "bg-gray-500/10 text-gray-500"
                            }`}>
                              {tournament.status}
                            </span>
                          </TableCell>
                          <TableCell>{tournament.startDate}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Edit Tournament</DropdownMenuItem>
                                <DropdownMenuItem>Manage Participants</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-500">Cancel Tournament</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="games">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Game Management</CardTitle>
                  <CardDescription>
                    Manage games and categories supported on the platform.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="pt-4 pb-2 text-center text-muted-foreground">
                    Select the "Games" tab in the sidebar for detailed game management.
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
