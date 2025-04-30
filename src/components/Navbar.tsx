
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, Users, GamepadIcon, Home, BarChart3, LogIn } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navItems = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Tournaments", path: "/tournaments", icon: <Trophy className="h-4 w-4 mr-2" /> },
    { name: "Games", path: "/games", icon: <GamepadIcon className="h-4 w-4 mr-2" /> },
    { name: "Leaderboards", path: "/leaderboards", icon: <BarChart3 className="h-4 w-4 mr-2" /> },
    { name: "Teams", path: "/teams", icon: <Users className="h-4 w-4 mr-2" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-esports-purple to-esports-blue flex items-center justify-center">
              <Trophy className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-esports-purple to-esports-blue">
              ArenaGlory
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="nav-link flex items-center"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="hidden md:flex">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="hidden md:flex bg-esports-purple hover:bg-esports-deep-purple">
              Register
            </Button>
          </Link>
          
          <button onClick={toggleMenu} className="md:hidden p-2">
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
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 pb-4 bg-background border-b border-border">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-2 py-1 rounded hover:bg-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Link to="/login" className="flex-1">
                <Button variant="outline" className="w-full">
                  <LogIn className="mr-2 h-4 w-4" /> Login
                </Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button className="w-full bg-esports-purple hover:bg-esports-deep-purple">Register</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
