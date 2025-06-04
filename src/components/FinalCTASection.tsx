
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const FinalCTASection = () => {
  const { toast } = useToast();

  const handleBookDemo = () => {
    console.log("Book Demo clicked from CTA section");
    toast({
      title: "Demo Booking",
      description: "Opening demo scheduling form...",
    });
    // Backend integration point: Navigate to demo booking
  };

  const handleStartCampaign = () => {
    console.log("Start AR Campaign clicked");
    toast({
      title: "Campaign Creation",
      description: "Launching AR campaign builder...",
    });
    // Backend integration point: Navigate to campaign creation
  };

  const handleBecomePartner = () => {
    console.log("Become Partner clicked");
    toast({
      title: "Partner Application",
      description: "Opening partner registration form...",
    });
    // Backend integration point: Navigate to partner signup
  };

  const handleJoinInitiative = () => {
    console.log("Join Initiative clicked");
    toast({
      title: "Government Initiative",
      description: "Redirecting to government collaboration portal...",
    });
    // Backend integration point: Navigate to government portal
  };

  const handleCreateContent = () => {
    console.log("Create Content clicked");
    toast({
      title: "Creator Portal",
      description: "Opening AR content creation platform...",
    });
    // Backend integration point: Navigate to creator dashboard
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-neon-purple/10 to-dark-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,242,255,0.1),transparent)]"></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-orbitron font-black text-4xl md:text-6xl mb-6 leading-tight">
            <span className="text-white">You've seen the future of ads.</span>
            <br />
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Now be a part of it.
            </span>
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Join India's first AR advertising revolution and transform how brands connect with audiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-cyan to-blue-500 text-white hover:opacity-90 transform hover:scale-105 transition-all duration-300 px-12 py-6 text-xl font-semibold animate-glow"
            onClick={handleBookDemo}
          >
            📱 Book Demo
          </Button>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-purple to-pink-500 text-white hover:opacity-90 transform hover:scale-105 transition-all duration-300 px-12 py-6 text-xl font-semibold"
            onClick={handleStartCampaign}
          >
            🚀 Start AR Campaign
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:animate-float">🤝</div>
            <h3 className="font-orbitron font-bold text-xl mb-3 text-white group-hover:text-neon-cyan transition-colors">Partners</h3>
            <p className="text-white/60 text-sm mb-4">Join our partner network and offer AR solutions to your clients</p>
            <Button 
              variant="outline" 
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg"
              onClick={handleBecomePartner}
            >
              Become Partner
            </Button>
          </div>

          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:animate-float">🏛️</div>
            <h3 className="font-orbitron font-bold text-xl mb-3 text-white group-hover:text-neon-purple transition-colors">Government</h3>
            <p className="text-white/60 text-sm mb-4">Collaborate with us for public service and tourism campaigns</p>
            <Button 
              variant="outline" 
              className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-bg"
              onClick={handleJoinInitiative}
            >
              Join Initiative
            </Button>
          </div>

          <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-green-400/20 hover:border-green-400/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:animate-float">🎨</div>
            <h3 className="font-orbitron font-bold text-xl mb-3 text-white group-hover:text-green-400 transition-colors">Creators</h3>
            <p className="text-white/60 text-sm mb-4">Design AR experiences and monetize your creative skills</p>
            <Button 
              variant="outline" 
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-dark-bg"
              onClick={handleCreateContent}
            >
              Create Content
            </Button>
          </div>
        </div>

        {/* Footer with India Map */}
        <footer className="relative">
          <div className="bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 backdrop-blur-sm rounded-3xl p-8 border border-neon-cyan/20">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-orbitron font-bold text-lg">A</span>
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-2xl text-white">The Ad Project</h3>
                  <p className="text-neon-cyan text-sm">India's First AR-Driven Outdoor AdTech Platform</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="w-4 h-4 bg-green-400 rounded-full mx-auto mb-2 animate-pulse-glow"></div>
                <span className="text-white/60 text-xs">Mumbai - 342 active</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-neon-cyan rounded-full mx-auto mb-2 animate-pulse-glow"></div>
                <span className="text-white/60 text-xs">Delhi - 289 active</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-neon-purple rounded-full mx-auto mb-2 animate-pulse-glow"></div>
                <span className="text-white/60 text-xs">Bangalore - 156 active</span>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto mb-2 animate-pulse-glow"></div>
                <span className="text-white/60 text-xs">Chennai - 98 active</span>
              </div>
            </div>

            <div className="text-center text-white/40 text-sm">
              <p className="mb-2">© 2024 The Ad Project. All rights reserved.</p>
              <p>Scan. Preview. Launch. 🇮🇳</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
