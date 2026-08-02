import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * Adapter config for running this Next app on Cloudflare Workers.
 *
 * Nothing is overridden yet — the defaults cover a site that is almost
 * entirely prerendered, with the proxy redirect as the only work done per
 * request. Add an incremental cache here if ISR is introduced later.
 */
export default defineCloudflareConfig();
