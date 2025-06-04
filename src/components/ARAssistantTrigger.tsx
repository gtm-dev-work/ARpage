
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Sparkles } from "lucide-react";
import { ARAssistant } from "./ARAssistant";

export const ARAssistantTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white hover:opacity-90 rounded-full p-4 shadow-2xl animate-glow"
            size="lg"
          >
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8 border border-white/20">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=32&h=32&fit=crop&crop=face" 
                  alt="ADi Assistant" 
                />
                <AvatarFallback className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white text-xs font-orbitron">
                  ADi
                </AvatarFallback>
              </Avatar>
              <span className="font-orbitron font-semibold">Ask ADi</span>
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
          </Button>
        </div>
      )}
      
      <ARAssistant 
        isVisible={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
};
