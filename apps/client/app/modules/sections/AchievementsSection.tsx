'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Hero } from '@/application/models/dota/Hero';
import { Achievement } from '@/application/models/Achievement';

type AchievementSectionProps = {
    isDarkMode: boolean;
    selectedHero: Hero;
    featuredAchievements: Achievement[];
    getRarityColor: (rarity: string) => string;
};

const AchievementsSection = ({
    isDarkMode,
    selectedHero,
    featuredAchievements,
    getRarityColor,
}: AchievementSectionProps) => {
    return (
        <section
            className="py-16 lg:py-20"
            style={{
                backgroundColor: isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
            }}
        >
            <div className="container mx-auto px-4 lg:px-6">
                <div className="mb-12 lg:mb-16 text-center">
                    <h2 className="font-black mb-4">
                        <span className="hidden lg:block text-4xl">
                            <span style={{ color: selectedHero.theme.primary }}>{'>'}</span>{' '}
                            ACHIEVEMENTS.UNLOCKED
                        </span>
                        <span className="block lg:hidden text-3xl leading-tight">
                            <span style={{ color: selectedHero.theme.primary }}>{'>'}</span>
                            <br />
                            ACHIEVEMENTS
                            <br />
                            <span>.</span>
                            <br />
                            <span>UNLOCKED</span>
                        </span>
                    </h2>
                    <div className="text-sm lg:text-base opacity-70">
                        Epic moments and legendary accomplishments
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredAchievements.map((achievement) => (
                        <div
                            key={achievement.id}
                            className="border-2 p-6 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
                            style={{
                                backgroundColor: isDarkMode
                                    ? 'rgba(0,0,0,0.5)'
                                    : 'rgba(255,255,255,0.5)',
                                borderColor: getRarityColor(achievement.rarity || 'Common'),
                            }}
                        >
                            {/* Rarity Glow Effect */}
                            {achievement.rarity === 'Immortal' && (
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-500/10 animate-pulse" />
                            )}
                            {achievement.rarity === 'Legendary' && (
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 animate-pulse" />
                            )}

                            <div className="relative z-10">
                                <div className="text-4xl mb-4 text-center">{achievement.icon}</div>
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <Badge
                                        variant="outline"
                                        className="text-xs"
                                        style={{
                                            borderColor: getRarityColor(
                                                achievement.rarity || 'Common',
                                            ),
                                            color: getRarityColor(achievement.rarity || 'Common'),
                                        }}
                                    >
                                        {achievement.rarity || 'Common'}
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="text-xs"
                                        style={{
                                            borderColor: selectedHero.theme.primary,
                                            color: selectedHero.theme.primary,
                                        }}
                                    >
                                        {achievement.type.toUpperCase()}
                                    </Badge>
                                </div>
                                <div className="text-lg font-bold mb-3 text-center">
                                    {achievement.title}
                                </div>
                                <p className="text-sm opacity-70 mb-3 text-center">
                                    {achievement.description}
                                </p>
                                {achievement.dotaReference && (
                                    <div
                                        className="text-xs text-center p-2 rounded"
                                        style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                                    >
                                        <span className="opacity-70">DOTA Equivalent: </span>
                                        <span style={{ color: selectedHero.theme.accent }}>
                                            {achievement.dotaReference}
                                        </span>
                                    </div>
                                )}
                                <div
                                    className="text-xs font-bold text-center mt-3"
                                    style={{ color: selectedHero.theme.accent }}
                                >
                                    {achievement.date}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
