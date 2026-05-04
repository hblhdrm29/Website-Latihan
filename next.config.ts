import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';
const repoName = 'Website-Latihan'; 

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Only use basePath/assetPrefix if NOT on Vercel (e.g. for GitHub Pages)
  basePath: (isProd && !isVercel) ? `/${repoName}` : '',
  assetPrefix: (isProd && !isVercel) ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: (isProd && !isVercel) ? `/${repoName}` : '',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;