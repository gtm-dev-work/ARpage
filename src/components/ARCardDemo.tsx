import { Button } from "@/components/ui/button";

export const ARCardDemo = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-4 text-white">
            From Paper to <span className="text-neon-cyan">Hologram</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Elevate your identity—Transform your business card into an interactive AR experience with a 3D avatar that speaks, gestures, and connects instantly.
          </p>
        </div>

        {/* Card Comparison */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Traditional Card */}
            <div className="text-center">
              <h3 className="font-orbitron font-bold text-xl mb-6 text-white/60">
                Physical Business Card
              </h3>
              <div className="relative mx-auto w-80 h-48 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-dark-bg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg" />
                    <span className="text-sm font-semibold">The Ad Project</span>
                  </div>
                  <h4 className="font-orbitron font-bold text-lg mb-1">Goutam Kumar</h4>
                  <p className="text-sm mb-3">Founder & CEO</p>
                  <div className="text-xs space-y-1 text-left">
                    <p>📧 goutam@theadproject.in</p>
                    <p>📱 +91 98765 43210</p>
                    <p>🌐 theadproject.in</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-white/50 text-sm max-w-sm mx-auto">
                Traditional cards are limited to what they print. No interactivity. No updates. No WOW factor.
              </p>
            </div>

            {/* AR Card */}
            <div className="text-center">
              <h3 className="font-orbitron font-bold text-xl mb-6 text-neon-cyan">
                AR-Enhanced Business Card
              </h3>
              <div className="relative">
                <div className="relative mx-auto w-80 h-72 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 backdrop-blur-sm rounded-2xl p-6 border border-neon-cyan/30 animate-glow shadow-xl">
                  
                  {/* Holographic Avatar */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-tr from-neon-cyan to-neon-purple rounded-full flex items-center justify-center animate-float-glow shadow-2xl">
                    <span className="text-4xl">🧍‍♂️</span>
                  </div>

                  <div className="text-white pt-16">
                    <h4 className="font-orbitron font-bold text-lg mb-1">Goutam Kumar</h4>
                    <p className="text-sm mb-4 text-neon-cyan">Founder & CEO, Talking in 3D</p>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg text-xs"
                      >
                        📧 Send Email
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-neon-purple/50 text-neon-purple hover:bg-neon-purple hover:text-dark-bg text-xs"
                      >
                        💬 WhatsApp
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-dark-bg text-xs"
                      >
                        💼 LinkedIn
                      </Button>
                    </div>
                  </div>

                  {/* Animated Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-float"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Speech AI Simulation */}
                <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-neon-cyan/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center animate-pulse-glow">
                      <span className="text-sm">🗣️</span>
                    </div>
                    <p className="text-white/80 text-sm italic text-left">
                      "Hi, I’m your holographic assistant. Ready to pitch your brand in style!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {[
              { icon: "📡", title: "Holographic Avatars", text: "Greet clients with a life-like 3D persona" },
              { icon: "📈", title: "Real-time Updates", text: "Change links, branding, and messages anytime" },
              { icon: "🎥", title: "Video Pitches", text: "Showcase your intro pitch in augmented 3D space" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="font-orbitron font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-white/60 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white hover:opacity-90 px-8 py-4"
            >
              Create My Holographic Card
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
