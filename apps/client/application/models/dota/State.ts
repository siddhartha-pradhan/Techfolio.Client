import { Match } from '@/application/models/dota/Match';

export type State = {
    gold: number;
    experience: number;
    level: number;
    kills: number;
    assists: number;
    lastHits: number;
    denies: number;
    gpm: number;
    xpm: number;
    gameTime: number;
    isPlaying: boolean;
    currentMatch: Match;
};
