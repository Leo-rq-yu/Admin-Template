/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: true,
  },
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/panel",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
