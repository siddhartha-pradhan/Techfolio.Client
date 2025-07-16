import React from 'react';

const BootScreen = () => {
    return (
        <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
            <div className="text-center space-y-4">
                <div className="text-6xl mb-8">⚡</div>
                <div className="text-lg">DOTA PORTFOLIO SYSTEM INITIALIZING...</div>
                <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto">
                    <div className="h-full bg-green-400 rounded-full w-full animate-pulse" />
                </div>
                <div className="text-sm opacity-70">Loading portfolio data...</div>
            </div>
        </div>
    );
};

export default BootScreen;
