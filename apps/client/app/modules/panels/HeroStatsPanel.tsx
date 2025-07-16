import React from 'react';
import { Progress } from '@/components/ui/Progress';
import { Hero } from '@/application/models/dota/Hero';
import { State } from '@/application/models/dota/State';

type HeroStatsPanelProps = {
    hero: Hero;
    gameState: State;
};

const HeroStatsPanel = ({ hero, gameState }: HeroStatsPanelProps) => {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <div className="text-3xl">{hero.icon}</div>
                <div>
                    <div className="font-bold text-lg">{hero.name}</div>
                    <div className="text-sm opacity-70">{hero.title}</div>
                </div>
                <div className="ml-auto text-2xl font-bold" style={{ color: hero.theme.primary }}>
                    {hero.stats.level}
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span>Experience</span>
                    <span style={{ color: hero.theme.primary }}>
                        {hero.stats.experience}/{hero.stats.maxExperience}
                    </span>
                </div>
                <Progress
                    value={(hero.stats.experience / hero.stats.maxExperience) * 100}
                    className="h-2"
                />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                    <div className="text-red-400 font-bold">{hero.stats.strength}</div>
                    <div className="text-xs opacity-70">STR</div>
                </div>
                <div>
                    <div className="text-green-400 font-bold">{hero.stats.agility}</div>
                    <div className="text-xs opacity-70">AGI</div>
                </div>
                <div>
                    <div className="text-blue-400 font-bold">{hero.stats.intelligence}</div>
                    <div className="text-xs opacity-70">INT</div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="flex justify-between">
                    <span>Gold:</span>
                    <span className="text-yellow-400">{gameState.gold}</span>
                </div>
                <div className="flex justify-between">
                    <span>GPMx:</span>
                    <span className="text-yellow-400">{gameState.gpm}</span>
                </div>
                <div className="flex justify-between">
                    <span>K/D/A:</span>
                    <span className="text-green-400">
                        {gameState.kills}/{gameState.assists}/{gameState.assists}
                    </span>
                </div>
                <div className="flex justify-between">
                    <span>LH/DN:</span>
                    <span className="text-blue-400">
                        {gameState.lastHits}/{gameState.denies}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeroStatsPanel;
