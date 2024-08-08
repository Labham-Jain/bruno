/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    CI: process.env.CI,
    PLAYWRIGHT: process.env.PLAYWRIGHT,
    ENV: process.env.ENV
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
}