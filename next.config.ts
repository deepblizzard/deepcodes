import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Warning: Builds will succeed even if type errors exist
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: ESLint errors will not fail the build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
