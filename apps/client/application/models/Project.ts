export type Project = {
    id: string;
    name: string;
    type: string;
    lines: string;
    tech: string[];
    status: string;
    commits: string;
    preview?: string;
    liveUrl?: string;
    featured: boolean;
    githubUrl?: string;
    description: string;
    dotaEquivalent?: string;
    difficulty?: 'Easy' | 'Medium' | 'Hard' | 'Legendary';
};
