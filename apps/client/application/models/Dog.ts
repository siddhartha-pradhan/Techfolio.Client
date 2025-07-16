export type Dog = {
    id: string;
    age?: number;
    name: string;
    breed: string;
    image: string;
    passedAge?: number;
    datePassed?: string;
    dateJoined?: string;
    description: string;
    personality: string[];
    specialMemory: string;
    status: 'alive' | 'passed';
    dotaHeroEquivalent?: string;
    favoriteActivities: string[];
};
