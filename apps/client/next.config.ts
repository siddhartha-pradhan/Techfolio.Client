import path from 'path';
import withPWA from 'next-pwa';
import type { NextConfig } from 'next';

const baseConfig: NextConfig = {
    output: 'export',
    images: { unoptimized: true },
    compress: true,

    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
                ],
            },
        ];
    },

    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },

    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    },
};

export default withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development', // keep dev simple
    // sensible defaults (tweak later if needed)
    runtimeCaching: [
        {
            // @ts-ignore
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: { cacheName: 'pages', networkTimeoutSeconds: 3 },
        },
        {
            // @ts-ignore
            urlPattern: ({ request }) =>
                ['script', 'style', 'worker'].includes(request.destination),
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'assets' },
        },
        {
            // @ts-ignore
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'images' },
        },
        {
            urlPattern: /^https:\/\/fonts\.(gstatic|googleapis)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
                cacheName: 'google-fonts',
                expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
        },
    ],
})(baseConfig);
