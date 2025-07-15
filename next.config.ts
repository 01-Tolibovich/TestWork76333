import path from 'path';

const nextConfig = {
  images: {
    domains: ['cdn.dummyjson.com', 'i.dummyjson.com'],
  },
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/app/styles')],
    prependData: `@import "variables.scss";`,
  },
};

module.exports = nextConfig;
