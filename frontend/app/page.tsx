"use client";

import React from "react";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import MessageBubble from "@/components/ui/MessageBubble";
import ChatInput from "@/components/ui/ChatInput";
import ThinkingState from "@/components/ui/ThinkingState";
import SuggestionChips from "@/components/ui/SuggestionChips";
import GlassContainer from "@/components/ui/GlassContainer";
import MobileView from "@/components/mobile/MobileView";
import AuthView from "@/components/auth/AuthView";
import { Sparkles } from "lucide-react";

interface Message {
  role: "user" | "ai";
  content: string;
  timestamp: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    role: "ai",
    content: "Welcome to HOMII. I'm your AI assistant, designed to help you build premium experiences. How can I assist you today?",
    timestamp: "11:45 PM",
  },
];

export default function Home() {
  const [messages, setMessages] = React.useState<Message[]>(INITIAL_MESSAGES);
  const [isThinking, setIsThinking] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  const handleSend = (content: string) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMessage: Message = { role: "user", content, timestamp };

    setMessages((prev) => [...prev, userMessage]);
    setIsThinking(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        role: "ai",
        content: `I've processed your request regarding "${content}". As a HOMII AI, I recommend focusing on glassmorphic design principles and smooth Framer Motion transitions to achieve that premium look you're after. Is there anything specific about this implementation you'd like to dive into?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsThinking(false);
    }, 2000);
  };

  if (!isAuthenticated) {
    return <AuthView onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <>
      <div className="block md:hidden">
        <MobileView />
      </div>
      <div className="hidden md:block h-full">
        <LayoutWrapper>
          <div className="flex h-full flex-col">
            {/* Chat Feed */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto pt-10 pb-20 scroll-smooth"
            >
              <div className="mx-auto max-w-4xl">
                {messages.length === 1 && (
                  <div className="px-6 mb-12">
                    <GlassContainer className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-blue-500/10 p-10 text-center">
                      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 mb-6 border border-blue-500/20 shadow-2xl shadow-blue-500/20">
                        <Sparkles className="h-8 w-8" />
                      </div>
                      <h1 className="text-3xl font-bold tracking-tight text-white mb-4">
                        HOMII Intelligence
                      </h1>
                      <p className="text-zinc-400 max-w-lg mx-auto leading-7">
                        Experience the next generation of conversational AI with a premium, glassmorphic interface built for speed and elegance.
                      </p>
                    </GlassContainer>
                  </div>
                )}

                <div className="divide-y divide-white/[0.03]">
                  {messages.map((msg, idx) => (
                    <MessageBubble
                      key={idx}
                      role={msg.role}
                      content={msg.content}
                      timestamp={msg.timestamp}
                    />
                  ))}
                  {isThinking && <ThinkingState />}
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="sticky bottom-0 bg-gradient-to-t from-background via-background/90 to-transparent pt-10">
              {messages.length === 1 && <SuggestionChips onSelect={handleSend} />}
              <ChatInput onSend={handleSend} isLoading={isThinking} />
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </>
  );
}
