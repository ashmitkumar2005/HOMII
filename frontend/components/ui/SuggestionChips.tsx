"use client";

import { motion } from "framer-motion";
import { Sparkles, Code, Globe, MessageCircle } from "lucide-react";

const SUGGESTIONS = [
    { label: "Design a landing page", icon: Globe, color: "text-blue-400" },
    { label: "Write a React hook", icon: Code, color: "text-purple-400" },
    { label: "Review my code", icon: Sparkles, color: "text-amber-400" },
    { label: "Draft an email", icon: MessageCircle, color: "text-green-400" },
];

interface SuggestionChipsProps {
    onSelect: (label: string) => void;
}

export default function SuggestionChips({ onSelect }: SuggestionChipsProps) {
    return (
        <div className="flex flex-wrap gap-2 px-6 py-4">
            {SUGGESTIONS.map((suggestion, index) => (
                <motion.button
                    key={suggestion.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => onSelect(suggestion.label)}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300 transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
                >
                    <suggestion.icon className={`h-3.5 w-3.5 ${suggestion.color}`} />
                    {suggestion.label}
                </motion.button>
            ))}
        </div>
    );
}
