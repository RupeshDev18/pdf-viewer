/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  module: {
    rules: [
      {
        test: /\.worker\.min\.js$/,
        use: { loader: "worker-loader" },
      },
    ],
  },
};

export default nextConfig;
