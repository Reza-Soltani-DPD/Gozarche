// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  // swcMinify: true,
  output: "standalone",
  images: {
    unoptimized:true,
    domains: [
      'picsum.photos',
    ]
  }
 
};
export default config;
