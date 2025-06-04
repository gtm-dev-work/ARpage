import { Button } from "@/components/ui/button";

const services = [
  {
    icon: "📍",
    title: "AR Billboard Preview",
    desc: "Place your ad on real-world walls and streets using your phone. Clients can visualize campaigns before printing, reducing waste and maximizing impact.",
    color: "from-neon-cyan to-blue-400"
  },
  {
    icon: "💳",
    title: "AR Visiting Cards",
    desc: "Scan a card, and meet a 3D hologram of the person! Ideal for business events, political leaders, and influencers to make unforgettable impressions.",
    color: "from-neon-purple to-pink-400"
  },
  {
    icon: "🚁",
    title: "AR Drone Ads",
    desc: "Imagine drones flying with floating ad screens that come alive when viewed in AR — perfect for mega events, concerts, and political rallies.",
    color: "from-green-400 to-emerald-400"
  },
  {
    icon: "🛍️",
    title: "AR Pop-Up Shops",
    desc: "Turn any wall or poster into a virtual store! Customers can explore products in 3D and directly shop — no app needed.",
    color: "from-orange-400 to-red-400"
  },
  {
    icon: "🏪",
    title: "Mall & Airport Navigation",
    desc: "Guide visitors in complex locations using AR-based direction overlays. Increase footfall for partnered stores and improve visitor experience.",
    color: "from-yellow-400 to-orange-400"
  },
  {
    icon: "🎭",
    title: "Festival AR Campaigns",
    desc: "Create seasonal magic! Let users scan street ads during Diwali, IPL, or elections to see fireworks, avatars, or candidate speeches in AR.",
    color: "from-purple-400 to-neon-purple"
  },
  {
    icon: "📲",
    title: "QR-Based AR Posters",
    desc: "Posters that talk! Add video stories, 3D models, and interactive elements to your offline ads using QR-triggered AR experiences.",
    color: "from-indigo-400 to-blue-400"
  },
  {
    icon: "🌆",
    title: "City-Wide AR Preview Tool",
    desc: "Use our simulation dashboard to preview how your ad would look across various walls in different cities — from Delhi to Bangalore.",
    color: "from-teal-400 to-neon-cyan"
  },
  {
    icon: "🛰️",
    title: "Digital Twin Planner",
    desc: "A real-time 3D map of India where you can select walls and hoardings and virtually place ads to plan campaigns with geospatial accuracy.",
    color: "from-slate-400 to-gray-400"
  },
  {
    icon: "👤",
    title: "AI Brand Ambassadors",
    desc: "Your AI-generated mascot or spokesperson talks to customers in AR, tells stories, and answers FAQs. Perfect for FMCG, politics & tourism.",
    color: "from-rose-400 to-pink-400"
  },
  {
    icon: "📸",
    title: "UGC Selfie Filters",
    desc: "Turn your campaign into a trend! Let users take branded selfies with filters & share on social media. Drives viral marketing.",
    color: "from-violet-400 to-purple-400"
  },
  {
    icon: "🎯",
    title: "Hyperlocal AR Zones",
    desc: "AR ads change dynamically by location, time, and weather. Example: Show umbrella ads during rains in Mumbai, or energy drink ads in gyms.",
    color: "from-cyan-400 to-blue-400"
  }
];

export const ServicesGallery = () => {
  return (
    <section id="services" className="py-20 relative bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-white">
            Augmented Reality <span className="text-neon-cyan">AdTech</span> Gallery
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover how <span className="text-neon-cyan font-semibold">AR (Augmented Reality)</span> is transforming outdoor advertising across India — from walls, streets, festivals, and drones to shopping malls. It’s not just ads, it’s experiences.
            <br /><br />
            AR breaks the physical limits of banners by adding motion, interactivity, and storytelling. Our platform enables brands, governments, and creators to launch immersive, hyper-targeted campaigns that engage and convert.
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

        <div className="text-center mt-16 max-w-4xl mx-auto text-white/70 text-lg leading-relaxed">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Why AR is the Future of Outdoor Advertising?
          </h3>
          <p>
            Traditional ads speak. AR ads *converse*. They are immersive, memorable, and smart. Our AR tech helps businesses:
            <ul className="list-disc list-inside mt-4 text-white/60 space-y-2">
              <li>🎥 Tell powerful visual stories on any street</li>
              <li>🎯 Track engagement and customer behavior in real-time</li>
              <li>🧠 Blend AI and location intelligence to adapt ads dynamically</li>
              <li>♻️ Avoid printing waste by previewing before campaigns</li>
              <li>🌍 Launch multi-city campaigns from anywhere</li>
              <li>📊 Drive higher ROI through experience-led marketing</li>
            </ul>
          </p>
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white hover:opacity-90 px-8 py-4"
          >
            Explore All AR Services
          </Button>
        </div>
      </div>
    </section>
  );
};
