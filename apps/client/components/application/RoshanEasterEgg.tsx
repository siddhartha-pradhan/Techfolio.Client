'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Hero } from '@/application/models/dota/Hero';

type Props = { selectedHero: Hero };

const RoshanEasterEgg = ({ selectedHero }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                aria-label="roshan-easter-egg"
                onClick={() => setOpen(true)}
                className="text-xs opacity-30 hover:opacity-100 transition"
            >
                🪨
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="max-w-md w-full rounded-xl border p-6 font-mono text-sm text-center bg-slate-950"
                            style={{ borderColor: selectedHero.theme.primary }}
                        >
                            <div className="text-3xl mb-2">🧟‍♂️</div>
                            <h3 className="font-black mb-2">ROSHAN DEFEATED!</h3>
                            <p className="opacity-80 mb-4">
                                Bonus objective complete. You&apos;ve officially over-explored this
                                portfolio.
                            </p>
                            <p style={{ color: selectedHero.theme.accent }}>
                                +1 Aegis of Confidence
                                <br />
                                +500 XP in &quot;Attention to Detail&quot;
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default RoshanEasterEgg;
