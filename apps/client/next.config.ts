import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Enable Standalone Output for Docker
    output: 'export',

    // Optimize Images
    images: {
        unoptimized: true,
    },

    // Enable Compression
    compress: true,

    // Security Headers
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
        ];
    },

    // ESLint Configuration
    eslint: {
        ignoreDuringBuilds: true,
    },

    // TypeScript Configuration
    typescript: {
        ignoreBuildErrors: true,
    },

    // Webpack Configuration
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    },
};

export default nextConfig;
