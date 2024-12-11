/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      mobile: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      tablet: { min: "640px", max: "1023px" },
      // => @media (min-width: 640px) and (max-width: 1023px) { ... }

      laptop: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px) and (max-width: 1279px) { ... }

      desktop: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px) and (max-width: 1535px) { ... }

      wide: { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("@tailwindcss/forms")], // Optional
  plugins: [],
};
