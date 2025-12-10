'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Hero } from '@/application/models/dota/Hero';

type ContactSectionProps = {
    isDarkMode: boolean;
    selectedHero: Hero;
    personalInformation: PersonalInformation;
};

const ContactSection = ({ isDarkMode, selectedHero, personalInformation }: ContactSectionProps) => {
    return (
        <section
            className="py-16 lg:py-20"
            style={{
                backgroundColor: isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)',
            }}
        >
            <div className="container mx-auto px-4 lg:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-black mb-4">
                            <span className="hidden lg:block text-4xl">
                                <span style={{ color: selectedHero.theme.primary }}>{'>'}</span>{' '}
                                ESTABLISH.CONNECTION
                            </span>
                            <span className="block lg:hidden text-3xl leading-tight">
                                <span style={{ color: selectedHero.theme.primary }}>{'>'}</span>{' '}
                                <br />
                                ESTABLISH
                                <br />
                                <span>.</span>
                                <br />
                                <span>CONNECTION</span>
                            </span>
                        </h2>
                        <div className="text-sm lg:text-base opacity-70">
                            Ready to party up for your next epic project
                        </div>
                    </div>

                    <div
                        className="border-2 rounded-lg overflow-hidden"
                        style={{
                            backgroundColor: isDarkMode
                                ? 'rgba(0,0,0,0.5)'
                                : 'rgba(255,255,255,0.5)',
                            borderColor: selectedHero.theme.primary,
                        }}
                    >
                        <div
                            className="px-4 lg:px-6 py-3 font-bold text-black"
                            style={{ backgroundColor: selectedHero.theme.primary }}
                        >
                            CONTACT.INTERFACE.EXE - {selectedHero.name} {selectedHero.icon} [Level{' '}
                            {selectedHero.stats.level}]
                        </div>
                        <div className="p-6 lg:p-8">
                            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                                <div className="space-y-4">
                                    <div
                                        className="font-bold mb-4"
                                        style={{ color: selectedHero.theme.primary }}
                                    >
                                        AVAILABLE CHANNELS:
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            {
                                                icon: <Mail className="w-4 h-4 lg:w-5 lg:h-5" />,
                                                label: 'EMAIL.PROTOCOL',
                                                href: `mailto:${personalInformation.email}`,
                                            },
                                            {
                                                icon: <Github className="w-4 h-4 lg:w-5 lg:h-5" />,
                                                label: 'GITHUB.REPOSITORY',
                                                href: personalInformation.githubUrl,
                                            },
                                            {
                                                icon: (
                                                    <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
                                                ),
                                                label: 'LINKEDIN.NETWORK',
                                                href: personalInformation.linkedinUrl,
                                            },
                                        ].map((contact) => (
                                            <a
                                                key={contact.label}
                                                href={contact.href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-3 transition-colors font-mono text-sm lg:text-base opacity-80 hover:opacity-100"
                                                style={{ color: selectedHero.theme.accent }}
                                            >
                                                {contact.icon}
                                                <span>{contact.label}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div
                                        className="font-bold mb-4"
                                        style={{ color: selectedHero.theme.primary }}
                                    >
                                        PLAYER.STATUS:
                                    </div>
                                    <div className="space-y-2 text-xs lg:text-sm font-mono">
                                        {[
                                            {
                                                label: 'AVAILABILITY:',
                                                value: 'LOOKING FOR PARTY',
                                            },
                                            { label: 'RESPONSE TIME:', value: '< 24 HOURS' },
                                            { label: 'TIMEZONE:', value: 'UTC+5:45' },
                                            {
                                                label: 'PREFERRED ROLE:',
                                                value: 'CARRY/SUPPORT',
                                            },
                                            { label: 'TECH STACK:', value: '.NET / TS  ECOSYSTEM' },
                                            {
                                                label: 'CURRENT HERO:',
                                                value: selectedHero.name.toUpperCase(),
                                            },
                                            { label: 'DOTA RANK:', value: 'ANCIENT' },
                                            { label: 'PARTY SIZE:', value: '1-5 DEVELOPERS' },
                                        ].map((stat) => (
                                            <div key={stat.label} className="flex justify-between">
                                                <span className="opacity-70">{stat.label}</span>
                                                <span
                                                    style={{
                                                        color: selectedHero.theme.primary,
                                                    }}
                                                >
                                                    {stat.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
