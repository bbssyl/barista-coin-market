/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-coin": "url('/images/bg.jpeg')",
      },
      dropShadow: {
        green: "0 2px 5px rgba(4,255,0)",
        red: "0 2px 5px rgba(255,4,0)",
      },
      keyframes: {
        "manually-bounce": {
          "0%": { transform: "width(-20px)" },
          "100%": { transform: "translateY(20px)" },
        },
      },
      animation: {
        "manually-bounce": "manually-bounce 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
