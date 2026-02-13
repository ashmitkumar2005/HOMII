"use client";

import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface AuthViewProps {
    onLogin: () => void;
}

export default function AuthView({ onLogin }: AuthViewProps) {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050505] font-sans text-white">
            {/* Background Glows */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -left-[10%] top-[10%] h-[60%] w-[60%] rounded-full bg-blue-600/10 blur-[140px]" />
                <div className="absolute -right-[10%] bottom-[10%] h-[50%] w-[50%] rounded-full bg-purple-600/10 blur-[140px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex w-full max-w-sm flex-col px-8">
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-bold tracking-tighter text-white">
                        HOMII
                    </h1>
                    <p className="mt-3 text-zinc-400 font-medium">
                        Your premium AI companion.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Google Login Button */}
                    <button
                        onClick={onLogin}
                        className="group relative flex h-14 items-center justify-center gap-3 rounded-2xl bg-white px-6 transition-all active:scale-[0.98]"
                    >
                        <img
                            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/smartlock/google.svg"
                            alt="Google"
                            className="h-5 w-5"
                        />
                        <span className="font-semibold text-black">Continue with Google</span>
                        <div className="absolute inset-0 rounded-2xl transition-opacity group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] pointer-events-none" />
                    </button>

                    {/* Email Login Button */}
                    <button
                        onClick={onLogin}
                        className="group relative flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl transition-all active:scale-[0.98] active:bg-white/10"
                    >
                        <Mail className="h-5 w-5 text-zinc-300" />
                        <span className="font-semibold text-zinc-200">Continue with Email</span>
                    </button>
                </div>

                <div className="mt-10 flex flex-col items-center gap-4">
                    <p className="text-sm text-zinc-500">
                        Don't have an account? <span className="text-white font-medium cursor-pointer hover:underline">Sign up</span>
                    </p>
                </div>
            </div>

            {/* Decorative Sphere at bottom */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
        </div>
    );
}
