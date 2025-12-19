/** @type {import('next').NextConfig} */
const nextConfig = {
    // ВОТ ЗДЕСЬ, внутри скобок!
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  
