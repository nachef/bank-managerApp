/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", ".page.ts", "page.jsx", "page.js"],
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["i.imgur.com"],
  },
  env: {
    API: process.env.API,
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
        type: "asset/resource",
        generator: {
          filename: "static/chunks/[path][name].[hash][ext]",
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      }
    );

    return config;
  },
};

module.exports = nextConfig;
