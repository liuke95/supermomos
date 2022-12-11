/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "supermomos-app-resources-us.s3.amazonaws.com",
        port: "",
        pathname: "/Images/**",
      },
    ],
  },
};

module.exports = nextConfig;
