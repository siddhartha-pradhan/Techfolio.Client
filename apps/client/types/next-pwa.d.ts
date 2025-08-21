declare module 'next-pwa' {
    import type { NextConfig } from 'next';
    type WithPWA = (options?: any) => (nextConfig?: NextConfig) => NextConfig;
    const withPWA: WithPWA;
    export default withPWA;
}
