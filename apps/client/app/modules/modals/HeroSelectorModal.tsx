'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Progress } from '@/components/ui/Progress';
import { Hero } from '@/application/models/dota/Hero';
import { AnimatePresence, motion } from 'framer-motion';

type HeroSelectorModalProps = {
    heroes: Hero[];
    selectedHero: Hero;
    showHeroSelector: boolean;
    selectHero: (hero: Hero) => void;
    setShowHeroSelector: (show: boolean) => void;
};
const HeroSelectorModal = ({
    heroes,
    selectedHero,
    showHeroSelector,
    selectHero,
    setShowHeroSelector,
}: HeroSelectorModalProps) => {
    return (
        <AnimatePresence>
            {showHeroSelector && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={() => setShowHeroSelector(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gray-900 border-2 border-green-400 rounded-lg p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                    >
                        <h2 className="text-3xl font-black text-green-400 mb-6 text-center">
                            🎮 CHOOSE YOUR DEV HERO
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {heroes.map((hero) => (
                                <div
                                    key={hero.id}
                                    onClick={() => selectHero(hero)}
                                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                                        selectedHero.id === hero.id
                                            ? 'border-green-400 bg-green-400/10'
                                            : 'border-gray-600 hover:border-green-400'
                                    }`}
                                >
                                    <div className="text-center mb-4">
                                        <div className="text-4xl mb-2 text-white">{hero.icon}</div>
                                        <h3 className="text-xl font-bold text-white">
                                            {hero.name}
                                        </h3>
                                        <p className="text-green-400 text-sm">{hero.title}</p>
                                        <div className="flex justify-center gap-2 mt-2">
                                            <Badge variant="outline" className="text-xs">
                                                <span className="text-red-400 text-xs">
                                                    Lv.{hero.stats.level}
                                                </span>
                                            </Badge>
                                            <Badge variant="outline" className="text-xs">
                                                <span className="text-red-400 text-xs">
                                                    {hero.ultimateUnlocked
                                                        ? 'Ultimate Ready'
                                                        : 'Ultimate Locked'}
                                                </span>
                                            </Badge>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-4">{hero.description}</p>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-red-400">
                                                STR: {hero.stats.strength}
                                            </span>
                                            <span className="text-green-400">
                                                AGI: {hero.stats.agility}
                                            </span>
                                            <span className="text-blue-400">
                                                INT: {hero.stats.intelligence}
                                            </span>
                                        </div>
                                        <div className="text-xs">
                                            <div className="flex justify-between mb-1 text-white">
                                                <span>Experience</span>
                                                <span>
                                                    {hero.stats.experience}/
                                                    {hero.stats.maxExperience}
                                                </span>
                                            </div>
                                            <Progress
                                                value={
                                                    (hero.stats.experience /
                                                        hero.stats.maxExperience) *
                                                    100
                                                }
                                                className="h-1"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4 p-3 bg-black/50 rounded">
                                        <p className="text-yellow-400 text-xs italic">
                                            "{hero.devQuote}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HeroSelectorModal;
