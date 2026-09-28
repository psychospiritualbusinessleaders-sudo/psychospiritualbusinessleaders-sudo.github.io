// Separate Vite config for a fully static GitHub Pages export.
//
// The main vite.config.ts targets Cloudflare Workers (SSR) for Lovable
// publishing. GitHub Pages serves static files only, so this config pins
// Nitro's `static` preset, which prerenders every route it can discover and
// emits a pure static directory. It is used exclusively by the GitHub Actions
// workflow (`.github/workflows/deploy-gh-pages.yml`); the Lovable build never
// touches it.
//
// Base path: a GitHub Pages *project* site is served under `/<repo>/`, so the
// workflow sets GH_PAGES_BASE (e.g. "/vireo/"). User-site repos
// (`<user>.github.io`) and custom domains use "/" (the default).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const base = process.env.GH_PAGES_BASE ?? "/";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "static",
    output: {
      dir: "dist-gh-pages",
      publicDir: "dist-gh-pages/public",
    },
  },
  vite: {
    base,
  },
});
