
import { QrCode, Camera, Video } from "lucide-react";

const steps = [
  {
    icon: <QrCode className="w-8 h-8" />,
    title: "Scan QR",
    description: "Point your camera at any QR code on billboards or advertisements",
    color: "neon-cyan"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Detect Space",
    description: "AI automatically detects flat surfaces and optimal placement areas",
    color: "neon-purple"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "AR Content Loads",
    description: "Interactive 3D content appears in your real environment",
    color: "green-400"
  },
  {
    icon: "🎯",
    title: "Engage & Interact",
    description: "Touch, swipe, and interact with videos, links, and 3D models",
    color: "yellow-400"
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    description: "Get instant insights on engagement, demographics, and ROI",
    color: "orange-400"
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl mb-6 text-white">
            How It <span className="text-neon-cyan">Works</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Five simple steps to transform traditional advertising into immersive AR experiences.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  {/* Step number */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center text-white font-orbitron font-bold text-xl relative z-10">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-4 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center text-${step.color} border border-white/10`}>
                    {typeof step.icon === 'string' ? (
                      <span className="text-3xl">{step.icon}</span>
                    ) : (
                      step.icon
                    )}
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-orbitron font-bold text-lg mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-neon-cyan text-2xl z-20">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Avatar explanation section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 backdrop-blur-sm rounded-2xl p-8 border border-neon-cyan/20 max-w-4xl mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="font-orbitron font-bold text-2xl mb-4 text-white">
              Meet ADi - Your AR Assistant
            </h3>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              "Namaste! I'm your AR guide. Let me show you how The Ad Project is transforming India's billboards, walls, and streets with Augmented Reality."
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse-glow"></div>
              <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
