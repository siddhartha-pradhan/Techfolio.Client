'use client';

import React, { JSX, useRef } from 'react';
import { Play } from 'lucide-react';
import { useInView } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Hero } from '@/application/models/dota/Hero';
import { Project } from '@/application/models/Project';
import { GenericService } from '@/application/services/GenericService';

type ProjectsSectionProps = {
    isDarkMode: boolean;
    selectedHero: Hero;
    projects: Project[];
    getProjectIcon: (type: string) => JSX.Element;
    getDifficultyColor: (difficulty: string) => string;
};

const ProjectsSection = ({
    isDarkMode,
    selectedHero,
    projects,
    getDifficultyColor,
    getProjectIcon,
}: ProjectsSectionProps) => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const inView = useInView(sectionRef, {
        once: true,
        margin: '-20% 0px -20% 0px',
    });

    return (
        <section ref={sectionRef} className="py-16 lg:py-20 relative">
            {/* TODO: Fix for Rampage Overlay */}
            {/* <RampageOverlay trigger={inView} /> */}

            <div className="container mx-auto px-4 lg:px-6">
                <div className="mb-12 lg:mb-16 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black mb-4">
                        <span style={{ color: selectedHero.theme.primary }}>{'>'}</span>{' '}
                        PROJECT.REPOSITORY
                    </h2>
                    <div className="text-sm lg:text-base opacity-70">
                        Epic quests and legendary code artifacts
                    </div>
                </div>

                <div className="space-y-6 lg:space-y-8">
                    {projects.map((project, index) => (
                        <Card
                            key={project.id}
                            className="border-2 transition-all duration-300 overflow-hidden hover:shadow-xl relative"
                            style={{
                                backgroundColor: isDarkMode
                                    ? 'rgba(0,0,0,0.5)'
                                    : 'rgba(255,255,255,0.5)',
                                borderColor: GenericService.getDifficultyColor(
                                    project.difficulty || 'Medium',
                                ),
                            }}
                        >
                            {project.difficulty === 'Legendary' && (
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse" />
                            )}

                            <div className="p-6 lg:p-8 relative z-10">
                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <div
                                            className="text-xl lg:text-2xl font-black"
                                            style={{ color: selectedHero.theme.primary }}
                                        >
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        <div
                                            className="p-2 rounded"
                                            style={{
                                                backgroundColor: selectedHero.theme.primary + '20',
                                                color: selectedHero.theme.primary,
                                            }}
                                        >
                                            {getProjectIcon(project.type)}
                                        </div>

                                        <h3 className="text-xl lg:text-2xl font-black break-all">
                                            {project.name}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        {project.preview && (
                                            <div className="text-2xl">{project.preview}</div>
                                        )}

                                        {project.difficulty && (
                                            <Badge
                                                variant="outline"
                                                className="text-xs"
                                                style={{
                                                    borderColor: getDifficultyColor(
                                                        project.difficulty,
                                                    ),
                                                    color: getDifficultyColor(project.difficulty),
                                                }}
                                            >
                                                {project.difficulty}
                                            </Badge>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
                                    <div>
                                        <div className="text-xs lg:text-sm opacity-70 font-mono break-words">
                                            TYPE: {project.type} | LINES: {project.lines} | COMMITS:{' '}
                                            {project.commits} | STATUS:
                                            <span
                                                className="ml-1"
                                                style={{ color: selectedHero.theme.primary }}
                                            >
                                                {project.status}
                                            </span>
                                        </div>

                                        {project.dotaEquivalent && (
                                            <div
                                                className="text-xs mt-1"
                                                style={{ color: selectedHero.theme.accent }}
                                            >
                                                🎮 DOTA Equivalent: {project.dotaEquivalent}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex lg:justify-end">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="font-bold"
                                            style={{ color: selectedHero.theme.primary }}
                                            asChild
                                        >
                                            <a
                                                href={project.githubUrl || '#'}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Play className="w-4 h-4 mr-2" />
                                                INSPECT
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                <p className="mb-6 leading-relaxed text-sm lg:text-base opacity-80">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 border text-xs font-bold rounded"
                                            style={{
                                                backgroundColor: isDarkMode ? 'black' : 'white',
                                                borderColor: selectedHero.theme.primary,
                                                color: selectedHero.theme.primary,
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
