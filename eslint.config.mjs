import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const config = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "next-env.d.ts",
      // Cloudflare adapter output — bundled third-party code, not ours.
      ".open-next/**",
      ".wrangler/**",
    ],
  },
];

export default config;
