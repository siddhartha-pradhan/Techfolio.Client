export type Ability = {
    id: string;
    name: string;
    icon: string;
    level: number;
    effect?: string;
    maxLevel: number;
    manaCost: number;
    cooldown: number;
    description: string;
    type: 'basic' | 'ultimate';
};
