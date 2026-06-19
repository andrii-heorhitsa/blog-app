import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.dev.to", // Дозволяє будь-які піддомени dev.to
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Часто використовується авторами на dev.to
      },
    ],
  },
};

export default nextConfig;
