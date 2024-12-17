// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare(),
  env: {
    schema: {
      DIRECTUS_URL: envField.string({
        context: "client",
        access: "public",
      }),
      DIRECTUS_TOKEN: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
});
