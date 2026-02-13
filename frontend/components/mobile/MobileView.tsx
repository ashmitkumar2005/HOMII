"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    History,
    X,
    Wallet,
    User,
    LayoutDashboard
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface MobileChipProps {
    icon: React.ElementType;
    label: string;
    borderColor: string;
    bgColor: string;
    iconColor: string;
}

const MobileChip = ({ icon: Icon, label, borderColor, bgColor, iconColor }: MobileChipProps) => (
    <button className={cn(
        "flex items-center gap-3 rounded-2xl border-[1.5px] px-5 py-4 transition-all active:scale-95 whitespace-nowrap",
        borderColor,
        bgColor
    )}>
        <Icon className={cn("h-5 w-5", iconColor)} />
        <span className="text-[15px] font-medium text-white">{label}</span>
    </button>
);

export default function MobileView() {
    return (
        <div className="relative flex h-screen w-full flex-col overflow-hidden bg-[#050505] font-sans text-white md:hidden">
            {/* Background Glows */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -left-[20%] top-[10%] h-[60%] w-[60%] rounded-full bg-blue-600/10 blur-[120px]" />
                <div className="absolute -right-[10%] bottom-[20%] h-[50%] w-[50%] rounded-full bg-purple-600/5 blur-[100px]" />
            </div>

            {/* Header Controls */}
            <div className="relative z-10 flex justify-end gap-3 p-6 pt-12">
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-colors active:bg-white/20">
                    <History className="h-5 w-5 text-zinc-300" />
                </button>
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition-colors active:bg-white/20">
                    <X className="h-5 w-5 text-zinc-300" />
                </button>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6">
                <h1 className="mb-12 text-center text-[34px] font-bold tracking-tight text-white">
                    How can i help you?
                </h1>

                {/* Horizontal Chips */}
                <div className="hide-scrollbar flex w-full gap-3 overflow-x-auto pb-4">
                    <MobileChip
                        icon={Wallet}
                        label="Monthly plan"
                        borderColor="border-emerald-500/40"
                        bgColor="bg-emerald-500/10"
                        iconColor="text-emerald-400"
                    />
                    <MobileChip
                        icon={User}
                        label="My portfolio"
                        borderColor="border-purple-500/40"
                        bgColor="bg-purple-500/10"
                        iconColor="text-purple-400"
                    />
                    <MobileChip
                        icon={LayoutDashboard}
                        label="Dashboard"
                        borderColor="border-orange-500/40"
                        bgColor="bg-orange-500/10"
                        iconColor="text-orange-400"
                    />
                </div>
            </div>

            {/* Bottom Input */}
            <div className="relative z-10 p-6 pb-12">
                <div className="relative flex items-center rounded-[32px] bg-white/5 p-2 pl-6 backdrop-blur-xl border border-white/5">
                    <input
                        type="text"
                        placeholder="Type your thoughts..."
                        className="flex-1 bg-transparent py-4 text-[17px] text-zinc-200 outline-none placeholder:text-zinc-500"
                    />
                    <button className="ml-2 h-14 w-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-0.5 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                        <div className="h-full w-full rounded-full bg-gradient-to-t from-blue-600/50 to-transparent flex items-center justify-center">
                            {/* Inner glow effect for the sphere */}
                            <div className="h-full w-full rounded-full bg-blue-400/20 blur-sm" />
                        </div>
                    </button>
                </div>
            </div>

            <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}
