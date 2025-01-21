/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          
       
        'hub-kami': '#86469C',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero-pattern-1': "url('/images/background.jpeg')",
        'hero-pattern-2': "url('/images/Front_view_of_SMKN_1_Bantul.jpg')",
      },
    },
  },
  plugins: [],
};

