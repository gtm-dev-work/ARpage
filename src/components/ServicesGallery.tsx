import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const services = [
  {
    icon: "📍",
    title: "AR Billboard Preview",
    desc: "Place your ad on real-world walls and streets using your phone. Clients can visualize campaigns before printing, reducing waste and maximizing impact.",
    preview: "See your ad on real-world walls before printing — in AR!",
    color: "from-neon-cyan to-blue-400",
  },
  {
    icon: "💳",
    title: "AR Visiting Cards",
    desc: "Scan a card, and meet a 3D hologram of the person! Ideal for business events, political leaders, and influencers to make unforgettable impressions.",
    preview: "A 3D hologram will greet users after scanning your card. Coming soon!",
    color: "from-neon-purple to-pink-400",
  },
  {
    icon: "🚁",
    title: "AR Drone Ads",
    desc: "Imagine drones flying with floating ad screens that come alive when viewed in AR — perfect for mega events, concerts, and political rallies.",
    preview: "Floating 3D ads in the sky with real-time AR. Launching soon!",
    color: "from-green-400 to-emerald-400",
  },
  {
    icon: "🛍️",
    title: "AR Pop-Up Shops",
    desc: "Turn any wall or poster into a virtual store! Customers can explore products in 3D and directly shop — no app needed.",
    preview: "Tap to enter a pop-up shop from a wall! Try it in AR soon.",
    color: "from-orange-400 to-red-400",
  },
  {
    icon: "🏪",
    title: "Mall & Airport Navigation",
    desc: "Guide visitors in complex locations using AR-based direction overlays. Increase footfall for partnered stores and improve visitor experience.",
    preview: "AR arrows to guide shoppers inside malls and airports. Coming soon!",
    color: "from-yellow-400 to-orange-400",
  },
  {
    icon: "🎭",
    title: "Festival AR Campaigns",
    desc: "Create seasonal magic! Let users scan street ads during Diwali, IPL, or elections to see fireworks, avatars, or candidate speeches in AR.",
    preview: "Diwali fireworks, IPL players, election avatars — all in AR!",
    color: "from-purple-400 to-neon-purple",
  },
  {
    icon: "📲",
    title: "QR-Based AR Posters",
    desc: "Posters that talk! Add video stories, 3D models, and interactive elements to your offline ads using QR-triggered AR experiences.",
    preview: "Scan a poster, and it talks back. AR magic with a QR code!",
    color: "from-indigo-400 to-blue-400",
  },
  {
    icon: "🌆",
    title: "City-Wide AR Preview Tool",
    desc: "Use our simulation dashboard to preview how your ad would look across various walls in different cities — from Delhi to Bangalore.",
    preview: "Simulate your ad live on buildings in different Indian cities.",
    color: "from-teal-400 to-neon-cyan",
  },
  {
    icon: "🛰️",
    title: "Digital Twin Planner",
    desc: "A real-time 3D map of India where you can select walls and hoardings and virtually place ads to plan campaigns with geospatial accuracy.",
    preview: "Plan your outdoor ads on a real-time 3D map of India.",
    color: "from-slate-400 to-gray-400",
  },
  {
    icon: "👤",
    title: "AI Brand Ambassadors",
    desc: "Your AI-generated mascot or spokesperson talks to customers in AR, tells stories, and answers FAQs. Perfect for FMCG, politics & tourism.",
    preview: "Your personal AI mascot speaks in AR — selling with personality.",
    color: "from-rose-400 to-pink-400",
  },
  {
    icon: "📸",
    title: "UGC Selfie Filters",
    desc: "Turn your campaign into a trend! Let users take branded selfies with filters & share on social media. Drives viral marketing.",
    preview: "Snap viral selfies with your brand's custom AR filter!",
    color: "from-violet-400 to-purple-400",
  },
  {
    icon: "🎯",
    title: "Hyperlocal AR Zones",
    desc: "AR ads change dynamically by location, time, and weather. Example: Show umbrella ads during rains in Mumbai, or energy drink ads in gyms.",
    preview: "AR ads change by weather, location, and mood. Try soon!",
    color: "from-cyan-400 to-blue-400",
  },
];

export const ServicesGallery = () => {
  const { toast } = useToast();

  const handleLearnMore = (title: string, preview: string) => {
    toast({
      title,
      description: preview || "This service is under development. Stay tuned!",
    });
  };

  const handleExploreAll = () => {
    toast({
      title: "Explore All AR Services",
      description: "Full service gallery and live demos are under development. Reach out to book a walkthrough.",
    });
  };

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
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"
                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              ></div>

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
                  onClick={() => handleLearnMore(service.title, service.preview)}
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
          <ul className="list-disc list-inside mt-4 text-white/60 space-y-2 text-left">
            <li>🎥 Tell powerful visual stories on any street</li>
            <li>🎯 Track engagement and customer behavior in real-time</li>
            <li>🧠 Blend AI and location intelligence to adapt ads dynamically</li>
            <li>♻️ Avoid printing waste by previewing before campaigns</li>
            <li>🌍 Launch multi-city campaigns from anywhere</li>
            <li>📊 Drive higher ROI through experience-led marketing</li>
          </ul>
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white hover:opacity-90 px-8 py-4"
            onClick={handleExploreAll}
          >
            Explore All AR Services
          </Button>
        </div>
      </div>
    </section>
  );
};
