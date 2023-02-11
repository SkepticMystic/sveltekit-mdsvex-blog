import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    // Tell mdsvex to use the .md extension
    mdsvex({ extensions: [".md"] }),
  ],
  // Tell SvelteKit to also treat .md files as Svelte components
  extensions: [".svelte", ".md"],

  kit: {
    adapter: adapter(),
  },
};

export default config;
