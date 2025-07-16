import { Item } from '@/application/models/dota/Item';
import { Stats } from '@/application/models/dota/Stats';
import { Theme } from '@/application/models/dota/Theme';
import { Ability } from '@/application/models/dota/Ability';

export interface Hero {
    id: string;
    name: string;
    title: string;
    description: string;
    abilities: Ability[];
    quote: string;
    devQuote: string;
    theme: Theme;
    icon: string;
    stats: Stats;
    items: Item[];
    ultimateUnlocked: boolean;
}
