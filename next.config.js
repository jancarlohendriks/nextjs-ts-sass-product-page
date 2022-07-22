const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["guesseu.scene7.com"],
  },
};

module.exports = nextConfig;
