import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  basePath,
  trailingSlash: Boolean(basePath),
  output: basePath ? "export" : undefined,
  images: {
    unoptimized: Boolean(basePath),
  },
};

export default nextConfig;
