/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#F8F2EA", // Lys cremefarve
        "dark-gray": "#363738", // Mørk grå
        "red-orange": "#E7371C" // Rød-orange
      }
    }
  },
  plugins: []
};
