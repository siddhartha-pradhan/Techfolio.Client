import './globals.css';
import React from 'react';
import Script from 'next/script';
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
        icon: [{ url: '/favicon.svg', sizes: '32x32' }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>{metadata.title?.toString() ?? 'Siddhartha'}</title>
                {/* Microsoft Clarity Script */}
                <Script id="ms-clarity" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "sg4604jy6p");
                    `}
                </Script>
            </head>
            <body>{children}</body>
        </html>
    );
}
