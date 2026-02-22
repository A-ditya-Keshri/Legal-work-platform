"use client";

import React from "react";

/** Available colour themes for a floating pill card */
export type CardColor = "blue" | "orange" | "dark";

/** Complete Tailwind class strings — must be full strings for Tailwind JIT */
const colorVariants: Record<CardColor, { pill: string; iconWrap: string }> = {
    blue: {
        pill: [
            "bg-[#4f6ef7]",
            "dark:bg-[#3b5bf5]",
            "text-white",
            "shadow-[0_16px_50px_rgba(79,110,247,0.45)]",
        ].join(" "),
        iconWrap: "bg-white/20",
    },
    orange: {
        pill: [
            "bg-[#e07b28]",
            "text-white",
            "shadow-[0_14px_44px_rgba(224,123,40,0.38)]",
        ].join(" "),
        iconWrap: "bg-white/20",
    },
    dark: {
        pill: [
            "bg-[#1a1a2e]",
            "dark:bg-[#0d0d1e]",
            "text-white",
            "shadow-[0_18px_52px_rgba(0,0,0,0.40)]",
        ].join(" "),
        iconWrap: "bg-white/15",
    },
};

export interface FloatingCardProps {
    /** Background colour theme */
    color?: CardColor;
    /** Rotation in degrees (positive = clockwise) */
    rotation?: number;
    /** Icon element */
    icon: React.ReactNode;
    /** Text label */
    label: string;
    /** Tailwind classes for absolute positioning */
    className?: string;
    /** CSS time value, e.g. "5s" */
    animationDuration?: string;
    /** CSS time value, e.g. "0.5s" */
    animationDelay?: string;
}

/**
 * Reusable floating pill card.
 *
 * Three-layer pattern:
 *   outer  → absolute position + static rotate()
 *   middle → lw-float animation (translateY only — rotation-safe)
 *   inner  → visual pill (bg, text, shadow, hover)
 */
export default function FloatingCard({
    color = "blue",
    rotation = 0,
    icon,
    label,
    className = "",
    animationDuration = "5s",
    animationDelay = "0s",
}: FloatingCardProps) {
    const { pill, iconWrap } = colorVariants[color];

    return (
        <div
            className={`absolute select-none ${className}`}
            style={{ transform: `rotate(${rotation}deg)` }}
        >
            <div
                className="lw-float"
                style={
                    {
                        "--lw-dur": animationDuration,
                        "--lw-del": animationDelay,
                    } as React.CSSProperties
                }
            >
                <div
                    className={[
                        "flex items-center gap-3 rounded-full",
                        "px-7 py-4 font-semibold text-xl whitespace-nowrap",
                        "cursor-default transition-all duration-300",
                        "hover:brightness-110 hover:scale-[1.04]",
                        pill,
                    ].join(" ")}
                >
                    <span
                        className={`flex items-center justify-center w-9 h-9 rounded-xl flex-shrink-0 ${iconWrap}`}
                    >
                        {icon}
                    </span>
                    {label}
                </div>
            </div>
        </div>
    );
}
