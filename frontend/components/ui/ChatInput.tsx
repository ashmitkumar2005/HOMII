"use client";

import React from "react";
import { Send, Plus, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatInputProps {
    onSend: (message: string) => void;
    isLoading?: boolean;
}

export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
    const [input, setInput] = React.useState("");
    const inputRef = React.useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isLoading) {
            onSend(input);
            setInput("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto px-4 pb-8 pt-2">
            <form
                onSubmit={handleSubmit}
                className="relative flex items-end gap-2 glass-panel border-white/10 rounded-2xl p-2 pl-4 pr-3 shadow-2xl transition-all focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/20"
            >
                <button
                    type="button"
                    className="mb-1.5 p-2 rounded-xl hover:bg-white/5 transition-colors text-zinc-500"
                >
                    <Plus className="h-5 w-5" />
                </button>

                <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask HOMII anything..."
                    rows={1}
                    className="flex-1 max-h-48 resize-none bg-transparent py-3 text-[15px] outline-none placeholder:text-zinc-500 text-zinc-200"
                    style={{ height: 'auto' }}
                    onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = `${target.scrollHeight}px`;
                    }}
                />

                <AnimatePresence>
                    {input.trim() && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            type="submit"
                            disabled={isLoading}
                            className="mb-1.5 p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </form>

            <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-zinc-500 font-medium">
                <span className="flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3" />
                    AI-Powered Insights
                </span>
                <span className="h-1 w-1 rounded-full bg-zinc-800" />
                <span>HOMII Feb 2026 Release</span>
            </div>
        </div>
    );
}
