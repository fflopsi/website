import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  redirects: async () => [
    {
      source: '/(contact|copyright|disclaimer|privacy|impressum)/',
      destination: '/legal/',
      permanent: true,
    },
  ],
};

export default nextConfig;
