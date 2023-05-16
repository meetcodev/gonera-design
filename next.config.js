/** @type {import('next').NextConfig} */

module.exports = {
    output: 'standalone',
  }

const nextConfig = {
    reactStrictMode: true,
    output: 'standalone', //BUG dołożyłem
};

module.exports = nextConfig;
