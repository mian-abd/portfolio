/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["aceternity.com", "images.unsplash.com", "assets.aceternity.com"],
  },
  // webpack: (config, {isServer}) => {
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty'
  //     }
  //   }
  //   return config
  // }
};

export default nextConfig;
