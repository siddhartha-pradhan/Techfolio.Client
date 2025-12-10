'use client';

import React, { useEffect, useMemo, useState } from 'react';

const BootScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const totalDuration = 5000;
        const steps = 100;
        const intervalDuration = totalDuration / steps;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                const jitter = Math.random() * 2;
                const next = Math.min(prev + 1 + jitter, 100);

                return Math.round(next);
            });
        }, intervalDuration);

        return () => clearInterval(interval);
    }, []);

    const statusMessage = useMemo(() => {
        if (progress < 15) return 'Booting DOTA core systems...';
        if (progress < 35) return 'Loading hero profiles and abilities...';
        if (progress < 55) return 'Syncing match history and achievements...';
        if (progress < 75) return 'Warming up particles and VFX...';
        if (progress < 95) return 'Preparing portfolio UI components...';
        return 'Finalizing DOTA Portfolio System...';
    }, [progress]);

    return (
        <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
            <div className="text-center space-y-6">
                <img
                    src="/images/techies.gif"
                    alt="DOTA 2 Boot"
                    className="w-24 h-24 mx-auto mb-4"
                />

                <div className="text-lg tracking-wide">DOTA PORTFOLIO SYSTEM INITIALIZING...</div>

                {/* Progress Bar */}
                <div className="w-72 h-3 bg-gray-900 rounded-full mx-auto overflow-hidden border border-green-500/40">
                    <div
                        className="h-full bg-green-400 rounded-full transition-all duration-150 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Percentage & Status */}
                <div className="text-sm flex flex-col items-center gap-1">
                    <span className="text-green-300">{progress}%</span>
                    <span className="opacity-70">{statusMessage}</span>
                </div>
            </div>
        </div>
    );
};

export default BootScreen;
