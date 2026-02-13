"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassContainerProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function GlassContainer({
    children,
    className,
    delay = 0,
}: GlassContainerProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: [0.23, 1, 0.32, 1],
            }}
            className={cn("glass-panel rounded-2xl p-6 overflow-hidden", className)}
        >
            {children}
        </motion.div>
    );
}
