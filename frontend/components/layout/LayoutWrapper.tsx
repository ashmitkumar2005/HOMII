"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    MessageSquare,
    History,
    Plus,
    Settings,
    User,
    PanelLeftClose,
    PanelLeft
} from "lucide-react";

interface LayoutWrapperProps {
    children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background">
            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{ width: isSidebarOpen ? 280 : 0, opacity: isSidebarOpen ? 1 : 0 }}
                className="relative flex flex-col glass-panel border-r-0 z-20"
            >
                <div className="flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-brand-glow flex items-center justify-center">
                            <MessageSquare className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-bold text-lg tracking-tight">HOMII</span>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                    >
                        <PanelLeftClose className="h-4 w-4 text-zinc-400" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-2 py-4">
                    <button className="flex w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-sm font-medium transition-all hover:bg-white/10 mb-6">
                        <Plus className="h-4 w-4" />
                        New Thread
                    </button>

                    <div className="space-y-1">
                        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                            Recent Threads
                        </div>
                        {[1, 2, 3].map((i) => (
                            <button
                                key={i}
                                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 hover:bg-white/5 hover:text-white transition-colors text-left truncate"
                            >
                                <History className="h-4 w-4 flex-shrink-0" />
                                Thread Name {i}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-4 border-t border-white/5 space-y-2">
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 hover:bg-white/5 hover:text-white transition-colors">
                        <Settings className="h-4 w-4" />
                        Settings
                    </button>
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 hover:bg-white/5 hover:text-white transition-colors">
                        <User className="h-4 w-4" />
                        Profile
                    </button>
                </div>
            </motion.aside>

            {/* Main Content */}
            <main className="relative flex flex-1 flex-col transition-all duration-300">
                {!isSidebarOpen && (
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="absolute left-4 top-4 p-2 glass-panel rounded-lg z-30"
                    >
                        <PanelLeft className="h-4 w-4 text-zinc-400" />
                    </button>
                )}
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
