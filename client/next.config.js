/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  compress: true,
  reactStrictMode: true,
  images: {
    domains: [
      'webwebweb3.s3.ap-northeast-2.amazonaws.com', // 예정
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  webpack: (config, { webpack, isServer }) => {
    const prod = process.env.NODE_ENV === 'production';

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval',
      plugins: [
        ...config.plugins,
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      ],
    };
  },
});

module.exports = nextConfig;
