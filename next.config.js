module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/:path*",
          destination: "/api/:path*",
        },
      ],
    };
  },
};
