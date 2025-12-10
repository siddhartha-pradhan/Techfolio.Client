'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Hero } from '@/application/models/dota/Hero';
import { AnimatePresence, motion } from 'framer-motion';
import { State } from '@/application/models/dota/State';
import { Gamepad2, Menu, Terminal, Trophy, X } from 'lucide-react';

type HeaderProps = {
    date: Date;
    gameState: State;
    selectedHero: Hero;
    isDarkMode: boolean;
    isTerminalOpen: boolean;
    isDotaPanelOpen: boolean;
    isMobileMenuOpen: boolean;
    isDogsSectionOpen: boolean;
    isHeroSelectorOpen: boolean;
    setShowTerminal: (showTerminal: boolean) => void;
    setShowDotaPanel: (showDotaPanel: boolean) => void;
    setShowMobileMenu: (openMobileMenu: boolean) => void;
    setShowDogsSection: (showDogsSection: boolean) => void;
    setShowHeroSelector: (showHeroSelector: boolean) => void;
};

const Header = ({
    date,
    gameState,
    selectedHero,
    isDarkMode,
    isTerminalOpen,
    isDotaPanelOpen,
    isMobileMenuOpen,
    isDogsSectionOpen,
    isHeroSelectorOpen,
    setShowTerminal,
    setShowDotaPanel,
    setShowMobileMenu,
    setShowDogsSection,
    setShowHeroSelector,
}: HeaderProps) => {
    return (
        <div
            className="sticky top-0 z-40 backdrop-blur-sm border-b pt-[env(safe-area-inset-top)]"
            style={{
                backgroundColor: isDarkMode ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
                borderColor: selectedHero.theme.primary,
            }}
        >
            <div className="flex flex-wrap items-center justify-between gap-y-2 px-4 lg:px-6 py-3">
                <div className="flex items-center gap-3 lg:gap-6 flex-1 min-w-0">
                    <div className="flex gap-2">
                        <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-500" />
                        <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-500" />
                    </div>

                    <div className="hidden sm:flex flex-col md:flex-row md:items-center gap-1 md:gap-2 flex-1 min-w-0">
                        <span
                            className="font-bold text-xs sm:text-sm lg:text-base truncate max-w-[180px] sm:max-w-[260px]"
                            style={{ color: selectedHero.theme.primary }}
                        >
                            siddhartha@{selectedHero.id}:~$
                        </span>
                        <span className="text-xs sm:text-sm whitespace-nowrap">
                            Level {selectedHero.stats.level} | {gameState.gold}💰
                        </span>
                    </div>

                    <Button
                        variant="ghost"
                        size="sm"
                        className="sm:hidden ml-auto"
                        style={{ color: selectedHero.theme.primary }}
                        onClick={() => setShowMobileMenu(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-4 h-4" />
                        ) : (
                            <Menu className="w-4 h-4" />
                        )}
                    </Button>
                </div>

                <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
                    <div className="hidden md:flex items-center gap-2 max-w-[200px]">
                        <span className="text-lg">{selectedHero.icon}</span>
                        <span
                            className="text-xs font-bold truncate"
                            style={{ color: selectedHero.theme.primary }}
                        >
                            {selectedHero.name}
                        </span>
                        <Badge
                            variant="outline"
                            className="text-xs whitespace-nowrap"
                            style={{
                                borderColor: selectedHero.theme.primary,
                                color: selectedHero.theme.primary,
                            }}
                        >
                            Lv.{selectedHero.stats.level}
                        </Badge>
                    </div>

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowTerminal(!isTerminalOpen)}
                        className="hidden sm:flex"
                        style={{ color: selectedHero.theme.primary }}
                    >
                        <Terminal className="w-4 h-4" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowHeroSelector(!isHeroSelectorOpen)}
                        className="hidden sm:flex"
                        style={{ color: selectedHero.theme.primary }}
                    >
                        <Gamepad2 className="w-4 h-4" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowDogsSection(!isDogsSectionOpen)}
                        className="hidden sm:flex"
                        style={{ color: selectedHero.theme.primary }}
                    >
                        <span>🐕</span>
                    </Button>

                    <div
                        className="text-xs lg:text-sm font-mono hidden md:block whitespace-nowrap"
                        style={{ color: selectedHero.theme.primary }}
                    >
                        {date.toLocaleTimeString()} | KTM
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="sm:hidden border-t backdrop-blur-sm"
                        style={{ borderColor: selectedHero.theme.primary }}
                    >
                        <div className="p-4 space-y-3">
                            <div className="flex flex-col gap-1">
                                <span
                                    className="font-bold text-sm truncate"
                                    style={{ color: selectedHero.theme.primary }}
                                >
                                    siddhartha@{selectedHero.id}:~$
                                </span>
                                <span className="text-sm">
                                    Level {selectedHero.stats.level} | {gameState.gold}💰
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex gap-3">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setShowTerminal(!isTerminalOpen)}
                                        style={{ color: selectedHero.theme.primary }}
                                    >
                                        <Terminal className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setShowDotaPanel(!isDotaPanelOpen)}
                                        style={{ color: selectedHero.theme.primary }}
                                    >
                                        <Trophy className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setShowHeroSelector(!isHeroSelectorOpen)}
                                        style={{ color: selectedHero.theme.primary }}
                                    >
                                        <Gamepad2 className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setShowDogsSection(!isDogsSectionOpen)}
                                        style={{ color: selectedHero.theme.primary }}
                                    >
                                        <span className="text-sm">🐕</span>
                                    </Button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg">{selectedHero.icon}</span>
                                    <div
                                        className="text-xs font-mono whitespace-nowrap"
                                        style={{ color: selectedHero.theme.primary }}
                                    >
                                        {date.toLocaleTimeString()} | KTM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
