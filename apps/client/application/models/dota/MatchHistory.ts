export type MatchHistory = {
    id: number;
    result: 'Victory' | 'Defeat' | 'In Progress';
    duration: string;
    kda: string;
    hero: string;
    gpm: number;
};
