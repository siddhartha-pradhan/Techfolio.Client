'use client';

import { useState } from 'react';
import { Hero } from '@/application/models/dota/Hero';
import { motion, AnimatePresence } from 'framer-motion';

type Gift = 'aghanims' | 'refresher' | 'aegis' | null;

type Props = {
    selectedHero: Hero;
};

const gifts: { id: Gift; label: string; description: string; icon: string }[] = [
    {
        id: 'aghanims',
        label: "Aghanim's Scepter",
        icon: '🔱',
        description: 'Upgrades your viewing experience with a burst of particle effects.',
    },
    {
        id: 'refresher',
        label: 'Refresher Orb',
        icon: '🟢',
        description: 'Resets animations so you can re-enjoy everything again.',
    },
    {
        id: 'aegis',
        label: 'Aegis of the Immortal',
        icon: '🛡️',
        description: 'Grants a stylish second-life overlay and outro message.',
    },
];

const SurpriseLootSection = ({ selectedHero }: Props) => {
    const [selected, setSelected] = useState<Gift>(null);

    return (
        <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4 lg:px-6 text-center">
                <h2 className="text-2xl lg:text-3xl font-black mb-4">
                    <span style={{ color: selectedHero.theme.primary }}>{'>'}</span>{' '}
                    THANK.YOU.FOR.SCROLLING
                </h2>
                <p className="text-sm opacity-70 mb-6">
                    You reached the end of the lane. Pick your surprise loot:
                </p>

                <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {gifts.map((gift) => (
                        <motion.button
                            key={gift.id}
                            onClick={() => setSelected(gift.id)}
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="p-4 rounded-lg border text-left bg-black/40 flex flex-col h-full"
                            style={{ borderColor: selectedHero.theme.primary }}
                        >
                            <div className="text-3xl mb-2">{gift.icon}</div>
                            <div className="font-bold mb-1">{gift.label}</div>
                            <div className="text-xs opacity-70 flex-1">{gift.description}</div>
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence>
                    {selected && (
                        <motion.div
                            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[70] p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                        >
                            <motion.div
                                onClick={(e) => e.stopPropagation()}
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                className="max-w-md w-full rounded-xl border p-6 font-mono text-sm bg-slate-950 text-left"
                                style={{ borderColor: selectedHero.theme.primary }}
                            >
                                {selected === 'aghanims' && (
                                    <>
                                        <div className="text-3xl mb-2">🔱</div>
                                        <h3 className="font-black mb-2">Aghanim&apos;s Upgrade</h3>
                                        <p className="mb-2 opacity-80">
                                            Your UI sense has been upgraded. Animations feel
                                            snappier, colors more vibrant, and your portfolio crits
                                            harder on recruiters.
                                        </p>
                                        <p style={{ color: selectedHero.theme.accent }}>
                                            Passive: +25% chance to impress on first glance.
                                        </p>
                                    </>
                                )}

                                {selected === 'refresher' && (
                                    <>
                                        <div className="text-3xl mb-2">🔄</div>
                                        <h3 className="font-black mb-2">Refresher Orb Activated</h3>
                                        <p className="mb-2 opacity-80">
                                            All cooldowns reset. Scroll back up and watch the
                                            animations and reveals trigger again like a fresh match.
                                        </p>
                                        <button
                                            className="mt-3 text-xs underline"
                                            onClick={() => {
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                        >
                                            Cast Refresher: Scroll to Top
                                        </button>
                                    </>
                                )}

                                {selected === 'aegis' && (
                                    <>
                                        <div className="text-3xl mb-2">🛡️</div>
                                        <h3 className="font-black mb-2">Aegis of the Immortal</h3>
                                        <p className="mb-2 opacity-80">
                                            Even if this tab closes, your visit has already
                                            respawned as motivation.
                                        </p>
                                        <p style={{ color: selectedHero.theme.accent }}>
                                            &quot;Thanks for making it all the way here. See you in
                                            the next match.&quot;
                                        </p>
                                    </>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default SurpriseLootSection;
