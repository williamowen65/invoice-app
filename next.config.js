/** @type {import('next').NextConfig} */
const withImages = require("next-images");

const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
    withImages,
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;
