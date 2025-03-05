import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "gainfulnoise-us.backendless.app" },
      { protocol: "https", hostname: "www.theforage.com" },
    ],
  },
};

export default nextConfig;
