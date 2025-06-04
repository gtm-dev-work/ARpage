
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-neon-cyan/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-orbitron font-bold text-sm">A</span>
            </div>
            <span className="font-orbitron font-bold text-xl text-white">The Ad Project</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white/80 hover:text-neon-cyan transition-colors">Services</a>
            <a href="#how-it-works" className="text-white/80 hover:text-neon-cyan transition-colors">How It Works</a>
            <a href="#analytics" className="text-white/80 hover:text-neon-cyan transition-colors">Analytics</a>
            <a href="#demo" className="text-white/80 hover:text-neon-cyan transition-colors">Demo</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg">
              Book Demo
            </Button>
            <Button className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white hover:opacity-90">
              Start Campaign
            </Button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neon-cyan/20 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-white/80 hover:text-neon-cyan transition-colors">Services</a>
              <a href="#how-it-works" className="text-white/80 hover:text-neon-cyan transition-colors">How It Works</a>
              <a href="#analytics" className="text-white/80 hover:text-neon-cyan transition-colors">Analytics</a>
              <a href="#demo" className="text-white/80 hover:text-neon-cyan transition-colors">Demo</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg">
                  Book Demo
                </Button>
                <Button className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white hover:opacity-90">
                  Start Campaign
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
