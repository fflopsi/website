import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  redirects: async () => [
    {
      source: '/(copyright|disclaimer|privacy|impressum)/',
      destination: '/legal/',
      permanent: true,
    },
    {
      source: '/ta/linear(e|)-algebra/',
      destination: '/ta/linalg/',
      permanent: true,
    },
    {
      source: '/ta/funktionentheorie/',
      destination: '/ta/complex-analysis/',
      permanent: true,
    },
  ],
};

export default nextConfig;
