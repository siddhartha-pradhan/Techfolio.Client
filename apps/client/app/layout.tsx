import './globals.css';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Siddhartha',
    description:
        'Full-stack developer portfolio with DOTA-themed interface featuring projects, skills, and achievements',
    generator: 'siddhartha.io',
    keywords: ['developer', 'portfolio', 'full-stack', 'react', 'next.js', 'dota'],
    authors: [{ name: 'Siddhartha' }],
    creator: 'Siddhartha',
    icons: {
        icon: [
            { url: '/favicon.svg', sizes: '32x32' },
        ]
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
