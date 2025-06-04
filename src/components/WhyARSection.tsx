
export const WhyARSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-white">
            Why AR for <span className="text-neon-cyan">Outdoor Ads?</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Traditional advertising is being ignored. AR advertising demands attention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Traditional */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30">
              <h3 className="font-orbitron font-bold text-xl mb-4 text-red-400">Traditional Advertising</h3>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop" 
                alt="Traditional billboard" 
                className="w-full h-48 object-cover rounded-lg mb-4 opacity-60"
              />
              <div className="space-y-2 text-red-300">
                <p>📉 Low engagement rates</p>
                <p>🙈 Often ignored by viewers</p>
                <p>📊 No real-time data</p>
                <p>🗑️ Environmental waste</p>
              </div>
            </div>
          </div>

          {/* Right side - AR Enhanced */}
          <div className="relative">
            <div className="bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 backdrop-blur-sm rounded-2xl p-8 border border-neon-cyan/30 animate-glow">
              <h3 className="font-orbitron font-bold text-xl mb-4 text-neon-cyan">AR-Enhanced Advertising</h3>
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop" 
                alt="AR billboard transformation" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2 text-neon-cyan">
                <p>📈 5× more engagement</p>
                <p>🧠 4× better brand recall</p>
                <p>👆 Direct interaction from hoardings</p>
                <p>🌱 Eco-friendly campaigns</p>
                <p>📊 Real-time analytics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-neon-cyan/20">
            <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-2">5×</div>
            <div className="text-white/80">More Engagement</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-neon-purple/20">
            <div className="text-3xl font-orbitron font-bold text-neon-purple mb-2">4×</div>
            <div className="text-white/80">Brand Recall</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-green-400/20">
            <div className="text-3xl font-orbitron font-bold text-green-400 mb-2">100%</div>
            <div className="text-white/80">Eco-Friendly</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-yellow-400/20">
            <div className="text-3xl font-orbitron font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-white/80">Real-time Data</div>
          </div>
        </div>
      </div>
    </section>
  );
};
