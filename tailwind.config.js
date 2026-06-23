/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        'headline-md': ['Space Grotesk'],
        'meta-code': ['JetBrains Mono'],
        'label-caps': ['JetBrains Mono'],
        'body-sm': ['Inter'],
      },
      colors: {
        surface: "#141218",
        'surface-container-lowest': "#0f0d13",
        'surface-container-low': "#1d1b20",
        'surface-container': "#211f24",
        'surface-bright': "#3b383e",
        'outline-variant': "#494551",
        outline: "#948e9c",
        primary: "#cfbcff",
        secondary: "#cdc0e9",
        tertiary: "#e7c365",
        'on-surface': "#e6e0e9",
        'on-surface-variant': "#cbc4d2",
        accent: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
        },
        ai: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        }
      }
    },
  },
  plugins: [],
}
