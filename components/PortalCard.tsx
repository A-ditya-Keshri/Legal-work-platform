"use client";

import React from "react";

export interface PortalCardProps {
    /** Rotation in degrees */
    rotation?: number;
    /** Additional Tailwind classes for positioning */
    className?: string;
    /** Animation duration */
    animationDuration?: string;
    /** Animation delay */
    animationDelay?: string;
}

/**
 * Unique "portal notification" card variant.
 * Uses the same three-layer pattern as FloatingCard but with a
 * custom internal layout (avatar + accent line + text block).
 */
export default function PortalCard({
    rotation = 0,
    className = "",
    animationDuration = "6.5s",
    animationDelay = "1.1s",
}: PortalCardProps) {
    return (
        /* 1. Position + rotation */
        <div
            className={`absolute select-none ${className}`}
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            {/* 2. Float animation (translateY only) */}
            <div
                className="lw-float"
                style={
                    {
                        "--lw-dur": animationDuration,
                        "--lw-del": animationDelay,
                    } as React.CSSProperties
                }
            >
                {/* 3. Visual card — pill-shaped (rounded-full) */}
                <div
                    className={[
                        "flex items-center gap-3",
                        "bg-[#8F92D8] dark:bg-[#5d61a8]",
                        "rounded-full px-5 py-3 w-[288px]",
                        "shadow-[0_16px_48px_rgba(0,0,0,0.2)]",
                        "cursor-default transition-all duration-300",
                        "hover:brightness-105 hover:scale-[1.02]",
                    ].join(" ")}
                >
                    {/* Circular avatar */}
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        JD
                    </div>

                    {/* Orange vertical accent line */}
                    <div className="w-1 h-10 bg-orange-400 rounded-full flex-shrink-0" />

                    {/* Text block */}
                    <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-white leading-tight">
                            John Doe · Portal
                        </span>
                        <span className="text-[10px] text-white/70 leading-snug mt-0.5 line-clamp-2">
                            Could you please review a document?
                        </span>
                        <span className="text-[9px] text-white/50 mt-1">
                            MAT-2253 · 2 h ago
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
