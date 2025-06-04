
export const AnalyticsSection = () => {
  return (
    <section id="analytics" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-white">
            Real-time Dashboard & <span className="text-neon-cyan">Analytics</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Get comprehensive insights into your AR advertising campaigns with our advanced analytics platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ad Impressions */}
          <div className="bg-gradient-to-br from-neon-cyan/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-neon-cyan/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-orbitron font-bold text-white">📍 Ad Impressions</h3>
              <span className="text-neon-cyan text-sm">Live</span>
            </div>
            <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-2">2.4M</div>
            <p className="text-white/60 text-sm mb-4">Today's impressions</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Mumbai</span>
                <span className="text-white">847K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Delhi</span>
                <span className="text-white">632K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Bangalore</span>
                <span className="text-white">495K</span>
              </div>
            </div>
          </div>

          {/* Campaign ROI */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-orbitron font-bold text-white">📈 Campaign ROI</h3>
              <span className="text-green-400 text-sm">+18%</span>
            </div>
            <div className="text-3xl font-orbitron font-bold text-green-400 mb-2">340%</div>
            <p className="text-white/60 text-sm mb-4">Average ROI this month</p>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full" style={{width: '85%'}}></div>
            </div>
          </div>

          {/* QR Scans Heatmap */}
          <div className="bg-gradient-to-br from-neon-purple/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-neon-purple/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-orbitron font-bold text-white">🔥 QR Scans</h3>
              <span className="text-neon-purple text-sm">Hot</span>
            </div>
            <div className="text-3xl font-orbitron font-bold text-neon-purple mb-2">156K</div>
            <p className="text-white/60 text-sm mb-4">Scans in last 24h</p>
            <div className="grid grid-cols-4 gap-1">
              {[...Array(16)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-3 rounded-sm bg-gradient-to-r from-neon-purple to-pink-400"
                  style={{opacity: Math.random()}}
                ></div>
              ))}
            </div>
          </div>

          {/* Demographics */}
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-orbitron font-bold text-white">🧑‍🤝‍🧑 Demographics</h3>
              <span className="text-orange-400 text-sm">Updated</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/60">18-25 years</span>
                  <span className="text-orange-400">42%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1">
                  <div className="bg-orange-400 h-1 rounded-full" style={{width: '42%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/60">26-35 years</span>
                  <span className="text-orange-400">35%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1">
                  <div className="bg-orange-400 h-1 rounded-full" style={{width: '35%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/60">36+ years</span>
                  <span className="text-orange-400">23%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1">
                  <div className="bg-orange-400 h-1 rounded-full" style={{width: '23%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Reach */}
          <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-orbitron font-bold text-white">🌐 Ad Reach</h3>
              <span className="text-yellow-400 text-sm">Global</span>
            </div>
            <div className="text-3xl font-orbitron font-bold text-yellow-400 mb-2">28</div>
            <p className="text-white/60 text-sm mb-4">Cities covered</p>
            <div className="flex flex-wrap gap-1">
              {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Pune'].map((city, i) => (
                <span key={i} className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Live Engagement */}
          <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-indigo-400/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-orbitron font-bold text-white">⚡ Live Engagement</h3>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-glow"></div>
            </div>
            <div className="text-3xl font-orbitron font-bold text-indigo-400 mb-2">1.2K</div>
            <p className="text-white/60 text-sm mb-4">Active users now</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-glow"></div>
                <span className="text-xs text-white/60">User scanned Billboard #247</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse-glow"></div>
                <span className="text-xs text-white/60">AR card shared in Mumbai</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse-glow"></div>
                <span className="text-xs text-white/60">Drone ad clicked in Delhi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white hover:opacity-90 px-8 py-4"
          >
            Access AR Analytics
          </Button>
        </div>
      </div>
    </section>
  );
};
