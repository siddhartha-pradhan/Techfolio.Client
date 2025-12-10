'use client';

import React from 'react';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import ItemsPanel from '../panels/ItemsPanel';
import { Hero } from '@/application/models/dota/Hero';
import { AnimatePresence, motion } from 'framer-motion';
import HeroStatsPanel from '../panels/HeroStatsPanel';
import { State } from '@/application/models/dota/State';
import { Ability } from '@/application/models/dota/Ability';
import { Achievement } from '@/application/models/Achievement';
import AbilitiesPanel from '@/app/modules/panels/AbilitiesPanel';
import RecentMatchHistoryPanel from '@/app/modules/panels/RecentMatchHistoryPanel';
import { MatchHistory } from '@/application/models/dota/MatchHistory';

type DotaPanelModalProps = {
    gameState: State;
    selectedHero: Hero;
    showDotaPanel: boolean;
    matches: MatchHistory[];
    dotaAchievements: Achievement[];
    onAbilityClick: (ability: Ability) => void;
    getRarityColor: (rarity: string) => string;
    setShowDotaPanel: (showDotaPanel: boolean) => void;
};

const DotaPanelModal = ({
    gameState,
    selectedHero,
    showDotaPanel,
    matches,
    dotaAchievements,
    onAbilityClick,
    getRarityColor,
    setShowDotaPanel,
}: DotaPanelModalProps) => {
    return (
        <AnimatePresence>
            {showDotaPanel && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={() => setShowDotaPanel(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gray-900 border-2 border-green-400 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-green-400">
                            <h2 className="text-3xl font-black text-green-400">
                                🏆 DOTA DEVELOPER PANEL
                            </h2>
                            <button
                                onClick={() => setShowDotaPanel(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <HeroStatsPanel hero={selectedHero} gameState={gameState} />
                                <ItemsPanel
                                    items={selectedHero.items}
                                    heroTheme={selectedHero.theme}
                                />
                                <RecentMatchHistoryPanel
                                    matches={matches}
                                    heroTheme={selectedHero.theme}
                                />
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div
                                        className="font-bold mb-4"
                                        style={{ color: selectedHero.theme.primary }}
                                    >
                                        ABILITIES
                                    </div>
                                    <AbilitiesPanel
                                        abilities={selectedHero.abilities}
                                        heroTheme={selectedHero.theme}
                                        onAbilityClick={onAbilityClick}
                                    />
                                </div>

                                <div>
                                    <div
                                        className="font-bold mb-4"
                                        style={{ color: selectedHero.theme.primary }}
                                    >
                                        DOTA ACHIEVEMENTS
                                    </div>
                                    <div className="space-y-2">
                                        {dotaAchievements.map((achievement) => (
                                            <div
                                                key={achievement.id}
                                                className="flex items-center gap-3 p-3 border rounded-lg"
                                                style={{
                                                    borderColor: getRarityColor(
                                                        achievement.rarity || 'Common',
                                                    ),
                                                    backgroundColor: 'rgba(0,0,0,0.3)',
                                                }}
                                            >
                                                <div className="text-2xl">{achievement.icon}</div>
                                                <div className="flex-1">
                                                    <div className="font-bold text-sm">
                                                        {achievement.title}
                                                    </div>
                                                    <div className="text-xs opacity-70">
                                                        {achievement.description}
                                                    </div>
                                                </div>
                                                <Badge
                                                    variant="outline"
                                                    className="text-xs"
                                                    style={{
                                                        borderColor: getRarityColor(
                                                            achievement.rarity || 'Common',
                                                        ),
                                                        color: getRarityColor(
                                                            achievement.rarity || 'Common',
                                                        ),
                                                    }}
                                                >
                                                    {achievement.rarity}
                                                </Badge>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DotaPanelModal;
