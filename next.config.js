/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "wran", "info"] }
        : false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_USER_API_URL: process.env.NEXT_PUBLIC_USER_API_URL,
    NEXT_PUBLIC_GOLD_API_URL: process.env.NEXT_PUBLIC_GOLD_API_URL,
  },
};

module.exports = nextConfig;
