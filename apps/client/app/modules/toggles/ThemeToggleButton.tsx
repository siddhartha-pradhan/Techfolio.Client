import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Hero } from '@/application/models/dota/Hero';

type ThemeToggleButtonProps = {
    selectedHero: Hero;
    isDarkMode: boolean;
    toggleTheme: () => void;
};

const ThemeToggleButton = ({ selectedHero, isDarkMode, toggleTheme }: ThemeToggleButtonProps) => {
    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 z-50 p-3 lg:p-4 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 shadow-lg"
            style={{
                backgroundColor: isDarkMode ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
                borderColor: selectedHero.theme.primary,
                color: selectedHero.theme.primary,
            }}
        >
            {isDarkMode ? (
                <Sun className="w-5 h-5 lg:w-6 lg:h-6" />
            ) : (
                <Moon className="w-5 h-5 lg:w-6 lg:h-6" />
            )}
        </button>
    );
};

export default ThemeToggleButton;
