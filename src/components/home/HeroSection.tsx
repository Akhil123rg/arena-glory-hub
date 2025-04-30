
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,#7E69AB22,transparent_40%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,#33C3F022,transparent_40%)]"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-esports-purple text-sm font-medium text-esports-purple bg-esports-purple/10">
              <div className="flex items-center space-x-1">
                <Trophy className="h-4 w-4" />
                <span>Join the Ultimate eSports Experience</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="block">Level Up Your</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-esports-purple to-esports-blue">
                eSports Career
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Compete in premier tournaments, track your progress, and earn
              recognition in the world's fastest growing competitive gaming platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/register">
                <Button className="text-base h-12 px-6 bg-esports-purple hover:bg-esports-deep-purple animate-pulse-glow">
                  Register Now
                </Button>
              </Link>
              <Link to="/tournaments">
                <Button variant="outline" className="text-base h-12 px-6 border-esports-purple text-esports-purple hover:bg-esports-purple/10">
                  Browse Tournaments
                </Button>
              </Link>
            </div>
            <div className="mt-8 pt-6 flex justify-center lg:justify-start gap-8 border-t border-border text-muted-foreground">
              <div>
                <p className="text-3xl font-bold text-foreground">1,000+</p>
                <p>Active Tournaments</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">25K+</p>
                <p>Registered Players</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">$250K+</p>
                <p>Prize Pools</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 hero-glow">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 rounded-lg bg-esports-purple/30 animate-float" style={{ animationDelay: "0.2s" }}></div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-lg bg-esports-blue/30 animate-float" style={{ animationDelay: "0.5s" }}></div>
              
              <div className="rounded-xl overflow-hidden border-2 border-esports-purple/50 shadow-lg shadow-esports-purple/20">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="eSports Tournament" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
