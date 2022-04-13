/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'webwebweb3.s3.ap-northeast-2.amazonaws.com', // 예정
    ],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};

module.exports = nextConfig;
