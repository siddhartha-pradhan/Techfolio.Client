import path from 'path';
import createNextPWA from 'next-pwa';
import type { NextConfig } from 'next';

const withPWA = createNextPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching: [
        {
            // HTML Documents / Pages
            // @ts-ignore - Next.JS PWA Runtime Caching Signature
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: {
                cacheName: 'pages',
                networkTimeoutSeconds: 3,
            },
        },
        {
            // @ts-ignore - JS / CSS / Workers
            urlPattern: ({ request }) =>
                ['script', 'style', 'worker'].includes(request.destination),
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'assets',
            },
        },
        {
            // @ts-ignore - Images
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'images',
            },
        },
        {
            // Google Fonts
            urlPattern: /^https:\/\/fonts\.(gstatic|googleapis)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
                cacheName: 'google-fonts',
                expiration: {
                    maxEntries: 30,
                    maxAgeSeconds: 60 * 60 * 24 * 365,
                },
            },
        },
    ],
});

const nextConfig: NextConfig = {
    // Static Export for Firebase / CDN
    output: 'export',
    images: { unoptimized: true },
    compress: true,

    typescript: {
        ignoreBuildErrors: true,
    },

    webpack: (config) => {
        config.resolve = config.resolve || {};
        config.resolve.alias = config.resolve.alias || {};
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    }
};

export default withPWA(nextConfig);
