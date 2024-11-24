import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#FA8626",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "orange-blue-gradient":
          "linear-gradient(102.38deg, #2563EB 12.35%, #FA8626 100%)",
        "faded-orange-blue-gradient":
          "linear-gradient(97.14deg, rgba(37, 99, 235, 0.16) 5.99%, rgba(250, 134, 38, 0.16) 82.78%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
