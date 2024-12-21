import rehypePrism from "@mapbox/rehype-prism";
import nextMDX from "@next/mdx";
import { NextConfig } from "next";
import remarkGfm from "remark-gfm";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
    dynamicIO: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
} satisfies NextConfig;

export default withMDX(nextConfig);
