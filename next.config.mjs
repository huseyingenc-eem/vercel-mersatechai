/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    optimizePackageImports: [
      '@/components/ui',
      '@/components/ui/core',
      '@/components/ui/animations',
      '@/components/ui/backgrounds',
      '@/components/ui/typography',
      '@/components/ui/forms',
      '@/components/ui/navigation',
      '@/components/ui/composed',
      '@/components/ui/cards',
    ],
  },
};

export default nextConfig;
