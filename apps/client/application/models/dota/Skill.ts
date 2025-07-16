export type Skill = {
    id: string;
    name: string;
    icon?: string;
    level: number;
    category: string;
    featured: boolean;
    cooldown?: number;
    manaCost?: number;
    description?: string;
};
