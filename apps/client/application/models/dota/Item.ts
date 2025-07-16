export type Item = {
    id: string;
    name: string;
    icon: string;
    effect: string;
    acquired: boolean;
    description: string;
    rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Immortal';
};
