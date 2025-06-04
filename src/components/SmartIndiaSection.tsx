
export const SmartIndiaSection = () => {
  const cities = [
    { name: "Mumbai", adoption: 85, color: "neon-cyan" },
    { name: "Delhi", adoption: 78, color: "neon-purple" },
    { name: "Bangalore", adoption: 92, color: "green-400" },
    { name: "Chennai", adoption: 70, color: "yellow-400" },
    { name: "Kolkata", adoption: 65, color: "orange-400" },
    { name: "Pune", adoption: 80, color: "pink-400" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg to-indigo-900/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-white">
            Make India Smart with <span className="text-neon-cyan">AR</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
            From Mumbai to Meghalaya, we're placing India on the AR map with innovative advertising solutions for every market.
          </p>
        </div>

        {/* India Map Visualization */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 backdrop-blur-sm rounded-3xl p-8 border border-neon-cyan/20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {cities.map((city, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-${city.color} to-${city.color}/50 flex items-center justify-center animate-pulse-glow`}>
                      <span className="text-white font-orbitron font-bold text-sm">{city.adoption}%</span>
                    </div>
                    {/* Connection lines */}
                    <div className="absolute top-8 left-1/2 w-px h-8 bg-gradient-to-b from-neon-cyan to-transparent"></div>
                  </div>
                  <h3 className="font-orbitron font-bold text-white mb-2">{city.name}</h3>
                  <p className="text-white/60 text-sm">{city.adoption}% AR Adoption</p>
                </div>
              ))}
            </div>
            
            {/* Central India icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center animate-glow">
              <span className="text-3xl">🇮🇳</span>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="font-orbitron font-bold text-xl mb-3 text-white">Government Partnerships</h3>
            <p className="text-white/60 text-sm mb-4">Collaborating with state governments for public announcements, tourism promotion, and citizen engagement through AR.</p>
            <ul className="text-white/60 text-sm space-y-1">
              <li>• Digital India initiatives</li>
              <li>• Tourism & heritage AR</li>
              <li>• Public service campaigns</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-neon-cyan/20">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="font-orbitron font-bold text-xl mb-3 text-white">Education & Tourism</h3>
            <p className="text-white/60 text-sm mb-4">Bringing historical sites, monuments, and educational content to life through immersive AR experiences.</p>
            <ul className="text-white/60 text-sm space-y-1">
              <li>• Historical site AR tours</li>
              <li>• Educational content in AR</li>
              <li>• Cultural heritage preservation</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-neon-purple/20">
            <div className="text-4xl mb-4">🌆</div>
            <h3 className="font-orbitron font-bold text-xl mb-3 text-white">Smart City Integration</h3>
            <p className="text-white/60 text-sm mb-4">Integrating AR advertising with smart city infrastructure for navigation, information, and enhanced urban experiences.</p>
            <ul className="text-white/60 text-sm space-y-1">
              <li>• Smart traffic management</li>
              <li>• Public transportation AR</li>
              <li>• Urban planning visualization</li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-orbitron font-bold text-neon-cyan mb-2">28</div>
            <div className="text-white/80 text-sm">Cities Covered</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-orbitron font-bold text-green-400 mb-2">15</div>
            <div className="text-white/80 text-sm">State Partnerships</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-orbitron font-bold text-neon-purple mb-2">200+</div>
            <div className="text-white/80 text-sm">Heritage Sites</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-orbitron font-bold text-yellow-400 mb-2">50M</div>
            <div className="text-white/80 text-sm">Rural Reach</div>
          </div>
        </div>
      </div>
    </section>
  );
};
