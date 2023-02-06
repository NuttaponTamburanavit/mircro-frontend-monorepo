/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    Object.assign(config.experiments, { topLevelAwait: true });

    if (!options.isServer) {
      //config.cache=false
      config.plugins.push(
        new NextFederationPlugin({
          name: 'component',
          filename: 'static/chunks/remoteEntry.js', // remoteEntry.js
          exposes: {
            './table': './src/components/atoms/table',
          },
          shared: {},
        }),
      );
    }

    return config;
  }
}

module.exports = nextConfig
