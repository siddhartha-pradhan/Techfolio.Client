import React, { JSX } from 'react';
import { Dog } from '@/application/models/Dog';
import { GitHub } from '@/application/models/GitHub';
import { Hero } from '@/application/models/dota/Hero';
import { Item } from '@/application/models/dota/Item';
import { Project } from '@/application/models/Project';
import { Company } from '@/application/models/Company';
import { Skill } from '@/application/models/dota/Skill';
import { State } from '@/application/models/dota/State';
import { Achievement } from '@/application/models/Achievement';
import { Code2, Cpu, Database, Target, Zap } from 'lucide-react';
import { MatchHistory } from '@/application/models/dota/MatchHistory';

export class GenericService {
    //#region DOTA References
    public static getDotaHeroes(): Hero[] {
        return [
            {
                id: 'templar_assassin',
                name: 'Templar Assassin',
                title: 'The Hidden Analyst',
                description:
                    'Data-driven burst hero — thrives on dashboards, A/B tests, and reading patterns in noise.',
                abilities: [
                    {
                        id: 'refraction',
                        name: 'Refraction (Focus Mode)',
                        description:
                            'Temporarily blocks distractions while adding bonus damage to each commit.',
                        icon: '🛡️',
                        cooldown: 17,
                        manaCost: 100,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Provides damage block and bonus damage charges',
                    },
                    {
                        id: 'meld',
                        name: 'Meld (Code Review Ambush)',
                        description:
                            'Disappears into a PR, reappears with armor-shredding comments and a crit.',
                        icon: '🫥',
                        cooldown: 6,
                        manaCost: 50,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Turns invisible, next attack deals bonus damage and reduces armor',
                    },
                    {
                        id: 'psi_blades',
                        name: 'Psi Blades (Throughput Insight)',
                        description:
                            'Attacks pass through to backline problems, revealing root cause chains.',
                        icon: '⚔️',
                        cooldown: 0,
                        manaCost: 0,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Increases attack range and gives cleave damage behind the target',
                    },
                    {
                        id: 'traps',
                        name: 'Psionic Traps (Analytics Triggers)',
                        description:
                            'Places slow traps across the map that reveal patterns when detonated.',
                        icon: '📊',
                        cooldown: 11,
                        manaCost: 15,
                        level: 3,
                        maxLevel: 3,
                        type: 'ultimate',
                        effect: 'Places invisible traps that slow enemies on detonation',
                    },
                ],
                quote: 'So it is revealed.',
                devQuote: 'So the metrics are revealed.',
                theme: {
                    primary: '#C4B5FD',
                    secondary: '#4C1D95',
                    accent: '#FBBF24',
                    background:
                        'linear-gradient(135deg, #020617 0%, #111827 30%, #1E1B4B 65%, #7C3AED 100%)',
                },
                icon: '🎯',
                stats: {
                    strength: 19,
                    agility: 23,
                    intelligence: 20,
                    level: 22,
                    experience: 7200,
                    maxExperience: 7600,
                },
                items: [
                    {
                        id: 'blink_bkb',
                        name: 'Blink + BKB Combo',
                        description:
                            'Jumps straight into core performance hotspots, immune to side chatter.',
                        icon: '⚡',
                        rarity: 'Legendary',
                        effect: 'Blink instantly then gain spell immunity',
                        acquired: true,
                    },
                ],
                ultimateUnlocked: true,
            },
            {
                id: 'spectre',
                name: 'Spectre',
                title: 'The Late-Game Reality',
                description:
                    'Embodiment of long-term bets — complex platforms that start small but scale into monsters.',
                abilities: [
                    {
                        id: 'spectral_dagger',
                        name: 'Spectral Dagger (Exploratory Path)',
                        description:
                            'Creates a custom path through unknown requirements, marking future impact.',
                        icon: '💜',
                        cooldown: 16,
                        manaCost: 130,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Damages and slows enemies while creating a path only Spectre can use',
                    },
                    {
                        id: 'desolate',
                        name: 'Desolate (Isolated Bug Exploit)',
                        description:
                            'Deals massive damage when a problem is left completely alone.',
                        icon: '🌑',
                        cooldown: 0,
                        manaCost: 0,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Bonus damage when enemies have no nearby allies',
                    },
                    {
                        id: 'dispersion',
                        name: 'Dispersion (Incident Deflection)',
                        description:
                            'Redirects a portion of incoming chaos back into the originating systems.',
                        icon: '🛡️',
                        cooldown: 0,
                        manaCost: 0,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Reflects a percentage of damage taken back to attackers',
                    },
                    {
                        id: 'haunt',
                        name: 'Haunt (Observability Fan-Out)',
                        description:
                            'Spawns shadows in every service to understand how the whole system behaves.',
                        icon: '👻',
                        cooldown: 150,
                        manaCost: 180,
                        level: 3,
                        maxLevel: 3,
                        type: 'ultimate',
                        effect: 'Creates illusions attacking all enemy heroes, can swap with any illusion',
                    },
                ],
                quote: 'Reality is illusion, and vice versa.',
                devQuote: 'Traffic is illusion, metrics are reality.',
                theme: {
                    primary: '#6366F1',
                    secondary: '#1E1B4B',
                    accent: '#22C55E',
                    background:
                        'radial-gradient(circle at top, #020617 0%, #020617 35%, #111827 70%, #4C1D95 100%)',
                },
                icon: '👽',
                stats: {
                    strength: 21,
                    agility: 23,
                    intelligence: 16,
                    level: 21,
                    experience: 6900,
                    maxExperience: 7400,
                },
                items: [
                    {
                        id: 'radiance',
                        name: 'Radiance',
                        description:
                            'Constant AoE productivity burn — everything nearby slowly gets influenced.',
                        icon: '🔥',
                        rarity: 'Legendary',
                        effect: 'Burns nearby enemies and causes miss chance',
                        acquired: true,
                    },
                ],
                ultimateUnlocked: true,
            },
            {
                id: 'phantom_assassin',
                name: 'Phantom Assassin',
                title: 'The Silent Blade',
                description:
                    'Specialist in critical projects and precision work — excels in impactful solo kills like feature spikes and rapid prototyping.',
                abilities: [
                    {
                        id: 'stifling_dagger',
                        name: 'Stifling Dagger (Bug Sniper)',
                        description:
                            'Throws a focused dagger to isolate and resolve bugs from afar.',
                        icon: '🗡️',
                        cooldown: 6,
                        manaCost: 30,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Deals 65 + 50% bonus attack damage and slows target',
                    },
                    {
                        id: 'phantom_strike',
                        name: 'Phantom Strike (Feature Dive)',
                        description:
                            'Quickly blinks into core code modules to execute targeted improvements.',
                        icon: '⚔️',
                        cooldown: 11,
                        manaCost: 50,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Teleports to target, grants +170 attack speed for 2s',
                    },
                    {
                        id: 'blur',
                        name: 'Blur (Stealth Refactor)',
                        description:
                            'Vanishes from visibility and silently improves underlying code.',
                        icon: '🎭',
                        cooldown: 25,
                        manaCost: 70,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Evades attacks and becomes untargetable from minimap',
                    },
                    {
                        id: 'coup_de_grace',
                        name: 'Coup de Grace (Critical Refactor)',
                        description:
                            'Delivers massive improvements with minimal effort at just the right moment.',
                        icon: '💥',
                        cooldown: 0,
                        manaCost: 0,
                        level: 3,
                        maxLevel: 3,
                        type: 'ultimate',
                        effect: '15% chance to crit for 450% damage',
                    },
                ],
                quote: 'In I go...',
                devQuote: 'In I debug...',
                theme: {
                    primary: '#14B8A6',
                    secondary: '#0F766E',
                    accent: '#F97316',
                    background: 'linear-gradient(135deg, #020617 0%, #0F172A 40%, #022C22 100%)',
                },
                icon: '🗡️',
                stats: {
                    strength: 20,
                    agility: 23,
                    intelligence: 15,
                    level: 21,
                    experience: 6800,
                    maxExperience: 7200,
                },
                items: [
                    {
                        id: 'battle_fury',
                        name: 'Battle Fury',
                        description:
                            'Cleaves through repetitive tasks and legacy chunks with precision.',
                        icon: '🪓',
                        rarity: 'Epic',
                        effect: 'Cleaves 70% of attack damage in a cone',
                        acquired: true,
                    },
                    {
                        id: 'desolator',
                        name: 'Desolator',
                        description:
                            'Armor-shredding effect for breaking through outdated architecture.',
                        icon: '💣',
                        rarity: 'Legendary',
                        effect: '-6 armor on hit, boosts damage against structures',
                        acquired: true,
                    },
                ],
                ultimateUnlocked: true,
            },
            {
                id: 'clinkz',
                name: 'Clinkz',
                title: 'The Burning Marksman',
                description:
                    'Hit-and-run specialist — great for quick PoCs, spike branches, and surgical fixes in large repos.',
                abilities: [
                    {
                        id: 'strafe',
                        name: 'Strafe (Rapid Iteration)',
                        description: 'Unleashes a burst of rapid commits on a focused feature.',
                        icon: '🔥',
                        cooldown: 20,
                        manaCost: 70,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Massively increases attack speed for a short duration',
                    },
                    {
                        id: 'searing_arrows',
                        name: 'Searing Arrows (Hotfixes)',
                        description: 'Each commit burns through tech debt on contact.',
                        icon: '🎯',
                        cooldown: 0,
                        manaCost: 12,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Orb effect that adds bonus damage to each attack',
                    },
                    {
                        id: 'skeleton_walk',
                        name: 'Skeleton Walk (Stealth Refactor)',
                        description:
                            'Moves invisibly through the codebase while setting up future value.',
                        icon: '🕵️‍♂️',
                        cooldown: 17,
                        manaCost: 80,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Grants invisibility and bonus movement speed',
                    },
                    {
                        id: 'burning_army',
                        name: 'Burning Army (Background Jobs)',
                        description:
                            'Deploys a wave of background workers to pelt tasks while you move on.',
                        icon: '💀',
                        cooldown: 80,
                        manaCost: 150,
                        level: 3,
                        maxLevel: 3,
                        type: 'ultimate',
                        effect: 'Summons an army of skeleton archers that attack enemies in a line',
                    },
                ],
                quote: 'The dead hunger.',
                devQuote: 'The logs hunger.',
                theme: {
                    primary: '#F97316',
                    secondary: '#EA580C',
                    accent: '#FACC15',
                    background:
                        'linear-gradient(135deg, #111827 0%, #1F2937 40%, #7C2D12 80%, #F97316 100%)',
                },
                icon: '💀',
                stats: {
                    strength: 16,
                    agility: 22,
                    intelligence: 18,
                    level: 18,
                    experience: 4800,
                    maxExperience: 5200,
                },
                items: [
                    {
                        id: 'orchid',
                        name: 'Orchid Malevolence',
                        description:
                            'Silences noisy services and amplifies damage during incident response.',
                        icon: '🌺',
                        rarity: 'Epic',
                        effect: 'Silences a target and amplifies damage taken',
                        acquired: true,
                    },
                    {
                        id: 'gleipnir',
                        name: 'Gleipnir',
                        description:
                            'Roots a whole swarm of bugs and logs them neatly for analysis.',
                        icon: '🪢',
                        rarity: 'Legendary',
                        effect: 'Roots enemies in an area and deals damage',
                        acquired: true,
                    },
                ],
                ultimateUnlocked: true,
            },
            {
                id: 'windranger',
                name: 'Windranger',
                title: 'The Elusive Marksman',
                description:
                    'Frontend sharp-shooter — swift, precise, and focused on component-based UI and reactive workflows.',
                abilities: [
                    {
                        id: 'shackleshot',
                        name: 'Shackleshot (Bug Isolation)',
                        description: 'Locks down tricky bugs by tethering them to root causes.',
                        icon: '🪢',
                        cooldown: 12,
                        manaCost: 90,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Stuns for up to 3.8s if targets are aligned',
                    },
                    {
                        id: 'powershot',
                        name: 'Powershot (Code Refactor)',
                        description: 'Fires a precise line of improvement through layers of code.',
                        icon: '🏹',
                        cooldown: 9,
                        manaCost: 120,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Deals 450 damage in a line, damage decreases per unit hit',
                    },
                    {
                        id: 'windrun',
                        name: 'Windrun (Dev Flow State)',
                        description:
                            'Grants evasion and movement speed to move swiftly through complex tasks.',
                        icon: '💨',
                        cooldown: 15,
                        manaCost: 50,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Grants 100% evasion and +60% MS for 5 seconds',
                    },
                    {
                        id: 'focus_fire',
                        name: 'Focus Fire (Rapid Delivery)',
                        description:
                            'Unleashes a flurry of updates and commits on a single feature/module.',
                        icon: '🎯',
                        cooldown: 30,
                        manaCost: 150,
                        level: 3,
                        maxLevel: 3,
                        type: 'ultimate',
                        effect: '+400 IAS on target, no attack damage penalty with Aghs',
                    },
                ],
                quote: 'On my way!',
                devQuote: 'On my branch!',
                theme: {
                    primary: '#117A65',
                    secondary: '#1ABC9C',
                    accent: '#F1C40F',
                    background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)',
                },
                icon: '🏹',
                stats: {
                    strength: 18,
                    agility: 24,
                    intelligence: 17,
                    level: 20,
                    experience: 6400,
                    maxExperience: 7000,
                },
                items: [
                    {
                        id: 'maelstrom',
                        name: 'Maelstrom',
                        description: 'Fires chain lightning of enhancements across components.',
                        icon: '⚡',
                        rarity: 'Epic',
                        effect: 'Chance to release a chain lightning on attack',
                        acquired: true,
                    },
                    {
                        id: 'aghanims_scepter',
                        name: "Aghanim's Scepter",
                        description:
                            'Boosts Focus Fire and reduces its cooldown to machine-gun levels.',
                        icon: '🔱',
                        rarity: 'Legendary',
                        effect: 'Removes damage penalty and increases attack rate',
                        acquired: true,
                    },
                ],
                ultimateUnlocked: true,
            },
            {
                id: 'invoker',
                name: 'Invoker',
                title: 'The Arsenal Magus',
                description:
                    'Master of versatility — fullstack power with Clean Architecture, Blazor, and deep tech stack',
                abilities: [
                    {
                        id: 'quas',
                        name: 'Quas (C# Fundamentals)',
                        description:
                            'Strengthens core programming foundation and defensive coding practices',
                        icon: '🔷',
                        cooldown: 0,
                        manaCost: 0,
                        level: 7,
                        maxLevel: 7,
                        type: 'basic',
                        effect: '+14 Health Regen, +2 Strength',
                    },
                    {
                        id: 'wex',
                        name: 'Wex (Blazor & WASM)',
                        description: 'Increases development speed and frontend agility',
                        icon: '⚡',
                        cooldown: 0,
                        manaCost: 0,
                        level: 7,
                        maxLevel: 7,
                        type: 'basic',
                        effect: '+14% Attack Speed, +2 Agility',
                    },
                    {
                        id: 'exort',
                        name: 'Exort (Clean Architecture)',
                        description: 'Enhances code structure and system design intelligence',
                        icon: '🔥',
                        cooldown: 0,
                        manaCost: 0,
                        level: 7,
                        maxLevel: 7,
                        type: 'basic',
                        effect: '+14 Attack Damage, +2 Intelligence',
                    },
                    {
                        id: 'invoke',
                        name: 'Invoke (System Design)',
                        description: 'Combines learned skills to create powerful solutions',
                        icon: '🌟',
                        cooldown: 17,
                        manaCost: 60,
                        level: 3,
                        maxLevel: 4,
                        type: 'ultimate',
                        effect: 'Invokes one of 10 possible spells based on current orb combination',
                    },
                ],
                quote: 'I am a beacon of knowledge blazing out across a black sea of ignorance.',
                devQuote: 'I am a beacon of .NET clarity blazing across a legacy codebase.',
                theme: {
                    primary: '#FACC15',
                    secondary: '#A855F7',
                    accent: '#4ECDC4',
                    background:
                        'linear-gradient(135deg, #020617 0%, #1E293B 40%, #312E81 70%, #581C87 100%)',
                },
                icon: '🔮',
                stats: {
                    strength: 22,
                    agility: 14,
                    intelligence: 24,
                    level: 25,
                    experience: 8500,
                    maxExperience: 8500,
                },
                items: [
                    {
                        id: 'aghanims_scepter',
                        name: "Aghanim's Scepter",
                        description: 'Upgrades ultimate ability and adds new spell combinations',
                        icon: '🔱',
                        rarity: 'Legendary',
                        effect: 'Adds Cataclysm and Deafening Blast upgrades',
                        acquired: true,
                    },
                    {
                        id: 'black_king_bar',
                        name: 'Black King Bar',
                        description: 'Provides magic immunity during critical development phases',
                        icon: '👑',
                        rarity: 'Epic',
                        effect: 'Avatar: Become immune to most spells',
                        acquired: true,
                    },
                ],
                ultimateUnlocked: true,
            },
            {
                id: 'techies',
                name: 'Techies',
                title: 'The Demolitions Experts',
                description:
                    'Funny but genius — quirky passion projects, clever code snippets, and edge-case problems solved',
                abilities: [
                    {
                        id: 'proximity_mines',
                        name: 'Proximity Mines (Bug Fixes)',
                        description: 'Plants hidden fixes that trigger when bugs approach',
                        icon: '💣',
                        cooldown: 19,
                        manaCost: 110,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Deals 750 damage in 400 AoE',
                    },
                    {
                        id: 'stasis_trap',
                        name: 'Stasis Trap (Code Reviews)',
                        description: 'Freezes development until code quality issues are resolved',
                        icon: '⚡',
                        cooldown: 20,
                        manaCost: 110,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Roots enemies for 3.5 seconds',
                    },
                    {
                        id: 'blast_off',
                        name: 'Blast Off! (Deployment)',
                        description: 'Launches code to production with explosive results',
                        icon: '🚀',
                        cooldown: 36,
                        manaCost: 100,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Deals 600 damage, silences for 4 seconds',
                    },
                    {
                        id: 'remote_mines',
                        name: 'Remote Mines (Automation)',
                        description: 'Deploys automated systems that can be triggered remotely',
                        icon: '📡',
                        cooldown: 10,
                        manaCost: 200,
                        level: 3,
                        maxLevel: 3,
                        type: 'ultimate',
                        effect: 'Deals 900 damage in 425 AoE',
                    },
                ],
                quote: "We're gonna blow stuff up!",
                devQuote: "We're gonna debug stuff up!",
                theme: {
                    primary: '#F97316',
                    secondary: '#FACC15',
                    accent: '#22C55E',
                    background:
                        'linear-gradient(135deg, #020617 0%, #111827 35%, #1F2937 70%, #312E81 100%)',
                },
                icon: '💣',
                stats: {
                    strength: 17,
                    agility: 14,
                    intelligence: 22,
                    level: 20,
                    experience: 6200,
                    maxExperience: 6800,
                },
                items: [
                    {
                        id: 'force_staff',
                        name: 'Force Staff',
                        description: 'Pushes development forward when stuck',
                        icon: '🔧',
                        rarity: 'Rare',
                        effect: 'Force: Pushes any unit 600 units forward',
                        acquired: true,
                    },
                ],
                ultimateUnlocked: true,
            },
            {
                id: 'pudge',
                name: 'Pudge',
                title: 'The Butcher',
                description:
                    'Code reviewer extraordinaire — hooks problematic code and brings it in for inspection',
                abilities: [
                    {
                        id: 'meat_hook',
                        name: 'Meat Hook (Code Review)',
                        description: 'Hooks problematic code from a distance for closer inspection',
                        icon: '🪝',
                        cooldown: 14,
                        manaCost: 110,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Pulls enemy unit to Pudge, deals 360 damage',
                    },
                    {
                        id: 'rot',
                        name: 'Rot (Legacy Code)',
                        description: 'Slowly deteriorates surrounding codebase while taking damage',
                        icon: '☠️',
                        cooldown: 0,
                        manaCost: 0,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Deals 105 damage per second in 250 AoE',
                    },
                    {
                        id: 'flesh_heap',
                        name: 'Flesh Heap (Experience)',
                        description: 'Gains permanent strength from each successful code fix',
                        icon: '💪',
                        cooldown: 0,
                        manaCost: 0,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Gains 1.5 Strength per enemy hero death nearby',
                    },
                    {
                        id: 'dismember',
                        name: 'Dismember (Refactoring)',
                        description: 'Completely breaks down and rebuilds problematic code',
                        icon: '🔪',
                        cooldown: 30,
                        manaCost: 100,
                        level: 3,
                        maxLevel: 3,
                        type: 'ultimate',
                        effect: 'Channels for 3 seconds, dealing 175 damage per second',
                    },
                ],
                quote: 'Fresh meat!',
                devQuote: 'Fresh code!',
                theme: {
                    primary: '#DC2626',
                    secondary: '#7F1D1D',
                    accent: '#F97316',
                    background:
                        'linear-gradient(135deg, #020617 0%, #111827 30%, #1F2933 60%, #450A0A 100%)',
                },
                icon: '🥩',
                stats: {
                    strength: 25,
                    agility: 14,
                    intelligence: 16,
                    level: 16,
                    experience: 3800,
                    maxExperience: 4200,
                },
                items: [
                    {
                        id: 'blink_dagger',
                        name: 'Blink Dagger',
                        description: 'Instantly repositions for better code review angles',
                        icon: '⚡',
                        rarity: 'Epic',
                        effect: 'Blink: Instantly move to target location',
                        acquired: true,
                    },
                ],
                ultimateUnlocked: true,
            },
            {
                id: 'drow_ranger',
                name: 'Drow Ranger',
                title: 'The Precision Archer',
                description:
                    'Clean, minimal, and deadly accurate — ideal for pixel-perfect UI, typography, and design systems.',
                abilities: [
                    {
                        id: 'frost_arrows',
                        name: 'Frost Arrows (Pixel-Perfect UI)',
                        description:
                            'Applies subtle slow and polish to every component for buttery-smooth UX.',
                        icon: '❄️',
                        cooldown: 0,
                        manaCost: 12,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Orb effect that slows enemies and stacks on repeated hits',
                    },
                    {
                        id: 'gust',
                        name: 'Gust (Scope Control)',
                        description:
                            'Silences noisy requirements and pushes back scope creep on the lane.',
                        icon: '💨',
                        cooldown: 18,
                        manaCost: 90,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Pushes enemies back and silences them for up to 6 seconds',
                    },
                    {
                        id: 'precision_aura',
                        name: 'Precision Aura (Design System)',
                        description:
                            'Shares well-defined tokens, spacing, and typography with all ranged teammates.',
                        icon: '🎯',
                        cooldown: 0,
                        manaCost: 0,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Grants bonus damage to allied ranged units globally',
                    },
                    {
                        id: 'marksmanship',
                        name: 'Marksmanship (Laser Focus)',
                        description:
                            'Disables distractions and funnels insane throughput into a single product direction.',
                        icon: '🏹',
                        cooldown: 70,
                        manaCost: 125,
                        level: 3,
                        maxLevel: 3,
                        type: 'ultimate',
                        effect: 'Grants massive bonus agility and chance to ignore enemy armor',
                    },
                ],
                quote: 'Fear, quiet, magic.',
                devQuote: 'Clean UI. Silent bugs.',
                theme: {
                    primary: '#38BDF8',
                    secondary: '#0EA5E9',
                    accent: '#E5E7EB',
                    background:
                        'linear-gradient(135deg, #020617 0%, #0B1120 35%, #1E293B 75%, #38BDF8 100%)',
                },
                icon: '🧊',
                stats: {
                    strength: 17,
                    agility: 26,
                    intelligence: 15,
                    level: 19,
                    experience: 5200,
                    maxExperience: 5600,
                },
                items: [
                    {
                        id: 'dragon_lance',
                        name: 'Dragon Lance',
                        description: 'Keeps designs effective and readable even from a distance.',
                        icon: '📏',
                        rarity: 'Rare',
                        effect: '+Attack range and stats for safer positioning',
                        acquired: true,
                    },
                    {
                        id: 'hurricane_pike',
                        name: 'Hurricane Pike',
                        description:
                            'Dash in to debug, kite out to refactor — perfect for safe engagements.',
                        icon: '🌬️',
                        rarity: 'Epic',
                        effect: 'Pushes yourself and target apart while granting bonus range',
                        acquired: true,
                    },
                ],
                ultimateUnlocked: true,
            },
            {
                id: 'storm',
                name: 'Storm Spirit',
                title: 'The Electric Mexican',
                description: 'Loves performance — shows microservices, high-scale systems',
                abilities: [
                    {
                        id: 'static_remnant',
                        name: 'Static Remnant (Caching)',
                        description: 'Leaves behind cached data that explodes when accessed',
                        icon: '⚡',
                        cooldown: 3.5,
                        manaCost: 70,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Deals 300 damage in 260 AoE',
                    },
                    {
                        id: 'electric_vortex',
                        name: 'Electric Vortex (Load Balancing)',
                        description: 'Pulls requests into optimal processing position',
                        icon: '🌪️',
                        cooldown: 21,
                        manaCost: 100,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Pulls enemy for 2.4 seconds',
                    },
                    {
                        id: 'overload',
                        name: 'Overload (Optimization)',
                        description: 'Charges next attack with bonus performance',
                        icon: '⚡',
                        cooldown: 0,
                        manaCost: 0,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Next attack deals +140 damage and slows',
                    },
                    {
                        id: 'ball_lightning',
                        name: 'Ball Lightning (Scaling)',
                        description: 'Transforms into pure energy to scale across any distance',
                        icon: '⚡',
                        cooldown: 0,
                        manaCost: 15,
                        level: 3,
                        maxLevel: 3,
                        type: 'ultimate',
                        effect: 'Become invulnerable and travel at 1250 speed',
                    },
                ],
                quote: "Who's that handsome devil?",
                devQuote: "Who's that performant system?",
                theme: {
                    primary: '#38BDF8',
                    secondary: '#0EA5E9',
                    accent: '#A855F7',
                    background:
                        'radial-gradient(circle at top, #020617 0%, #020617 35%, #0F172A 65%, #1E293B 100%)',
                },
                icon: '⚡',
                stats: {
                    strength: 19,
                    agility: 18,
                    intelligence: 23,
                    level: 18,
                    experience: 4900,
                    maxExperience: 5400,
                },
                items: [
                    {
                        id: 'bloodstone',
                        name: 'Bloodstone',
                        description: 'Provides massive mana pool for sustained performance',
                        icon: '💎',
                        rarity: 'Legendary',
                        effect: 'Reduces respawn time and provides mana regeneration',
                        acquired: true,
                    },
                ],
                ultimateUnlocked: true,
            },
            {
                id: 'ember_spirit',
                name: 'Ember Spirit',
                title: 'The Agile Flame',
                description:
                    'Agile sprint incarnate — thrives on iterative delivery, rollback-safe deployments, and clean git history.',
                abilities: [
                    {
                        id: 'searing_chains',
                        name: 'Searing Chains (Lock Scope)',
                        description:
                            'Roots multiple tasks in place so the team can focus fire them down.',
                        icon: '⛓️',
                        cooldown: 13,
                        manaCost: 80,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Roots and damages up to 2 enemies in a small radius',
                    },
                    {
                        id: 'sleight_of_fist',
                        name: 'Sleight of Fist (Git Time Travel)',
                        description:
                            'Dashes through every changed file, tagging each with a blazing commit.',
                        icon: '🔥',
                        cooldown: 8,
                        manaCost: 50,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Attacks all enemies in an area with bonus damage',
                    },
                    {
                        id: 'flame_guard',
                        name: 'Flame Guard (CI Shield)',
                        description:
                            'Wraps work in tests and checks, burning away trivial errors before merge.',
                        icon: '🛡️',
                        cooldown: 25,
                        manaCost: 80,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Absorbs magic damage and damages nearby enemies over time',
                    },
                    {
                        id: 'fire_remnant',
                        name: 'Fire Remnant (Rollback Anchor)',
                        description:
                            'Places remnant checkpoints in time — jump back instantly if production flames up.',
                        icon: '💥',
                        cooldown: 45,
                        manaCost: 150,
                        level: 3,
                        maxLevel: 3,
                        type: 'ultimate',
                        effect: 'Dashes to placed remnants, dealing massive damage along the path',
                    },
                ],
                quote: 'All action is my domain.',
                devQuote: 'All rollouts are my playground.',
                theme: {
                    primary: '#FB923C',
                    secondary: '#EA580C',
                    accent: '#FACC15',
                    background:
                        'linear-gradient(135deg, #111827 0%, #7C2D12 45%, #B45309 80%, #FDBA74 100%)',
                },
                icon: '🔥',
                stats: {
                    strength: 20,
                    agility: 22,
                    intelligence: 20,
                    level: 20,
                    experience: 6100,
                    maxExperience: 6500,
                },
                items: [
                    {
                        id: 'maelstrom_bkb',
                        name: 'Maelstrom + BKB',
                        description:
                            'Chain-lightning productivity with safe, focused execution under pressure.',
                        icon: '⚡',
                        rarity: 'Legendary',
                        effect: 'Procs chain lightning while staying spell-immune during dives',
                        acquired: true,
                    },
                ],
                ultimateUnlocked: true,
            },
            {
                id: 'void_spirit',
                name: 'Void Spirit',
                title: 'The Fragmented Architect',
                description:
                    'Microservice philosopher — loves bounded contexts, async workflows, and event-driven systems.',
                abilities: [
                    {
                        id: 'aether_remnant',
                        name: 'Aether Remnant (Service Probe)',
                        description:
                            'Places a remnant that grabs any request stepping into the wrong bounded context.',
                        icon: '🌀',
                        cooldown: 14,
                        manaCost: 110,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Pulls the first enemy in its path and damages them',
                    },
                    {
                        id: 'dissimilate',
                        name: 'Dissimilate (Blue/Green Deploy)',
                        description:
                            'Steps into the aether, reappearing at a safer node in the cluster.',
                        icon: '🌌',
                        cooldown: 24,
                        manaCost: 150,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Becomes invulnerable then appears elsewhere dealing damage',
                    },
                    {
                        id: 'resonant_pulse',
                        name: 'Resonant Pulse (Circuit Breaker)',
                        description:
                            'Emits a protective shield that absorbs spikes and noisy traffic.',
                        icon: '🔮',
                        cooldown: 16,
                        manaCost: 100,
                        level: 4,
                        maxLevel: 4,
                        type: 'basic',
                        effect: 'Damages enemies around and grants a damage-absorbing shield',
                    },
                    {
                        id: 'astral_step',
                        name: 'Astral Step (Distributed Trace)',
                        description:
                            'Cuts through the entire request path, marking and damaging everything touched.',
                        icon: '✴️',
                        cooldown: 30,
                        manaCost: 150,
                        level: 3,
                        maxLevel: 3,
                        type: 'ultimate',
                        effect: 'Dashes along a line, damaging and slowing enemies',
                    },
                ],
                quote: 'Many paths lead to the same place.',
                devQuote: 'Many services lead to the same business capability.',
                theme: {
                    primary: '#A855F7',
                    secondary: '#4C1D95',
                    accent: '#22D3EE',
                    background:
                        'linear-gradient(135deg, #020617 0%, #111827 30%, #312E81 70%, #7C3AED 100%)',
                },
                icon: '🧿',
                stats: {
                    strength: 21,
                    agility: 19,
                    intelligence: 22,
                    level: 20,
                    experience: 6000,
                    maxExperience: 6400,
                },
                items: [
                    {
                        id: 'kaya_sange',
                        name: 'Kaya and Sange',
                        description:
                            'Blends raw casting potential with resilience for long-running workloads.',
                        icon: '⚖️',
                        rarity: 'Epic',
                        effect: 'Amplifies spell damage and provides status resistance',
                        acquired: true,
                    },
                ],
                ultimateUnlocked: true,
            },
        ];
    }

    public static getDotaItems(): Item[] {
        return [
            {
                id: 'divine_rapier',
                name: 'Divine Rapier',
                description: 'The ultimate coding weapon - maximum damage but high risk',
                icon: '⚔️',
                rarity: 'Immortal',
                effect: '+330 Attack Damage, Dropped on death',
                acquired: false,
            },
            {
                id: 'aegis',
                name: 'Aegis of the Immortal',
                description: 'Grants a second chance when deployment fails',
                icon: '🛡️',
                rarity: 'Immortal',
                effect: 'Reincarnation: Revive after 5 seconds',
                acquired: false,
            },
            {
                id: 'refresher_orb',
                name: 'Refresher Orb',
                description: 'Resets all cooldowns for ultimate combinations',
                icon: '🔮',
                rarity: 'Legendary',
                effect: 'Reset: Refreshes all ability and item cooldowns',
                acquired: false,
            },
        ];
    }

    public static getDotaAchievements(): Achievement[] {
        return [
            {
                id: 'rampage',
                title: 'RAMPAGE!',
                description: 'Fixed 5 critical bugs in a single sprint',
                icon: '🔥',
                date: '2024',
                type: 'dota',
                featured: true,
                rarity: 'Legendary',
                dotaReference: 'Kill 5 enemy heroes within 18 seconds',
            },
            {
                id: 'godlike',
                title: 'GODLIKE!',
                description: '10 consecutive successful deployments without rollback',
                icon: '👑',
                date: '2024',
                type: 'dota',
                featured: true,
                rarity: 'Epic',
                dotaReference: 'Kill 10 enemy heroes without dying',
            },
            {
                id: 'ancient_destroyer',
                title: 'Ancient Destroyer',
                description: 'Successfully migrated legacy monolith to microservices',
                icon: '🏛️',
                date: '2023',
                type: 'dota',
                featured: true,
                rarity: 'Immortal',
                dotaReference: "Destroy the enemy's ancient keeping the throne alive.",
            },
        ];
    }

    public static getRecentDotaMatchHistories(): MatchHistory[] {
        return [
            {
                id: 1,
                result: 'Victory',
                duration: '42:15',
                kda: '12/3/8',
                hero: 'Invoker',
                gpm: 650,
            },
            {
                id: 2,
                result: 'Victory',
                duration: '38:22',
                kda: '8/2/15',
                hero: 'Storm Spirit',
                gpm: 580,
            },
            {
                id: 3,
                result: 'Defeat',
                duration: '55:43',
                kda: '15/8/12',
                hero: 'Techies',
                gpm: 420,
            },
            { id: 4, result: 'Victory', duration: '29:18', kda: '6/1/9', hero: 'Tinker', gpm: 720 },
        ];
    }

    public static getDotaState(): State {
        return {
            gold: 2450,
            experience: 8500,
            level: 25,
            kills: 12,
            assists: 8,
            lastHits: 245,
            denies: 15,
            gpm: 650,
            xpm: 580,
            gameTime: 2520,
            isPlaying: true,
            currentMatch: {
                duration: '42:15',
                kda: '12/3/8',
                result: 'Victory',
            },
        };
    }
    //#endregion

    //#region Personal Reflections
    public static getGitHubStats(): GitHub {
        return {
            repositories: 45,
            commits: 1250,
            followers: 50,
            stars: 120,
        };
    }

    // TODO: Configure with GitHub Projects
    public static getProjects(): Project[] {
        return [
            {
                id: '1',
                name: 'SOFTCASH TREASURY PORTAL',
                type: 'FINTECH PLATFORM',
                description:
                    'FX-powered treasury management system with EBICS, multi-currency, and CAMT/PAIN flows',
                tech: ['.NET 8', 'REACT', 'TYPESCRIPT', 'HANGFIRE', 'EBICS'],
                status: 'PRODUCTION',
                lines: '12K+',
                commits: '350+',
                featured: true,
                preview: '💰',
                difficulty: 'Legendary',
                githubUrl: 'https://www.softcash.ch/en',
                dotaEquivalent:
                    "Techies' Remote Mine Network – high-risk, high-reward orchestration",
            },
            {
                id: '5',
                name: 'AXIS BANK CSR PLATFORM',
                type: 'CORPORATE WEB APP',
                description:
                    'CSR proposal, fund flow and disbursement system for Axis Bank’s partners',
                tech: ['.NET 6', 'SQL SERVER', 'MVC', 'JQUERY', 'AJAX'],
                status: 'STAGING',
                lines: '6.5K',
                commits: '190+',
                featured: true,
                preview: '🏦',
                difficulty: 'Medium',
                githubUrl: 'http://axiscsrmitra.microwarecomp.com',
                dotaEquivalent: 'Treant’s Overgrowth – supports wide-scale coverage and visibility',
            },
            {
                id: '6',
                name: 'RSOS LMS',
                type: 'EDTECH PORTAL',
                description:
                    'LMS portal for Rajasthan State Open Schools with upload and learning modules',
                tech: ['.NET 8', 'MVC', 'SQL SERVER'],
                status: 'PRODUCTION',
                lines: '7.8K',
                commits: '210+',
                featured: true,
                preview: '🏫',
                difficulty: 'Hard',
                githubUrl: 'https://rsospcp.rajasthan.gov.in',
                dotaEquivalent:
                    'Chen’s Hand of God – designed for the masses, resilient under pressure',
            },
            {
                id: '7',
                name: 'MY SECOND TEACHER EDUCATION PORTAL',
                type: 'LEGACY MIGRATION',
                description:
                    'Migrated legacy .NET app to modern .NET 6 with performance improvements',
                tech: ['.NET 6', 'LINQ', 'REACT', 'AWS', 'EF CORE'],
                status: 'PRODUCTION',
                lines: '5K+',
                commits: '170+',
                featured: false,
                preview: '📚',
                difficulty: 'Medium',
                githubUrl: 'https://app.mysecondteacher.com.np',
                dotaEquivalent: "Io's Relocate – pulled old systems into modern cloud safely",
            },
            {
                id: '8',
                name: 'CLOCK BEE SAAS PLATFORM',
                type: 'HR SOLUTIONS',
                description:
                    'Multi-tenant payroll, shift, timesheet & leave manager with real-time FCM alerts',
                tech: ['.NET 8', 'REACT', 'FCM', 'EF CORE', 'POSTGRESQL'],
                status: 'PRODUCTION',
                lines: '9K+',
                commits: '280+',
                featured: true,
                preview: '⏰',
                difficulty: 'Legendary',
                githubUrl: 'https://clockbee.app',
                dotaEquivalent: 'Clockwerk’s Cog Combo – precise, timed, multi-purpose system',
            },
            {
                id: '9',
                name: 'CONNECT CMS TRAINING SERVICE',
                type: 'BLAZOR WASM',
                description:
                    'Blazor WebAssembly Training Management System with CI/CD, Docker & Personality Tests',
                tech: ['BLAZOR', '.NET 8', 'DOCKER', 'GITHUB ACTIONS'],
                status: 'PRODUCTION',
                lines: '6K+',
                commits: '140+',
                featured: true,
                preview: '🧠',
                difficulty: 'Hard',
                githubUrl: 'https://connectcms.com.np',
                dotaEquivalent:
                    "Rubick's Spell Steal – flexible, layered, and powerful when used right",
            },
        ];
    }

    public static getSkills(): Skill[] {
        return [
            {
                id: '1',
                name: 'C#',
                level: 95,
                category: 'CORE',
                featured: true,
                icon: '💪',
                cooldown: 0,
                manaCost: 50,
                description: 'Primary attribute - Strength based programming',
            },
            {
                id: '2',
                name: 'TYPESCRIPT',
                level: 95,
                category: 'CORE',
                featured: true,
                icon: '🏹',
                cooldown: 0,
                manaCost: 50,
                description: 'Secondary attribute - Agility based programming',
            },
            {
                id: '3',
                name: '.NET CORE',
                level: 90,
                category: 'FRAMEWORK',
                featured: true,
                icon: '🛠️',
                cooldown: 4,
                manaCost: 60,
                description: 'Cross-platform spellbook for crafting scalable APIs and services',
            },
            {
                id: '4',
                name: 'REACT',
                level: 90,
                category: 'FRAMEWORK',
                featured: true,
                icon: '⚡',
                cooldown: 6,
                manaCost: 65,
                description: 'Dex-based UI skill for responsive and modular interfaces',
            },
            {
                id: '5',
                name: 'BLAZOR',
                level: 85,
                category: 'FRAMEWORK',
                featured: true,
                icon: '🧙‍♂️',
                cooldown: 8,
                manaCost: 75,
                description: 'Forged full-stack UIs with C# and Razor precision',
            },
            {
                id: '6',
                name: 'POSTGRESQL',
                level: 85,
                category: 'DATABASE',
                featured: true,
                icon: '🗃️',
                cooldown: 12,
                manaCost: 80,
                description: 'RDBMS spellwork and stored procedures for battle-grade logic',
            },
            {
                id: '7',
                name: 'HANGFIRE',
                level: 80,
                category: 'INFRASTRUCTURE',
                featured: true,
                icon: '🕒',
                cooldown: 14,
                manaCost: 100,
                description: 'Scheduled background tasks and real-time treasury triggers',
            },
            {
                id: '8',
                name: 'FIREBASE',
                level: 80,
                category: 'CLOUD',
                featured: true,
                icon: '🔥',
                cooldown: 20,
                manaCost: 100,
                description: 'Push notifications, Firestore, and CI/CD rituals via Firebase magic',
            },
            {
                id: '9',
                name: 'DOCKER',
                level: 80,
                category: 'DEVOPS',
                featured: true,
                icon: '🐳',
                cooldown: 18,
                manaCost: 90,
                description: 'Container spells for isolated and reliable deployments',
            },
            {
                id: '10',
                name: 'GITHUB ACTIONS',
                level: 80,
                category: 'DEVOPS',
                featured: true,
                icon: '⚙️',
                cooldown: 25,
                manaCost: 100,
                description: 'CI/CD automation scripts for seamless combat readiness',
            },
        ];
    }

    public static getCompanies(): Company[] {
        return [
            {
                id: '1',
                name: 'Tekkon Technologies',
                position: 'Full Stack Developer',
                duration: 'May 2024 - Present',
                description: `Collaborated with an Australian firm to push FinTech boundaries and global treasury workflows.`,
                logo: '🌏',
                website: 'https://tekkon.com.np',
                featured: true,
                dotaGuild: 'Radiant Forces',
            },
            {
                id: '2',
                name: 'Codeology',
                position: 'Associate Team Lead',
                duration: 'May 2023 – May 2024',
                description: `Led epic quests in banking and education domains along with matchmaking algorithms for dating apps.`,
                logo: '⚔️',
                website: 'https://thecodeology.com',
                featured: true,
                dotaGuild: 'Dire Legion',
            },
            {
                id: '3',
                name: 'The High Innovations',
                position: 'Software Engineer',
                duration: 'Dec 2023 – Sep 2024',
                description: `Crafted core modules of a POS system, and fortified customer interactions.`,
                logo: '🛠️',
                website: 'https://www.thehighinnovations.com',
                featured: true,
                dotaGuild: 'Contract Creepwave',
            },
            {
                id: '4',
                name: 'Innovate Tech',
                position: '.NET Trainee',
                duration: 'Sept 2022 – April 2023',
                description: `Ventured into legacy systems and emerged to upgrade it on modern frameworks and debugging of compatibility issues.`,
                logo: '🧙',
                website: 'https://www.innovatetech.io/',
                featured: true,
                dotaGuild: 'Ancient Coders',
            },
            {
                id: '5',
                name: 'InfoDevelopers',
                position: '.NET Intern',
                duration: 'June 2022 – Sept 2022',
                description: `Sharpened weapons on C#, ORMs, and SDLC tactics.`,
                logo: '📦',
                website: 'https://infodev.com.np',
                featured: true,
                dotaGuild: 'Newbie Initiates',
            },
        ];
    }

    public static getAchievements(): Achievement[] {
        return [
            ...this.getDotaAchievements(),
            {
                id: 'scholarship',
                title: 'AAA Scholarship Recipient',
                description:
                    'Awarded prestigious AAA Scholarship for academic excellence and punctuality',
                icon: '👨‍🎓',
                date: '2022',
                type: 'certification',
                featured: true,
                rarity: 'Epic',
                dotaReference: 'Completed the Refresher Orb of academia.',
            },
            {
                id: 'star',
                title: 'Student Academic Representative (StAR)',
                description: 'Served as the communication bridge between students and faculty',
                icon: '️🌟',
                date: '2022',
                type: 'contribution',
                featured: true,
                rarity: 'Common',
                dotaReference: 'Oracle supporting team with both fate and clarity.',
            },
            {
                id: 'clock_bee',
                title: 'Clock Bee – Product Launch',
                description:
                    'Built and launched a multi-tenant shift, scheduling, timesheet & payroll SaaS',
                icon: '⏰',
                date: '2025',
                type: 'milestone',
                featured: true,
                rarity: 'Legendary',
                dotaReference: 'Channelled with Clockwerk’s hookshot precision.',
            },
            {
                id: 'connect_cms',
                title: 'Connect CMS – Training Portal',
                description:
                    'Led the development of a Blazor-based Training Management System with CI/CD and Docker',
                icon: '🏫',
                date: '2024',
                type: 'freelancing',
                featured: true,
                rarity: 'Epic',
                dotaReference: 'Executed with Rubick-level versatility and control.',
            },
            {
                id: '8',
                title: 'DOTA 2 Ancient Rank',
                description: 'Achieved Ancient rank in DOTA 2 - strategic thinking at its finest!',
                icon: '🎮',
                date: '2023',
                type: 'milestone',
                featured: true,
                rarity: 'Epic',
                dotaReference: 'Reached Ancient rank in ranked matchmaking',
            },
        ];
    }

    public static getPersonalInformation(): PersonalInformation {
        return {
            name: 'Siddhartha Pradhan',
            title: 'Full Stack Developer',
            location: 'Kathmandu, Nepal',
            company: 'Tekkon Technologies',
            email: 'siddhartha.pradhan.ix@gmail.com',
            bio: 'Passionate developer with expertise in .NET ecosystem',
            githubUrl: 'https://github.com/siddhartha-pradhan',
            linkedinUrl: 'https://www.linkedin.com/in/siddhartha-pradhan-ix/',
            dateOfBirth: '2002-09-13',
        };
    }
    //#endregion

    //#region Miscellaneous
    public static getDogs(): Dog[] {
        return [
            {
                id: 'zoey',
                name: 'Zoey',
                breed: 'Japanese Spitz',
                age: 9,
                status: 'alive',
                description:
                    'The wise and elegant matriarch of our pack. Zoey brings grace and intelligence to every day.',
                personality: ['Intelligent', 'Loyal', 'Graceful', 'Protective'],
                favoriteActivities: [
                    'Morning walks',
                    'Sunbathing',
                    'Watching over the family',
                    'Gentle play',
                ],
                image: '/images/zoey.jpg',
                dotaHeroEquivalent:
                    'Crystal Maiden - Wise, supportive, and always there when you need her',
                specialMemory:
                    'Always knows when someone needs comfort and quietly sits beside them',
                dateJoined: '2016',
            },
            {
                id: 'lucy',
                name: 'Lucy',
                breed: 'Dalmatian',
                age: 8,
                status: 'passed',
                passedAge: 8,
                description:
                    'Our beautiful spotted angel who brought endless joy and energy to our lives. Forever in our hearts.',
                personality: ['Energetic', 'Playful', 'Loving', 'Adventurous'],
                favoriteActivities: [
                    'Running in the park',
                    'Playing fetch',
                    'Swimming',
                    'Making everyone smile',
                ],
                image: '/images/lucy.jpg',
                dotaHeroEquivalent: 'Phantom Assassin - Fast, agile, and always ready for action',
                specialMemory:
                    'Her spots were like a unique constellation, and she had the most infectious enthusiasm for life',
                dateJoined: '2017',
                datePassed: '2024',
            },
            {
                id: 'bambi',
                name: 'Bambi',
                breed: 'Labrador',
                age: 1,
                status: 'alive',
                description:
                    'Our newest family member, full of puppy energy and boundless curiosity about the world.',
                personality: ['Curious', 'Energetic', 'Friendly', 'Mischievous'],
                favoriteActivities: [
                    'Chewing everything',
                    'Learning new tricks',
                    'Playing with toys',
                    'Exploring',
                ],
                image: '/images/bambi.jpg',
                dotaHeroEquivalent:
                    'Pudge - Big heart, loves everyone, and always hungry for treats',
                specialMemory:
                    'Still learning the rules but brings so much laughter with puppy antics',
                dateJoined: '2024',
            },
        ];
    }

    public static handleTerminalCommand(
        command: string,
        {
            projects,
            skills,
            personalInformation,
            achievements,
            selectedHero,
            gameState,
            dogs,
        }: {
            projects: Project[];
            skills: Skill[];
            personalInformation: PersonalInformation;
            achievements: Achievement[];
            selectedHero: Hero;
            gameState: State;
            dogs: Dog[];
        },
        callbacks: {
            setShowHeroSelector?: () => void;
            setShowDotaPanel?: () => void;
            setShowDogsSection?: () => void;
            clearTerminal?: () => void;
        } = {},
    ): string | null {
        const cmd = command.toLowerCase().trim();
        let response = '';

        switch (cmd) {
            case 'help':
                response =
                    'Available commands: help, projects, skills, contact, achievements, hero, clear, dota, whoami, stats, abilities, items, match, dogs, pack';
                break;
            case 'projects':
                response = `My Projects:\n${projects
                    .filter((p) => p.featured)
                    .map((p) => `> ${p.name} - ${p.status} [${p.difficulty}]`)
                    .join('\n')}`;
                break;
            case 'skills':
                response = `Skill Matrix:\n${skills
                    .filter((s) => s.featured)
                    .map(
                        (s) => `> ${s.name}: ${s.level}% (CD: ${s.cooldown}s, Mana: ${s.manaCost})`,
                    )
                    .join('\n')}`;
                break;
            case 'contact':
                response = `Contact: ${personalInformation.email} | GitHub: ${personalInformation.githubUrl}`;
                break;
            case 'achievements':
                response = `Achievements:\n${achievements
                    .filter((a) => a.featured)
                    .map((a) => `> ${a.icon} ${a.title} [${a.rarity}]`)
                    .join('\n')}`;
                break;
            case 'hero':
                callbacks.setShowHeroSelector?.();
                response = 'Opening hero selection...';
                break;
            case 'dota':
                callbacks.setShowDotaPanel?.();
                response = 'Opening DOTA panel...';
                break;
            case 'stats':
                response = `${selectedHero.name} Stats:\nSTR: ${selectedHero.stats.strength} | AGI: ${selectedHero.stats.agility} | INT: ${selectedHero.stats.intelligence}\nLevel: ${selectedHero.stats.level} | Gold: ${gameState.gold} | GPM: ${gameState.gpm}`;
                break;
            case 'abilities':
                response = `${selectedHero.name} Abilities:\n${selectedHero.abilities
                    .map((a) => `> ${a.name} (Lv.${a.level})`)
                    .join('\n')}`;
                break;
            case 'items':
                response = `Inventory:\n${selectedHero.items
                    .map((i) => `> ${i.icon} ${i.name} [${i.rarity}]`)
                    .join('\n')}`;
                break;
            case 'match':
                response = `Current Match: ${gameState.currentMatch.result} | Duration: ${gameState.currentMatch.duration} | KDA: ${gameState.currentMatch.kda}`;
                break;
            case 'clear':
                callbacks.clearTerminal?.();
                return null;
            case 'whoami':
                response = `${personalInformation.name} - ${selectedHero.name} ${selectedHero.icon} | Level ${selectedHero.stats.level} | Ancient Rank`;
                break;
            case 'rampage':
                response = "🔥 RAMPAGE! You've eliminated 5 bugs in quick succession!";
                break;
            case 'gg':
                response = 'Good game! Thanks for visiting my portfolio!';
                break;
            case 'dogs':
                callbacks.setShowDogsSection?.();
                response = 'Opening dogs section... 🐕';
                break;
            case 'pack':
                response = `My Pack:\n${dogs
                    .map(
                        (dog) =>
                            `> ${dog.name} - ${dog.breed} (${dog.status === 'alive' ? `${dog.age} years old` : `passed at ${dog.passedAge}`})`,
                    )
                    .join('\n')}`;
                break;
            default:
                response = `Command '${command}' not found. Type 'help' for available commands.`;
        }

        return response;
    }

    public static getProjectIconMap: Record<string, () => JSX.Element> = {
        ARCHITECTURE_TEMPLATE: () => React.createElement(Code2, { className: 'w-6 h-6' }),
        WEB_APPLICATION: () => React.createElement(Database, { className: 'w-6 h-6' }),
        REST_API: () => React.createElement(Cpu, { className: 'w-6 h-6' }),
        CROSS_PLATFORM: () => React.createElement(Zap, { className: 'w-6 h-6' }),
        DISTRIBUTED_SYSTEM: () => React.createElement(Target, { className: 'w-6 h-6' }),
    };

    public static getDifficultyColor(difficulty: string): string {
        switch (difficulty) {
            case 'Easy':
                return '#22c55e';
            case 'Medium':
                return '#f59e0b';
            case 'Hard':
                return '#ef4444';
            case 'Legendary':
                return '#a855f7';
            default:
                return '#6b7280';
        }
    }

    public static getRarityColor(rarity: string): string {
        switch (rarity) {
            case 'Common':
                return '#9CA3AF';
            case 'Rare':
                return '#3B82F6';
            case 'Epic':
                return '#8B5CF6';
            case 'Legendary':
                return '#F59E0B';
            case 'Immortal':
                return '#EF4444';
            default:
                return '#6B7280';
        }
    }
    //#endregion
}
