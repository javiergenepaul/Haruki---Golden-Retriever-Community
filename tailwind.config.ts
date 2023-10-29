import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      colors: {
        priamry: "#44280E",
        secondary: "#C28237",
        white: {
          "01": "#FFFBF6",
        },
        theme: {
          light: "#FFFFFF",
          dark: "#23211D",
        },
      },
      fontSize: {
        h1: "4.25rem",
        h2: "3.125rem",
        h3: "2.375rem",
        h4: "1.75rem",
        h5: "1.313rem",
        large: "1rem",
        normal: "0.75rem",
        small: "0.563rem",
        extraSmall: "0.375",
      },
    },
  },
  plugins: [],
};
export default config;
