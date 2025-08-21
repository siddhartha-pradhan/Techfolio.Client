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
    manifest: '/manifest.webmanifest',
    themeColor: '#0b132b',
    icons: {
        icon: [
            { url: '/favicon.svg', sizes: '32x32', type: 'image/svg+xml' },
            { url: '/icons/192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/icons/512x512.png', sizes: '512x512', type: 'image/png' }
        ],
        apple: [{ url: '/icons/192x192.png', sizes: '180x180', type: 'image/png' }] // or add /apple-touch-icon.png
    },
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>{metadata.title?.toString() ?? 'Siddhartha'}</title>
            {/* iOS PWA */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="Siddhartha" />

            {/* Microsoft Clarity */}
            <Script id="ms-clarity" strategy="afterInteractive">
                {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "sg4604jy6p");`}
            </Script>
        </head>
        <body>{children}</body>
        </html>
    );
}
