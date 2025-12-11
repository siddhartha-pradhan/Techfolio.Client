'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = { trigger: boolean };

const RAMPAGE_DURATION = 3;

const RampageOverlay = ({ trigger }: Props) => {
    const [show, setShow] = useState(false);
    const [remaining, setRemaining] = useState(0);
    const previousOverflow = useRef<string | null>(null);

    useEffect(() => {
        if (!trigger) return;

        setShow(true);
        setRemaining(RAMPAGE_DURATION);

        if (typeof document !== 'undefined') {
            previousOverflow.current = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        }

        const hideTimeout = setTimeout(() => {
            setShow(false);
        }, RAMPAGE_DURATION * 1000);

        const interval = setInterval(() => {
            setRemaining((prev) => (prev > 1 ? prev - 1 : 0));
        }, 1000);

        return () => {
            clearTimeout(hideTimeout);
            clearInterval(interval);

            if (typeof document !== 'undefined') {
                document.body.style.overflow = previousOverflow.current ?? '';
            }
        };
    }, [trigger]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 pointer-events-none flex items-center justify-center z-[55]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                    <motion.div
                        className="absolute inset-0 bg-red-900/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                    <motion.div
                        initial={{ scale: 0.2, rotate: -8, opacity: 0 }}
                        animate={{ scale: 1.05, rotate: 0, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0, y: -40 }}
                        transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 18,
                        }}
                        className="relative text-5xl md:text-7xl font-black text-red-500 drop-shadow-[0_0_30px_rgba(248,113,113,0.9)] text-center"
                    >
                        RAMPAGE!!!
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full text-xs md:text-sm tracking-[0.3em] text-red-200/80">
                            PROJECT.STREAK
                        </div>
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-red-100/90">
                            Closing in {remaining}s...
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RampageOverlay;
