export type Achievement = {
    id: string;
    icon: string;
    date: string;
    title: string;
    featured: boolean;
    description: string;
    dotaReference?: string;
    rarity?: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Immortal';
    type: 'certification' | 'freelancing' | 'contribution' | 'milestone' | 'dota';
};
