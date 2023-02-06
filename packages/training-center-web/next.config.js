/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'training-center',
          filename: 'static/chunks/remoteEntry.js', // remoteEntry.js
          remotes: {
            // remote: 'component@http://localhost:3002/remoteEntry.js',
            remote: 'component@http://localhost:3002/_next/static/chunks/remoteEntry.js',
          },
          exposes: {},
          shared: {},
        }),
      );
    }

    return config;
  },
}

module.exports = nextConfig
