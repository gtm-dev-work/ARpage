import { Button } from "@/components/ui/button";

export const DroneAdDemo = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg to-neon-purple/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-white">
            AR Drone Ad <span className="text-neon-cyan">Demo</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Watch the future of sky advertising with AR-enabled drone campaigns.
          </p>
        </div>

        {/* Image Preview */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 backdrop-blur-sm rounded-3xl p-8 border border-neon-cyan/20">
            <div className="h-96 w-full rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.pixabay.com/photo/2022/08/09/11/39/drone-advertising-7374490_1280.jpg"
                alt="Drone Ad Preview"
                className="w-full h-full object-cover"
              />
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
