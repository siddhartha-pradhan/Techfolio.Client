import { MatchHistory } from '@/application/models/dota/MatchHistory';
import React from 'react';
import { Hero } from '@/application/models/dota/Hero';

type RecentMatchHistoryPanelProps = {
    matches: MatchHistory[];
    heroTheme: Hero['theme'];
};

const RecentMatchHistoryPanel = ({ matches, heroTheme }: RecentMatchHistoryPanelProps) => {
    return (
        <div className="space-y-4">
            <div className="font-bold" style={{ color: heroTheme.primary }}>
                RECENT MATCHES
            </div>
            <div className="space-y-2">
                {matches.map((match) => (
                    <div
                        key={match.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                        style={{
                            borderColor: heroTheme.primary,
                            backgroundColor: 'rgba(0,0,0,0.3)',
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className={`w-3 h-3 rounded-full ${match.result === 'Victory' ? 'bg-green-400' : 'bg-red-400'}`}
                            />
                            <div>
                                <div className="font-bold text-sm">{match.result}</div>
                                <div className="text-xs opacity-70">{match.hero}</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-bold">{match.kda}</div>
                            <div className="text-xs opacity-70">{match.duration}</div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-bold text-yellow-400">{match.gpm}</div>
                            <div className="text-xs opacity-70">GPM</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentMatchHistoryPanel;
