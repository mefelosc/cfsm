import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    // Adaptador para sites estáticos
    adapter: adapter({
      // Pasta de saída padrão. O GitHub Actions irá usar essa pasta.
      pages: 'build',
      assets: 'build',
      fallback: undefined, // ou '404.html' se você tiver uma página 404 personalizada
      precompress: false,
      strict: true
    }),
    paths: {
        // Se o seu site estiver em https://<username>.github.io/<repo-name>
        // Coloque o nome do seu repositório aqui.
        // Se for em https://<username>.github.io, deixe em branco.
        base: process.env.NODE_ENV === 'production' ? '/cfsm' : '',
    }
  }
};

export default config;