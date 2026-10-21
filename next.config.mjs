/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Clean URLs for the standalone demo sites in /public/demos
      { source: "/demos/halo-and-hue", destination: "/demos/halo-and-hue.html" },
      { source: "/demos/lantern-row-coffee", destination: "/demos/lantern-row-coffee.html" },
      { source: "/demos/ironwood-plumbing-heating", destination: "/demos/ironwood-plumbing-heating.html" },
      { source: "/demos/northlight-photography", destination: "/demos/northlight-photography.html" },
    ];
  },
};

export default nextConfig;
