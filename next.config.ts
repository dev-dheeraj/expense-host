import type { NextConfig } from "next";
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig: NextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "expense-host",
        remotes: {
          dashboard: "dashboard@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          expenses: "expenses@http://localhost:3002/_next/static/chunks/remoteEntry.js",
        },
        exposes: {},
        shared: {},
        extraOptions: {},
      })
    );
    return config;
  },
};

export default nextConfig;