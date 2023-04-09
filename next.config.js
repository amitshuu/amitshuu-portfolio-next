/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.shopify.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
