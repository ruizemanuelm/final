/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  env: {
    NEXTAUTH_URL: "https://final-delta-beryl.vercel.app",
  },
};

module.exports = nextConfig
