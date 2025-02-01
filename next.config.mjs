const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/personal-website-template' : '',
  assetPrefix: isProd ? '/personal-website-template/' : '',
  distDir: 'out', // Ensure this line is present
  output: 'export', // Add this line to enable static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

let userConfig = undefined;
try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // ignore error
}

for (const key in userConfig) {
  if (
    typeof nextConfig[key] === 'object' &&
    !Array.isArray(nextConfig[key])
  ) {
    nextConfig[key] = {
      ...nextConfig[key],
      ...userConfig[key],
    };
  } else {
    nextConfig[key] = userConfig[key];
  }
}

export default nextConfig;
