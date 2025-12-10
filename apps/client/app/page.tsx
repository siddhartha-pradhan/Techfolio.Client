'use client';

import { Code2 } from 'lucide-react';
import Header from '@/app/modules/Header';
import Footer from '@/app/modules/Footer';
import React, { JSX, ReactNode } from 'react';
import BootScreen from '@/app/modules/BootScreen';
import { motion, useScroll, useSpring } from 'framer-motion';
import SkillsSection from '@/app/modules/sections/SkillsSection';
import DotaPanelModal from '@/app/modules/modals/DotaPanelModal';
import { useEffect, useState, useCallback, useMemo } from 'react';
import ContactSection from '@/app/modules/sections/ContactSection';
import DogSectionModal from '@/app/modules/modals/DogSectionModal';
import PersonalSection from '@/app/modules/sections/PersonalSection';
import ProjectsSection from '@/app/modules/sections/ProjectsSection';
import HeroSelectorModal from '@/app/modules/modals/HeroSelectorModal';
import ThemeToggleButton from '@/app/modules/toggles/ThemeToggleButton';
import ExperiencesSection from '@/app/modules/sections/ExperiencesSection';
import AbilityDetailsModal from '@/app/modules/modals/AbilityDetailsModal';
import SurpriseLootSection from '@/app/modules/sections/SurpriseLootSection';
import TerminalConsoleModal from '@/app/modules/modals/TerminalConsoleModal';
import AchievementsSection from '@/app/modules/sections/AchievementsSection';
import DotaPanelToggleButton from '@/app/modules/toggles/DotaPanelToggleButton';

//#region Models and Services
import { Dog } from '@/application/models/Dog';
import { Hero } from '@/application/models/dota/Hero';
import { Company } from '@/application/models/Company';
import { Project } from '@/application/models/Project';
import { Skill } from '@/application/models/dota/Skill';
import { State } from '@/application/models/dota/State';
import { Ability } from '@/application/models/dota/Ability';
import { Achievement } from '@/application/models/Achievement';
import { MatchHistory } from '@/application/models/dota/MatchHistory';
import { GenericService } from '@/application/services/GenericService';
//#endregion

const AnimatedSection = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
    <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
            once: true,
            amount: 0.15,
            margin: '0px 0px -10% 0px',
        }}
        transition={{
            duration: 0.55,
            ease: [0.22, 0.61, 0.36, 1],
            delay,
        }}
    >
        {children}
    </motion.section>
);

