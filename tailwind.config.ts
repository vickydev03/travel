// tailwind.config.ts
import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        saira: ["var(--font-saira)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;