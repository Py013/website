import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // App vive em frontend/; há outro package-lock na raiz do repo — definir raiz do tracing evita o warning.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
