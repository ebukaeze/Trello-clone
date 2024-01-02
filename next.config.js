/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
    //remotePatterns: ["images.ctfassets.net", "img.clerk.com"]
  },
};

module.exports = nextConfig;
