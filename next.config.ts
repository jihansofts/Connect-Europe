/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // required if you're using <Image> component
  },
};

module.exports = nextConfig;
