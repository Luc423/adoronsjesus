import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Très important pour générer le dossier 'out'
  images: {
    unoptimized: true,
  },
};

export default nextConfig;