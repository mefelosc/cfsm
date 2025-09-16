import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');
const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1] || '';
// Base path para GitHub Pages: /<repo> em build/CI; vazio em dev
const base = dev ? '' : (process.env.BASE_PATH || (repo ? `/${repo}` : ''));

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
  kit: {
    paths: { base },
    adapter: adapter({
      pages: 'build',   // onde os HTML ficam
      assets: 'build',  // onde JS/CSS vão
      fallback: 'index.html',    // ou 'index.html' se precisar SPA fallback
    })
    }
};

export default config;