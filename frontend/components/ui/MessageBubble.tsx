"use client";

import { motion } from "framer-motion";
import { User, Sparkles } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface MessageBubbleProps {
    content: string;
    role: "user" | "ai";
    timestamp?: string;
}

export default function MessageBubble({ content, role, timestamp }: MessageBubbleProps) {
    const isAI = role === "ai";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={cn(
                "flex w-full gap-4 py-6 px-4 md:px-6 transition-colors hover:bg-white/[0.02]",
                isAI ? "bg-white/[0.01]" : ""
            )}
        >
            <div className={cn(
                "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg border text-white shadow-sm",
                isAI
                    ? "border-blue-500/20 bg-blue-500/10 text-blue-400"
                    : "border-zinc-700 bg-zinc-800 text-zinc-400"
            )}>
                {isAI ? <Sparkles className="h-4 w-4" /> : <User className="h-4 w-4" />}
            </div>

            <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold tracking-tight text-zinc-100">
                        {isAI ? "HOMII AI" : "You"}
                    </span>
                    {timestamp && (
                        <span className="text-[10px] text-zinc-500 font-medium">
                            {timestamp}
                        </span>
                    )}
                </div>
                <div className="text-sm leading-7 text-zinc-300 whitespace-pre-wrap">
                    {content}
                </div>
            </div>
        </motion.div>
    );
}
