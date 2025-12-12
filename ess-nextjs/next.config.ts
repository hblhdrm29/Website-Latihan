import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Website-Latihan'; // Ganti sesuai nama repo Anda

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
  },
};

module.exports = nextConfig;