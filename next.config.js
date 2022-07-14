/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  experimental: { css: true },
  env: {
    BASE_URL: "http://localhost:7071/api",
  },
};

module.exports = nextConfig;
