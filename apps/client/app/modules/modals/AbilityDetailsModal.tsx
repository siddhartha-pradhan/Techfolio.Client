import React from 'react';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Hero } from '@/application/models/dota/Hero';
import { AnimatePresence, motion } from 'framer-motion';
import { Ability } from '@/application/models/dota/Ability';

type AbilityDetailsPanelProps = {
    selectedHero: Hero;
    selectedAbility: Ability;
    showAbilityDetails: boolean;
    setShowAbilityDetails: (isAbilityShown: boolean) => void;
};
const AbilityDetailsModal = ({
    selectedHero,
    selectedAbility,
    showAbilityDetails,
    setShowAbilityDetails,
}: AbilityDetailsPanelProps) => {
    return (
        <AnimatePresence>
            {showAbilityDetails && selectedAbility && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={() => setShowAbilityDetails(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gray-900 border-2 rounded-lg w-full max-w-md"
                        style={{ borderColor: selectedHero.theme.primary }}
                    >
                        <div
                            className="flex items-center justify-between p-4 border-b"
                            style={{ borderColor: selectedHero.theme.primary }}
                        >
                            <h3
                                className="text-xl font-black"
                                style={{ color: selectedAbility.name }}
                            >
                                {selectedAbility.name}
                            </h3>
                            <button
                                onClick={() => setShowAbilityDetails(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="text-center">
                                <div className="text-4xl mb-2">{selectedAbility.icon}</div>
                                <Badge
                                    variant="outline"
                                    className="mb-4"
                                    style={{
                                        borderColor:
                                            selectedAbility.type === 'ultimate'
                                                ? '#FFD700'
                                                : selectedHero.theme.primary,
                                        color:
                                            selectedAbility.type === 'ultimate'
                                                ? '#FFD700'
                                                : selectedHero.theme.primary,
                                    }}
                                >
                                    {selectedAbility.type.toUpperCase()}
                                </Badge>
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <div
                                        className="text-sm font-bold mb-1"
                                        style={{ color: selectedHero.theme.primary }}
                                    >
                                        DESCRIPTION:
                                    </div>
                                    <div className="text-sm opacity-80">
                                        {selectedAbility.description}
                                    </div>
                                </div>

                                {selectedAbility.effect && (
                                    <div>
                                        <div
                                            className="text-sm font-bold mb-1"
                                            style={{ color: selectedHero.theme.primary }}
                                        >
                                            EFFECT:
                                        </div>
                                        <div className="text-sm opacity-80">
                                            {selectedAbility.effect}
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <div
                                            className="font-bold"
                                            style={{ color: selectedHero.theme.primary }}
                                        >
                                            Level:
                                        </div>
                                        <div>
                                            {selectedAbility.level}/{selectedAbility.maxLevel}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-blue-400">Mana Cost:</div>
                                        <div>{selectedAbility.manaCost} 💧</div>
                                    </div>
                                    {selectedAbility.cooldown > 0 && (
                                        <div className="col-span-2">
                                            <div className="font-bold text-gray-400">Cooldown:</div>
                                            <div>{selectedAbility.cooldown} seconds</div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <Button
                                className="w-full font-bold"
                                style={{
                                    backgroundColor: selectedHero.theme.primary,
                                    color: 'black',
                                }}
                                onClick={() => setShowAbilityDetails(false)}
                            >
                                CLOSE
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AbilityDetailsModal;
