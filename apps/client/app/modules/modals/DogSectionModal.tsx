import React from 'react';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Dog } from '@/application/models/Dog';
import { AnimatePresence, motion } from 'framer-motion';

type DogSectionModalProps = {
    dogs: Dog[];
    showDogsSection: boolean;
    setShowDogsSection: (show: boolean) => void;
};

const DogSectionModal = ({ dogs, showDogsSection, setShowDogsSection }: DogSectionModalProps) => {
    return (
        <AnimatePresence>
            {showDogsSection && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={() => setShowDogsSection(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gray-900 border-2 border-pink-400 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-pink-400">
                            <h2 className="text-3xl font-black text-pink-400">
                                🐕 MY BELOVED PACK
                            </h2>
                            <button
                                onClick={() => setShowDogsSection(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="text-center mb-8">
                                <p className="text-lg opacity-80">
                                    Meet my wonderful companions who bring joy, love, and endless
                                    entertainment to my life.
                                </p>
                                <p className="text-sm opacity-60 mt-2">
                                    They're not just pets, they're family members who teach me about
                                    loyalty, unconditional love, and living in the moment.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {dogs.map((dog) => (
                                    <div
                                        key={dog.id}
                                        className={`border-2 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                                            dog.status === 'passed'
                                                ? 'border-gray-500 bg-gray-800/50'
                                                : 'border-pink-400 bg-gray-800/30'
                                        }`}
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={dog.image || '/placeholder.svg'}
                                                alt={dog.name}
                                                className="w-full h-full object-cover"
                                                crossOrigin="anonymous"
                                            />
                                            {dog.status === 'passed' && (
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                    <div className="text-white text-center">
                                                        <div className="text-2xl mb-2">👼</div>
                                                        <div className="text-sm font-bold">
                                                            Forever in our hearts
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <div className="absolute top-4 right-4">
                                                <Badge
                                                    variant="outline"
                                                    className={`text-xs ${
                                                        dog.status === 'passed'
                                                            ? 'border-gray-400 text-gray-400 bg-black/50'
                                                            : 'border-pink-400 text-pink-400 bg-black/50'
                                                    }`}
                                                >
                                                    {dog.status === 'alive'
                                                        ? `${dog.age} years old`
                                                        : `Passed at ${dog.passedAge}`}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="text-center mb-4">
                                                <h3
                                                    className={`text-2xl font-black mb-1 ${
                                                        dog.status === 'passed'
                                                            ? 'text-gray-300'
                                                            : 'text-pink-400'
                                                    }`}
                                                >
                                                    {dog.name}
                                                </h3>
                                                <p className="text-sm opacity-70">{dog.breed}</p>
                                                <div className="flex justify-center gap-2 mt-2">
                                                    <Badge variant="outline" className="text-xs">
                                                        {dog.dateJoined &&
                                                            `Joined ${dog.dateJoined}`}
                                                    </Badge>
                                                    {dog.datePassed && (
                                                        <Badge
                                                            variant="outline"
                                                            className="text-xs border-gray-500 text-gray-400"
                                                        >
                                                            {dog.datePassed}
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>

                                            <p className="text-sm opacity-80 mb-4 text-center leading-relaxed">
                                                {dog.description}
                                            </p>

                                            <div className="mb-4">
                                                <div className="text-xs font-bold mb-2 text-pink-400">
                                                    PERSONALITY:
                                                </div>
                                                <div className="flex flex-wrap gap-1">
                                                    {dog.personality.map((trait) => (
                                                        <span
                                                            key={trait}
                                                            className="px-2 py-1 bg-pink-400/20 border border-pink-400/30 rounded text-xs"
                                                        >
                                                            {trait}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mb-4">
                                                <div className="text-xs font-bold mb-2 text-pink-400">
                                                    FAVORITE ACTIVITIES:
                                                </div>
                                                <div className="space-y-1">
                                                    {dog.favoriteActivities.map(
                                                        (activity, index) => (
                                                            <div
                                                                key={index}
                                                                className="text-xs opacity-70"
                                                            >
                                                                • {activity}
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>

                                            {dog.dotaHeroEquivalent && (
                                                <div className="mb-4 p-3 bg-black/30 rounded">
                                                    <div className="text-xs font-bold mb-1 text-green-400">
                                                        DOTA HERO EQUIVALENT:
                                                    </div>
                                                    <div className="text-xs opacity-80">
                                                        {dog.dotaHeroEquivalent}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="p-3 bg-yellow-400/10 border border-yellow-400/30 rounded">
                                                <div className="text-xs font-bold mb-1 text-yellow-400">
                                                    SPECIAL MEMORY:
                                                </div>
                                                <div className="text-xs opacity-80 italic">
                                                    "{dog.specialMemory}"
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 text-center">
                                <div className="p-4 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-lg border border-pink-400/30">
                                    <div className="text-sm font-bold text-pink-400 mb-2">
                                        PACK PHILOSOPHY
                                    </div>
                                    <div className="text-sm opacity-80 italic">
                                        "Dogs teach us that the most important things in life aren't
                                        things at all - they're moments of pure joy, unconditional
                                        love, and the simple pleasure of being present with those we
                                        care about."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DogSectionModal;
