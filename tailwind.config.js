/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  darkMode: 'class', // use 'class' instead of 'media'
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: { },
  },
  plugins: [daisyui],
  // opcional: configurar temas do daisyui
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
};
