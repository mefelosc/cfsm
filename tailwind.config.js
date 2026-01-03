/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  darkMode: 'class', // use 'class' instead of 'media'
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  // opcional: configurar temas do daisyui
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#F58634",
          "secondary": "#0F1E45",
          "accent": "#F58634",
          "neutral": "#0F1E45",
          "base-100": "#ffffff",
        },
        dark: {
          "primary": "#F58634",
          "secondary": "#0F1E45",
          "accent": "#F58634",
          "neutral": "#1e293b",
          "base-100": "#050a17", // Premium Dark Background
          "base-200": "#0a132e",
          "base-300": "#0F1E45",
          "base-content": "#e2e8f0",
        },
      },
    ],
  },
};
