
import { Navbar } from "@/components";
import { Footer } from "@/components";
import HeroSection from "@/components/home/HeroSection";
import FeaturedTournaments from "@/components/home/FeaturedTournaments";
import PopularGames from "@/components/home/PopularGames";
import TopPlayers from "@/components/home/TopPlayers";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedTournaments />
        <TopPlayers />
        <PopularGames />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
