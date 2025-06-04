
import { Button } from "@/components/ui/button";

const services = [
  { icon: "📍", title: "AR Billboard Preview", desc: "Place your ad on any street or wall in AR", color: "from-neon-cyan to-blue-400" },
  { icon: "💳", title: "AR Visiting Cards", desc: "Scan → Meet your virtual self in 3D", color: "from-neon-purple to-pink-400" },
  { icon: "🚁", title: "AR Drone Ads", desc: "Drones flying with floating ad screens", color: "from-green-400 to-emerald-400" },
  { icon: "🛍️", title: "AR Pop-Up Shops", desc: "Scan wall → Interactive 3D store", color: "from-orange-400 to-red-400" },
  { icon: "🏪", title: "Mall & Airport Navigation", desc: "AR-based customer direction", color: "from-yellow-400 to-orange-400" },
  { icon: "🎭", title: "Festival AR Campaigns", desc: "Special effects during Diwali, IPL, Elections", color: "from-purple-400 to-neon-purple" },
  { icon: "📲", title: "QR-Based AR Posters", desc: "Interactive ads with video, effects", color: "from-indigo-400 to-blue-400" },
  { icon: "🌆", title: "City-Wide AR Preview Tool", desc: "See your brand across cities", color: "from-teal-400 to-neon-cyan" },
  { icon: "🛰️", title: "Digital Twin Planner", desc: "Preview your ads on real India map", color: "from-slate-400 to-gray-400" },
  { icon: "👤", title: "AI Brand Ambassadors", desc: "Your mascot talks to users in AR", color: "from-rose-400 to-pink-400" },
  { icon: "📸", title: "UGC Selfie Filters", desc: "Let users take selfies with your ad", color: "from-violet-400 to-purple-400" },
  { icon: "🎯", title: "Hyperlocal AR Zones", desc: "Ads change by location & time", color: "from-cyan-400 to-blue-400" }
];

export const ServicesGallery = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-white">
            AR Services <span className="text-neon-cyan">Gallery</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Explore our comprehensive suite of AR advertising solutions designed for India's diverse market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
                   style={{backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`}}></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 animate-float">{service.icon}</div>
                <h3 className="font-orbitron font-bold text-lg mb-3 text-white group-hover:text-neon-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">
                  {service.desc}
                </p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white hover:opacity-90 px-8 py-4"
          >
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};
