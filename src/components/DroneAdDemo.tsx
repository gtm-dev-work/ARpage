
import { Button } from "@/components/ui/button";

export const DroneAdDemo = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg to-neon-purple/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-white">
            AR Drone Ad <span className="text-neon-cyan">Demo</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Watch the future of sky advertising with AR-enabled drone campaigns.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 backdrop-blur-sm rounded-3xl p-8 border border-neon-cyan/20">
            {/* City night background simulation */}
            <div className="relative h-96 bg-gradient-to-b from-dark-bg to-blue-900/20 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=400&fit=crop" 
                alt="City night view" 
                className="w-full h-full object-cover opacity-40"
              />
              
              {/* Animated drone */}
              <div className="absolute top-20 left-10 animate-float">
                <div className="relative">
                  {/* Drone body */}
                  <div className="w-16 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg relative">
                    {/* Propellers */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-neon-cyan rounded-full animate-spin"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-neon-cyan rounded-full animate-spin"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-2 border-neon-cyan rounded-full animate-spin"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-2 border-neon-cyan rounded-full animate-spin"></div>
                  </div>
                  
                  {/* LED screen */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center animate-glow">
                    <span className="text-xs font-orbitron font-bold text-white">YOUR BRAND HERE</span>
                  </div>
                </div>
              </div>

              {/* Floating particles */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                />
              ))}

              {/* Ground lights */}
              <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-yellow-400/20 to-transparent"></div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="font-orbitron font-bold text-2xl mb-4 text-white">Sky Campaign Preview</h3>
              <p className="text-white/60 mb-6 max-w-2xl mx-auto">
                Imagine your brand soaring above Mumbai, Delhi, or Bangalore with interactive AR displays that respond to viewer engagement. Perfect for festivals, product launches, and major events.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-neon-cyan to-blue-500 text-white hover:opacity-90"
                >
                  Book Sky Campaign
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white"
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
            <div className="text-3xl mb-3">🚁</div>
            <h4 className="font-orbitron font-bold text-white mb-2">Drone Fleet</h4>
            <p className="text-white/60 text-sm">Professional drone fleet with HD AR displays</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
            <div className="text-3xl mb-3">📡</div>
            <h4 className="font-orbitron font-bold text-white mb-2">Live Tracking</h4>
            <p className="text-white/60 text-sm">Real-time GPS tracking and engagement metrics</p>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-orbitron font-bold text-white mb-2">Target Areas</h4>
            <p className="text-white/60 text-sm">Strategic positioning in high-traffic zones</p>
          </div>
        </div>
      </div>
    </section>
  );
};
