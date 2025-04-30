
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="rounded-2xl bg-gradient-to-r from-esports-dark to-esports-deep-purple overflow-hidden">
          <div className="relative px-6 py-16 md:py-20 md:px-10">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div className="absolute top-0 right-0 w-80 h-80 bg-esports-blue rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-esports-orange rounded-full filter blur-3xl translate-y-1/3 -translate-x-1/3"></div>
            </div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join the Competition?
              </h2>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Create your account today and start participating in tournaments, 
                track your progress, and earn rewards for your achievements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-esports-purple hover:bg-esports-deep-purple">
                    Register Now
                  </Button>
                </Link>
                <Link to="/tournaments">
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                    Browse Tournaments
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
