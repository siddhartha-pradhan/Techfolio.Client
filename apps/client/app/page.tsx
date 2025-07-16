'use client';

import React, { JSX } from 'react';
import { Code2 } from 'lucide-react';
import Header from '@/app/modules/Header';
import Footer from '@/app/modules/Footer';
import BootScreen from '@/app/modules/BootScreen';
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

export default function Portfolio() {
    //#region State Management

    //#region Date and Time
    const [currentTime, setCurrentTime] = useState(new Date());
    //#endregion

    //#region Theme and UI States
    const [isDarkMode, setIsDarkMode] = useState(true);
    //#endregion

    //#region Data Sets and Personal Information
    const [skills] = useState<Skill[]>(GenericService.getSkills());
    const [projects] = useState<Project[]>(GenericService.getProjects());
    const [companies] = useState<Company[]>(GenericService.getCompanies());
    const [achievements] = useState<Achievement[]>(GenericService.getAchievements());
    const [personalInformation] = useState<PersonalInformation>(
        GenericService.getPersonalInformation(),
    );
    //#endregion

    //#region UI Mechanics and Responsive States
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    //#endregion

    //#region Boot Handlers
    const [isBooting, setIsBooting] = useState(true);
    //#endregion

    //#region Terminal Panel
    const [showTerminal, setShowTerminal] = useState(false);
    const [terminalInput, setTerminalInput] = useState('');
    const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
    //#endregion

    //#region DOTA Game State and Hero Selection
    const [selectedAbility, setSelectedAbility] = useState<Ability>();
    const [showDotaPanel, setShowDotaPanel] = useState(false);
    const [showHeroSelector, setShowHeroSelector] = useState(false);
    const [showAbilityDetails, setShowAbilityDetails] = useState(false);
    const [gameState, setGameState] = useState<State>(GenericService.getDotaState());
    const [selectedHero, setSelectedHero] = useState<Hero>(GenericService.getDotaHeroes()[0]);
    const [matchHistory] = useState<MatchHistory[]>(GenericService.getRecentDotaMatchHistories());
    //#endregion

    //#region My Cute Little Hearts
    const [dogs] = useState<Dog[]>(GenericService.getDogs());
    const [showDogsSection, setShowDogsSection] = useState(false);
    //#endregion

    //#endregion

    //#region Memoization and Constants
    const githubStats = useMemo(() => GenericService.getGitHubStats(), []);
    //#endregion

    //#region Boot Sequence
    useEffect(() => {
        const timer = setTimeout(() => setIsBooting(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    //#endregion

    //#region Hooks for Data Load
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
    //#endregion

    //#region Time Intervals
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);
    //#endregion

    //#region Game Simulation
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
    //#endregion

    //#region Memoized Callbacks
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
    //#endregion

    //#region Memoized Filtered Data (via Featured Flags)
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
    //#endregion

    //#region Book Screen
    if (isBooting) {
        return <BootScreen />;
    }
    //#endregion

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
            {/* Header Component */}
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

            {/* DOTA Panel Modal */}
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

            {/* Ability Details Modal */}
            <AbilityDetailsModal
                selectedHero={selectedHero}
                showAbilityDetails={showAbilityDetails}
                selectedAbility={selectedAbility as Ability}
                setShowAbilityDetails={setShowAbilityDetails}
            />

            {/* Hero Selector Modal */}
            <HeroSelectorModal
                heroes={GenericService.getDotaHeroes()}
                selectHero={selectHero}
                selectedHero={selectedHero}
                showHeroSelector={showHeroSelector}
                setShowHeroSelector={setShowHeroSelector}
            />

            {/* Terminal Console Modal */}
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

            {/* Dogs Section Modal */}
            <DogSectionModal
                dogs={dogs}
                showDogsSection={showDogsSection}
                setShowDogsSection={setShowDogsSection}
            />

            {/* Personal Details Section */}
            <PersonalSection
                gameState={gameState}
                isDarkMode={isDarkMode}
                githubStats={githubStats}
                selectedHero={selectedHero}
                setShowDotaPanel={setShowDotaPanel}
                personalInformation={personalInformation}
            />

            {/* Achievements Section with DOTA Theme */}
            <AchievementsSection
                isDarkMode={isDarkMode}
                selectedHero={selectedHero}
                getRarityColor={getRarityColor}
                featuredAchievements={featuredAchievements}
            />

            {/* Skills Section */}
            <SkillsSection
                isDarkMode={isDarkMode}
                selectedHero={selectedHero}
                featuredSkills={featuredSkills}
            />

            {/* Experience Section */}
            <ExperiencesSection
                isDarkMode={isDarkMode}
                selectedHero={selectedHero}
                companies={featuredCompanies}
            />

            {/* Projects Section */}
            <ProjectsSection
                isDarkMode={isDarkMode}
                selectedHero={selectedHero}
                projects={featuredProjects}
                getProjectIcon={getProjectIcon}
                getDifficultyColor={getDifficultyColor}
            />

            {/* Contact Section */}
            <ContactSection
                isDarkMode={isDarkMode}
                selectedHero={selectedHero}
                personalInformation={personalInformation}
            />

            {/* Footer */}
            <Footer
                gameState={gameState}
                isDarkMode={isDarkMode}
                selectedHero={selectedHero}
                personalInformation={personalInformation}
            />

            {/* Theme Toggle - Bottom Right */}
            <ThemeToggleButton
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
                selectedHero={selectedHero}
            />

            {/* Floating DOTA Panel Button - Bottom Left */}
            <DotaPanelToggleButton
                isDarkMode={isDarkMode}
                selectedHero={selectedHero}
                setShowDotaPanel={setShowDotaPanel}
            />
        </div>
    );
}
