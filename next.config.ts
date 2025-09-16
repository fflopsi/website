import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  redirects: async () => [
    {
      source: '/ta/cs/',
      destination: '/ta/computer-science/',
      permanent: true,
    },
    {
      source: '/ta/la(ii)?/',
      destination: '/ta/linear-algebra-ii/',
      permanent: true,
    },
    {
      source: '/ta/ca/',
      destination: '/ta/complex-analysis/',
      permanent: true,
    },

    {
      source: '/ta/informatik/',
      destination: '/ta/computer-science/',
      permanent: true,
    },
    {
      source: '/ta/linear(e)?-algebra/',
      destination: '/ta/linear-algebra-ii/',
      permanent: true,
    },
    {
      source: '/ta/(lineare-algebra|linalg)(-ii)?/',
      destination: '/ta/linear-algebra-ii/',
      permanent: true,
    },
    {
      source: '/ta/funktionentheorie/',
      destination: '/ta/complex-analysis/',
      permanent: true,
    },
    {
      source: '/(copyright|disclaimer|privacy|impressum)/',
      destination: '/legal/',
      permanent: true,
    },
  ],
};

export default nextConfig;
