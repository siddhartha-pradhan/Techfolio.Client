'use client';

import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { Flame, Sparkles, Star } from 'lucide-react';
import { Hero } from '@/application/models/dota/Hero';
import { Item } from '@/application/models/dota/Item';

type ItemsPanelProps = {
    items: Item[];
    heroTheme: Hero['theme'];
};

const ItemsPanel = ({ items, heroTheme }: ItemsPanelProps) => {
    return (
        <div className="space-y-4">
            <div className="font-bold" style={{ color: heroTheme.primary }}>
                INVENTORY
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
                {Array.from({ length: 6 }, (_, index) => {
                    const item = items[index];
                    return (
                        <div
                            key={index}
                            className="aspect-square border-2 rounded-lg flex items-center justify-center relative"
                            style={{
                                backgroundColor: 'rgba(0,0,0,0.3)',
                                borderColor: item
                                    ? item.rarity === 'Immortal'
                                        ? '#FFD700'
                                        : item.rarity === 'Legendary'
                                          ? '#FF6B35'
                                          : item.rarity === 'Epic'
                                            ? '#9B59B6'
                                            : item.rarity === 'Rare'
                                              ? '#3498DB'
                                              : '#95A5A6'
                                    : '#374151',
                            }}
                        >
                            {item ? (
                                <>
                                    <div className="text-2xl">{item.icon}</div>
                                    <div className="absolute top-2 right-2">
                                        {item.rarity === 'Immortal' && (
                                            <Sparkles className="w-3 h-3 text-yellow-400" />
                                        )}
                                        {item.rarity === 'Legendary' && (
                                            <Star className="w-3 h-3 text-orange-400" />
                                        )}
                                        {item.rarity === 'Epic' && (
                                            <Flame className="w-3 h-3 text-purple-400" />
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="text-gray-600 text-xs">Empty</div>
                            )}
                        </div>
                    );
                })}
            </div>

            {items.length > 0 && (
                <div className="space-y-2">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="text-xs p-2 border rounded"
                            style={{ borderColor: heroTheme.primary }}
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <span>{item.icon}</span>
                                <span className="font-bold">{item.name}</span>
                                <Badge variant="outline" className="text-xs">
                                    {item.rarity}
                                </Badge>
                            </div>
                            <div className="opacity-70">{item.effect}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemsPanel;
