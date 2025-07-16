import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Calendar, ExternalLink } from 'lucide-react';
import { Hero } from '@/application/models/dota/Hero';
import { Company } from '@/application/models/Company';

type ExperiencesSectionProps = {
    isDarkMode: boolean;
    selectedHero: Hero;
    companies: Company[];
};

const ExperiencesSection = ({ isDarkMode, selectedHero, companies }: ExperiencesSectionProps) => {
    return (
        <section
            className="py-16 lg:py-20"
            style={{
                backgroundColor: isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
            }}
        >
            <div className="container mx-auto px-4 lg:px-6">
                <div className="mb-12 lg:mb-16 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black mb-4">
                        <span style={{ color: selectedHero.theme.primary }}>{'>'}</span>{' '}
                        GUILD.AFFILIATIONS
                    </h2>
                    <div className="text-sm lg:text-base opacity-70">
                        Professional guilds and faction alliances
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {companies.map((company, index) => (
                        <Card
                            key={company.id}
                            className="border-2 transition-all duration-300 overflow-hidden hover:shadow-xl h-full"
                            style={{
                                backgroundColor: isDarkMode
                                    ? 'rgba(0,0,0,0.5)'
                                    : 'rgba(255,255,255,0.5)',
                                borderColor: selectedHero.theme.primary,
                            }}
                        >
                            <div className="p-6 lg:p-8 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="text-3xl lg:text-4xl">
                                            {company.logo || '🏢'}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg lg:text-xl font-black mb-1">
                                                {company.name}
                                            </h3>
                                            <div
                                                className="text-sm font-bold mb-1"
                                                style={{ color: selectedHero.theme.primary }}
                                            >
                                                {company.position}
                                            </div>
                                            <div className="text-xs opacity-70 flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {company.duration}
                                            </div>
                                            {company.dotaGuild && (
                                                <Badge
                                                    variant="outline"
                                                    className="text-xs mt-1"
                                                    style={{
                                                        borderColor: selectedHero.theme.accent,
                                                        color: selectedHero.theme.accent,
                                                    }}
                                                >
                                                    {company.dotaGuild}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className="text-2xl lg:text-3xl font-black"
                                        style={{ color: selectedHero.theme.primary }}
                                    >
                                        #{index + 1}
                                    </div>
                                </div>

                                <p className="mb-4 lg:mb-6 leading-relaxed flex-1 text-sm lg:text-base opacity-80">
                                    {company.description}
                                </p>

                                {company.website && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="font-bold w-full bg-transparent"
                                        style={{
                                            borderColor: selectedHero.theme.primary,
                                            color: selectedHero.theme.primary,
                                        }}
                                        asChild
                                    >
                                        <a href={company.website} target="_blank" rel="noreferrer">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            VISIT GUILD
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperiencesSection;
