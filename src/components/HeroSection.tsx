
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const HeroSection = () => {
  const { toast } = useToast();

  const handleLaunchAR = () => {
    console.log("Launch AR Experience clicked");
    toast({
      title: "AR Experience Starting",
      description: "Initializing AR camera and location detection...",
    });
    // Backend integration point: Launch AR experience
  };

  const handleWatchDemo = () => {
    console.log("Watch Demo clicked");
    toast({
      title: "Demo Loading",
      description: "Opening video demonstration...",
    });
    // Backend integration point: Load demo video/content
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg to-neon-purple/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.1),transparent)] animate-pulse-glow"></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* India Map Visualization */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <img 
                src="https://raw.githubusercontent.com/gtm-dev-work/ARpage/refs/heads/main/public/indian%20map.jpg" 
                alt="India Map Visualization" 
                className="w-full h-full object-cover rounded-2xl opacity-60 animate-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-orbitron font-bold text-neon-cyan">🇮🇳</span>
              </div>
            </div>
          </div>

          <h1 className="font-orbitron font-black text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="bg-gradient-to-r from-neon-cyan via-white to-neon-purple bg-clip-text text-transparent">
              Welcome to The Future
            </span>
            <br />
            <span className="text-white">of Outdoor Advertising</span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-white/80 max-w-3xl mx-auto">
            <span className="font-orbitron font-bold text-neon-cyan">Scan. Preview. Launch.</span>
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-white/60 max-w-2xl mx-auto">
            India's First AR-Driven Outdoor AdTech Platform transforming billboards, walls, and streets with Augmented Reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white hover:opacity-90 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold animate-glow"
              onClick={handleLaunchAR}
            >
              <Camera className="mr-2 h-5 w-5" />
              Launch AR Experience
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg px-8 py-4 text-lg font-semibold"
              onClick={handleWatchDemo}
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse-glow"></div>
              <span>India's 1st AR AdTech Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse-glow"></div>
              <span>B2G/B2B Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-glow"></div>
              <span>Eco Ad Certified</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-dark-bg to-transparent"></div>
    </section>
  );
};
