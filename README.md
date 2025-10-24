# Portfólio — SvelteKit + Tailwind

Portfolio pessoal para apresentar projetos, habilidades e contato.

</div>

## Visão Geral

Aplicação estática construída com SvelteKit (Svelte 5), Vite e TailwindCSS (com DaisyUI). O site é uma página única (SPA) composta por componentes Svelte e publicada como conteúdo estático via `@sveltejs/adapter-static`.

## Stack / Principais Dependências

- SvelteKit `^2.x` (Svelte `^5.x`)
- Vite `^5.x`
- TailwindCSS `^4.x` + plugin `@tailwindcss/vite`
- DaisyUI `^5.x` (componentes/temas)
- theme-change (toggle entre tema claro/escuro)

## Scripts

- `npm run dev` — inicia o servidor de desenvolvimento (Vite + SvelteKit)
- `npm run build` — gera o build de produção estático em `build/`
- `npm run preview` — serve localmente o build de produção

## Estrutura do Projeto

```
src/
	app.html         # Template HTML base (inclui fontes e favicon)
	app.css          # Estilos globais; importa Tailwind e DaisyUI
	routes/
		+layout.svelte # Wrapper global (importa app.css)
		+page.svelte   # Página principal que compõe as seções
	lib/components/
		Header.svelte  # Navbar + toggle de tema + link do CV
		About.svelte
		Projects.svelte
		Skills.svelte
		Contact.svelte
		Footer.svelte
static/
	favicon.ico      # Ícone da aba do navegador
	me.jpg           # Foto de perfil
	cv2025.pdf       # Currículo baixável
```

Saída de build: `build/` (gerado pelo adapter-static).

## Destaques e Convenções

- SPA simples: seções principais (Sobre, Projetos, Stack, Contato) montadas em `+page.svelte`.
- Componentes em `src/lib/components/` com nomes em PascalCase.
- Temas (claro/escuro) via DaisyUI + `theme-change`:
	- Em `Header.svelte`, `onMount(() => themeChange(false))` e um `<input type="checkbox" data-toggle-theme="dark,light" />` controlam o tema.
- Assets públicos em `static/` são servidos na raiz (`/cv2025.pdf`, `/me.jpg`, `/favicon.ico`).
- Tailwind e DaisyUI configurados em `src/app.css` (Tailwind v4 com plugin DaisyUI).

## Desenvolvimento

1. Instale as dependências:
	 ```bash
	 npm install
	 ```
2. Dev server:
	 ```bash
	 npm run dev
	 ```
3. Build de produção:
	 ```bash
	 npm run build
	 ```
4. Preview do build:
	 ```bash
	 npm run preview
	 ```

## Como adicionar conteúdo

- Novo projeto: edite `src/lib/components/Projects.svelte` e siga o padrão de card (imagem, título, descrição e botão com link do GitHub/demo).
- Nova seção: crie um componente em `src/lib/components/` e importe em `src/routes/+page.svelte`.
- Atualizar CV/foto: substitua os arquivos em `static/` e atualize os links no `Header.svelte` se necessário.

## Favicon e Metadados

- O favicon `.ico` deve ficar em `static/favicon.ico`.
- `src/app.html` contém:
	```html
	<link rel="icon" href="/favicon.ico" sizes="any">
	```

## Notas de versão

- O projeto usa Svelte 5 com `@sveltejs/vite-plugin-svelte` v4 (next) para suporte e correções recentes. Caso veja avisos no dev, atualize as dependências conforme recomendado no console.

---

Se encontrar problemas ou tiver sugestões, abra uma issue ou envie um PR.
