/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    env: {
        NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    },
    images: { unoptimized: true }
};

module.exports = nextConfig;
