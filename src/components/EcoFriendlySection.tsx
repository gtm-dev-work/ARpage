
export const EcoFriendlySection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-white">
            <span className="text-green-400">Eco-Friendly</span> Advertising
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Revolutionizing outdoor advertising with sustainable, digital-first solutions that reduce waste and environmental impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Traditional Problems */}
          <div className="space-y-6">
            <h3 className="font-orbitron font-bold text-2xl text-white mb-6">Traditional Problems</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <span className="text-2xl">🗑️</span>
                <div>
                  <h4 className="font-semibold text-red-400">Plastic Waste</h4>
                  <p className="text-white/60 text-sm">Tons of plastic banners and hoardings in landfills</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <span className="text-2xl">🌧️</span>
                <div>
                  <h4 className="font-semibold text-red-400">Weather Damage</h4>
                  <p className="text-white/60 text-sm">Constant replacement due to rain and weather</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                <span className="text-2xl">💸</span>
                <div>
                  <h4 className="font-semibold text-red-400">High Maintenance</h4>
                  <p className="text-white/60 text-sm">Regular printing and installation costs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - AR Solutions */}
          <div className="space-y-6">
            <h3 className="font-orbitron font-bold text-2xl text-green-400 mb-6">AR Solutions</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <span className="text-2xl">♻️</span>
                <div>
                  <h4 className="font-semibold text-green-400">Zero Waste</h4>
                  <p className="text-white/60 text-sm">100% digital content, no physical materials</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <span className="text-2xl">📱</span>
                <div>
                  <h4 className="font-semibold text-green-400">QR to AR</h4>
                  <p className="text-white/60 text-sm">Simple QR codes activate rich AR experiences</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <span className="text-2xl">☔</span>
                <div>
                  <h4 className="font-semibold text-green-400">Weatherproof</h4>
                  <p className="text-white/60 text-sm">Digital content unaffected by weather conditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AR Growing Trees Animation */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-8 border border-green-400/20">
            <div className="text-center mb-8">
              <h3 className="font-orbitron font-bold text-2xl text-green-400 mb-4">AR Campaign Impact</h3>
              <p className="text-white/60">Watch how our eco-friendly campaigns help the environment grow</p>
            </div>
            
            <div className="flex justify-center items-end space-x-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="text-center">
                  <div 
                    className="text-4xl mb-2 animate-float"
                    style={{
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + i * 0.5}s`
                    }}
                  >
                    🌳
                  </div>
                  <div className="text-xs text-green-400 font-orbitron">
                    {100 + i * 50}
                  </div>
                  <div className="text-xs text-white/60">trees saved</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-green-400 font-orbitron font-bold text-lg">
                "Every AR campaign saves an average of 500 trees"
              </p>
            </div>
          </div>
        </div>

        {/* Environmental Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-green-500/10 rounded-xl backdrop-blur-sm border border-green-400/20">
            <div className="text-3xl font-orbitron font-bold text-green-400 mb-2">500+</div>
            <div className="text-white/80 text-sm">Trees Saved per Campaign</div>
          </div>
          <div className="text-center p-6 bg-blue-500/10 rounded-xl backdrop-blur-sm border border-blue-400/20">
            <div className="text-3xl font-orbitron font-bold text-blue-400 mb-2">0</div>
            <div className="text-white/80 text-sm">Plastic Waste</div>
          </div>
          <div className="text-center p-6 bg-purple-500/10 rounded-xl backdrop-blur-sm border border-purple-400/20">
            <div className="text-3xl font-orbitron font-bold text-purple-400 mb-2">90%</div>
            <div className="text-white/80 text-sm">Cost Reduction</div>
          </div>
          <div className="text-center p-6 bg-yellow-500/10 rounded-xl backdrop-blur-sm border border-yellow-400/20">
            <div className="text-3xl font-orbitron font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-white/80 text-sm">Always Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};
