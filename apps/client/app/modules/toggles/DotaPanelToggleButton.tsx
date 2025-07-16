import React from 'react';
import { Trophy } from 'lucide-react';
import { Hero } from '@/application/models/dota/Hero';

type DotaPanelToggleButtonProps = {
    selectedHero: Hero;
    isDarkMode: boolean;
    setShowDotaPanel: (showDotaPanel: boolean) => void;
};

const DotaPanelToggleButton = ({
    selectedHero,
    isDarkMode,
    setShowDotaPanel,
}: DotaPanelToggleButtonProps) => {
    return (
        <button
            onClick={() => setShowDotaPanel(true)}
            className="fixed bottom-6 left-6 z-50 p-3 lg:p-4 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 shadow-lg"
            style={{
                backgroundColor: isDarkMode ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
                borderColor: selectedHero.theme.primary,
                color: selectedHero.theme.primary,
            }}
        >
            <Trophy className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
    );
};

export default DotaPanelToggleButton;
