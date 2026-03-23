'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { GitHub } from '@/application/models/GitHub';
import { Hero } from '@/application/models/dota/Hero';
import { getFullAge } from '@/utility/GenericUtility';
import { State } from '@/application/models/dota/State';
import { Download, Linkedin, Terminal } from 'lucide-react';

type PersonalSectionProps = {
    gameState: State;
    selectedHero: Hero;
    githubStats: GitHub;
    isDarkMode: boolean;
    personalInformation: PersonalInformation;
};

const PersonalSection = ({
    gameState,
    selectedHero,
    githubStats,
    isDarkMode,
    personalInformation,
}: PersonalSectionProps) => {
    return (
        <section className="min-h-screen flex items-center pt-20 lg:pt-24 pb-10 lg:pb-14">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8">
                    <div className="space-y-6 lg:space-y-8">
                        <div className="space-y-4 lg:space-y-6">
                            <div
                                className="text-xs lg:text-sm tracking-wider font-bold"
                                style={{ color: selectedHero.theme.primary }}
                            >
                                {'>'} HERO SELECTED: {selectedHero.name.toUpperCase()}{' '}
                                {selectedHero.icon} [LEVEL {selectedHero.stats.level}]
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black leading-none">
                                <span className="block">
                                    {personalInformation.name.split(' ')[0].toUpperCase()}
                                </span>
                                <span
                                    className="block text-outline"
                                    style={{ color: selectedHero.theme.primary }}
                                >
                                    {personalInformation.name.split(' ')[1]?.toUpperCase() ||
                                        'PRADHAN'}
                                </span>
                            </h1>

                            <div className="text-sm lg:text-lg max-w-lg space-y-2 font-mono">
                                <div>
                                    <span style={{ color: selectedHero.theme.primary }}>class</span>{' '}
                                    <span style={{ color: selectedHero.theme.secondary }}>
                                        FullStackDeveloper
                                    </span>{' '}
                                    <span style={{ color: selectedHero.theme.primary }}>:</span>{' '}
                                    <span style={{ color: selectedHero.theme.secondary }}>
                                        DOTA2Player
                                    </span>
                                </div>
                                <div className="text-gray-500">{'{'}</div>
                                <div className="ml-4">
                                    RunTime ={' '}
                                    <span style={{ color: selectedHero.theme.accent }}>
                                        {getFullAge(personalInformation.dateOfBirth)}
                                    </span>
                                    ;
                                </div>
                                <div className="ml-4">
                                    Location ={' '}
                                    <span style={{ color: selectedHero.theme.accent }}>
                                        "{personalInformation.location}"
                                    </span>
                                    ;
                                </div>
                                <div className="ml-4">
                                    Company ={' '}
                                    <span style={{ color: selectedHero.theme.accent }}>
                                        "{personalInformation.company}"
                                    </span>
                                    ;
                                </div>
                                <div className="ml-4">
                                    Rank ={' '}
                                    <span style={{ color: selectedHero.theme.accent }}>
                                        "Ancient"
                                    </span>
                                    ;
                                </div>
                                <div className="text-gray-500">{'}'}</div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 text-center pt-4">
                                <div
                                    className="p-3 rounded-lg border"
                                    style={{
                                        borderColor: '#ef4444',
                                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                    }}
                                >
                                    <div className="text-2xl font-bold text-red-400">
                                        {selectedHero.stats.strength}
                                    </div>
                                    <div className="text-xs opacity-70">STRENGTH</div>
                                </div>
                                <div
                                    className="p-3 rounded-lg border"
                                    style={{
                                        borderColor: '#22c55e',
                                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                    }}
                                >
                                    <div className="text-2xl font-bold text-green-400">
                                        {selectedHero.stats.agility}
                                    </div>
                                    <div className="text-xs opacity-70">AGILITY</div>
                                </div>
                                <div
                                    className="p-3 rounded-lg border"
                                    style={{
                                        borderColor: '#3b82f6',
                                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                    }}
                                >
                                    <div className="text-2xl font-bold text-blue-400">
                                        {selectedHero.stats.intelligence}
                                    </div>
                                    <div className="text-xs opacity-70">INTELLIGENCE</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div
                            className="border-2 rounded-lg overflow-hidden shadow-2xl"
                            style={{
                                backgroundColor: isDarkMode
                                    ? 'rgba(0,0,0,0.8)'
                                    : 'rgba(255,255,255,0.8)',
                                borderColor: selectedHero.theme.primary,
                            }}
                        >
                            <div
                                className="px-4 lg:px-6 py-2 lg:py-3 font-bold flex items-center justify-between text-black"
                                style={{ backgroundColor: selectedHero.theme.primary }}
                            >
                                <span className="text-sm lg:text-base">SYSTEM.STATS.EXE</span>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-current rounded-full animate-pulse" />
                                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-current rounded-full animate-pulse" />
                                    <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-current rounded-full animate-pulse" />
                                </div>
                            </div>
                            <div className="p-4 lg:p-8 space-y-4 lg:space-y-6 font-mono text-xs lg:text-sm">
                                {[
                                    {
                                        label: 'CURRENT GOLD:',
                                        value: `${gameState.gold}💰`,
                                        color: '#fbbf24',
                                    },
                                    {
                                        label: 'GPM',
                                        value: `${gameState.gpm}`,
                                        color: '#fbbf24',
                                        children: {
                                            label: 'XPM:',
                                            value: `${gameState.xpm}`,
                                            color: '#3b82f6',
                                        },
                                    },
                                    {
                                        label: 'LAST HITS:',
                                        value: `${gameState.lastHits}`,
                                        color: selectedHero.theme.primary,
                                    },
                                    {
                                        label: 'REPOSITORIES:',
                                        value: `${githubStats.repositories}+`,
                                        color: selectedHero.theme.primary,
                                    },
                                    {
                                        label: 'GITHUB STARS:',
                                        value: `${githubStats.stars}`,
                                        color: selectedHero.theme.primary,
                                    },
                                    {
                                        label: 'STATUS:',
                                        value: 'ONLINE',
                                        color: selectedHero.theme.primary,
                                    },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="flex justify-between items-center"
                                    >
                                        <span className="dark:text-gray-400">
                                            {stat.label}
                                            {stat.children && ' / ' + stat.children.label}
                                        </span>
                                        <span style={{ color: stat.color }}>
                                            {stat.value}
                                            {stat.children && (
                                                <>
                                                    {' / '}
                                                    <span style={{ color: stat.children.color }}>
                                                        {stat.children.value}
                                                    </span>
                                                </>
                                            )}
                                        </span>
                                    </div>
                                ))}

                                <div className="border-t border-gray-700 pt-4 lg:pt-6">
                                    <div className="dark:text-gray-400 mb-2 lg:mb-3">
                                        ULTIMATE ABILITIES:
                                    </div>
                                    <div className="space-y-1">
                                        {selectedHero.abilities
                                            .filter((ability) => ability.type === 'ultimate')
                                            .slice(0, 2)
                                            .map((ability, index) => (
                                                <div
                                                    key={index}
                                                    style={{ color: selectedHero.theme.accent }}
                                                    className="text-xs"
                                                >
                                                    • {ability.name} (Lv.{ability.level})
                                                </div>
                                            ))}
                                    </div>
                                </div>

                                <div className="border-t border-gray-700 pt-4">
                                    <div className="dark:text-gray-400 mb-2">EXPERIENCE:</div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span>{selectedHero.stats.experience}</span>
                                        <span>{selectedHero.stats.maxExperience}</span>
                                    </div>
                                </div>
                                <div className="border-t border-gray-700 pt-4">
                                    <div className="flex flex-col justify-center sm:flex-row gap-3 lg:gap-4">
                                        <Button
                                            className="font-bold px-6 lg:px-8 py-2 lg:py-3 w-full sm:w-auto"
                                            style={{
                                                backgroundColor: selectedHero.theme.primary,
                                                color: 'black',
                                            }}
                                            asChild
                                        >
                                            <a
                                                href={personalInformation.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Terminal className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                                                GITHUB
                                            </a>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="font-bold px-6 lg:px-8 py-2 lg:py-3 bg-transparent w-full sm:w-auto"
                                            style={{
                                                borderColor: selectedHero.theme.primary,
                                                color: selectedHero.theme.primary,
                                            }}
                                            asChild
                                        >
                                            <a
                                                href={personalInformation.linkedinUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Linkedin className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                                                CONNECT
                                            </a>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="font-bold px-6 lg:px-8 py-2 lg:py-3 bg-transparent w-full sm:w-auto"
                                            style={{
                                                borderColor: selectedHero.theme.primary,
                                                color: selectedHero.theme.primary,
                                            }}
                                            asChild
                                        >
                                            <a
                                                href="/resume/Siddhartha%20Pradhan%20-%20Resume.pdf"
                                                download="Siddhartha Pradhan - Resume.pdf"
                                            >
                                                <Download className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                                                RESUME
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="p-4 rounded-lg border-2"
                    style={{
                        borderColor: selectedHero.theme.primary,
                        backgroundColor: isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
                    }}
                >
                    <div
                        className="text-xs font-bold mb-2"
                        style={{ color: selectedHero.theme.primary }}
                    >
                        HERO QUOTE:
                    </div>
                    <div className="text-sm italic" style={{ color: selectedHero.theme.accent }}>
                        "{selectedHero.devQuote}"
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalSection;
