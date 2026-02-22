"use client";

import React from "react";
import FloatingCard from "./FloatingCard";
import PortalCard from "./PortalCard";
import DarkModeToggle from "./DarkModeToggle";

function GradientBlob({ className }: { className: string }) {
    return (
        <div className={`absolute rounded-full pointer-events-none blur-[140px] ${className}`} />
    );
}

function BgPill({ className }: { className: string }) {
    return (
        <div className={`absolute rounded-full bg-[#c8cbd8]/55 dark:bg-[#2a2a4a]/40 pointer-events-none ${className}`} />
    );
}

/* Inline SVG icons — no lucide-react import (avoids Element type invalid) */
const BillingIcon = () => (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 2h14v15l-1.5-1-1.5 1-1.5-1-1.5 1-1.5-1-1.5 1-1.5-1L5 17V2z" strokeLinejoin="round" />
        <line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="10.5" x2="16" y2="10.5" /><line x1="8" y1="14" x2="12" y2="14" />
    </svg>
);
const MattersIcon = () => (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5L12 3l9 7.5V21H3V10.5z" /><rect x="9" y="14" width="6" height="7" rx="1" />
    </svg>
);
const TasksIcon = () => (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="15" y2="17" />
    </svg>
);
const DocumentsIcon = () => (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2h9l5 5v15a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z" /><path d="M14 2v6h6" />
        <line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" />
    </svg>
);

export default function Hero() {
    return (
        <section className="relative overflow-hidden min-h-screen bg-[#eeeef5] dark:bg-[#0f0f1c] transition-colors duration-500">

            <DarkModeToggle />

            {/* Gradient blobs */}
            <GradientBlob className="w-[580px] h-[580px] bg-indigo-200/40 dark:bg-indigo-900/20 opacity-70 -top-[15%] right-[-5%]" />
            <GradientBlob className="w-[380px] h-[380px] bg-purple-200/30 dark:bg-purple-900/15 opacity-60 top-[50%] right-[8%]" />

            {/* Background decorative pills */}
            <BgPill className="w-[230px] h-[54px] top-[4%]     right-[-2%]  -rotate-[5deg]" />
            <BgPill className="w-[190px] h-[50px] top-[16%]    right-[-4%]  -rotate-[5deg]" />
            <BgPill className="w-[240px] h-[54px] top-[44%]    right-[-3%]  -rotate-[4deg]" />
            <BgPill className="w-[210px] h-[52px] bottom-[22%] right-[-5%]  -rotate-[4deg]" />
            <BgPill className="w-[250px] h-[56px] bottom-[10%] right-[-1%]  -rotate-[3deg]" />
            <BgPill className="w-[200px] h-[52px] bottom-[15%] left-[-4%]   rotate-[6deg]" />
            <BgPill className="w-[230px] h-[54px] bottom-[25%] left-[14%]  -rotate-[5deg]" />

            {/* Main layout */}
            <div className="relative z-10 max-w-[1380px] mx-auto px-6 lg:px-14 w-full">
                <div className="flex flex-col lg:flex-row min-h-screen gap-8 lg:gap-0">

                    {/* LEFT — Heading */}
                    <div
                        className="w-full lg:w-[44%] flex-shrink-0 z-10 flex flex-col justify-center pt-24 pb-16 lg:pt-0 lg:pb-0 lw-fade-up"
                        style={{ "--lw-del": "0.1s" } as React.CSSProperties}
                    >
                        <h1
                            className="font-light leading-[1.15] tracking-[-0.02em] text-[#64647a] dark:text-[#c5c3e0]"
                            style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)" }}
                        >
                            A single platform to
                            <br />
                            <strong className="font-bold">manage</strong> every part of
                            <br />
                            your <strong className="font-bold">legal work</strong>
                        </h1>

                        <p className="mt-5 text-[13.5px] leading-[1.75] text-indigo-500/80 dark:text-indigo-300/80 max-w-[310px]">
                            Track matters, coordinate schedules, manage clients, centralize
                            documents, and handle communication –{" "}
                            <span className="text-indigo-500 dark:text-indigo-300">
                                all in one system.
                            </span>
                        </p>
                    </div>

                    {/* RIGHT — Floating pills (desktop) */}
                    <div
                        className="relative w-full lg:w-[56%] flex-shrink-0 hidden lg:block lw-fade-up"
                        style={{ height: 680, "--lw-del": "0.35s" } as React.CSSProperties}
                    >
                        {/* BILLING */}
                        <FloatingCard
                            color="blue"
                            rotation={-5}
                            icon={<BillingIcon />}
                            label="Billing"
                            className="top-[16%] left-[38%] z-[12]"
                            animationDuration="7s"
                            animationDelay="0s"
                        />

                        {/* MATTERS */}
                        <FloatingCard
                            color="orange"
                            rotation={-8}
                            icon={<MattersIcon />}
                            label="Matters"
                            className="top-[41%] left-[0%] z-[11]"
                            animationDuration="5.5s"
                            animationDelay="0.7s"
                        />

                        {/* PORTAL CARD — unique variant */}
                        <PortalCard
                            rotation={-3}
                            className="top-[40%] left-[38%] z-[13]"
                            animationDuration="6.5s"
                            animationDelay="1.0s"
                        />

                        {/* TASKS */}
                        <FloatingCard
                            color="dark"
                            rotation={-7}
                            icon={<TasksIcon />}
                            label="Tasks"
                            className="top-[64%] left-[20%] z-[10]"
                            animationDuration="6s"
                            animationDelay="0.3s"
                        />

                        {/* DOCUMENTS */}
                        <FloatingCard
                            color="orange"
                            rotation={-6}
                            icon={<DocumentsIcon />}
                            label="Documents"
                            className="top-[76%] left-[40%] z-[11]"
                            animationDuration="5.5s"
                            animationDelay="1.3s"
                        />
                    </div>

                    {/* MOBILE — simplified pill strip */}
                    <div className="w-full lg:hidden flex flex-wrap justify-center gap-3 pb-12 pt-2">
                        <span className="flex items-center gap-2 bg-[#4f6ef7] text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-md">
                            <BillingIcon /> Billing
                        </span>
                        <span className="flex items-center gap-2 bg-[#e07b28] text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-md">
                            <MattersIcon /> Matters
                        </span>
                        <span className="flex items-center gap-2 bg-[#1a1a2e] text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-md">
                            <TasksIcon /> Tasks
                        </span>
                        <span className="flex items-center gap-2 bg-[#e07b28] text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-md">
                            <DocumentsIcon /> Documents
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}