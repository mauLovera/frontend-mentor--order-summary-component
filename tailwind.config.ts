import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "lavender": "hsl(245, 83%, 68%)"
      },
      neutral: {
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "dark-blue": "hsl(223, 47%, 23%)",
      },
    },
    backgroundImage: {
      desktop: "url('/images/pattern-background-desktop.svg')",
      mobile: "url('/images/pattern-background-mobile.svg')",
    },
    screens: {
      mobile: "375px",
      md: "768px"
    },
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px 0px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
}
export default config
