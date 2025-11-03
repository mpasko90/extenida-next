import path from 'path';
import { fileURLToPath } from 'url';
import bundleAnalyzer from '@next/bundle-analyzer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === '1' });

/** @type {import('next').NextConfig} */
const baseConfig = {
  images: {
    formats: ['image/webp','image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'extendia.co.uk',
        pathname: '/wp-content/uploads/**'
      },
      {
        protocol: 'https',
        hostname: 'st.hzcdn.com',
        pathname: '/**'
      }
    ]
  },
  async redirects() {
    return [
      { source: '/blog', destination: '/', permanent: true },
      // Legacy PascalCase service paths -> canonical slug paths
  { source: '/services/HomeExtensions', destination: '/services/home-extensions', permanent: true },
      { source: '/services/LoftConversions', destination: '/services/loft-conversions', permanent: true },
      { source: '/services/KitchenRenovations', destination: '/services/kitchen-renovations', permanent: true },
      { source: '/services/BathroomRenovations', destination: '/services/bathroom-renovations', permanent: true }
  ,
  // Legacy non-canonical slug variant -> canonical
  { source: '/services/house-extensions', destination: '/services/home-extensions', permanent: true },
  // Consolidated service slug
  { source: '/services/kitchen-installations', destination: '/services/kitchen-renovations', permanent: true },
  // Areas -> London area structure
  { source: '/areas', destination: '/london', permanent: true },
  { source: '/areas/:slug', destination: '/london/:slug', permanent: true }
    ];
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '.');
    return config;
  },
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

export default withBundleAnalyzer(baseConfig);
