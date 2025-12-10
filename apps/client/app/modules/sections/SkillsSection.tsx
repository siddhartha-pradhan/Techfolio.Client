'use client';

import React from 'react';
import { Hero } from '@/application/models/dota/Hero';
import { Skill } from '@/application/models/dota/Skill';

type SkillSectionProps = {
    selectedHero: Hero;
    isDarkMode: boolean;
    featuredSkills: Skill[];
};

const SkillsSection = ({ selectedHero, isDarkMode, featuredSkills }: SkillSectionProps) => {
    return (
        <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="mb-12 lg:mb-16 text-center">
                    <h2 className="font-black mb-4">
                        <span className="hidden lg:block text-4xl">
                            <span style={{ color: selectedHero.theme.primary }}>{'>'}</span>{' '}
                            {selectedHero.name.toUpperCase()}.TECHNOLOGIA
                        </span>
                        <span className="block lg:hidden text-3xl leading-tight">
                            <span style={{ color: selectedHero.theme.primary }}>{'>'}</span>{' '}
                            {selectedHero.name.toUpperCase()}
                            <br />
                            <span className="ml-6 mb-5">.</span>
                            <br />
                            <span className="mt-5 ml-6">TECHNOLOGIA</span>
                        </span>
                    </h2>
                    <div className="text-sm lg:text-base opacity-70">
                        {selectedHero.description}
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                    {featuredSkills.map((skill) => (
                        <div
                            key={skill.id}
                            className="border p-4 lg:p-6 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer relative"
                            style={{
                                backgroundColor: isDarkMode
                                    ? 'rgba(0,0,0,0.5)'
                                    : 'rgba(255,255,255,0.5)',
                                borderColor: selectedHero.theme.primary,
                            }}
                            onClick={() => {
                                if (skill.cooldown && skill.cooldown > 0) {
                                    console.log(
                                        `Casting ${skill.name}! Cooldown: ${skill.cooldown}s, Mana: ${skill.manaCost}`,
                                    );
                                }
                            }}
                        >
                            <div className="text-3xl lg:text-4xl mb-3 lg:mb-4 text-center">
                                {skill.icon}
                            </div>
                            <div
                                className="text-xs mb-2 font-bold tracking-wider text-center"
                                style={{ color: selectedHero.theme.primary }}
                            >
                                {skill.category}
                            </div>
                            <div className="text-sm lg:text-lg font-bold mb-3 lg:mb-4 text-center">
                                {skill.name}
                            </div>

                            {/* Skill Level Progress */}
                            <div className="flex items-center gap-2 mb-2">
                                <div
                                    className="flex-1 h-2 rounded-full overflow-hidden"
                                    style={{
                                        backgroundColor: isDarkMode ? '#374151' : '#e5e7eb',
                                    }}
                                >
                                    <div
                                        className="h-full rounded-full transition-all duration-1000"
                                        style={{
                                            backgroundColor: selectedHero.theme.primary,
                                            width: `${skill.level}%`,
                                        }}
                                    />
                                </div>
                                <span
                                    className="text-xs lg:text-sm font-bold"
                                    style={{ color: selectedHero.theme.primary }}
                                >
                                    {skill.level}%
                                </span>
                            </div>

                            {/* DOTA-style skill info */}
                            {skill.cooldown !== undefined && skill.manaCost !== undefined && (
                                <div className="flex justify-between text-xs mt-2">
                                    <span className="text-gray-400">CD: {skill.cooldown}s</span>
                                    <span className="text-blue-400">{skill.manaCost} 💧</span>
                                </div>
                            )}

                            {skill.description && (
                                <div className="text-xs opacity-70 mt-2 text-center">
                                    {skill.description}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
