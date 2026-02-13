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
                <div className="absolute -left-[30%] top-[0%] h-[70%] w-[70%] rounded-full bg-blue-600/15 blur-[140px]" />
                <div className="absolute -right-[20%] bottom-[0%] h-[60%] w-[60%] rounded-full bg-purple-600/10 blur-[120px]" />
            </div>

            {/* Header Controls */}
            <div className="relative z-10 flex justify-end gap-3 p-6 pt-10">
                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl transition-all active:scale-95">
                    <History className="h-5 w-5 text-zinc-100" />
                </button>
                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl transition-all active:scale-95">
                    <X className="h-5 w-5 text-zinc-100" />
                </button>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 -mt-10">
                <h1 className="mb-10 text-center text-[34px] font-bold tracking-tight text-white leading-tight">
                    How can i help you?
                </h1>

                {/* Horizontal Chips */}
                <div className="hide-scrollbar flex w-full gap-3 overflow-x-auto px-1 pb-4">
                    <MobileChip
                        icon={Wallet}
                        label="Monthly plan"
                        borderColor="border-emerald-500/50"
                        bgColor="bg-emerald-500/10"
                        iconColor="text-emerald-400"
                    />
                    <MobileChip
                        icon={User}
                        label="My portfolio"
                        borderColor="border-purple-500/50"
                        bgColor="bg-purple-500/10"
                        iconColor="text-purple-400"
                    />
                    <MobileChip
                        icon={LayoutDashboard}
                        label="Dashboard"
                        borderColor="border-orange-500/50"
                        bgColor="bg-orange-500/10"
                        iconColor="text-orange-400"
                    />
                </div>
            </div>

            {/* Bottom Input */}
            <div className="relative z-10 p-6 pb-14">
                <div className="relative flex items-center rounded-[36px] bg-[#1a1a1a]/40 p-1.5 pl-6 backdrop-blur-3xl border border-white/5">
                    <input
                        type="text"
                        placeholder="Type your thoughts..."
                        className="flex-1 bg-transparent py-4 text-[17px] text-zinc-100 outline-none placeholder:text-zinc-500 font-medium"
                    />
                    <button className="ml-2 relative h-14 w-14 rounded-full overflow-hidden transition-transform active:scale-95 group">
                        {/* 3D Sphere Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-900 shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.5),inset_4px_4px_10px_rgba(255,255,255,0.3)]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-400/20 to-transparent blur-[2px]" />
                        <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white/20 blur-[3px]" />
                        <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
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