export default function Portfolio() {
    //#region State Management
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isDarkMode, setIsDarkMode] = useState(true);

    const [skills] = useState<Skill[]>(GenericService.getSkills());
    const [projects] = useState<Project[]>(GenericService.getProjects());
    const [companies] = useState<Company[]>(GenericService.getCompanies());
    const [achievements] = useState<Achievement[]>(GenericService.getAchievements());
    const [personalInformation] = useState<PersonalInformation>(
        GenericService.getPersonalInformation(),
    );

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isBooting, setIsBooting] = useState(true);

    const [showTerminal, setShowTerminal] = useState(false);
    const [terminalInput, setTerminalInput] = useState('');
    const [terminalHistory, setTerminalHistory] = useState<string[]>([]);

    const [selectedAbility, setSelectedAbility] = useState<Ability>();
    const [showDotaPanel, setShowDotaPanel] = useState(false);
    const [showHeroSelector, setShowHeroSelector] = useState(false);
    const [showAbilityDetails, setShowAbilityDetails] = useState(false);
    const [gameState, setGameState] = useState<State>(GenericService.getDotaState());
    const [selectedHero, setSelectedHero] = useState<Hero>(GenericService.getDotaHeroes()[0]);
    const [matchHistory] = useState<MatchHistory[]>(GenericService.getRecentDotaMatchHistories());

    const [dogs] = useState<Dog[]>(GenericService.getDogs());
    const [showDogsSection, setShowDogsSection] = useState(false);
    //#endregion

    //#region Scroll progress (top progress bar)
    const { scrollYProgress } = useScroll();
    const scrollProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 20,
        restDelta: 0.001,
    });
    //#endregion

    const githubStats = useMemo(() => GenericService.getGitHubStats(), []);

    useEffect(() => {
        const timer = setTimeout(() => setIsBooting(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const loadData = () => {
            try {
                const heroes = GenericService.getDotaHeroes();
                const savedHero = localStorage.getItem('portfolio-selected-hero');

                if (savedHero) {
                    const hero = heroes.find((x) => x.id === savedHero) || heroes[0];
                    setSelectedHero(hero);
                }
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        loadData();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (gameState.isPlaying) {
                setGameState((prev) => ({
                    ...prev,
                    gameTime: prev.gameTime + 1,
                    gold: prev.gold + Math.floor(Math.random() * 5) + 1,
                    experience: Math.min(
                        prev.experience + Math.floor(Math.random() * 3),
                        selectedHero.stats.maxExperience,
                    ),
                }));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [gameState.isPlaying, selectedHero.stats.maxExperience]);

    const toggleTheme = useCallback(() => {
        setIsDarkMode(!isDarkMode);
    }, [isDarkMode]);

    const selectHero = useCallback((hero: Hero) => {
        setSelectedHero(hero);
        setShowHeroSelector(false);
        localStorage.setItem('portfolio-selected-hero', hero.id);

        setGameState((prev) => ({
            ...prev,
            level: hero.stats.level,
            experience: hero.stats.experience,
        }));
    }, []);

    const onAbilityClick = useCallback((ability: Ability) => {
        setSelectedAbility(ability);
        setShowAbilityDetails(true);
    }, []);

    const handleTerminalCommand = useCallback(
        (command: string) => {
            const response = GenericService.handleTerminalCommand(
                command,
                {
                    projects,
                    skills,
                    personalInformation,
                    achievements,
                    selectedHero,
                    gameState,
                    dogs,
                },
                {
                    setShowHeroSelector: () => setShowHeroSelector(true),
                    setShowDotaPanel: () => setShowDotaPanel(true),
                    setShowDogsSection: () => setShowDogsSection(true),
                    clearTerminal: () => setTerminalHistory([]),
                },
            );

            if (response !== null) {
                setTerminalHistory((prev) => [...prev, `> ${command}`, response]);
            }
        },
        [
            projects,
            skills,
            personalInformation,
            achievements,
            selectedHero,
            gameState,
            dogs,
            setShowHeroSelector,
            setShowDotaPanel,
            setShowDogsSection,
            setTerminalHistory,
        ],
    );

    const getDifficultyColor = useCallback(GenericService.getDifficultyColor, []);
    const getRarityColor = useCallback(GenericService.getRarityColor, []);
    const getProjectIcon = useCallback((type: string): JSX.Element => {
        const iconFactory = GenericService.getProjectIconMap[type];
        return iconFactory ? iconFactory() : <Code2 className="w-6 h-6" />;
    }, []);

    const featuredSkills = useMemo(() => skills.filter((s) => s.featured), [skills]);
    const featuredProjects = useMemo(() => projects.filter((p) => p.featured), [projects]);
    const featuredCompanies = useMemo(() => companies.filter((c) => c.featured), [companies]);
    const featuredAchievements = useMemo(
        () => achievements.filter((a) => a.featured),
        [achievements],
    );
    const dotaAchievements = useMemo(
        () => achievements.filter((a) => a.type === 'dota'),
        [achievements],
    );

    if (isBooting) {
        return <BootScreen />;
    }

    return (
        <div
            className="min-h-screen font-mono overflow-x-hidden"
            style={{
                background: isDarkMode
                    ? selectedHero.theme.background
                    : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                color: isDarkMode ? 'white' : '#1a1a1a',
            }}
        >
            {/* Scroll progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
                style={{
                    scaleX: scrollProgress,
                    backgroundColor: selectedHero.theme.accent,
                }}
            />

            <Header
                date={currentTime}
                gameState={gameState}
                isDarkMode={isDarkMode}
                selectedHero={selectedHero}
                isTerminalOpen={showTerminal}
                isDotaPanelOpen={showDotaPanel}
                isMobileMenuOpen={mobileMenuOpen}
                setShowTerminal={setShowTerminal}
                isDogsSectionOpen={showDogsSection}
                setShowDotaPanel={setShowDotaPanel}
                isHeroSelectorOpen={showHeroSelector}
                setShowMobileMenu={setMobileMenuOpen}
                setShowDogsSection={setShowDogsSection}
                setShowHeroSelector={setShowHeroSelector}
            />

            {/* Modals */}
            <DotaPanelModal
                gameState={gameState}
                matches={matchHistory}
                selectedHero={selectedHero}
                showDotaPanel={showDotaPanel}
                onAbilityClick={onAbilityClick}
                getRarityColor={getRarityColor}
                dotaAchievements={dotaAchievements}
                setShowDotaPanel={setShowDotaPanel}
            />

            <AbilityDetailsModal
                selectedHero={selectedHero}
                showAbilityDetails={showAbilityDetails}
                selectedAbility={selectedAbility as Ability}
                setShowAbilityDetails={setShowAbilityDetails}
            />

            <HeroSelectorModal
                heroes={GenericService.getDotaHeroes()}
                selectHero={selectHero}
                selectedHero={selectedHero}
                showHeroSelector={showHeroSelector}
                setShowHeroSelector={setShowHeroSelector}
            />

            <TerminalConsoleModal
                gameState={gameState}
                selectedHero={selectedHero}
                showTerminal={showTerminal}
                terminalInput={terminalInput}
                terminalHistory={terminalHistory}
                setShowTerminal={setShowTerminal}
                setTerminalInput={setTerminalInput}
                handleTerminalCommand={handleTerminalCommand}
            />

            <DogSectionModal
                dogs={dogs}
                showDogsSection={showDogsSection}
                setShowDogsSection={setShowDogsSection}
            />

            <AnimatedSection>
                <PersonalSection
                    gameState={gameState}
                    isDarkMode={isDarkMode}
                    githubStats={githubStats}
                    selectedHero={selectedHero}
                    setShowDotaPanel={setShowDotaPanel}
                    personalInformation={personalInformation}
                />
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
                <AchievementsSection
                    isDarkMode={isDarkMode}
                    selectedHero={selectedHero}
                    getRarityColor={getRarityColor}
                    featuredAchievements={featuredAchievements}
                />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
                <SkillsSection
                    isDarkMode={isDarkMode}
                    selectedHero={selectedHero}
                    featuredSkills={featuredSkills}
                />
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
                <ExperiencesSection
                    isDarkMode={isDarkMode}
                    selectedHero={selectedHero}
                    companies={featuredCompanies}
                />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
                <ProjectsSection
                    isDarkMode={isDarkMode}
                    selectedHero={selectedHero}
                    projects={featuredProjects}
                    getProjectIcon={getProjectIcon}
                    getDifficultyColor={getDifficultyColor}
                />
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
                <ContactSection
                    isDarkMode={isDarkMode}
                    selectedHero={selectedHero}
                    personalInformation={personalInformation}
                />
            </AnimatedSection>

            <SurpriseLootSection selectedHero={selectedHero} />

            <Footer
                gameState={gameState}
                isDarkMode={isDarkMode}
                selectedHero={selectedHero}
                personalInformation={personalInformation}
            />

            <ThemeToggleButton
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
                selectedHero={selectedHero}
            />

            <DotaPanelToggleButton
                isDarkMode={isDarkMode}
                selectedHero={selectedHero}
                setShowDotaPanel={setShowDotaPanel}
            />
        </div>
    );
}
