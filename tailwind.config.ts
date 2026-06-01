import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  safelist: [
    "left-[8%]", "top-[14%]", "right-[9%]", "top-[18%]", "left-1/2", "top-[36%]", "-translate-x-1/2",
    "left-[13%]", "bottom-[17%]", "right-[12%]", "bottom-[18%]", "left-[42%]", "bottom-[10%]", "left-[46%]", "top-[10%]",
  ],
};

export default config;
