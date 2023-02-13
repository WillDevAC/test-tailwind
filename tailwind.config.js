/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        titillium: ["var(--font-titillium)"],
      },
      colors: {
        "brand": "#ec5161",
      },
      gridTemplateColumns: {
        'auto': 'auto 1fr',
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
