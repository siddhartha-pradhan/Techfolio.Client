'use client';

import React, { useEffect, useRef } from 'react';
import { Hero } from '@/application/models/dota/Hero';
import { State } from '@/application/models/dota/State';
import { AnimatePresence, motion } from 'framer-motion';

type TerminalConsoleModalProps = {
    gameState: State;
    selectedHero: Hero;
    showTerminal: boolean;
    terminalInput: string;
    terminalHistory: string[];
    setShowTerminal: (show: boolean) => void;
    setTerminalInput: (input: string) => void;
    handleTerminalCommand: (command: string) => void;
};

const TerminalConsoleModal = ({
    gameState,
    selectedHero,
    showTerminal,
    terminalInput,
    terminalHistory,
    setShowTerminal,
    setTerminalInput,
    handleTerminalCommand,
}: TerminalConsoleModalProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [terminalHistory, showTerminal]);

    return (
        <AnimatePresence>
            {showTerminal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={() => setShowTerminal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-black border-2 border-green-400 rounded-lg w-full max-w-4xl h-96 flex flex-col"
                    >
                        <div className="bg-green-400 text-black px-4 py-2 font-bold flex items-center justify-between">
                            <span>
                                DOTA TERMINAL.EXE - {selectedHero.name} {selectedHero.icon} [Level{' '}
                                {selectedHero.stats.level}]
                            </span>
                            <button
                                onClick={() => setShowTerminal(false)}
                                className="hover:bg-green-300 px-2 rounded"
                            >
                                ×
                            </button>
                        </div>
                        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto">
                            <div className="space-y-2 text-green-400 text-sm">
                                <div>
                                    Welcome to Siddhartha's DOTA-Enhanced Interactive Terminal!
                                </div>
                                <div>
                                    Type 'help' for available commands. New DOTA commands: stats,
                                    abilities, items, match, rampage, gg
                                </div>
                                <div className="text-yellow-400">
                                    Current Hero: {selectedHero.name} - "{selectedHero.devQuote}"
                                </div>
                                <div className="text-blue-400">
                                    Stats: Level {selectedHero.stats.level} | Gold: {gameState.gold}{' '}
                                    | GPM: {gameState.gpm}
                                </div>
                                <div>---</div>
                                {terminalHistory.map((line, index) => (
                                    <div
                                        key={index}
                                        className={
                                            line.startsWith('>')
                                                ? 'text-green-400'
                                                : 'text-gray-300'
                                        }
                                    >
                                        {line}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-green-400 p-4">
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">
                                    siddhartha@{selectedHero.id}:~$
                                </span>
                                <input
                                    type="text"
                                    value={terminalInput}
                                    onChange={(e) => setTerminalInput(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            handleTerminalCommand(terminalInput);
                                            setTerminalInput('');
                                        }
                                    }}
                                    className="flex-1 bg-transparent text-green-400 outline-none"
                                    placeholder="Type a command... (try 'dota' or 'rampage')"
                                    autoFocus
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TerminalConsoleModal;
