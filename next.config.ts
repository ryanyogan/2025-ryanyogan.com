import createMDX from "@next/mdx";
import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  experimental: {
    ppr: true,
    dynamicIO: true,
    mdxRs: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
} satisfies NextConfig;

const withMDX = createMDX({});
export default withMDX(nextConfig);
