/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static file serving for video files
  reactStrictMode: true,
  
  // Configure webpack to handle video files
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/media/',
          outputPath: 'static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig; 