"use client";

import { motion } from "framer-motion";

export default function ThinkingState() {
    return (
        <div className="flex items-center gap-1.5 px-6 py-4">
            <div className="flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-blue-500/10">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            </div>
            <motion.span
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                className="text-[13px] font-medium text-blue-400/80 tracking-tight"
            >
                HOMII is thinking...
            </motion.span>
        </div>
    );
}
