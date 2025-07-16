import React from 'react';
import { Star } from 'lucide-react';
import { Hero } from '@/application/models/dota/Hero';
import { Ability } from '@/application/models/dota/Ability';

type AbilitiesPanelProps = {
    abilities: Ability[];
    heroTheme: Hero['theme'];
    onAbilityClick: (ability: Ability) => void;
};

const AbilitiesPanel = ({ abilities, heroTheme, onAbilityClick }: AbilitiesPanelProps) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {abilities.map((ability) => (
                <div
                    key={ability.id}
                    onClick={() => onAbilityClick(ability)}
                    className="border-2 p-3 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 relative"
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        borderColor: ability.type === 'ultimate' ? '#FFD700' : heroTheme.primary,
                    }}
                >
                    <div className="text-2xl mb-2 text-center">{ability.icon}</div>
                    <div className="text-xs font-bold text-center mb-1">{ability.name}</div>
                    <div className="text-xs text-center opacity-70 mb-2">{ability.description}</div>

                    <div className="flex justify-between text-xs">
                        <span style={{ color: heroTheme.primary }}>Lv.{ability.level}</span>
                        <span className="text-blue-400">{ability.manaCost}💧</span>
                    </div>

                    {ability.cooldown > 0 && (
                        <div className="text-xs text-center mt-1 text-gray-400">
                            CD: {ability.cooldown}s
                        </div>
                    )}

                    {ability.type === 'ultimate' && (
                        <div className="absolute top-2 right-2 text-yellow-400">
                            <Star className="w-4 h-4" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AbilitiesPanel;
