/** @type {import('next').NextConfig} */
const nextConfig = {
    // Konfigurasi untuk images
    images: {
      domains: ['localhost'],
      // Opsional: Batasi ukuran gambar yang bisa dimuat
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // Konfigurasi webpack untuk menangani file gambar
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[name].[hash][ext]',
        },
      });
      return config;
    },
  };
  
  export default nextConfig;