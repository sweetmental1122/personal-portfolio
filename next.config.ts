import type { NextConfig } from "next";

/**
 * Keep in step with LOCALES / DEFAULT_LOCALE in src/i18n/config.ts. Not
 * imported from there because next.config runs before the TS path aliases
 * are wired up.
 */
const DEFAULT_LOCALE = "ja";

/** Every route that exists under a locale, as it appears without one. */
const UNPREFIXED_ROUTES = [
  "/",
  "/about",
  "/works",
  "/works/:slug",
  "/contact",
  "/privacy",
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },

  /**
   * Sends un-prefixed paths to the default locale.
   *
   * This was a middleware (src/proxy.ts) until Cloudflare entered the
   * picture: Next 16 pins proxy files to the Node.js runtime, and the
   * Cloudflare adapter only runs Edge middleware, so the two could not both
   * be true. Redirects live in the routing manifest instead, which every
   * host handles — and one fewer per-request hop besides.
   *
   * Listing the routes rather than matching a pattern is deliberate.
   * Redirects are evaluated before the filesystem, so a catch-all would
   * happily send /images/logo.jpg to /ja/images/logo.jpg.
   */
  async redirects() {
    return UNPREFIXED_ROUTES.map((route) => ({
      source: route,
      destination: `/${DEFAULT_LOCALE}${route === "/" ? "" : route}`,
      permanent: false,
    }));
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
