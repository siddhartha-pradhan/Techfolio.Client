import React from 'react';
import { Hero } from '@/application/models/dota/Hero';
import { State } from '@/application/models/dota/State';

type FooterProps = {
    gameState: State;
    selectedHero: Hero;
    isDarkMode: boolean;
    personalInformation: PersonalInformation;
};
const Footer = ({ gameState, selectedHero, isDarkMode, personalInformation }: FooterProps) => {
    return (
        <footer
            className="border-t-2 py-6"
            style={{
                borderColor: selectedHero.theme.primary,
                backgroundColor: isDarkMode ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
            }}
        >
            <div className="container mx-auto px-4 lg:px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="font-mono text-xs lg:text-sm text-center sm:text-left opacity-70">
                        © {new Date().getFullYear()} {personalInformation.name.toUpperCase()} |{' '}
                        {selectedHero.name.toUpperCase()} {selectedHero.icon} | LEVEL_
                        {selectedHero.stats.level} | ANCIENT_RANK | CRAFTED_WITH_PASSION_AND_DOTA
                    </div>
                    <div
                        className="font-mono text-xs lg:text-sm"
                        style={{ color: selectedHero.theme.primary }}
                    >
                        MATCH.UPTIME: {Math.floor(gameState.gameTime / 60)}:
                        {String(gameState.gameTime % 60).padStart(2, '0')}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
