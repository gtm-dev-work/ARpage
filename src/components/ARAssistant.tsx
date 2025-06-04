
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mic, MicOff, Volume2, VolumeX, Camera, MapPin, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ARAssistantProps {
  isVisible?: boolean;
  onClose?: () => void;
}

export const ARAssistant: React.FC<ARAssistantProps> = ({ isVisible = true, onClose }) => {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("Hi! I'm ADi, your AR assistant. How can I help you today?");
  const [isAnimating, setIsAnimating] = useState(true);
  const { toast } = useToast();
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  const arResponses = [
    "Let me help you scan for AR opportunities in your area.",
    "I can detect nearby billboards and advertising spaces for AR campaigns.",
    "Would you like me to analyze the lighting conditions for your AR ad?",
    "I'm finding the perfect spots for your augmented reality advertisements.",
    "Let me guide you through setting up your first AR campaign.",
    "I can show you analytics for nearby AR advertising spaces.",
    "Shall we start by scanning your current location for ad opportunities?"
  ];

  useEffect(() => {
    // Initialize speech recognition if available
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        handleUserInput(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (speechSynthesisRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleUserInput = (input: string) => {
    console.log("User input:", input);
    
    // Generate contextual response based on input
    let response = "";
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("scan") || lowerInput.includes("find") || lowerInput.includes("detect")) {
      response = "I'm scanning the area for AR opportunities. I can see several potential advertising spaces nearby!";
    } else if (lowerInput.includes("campaign") || lowerInput.includes("ad")) {
      response = "I'll help you create an AR campaign. Let me guide you through the best locations and targeting options.";
    } else if (lowerInput.includes("location") || lowerInput.includes("where")) {
      response = "I'm analyzing your current location for optimal AR placement. The lighting and foot traffic look great here!";
    } else if (lowerInput.includes("analytics") || lowerInput.includes("data")) {
      response = "Let me pull up the performance analytics for nearby AR campaigns. I'm seeing impressive engagement rates!";
    } else {
      response = arResponses[Math.floor(Math.random() * arResponses.length)];
    }
    
    setCurrentMessage(response);
    speakResponse(response);
    
    toast({
      title: "ADi Assistant",
      description: "Processing your request...",
    });
  };

  const speakResponse = (text: string) => {
    if (isMuted || !window.speechSynthesis) return;
    
    setIsSpeaking(true);
    speechSynthesisRef.current = new SpeechSynthesisUtterance(text);
    speechSynthesisRef.current.rate = 0.9;
    speechSynthesisRef.current.pitch = 1.1;
    speechSynthesisRef.current.volume = 0.8;
    
    speechSynthesisRef.current.onend = () => {
      setIsSpeaking(false);
    };
    
    window.speechSynthesis.speak(speechSynthesisRef.current);
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      toast({
        title: "Speech Recognition Unavailable",
        description: "Your browser doesn't support speech recognition.",
        variant: "destructive"
      });
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
      toast({
        title: "Listening...",
        description: "Speak now to interact with ADi",
      });
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (!isMuted && isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const startARScan = () => {
    console.log("Starting AR scan");
    setCurrentMessage("Initializing AR camera and scanning for opportunities...");
    speakResponse("Starting AR scan. Please point your camera around to detect advertising spaces.");
    
    toast({
      title: "AR Scan Started",
      description: "Point your camera to scan for advertising opportunities",
    });
  };

  const showLocationTips = () => {
    setCurrentMessage("Based on your location, I recommend targeting the main street area with high foot traffic between 9 AM and 6 PM.");
    speakResponse("I'm analyzing your location for the best AR advertising opportunities.");
    
    toast({
      title: "Location Analysis",
      description: "Analyzing optimal AR placement locations",
    });
  };

  const handleQuickAction = (action: string) => {
    const responses = {
      greeting: "Hello! I'm ADi, your AR advertising assistant. I can help you find, create, and optimize AR campaigns.",
      help: "I can help you scan for AR opportunities, create campaigns, analyze locations, and provide real-time guidance.",
      demo: "Let me show you how AR advertising works. I'll guide you through a quick demo of our technology."
    };
    
    const response = responses[action as keyof typeof responses] || arResponses[0];
    setCurrentMessage(response);
    speakResponse(response);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-gradient-to-r from-dark-bg/95 to-dark-bg/90 backdrop-blur-lg border border-neon-cyan/30 rounded-2xl p-6 max-w-sm shadow-2xl">
        {/* Avatar */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <Avatar className={`w-16 h-16 border-2 border-neon-cyan ${isAnimating ? 'animate-pulse-glow' : ''}`}>
              <AvatarImage 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=64&h=64&fit=crop&crop=face" 
                alt="ADi Assistant" 
              />
              <AvatarFallback className="bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-orbitron">
                ADi
              </AvatarFallback>
            </Avatar>
            {isSpeaking && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-cyan rounded-full animate-ping"></div>
            )}
            {isListening && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            )}
          </div>
          <div>
            <h3 className="font-orbitron font-bold text-white text-lg">ADi</h3>
            <p className="text-neon-cyan text-sm">AR Assistant</p>
          </div>
          {onClose && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="ml-auto text-white/60 hover:text-white"
            >
              ×
            </Button>
          )}
        </div>

        {/* Message */}
        <div className="bg-dark-bg/50 rounded-lg p-3 mb-4 border border-neon-purple/20">
          <p className="text-white text-sm leading-relaxed">{currentMessage}</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <Button
            size="sm"
            variant="outline"
            className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg text-xs"
            onClick={startARScan}
          >
            <Camera className="w-3 h-3 mr-1" />
            Scan
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple hover:text-dark-bg text-xs"
            onClick={showLocationTips}
          >
            <MapPin className="w-3 h-3 mr-1" />
            Location
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-green-500/50 text-green-400 hover:bg-green-500 hover:text-dark-bg text-xs"
            onClick={() => handleQuickAction('help')}
          >
            <Sparkles className="w-3 h-3 mr-1" />
            Help
          </Button>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3">
          <Button
            size="sm"
            variant={isListening ? "default" : "outline"}
            className={isListening 
              ? "bg-red-500 hover:bg-red-600 text-white" 
              : "border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg"
            }
            onClick={toggleListening}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-bg"
            onClick={toggleMute}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
        </div>

        {/* Status indicator */}
        <div className="flex justify-center mt-3">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <div className={`w-2 h-2 rounded-full ${isSpeaking ? 'bg-neon-cyan animate-pulse' : isListening ? 'bg-red-500 animate-pulse' : 'bg-green-400'}`}></div>
            <span>
              {isSpeaking ? 'Speaking...' : isListening ? 'Listening...' : 'Ready to help'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
