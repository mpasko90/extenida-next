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
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/',
        permanent: true
      }
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
