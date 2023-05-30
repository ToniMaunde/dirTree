/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "*.html"
  ],
  theme: {
    extend: {
      colors: {
        "xanthous": "#F7B32B",
        "white": "#FFFFFF",
        "chinese-silver": "#CCCCCC",
        "eerie-black": "#1C1D21",
        "vampire-black": "#050505",
      },
      lineHeight: {
        "leading-150": "150%"
      },
      fontFamily: {
        "inter-regular": "Inter-Regular",
        "inter-semibold": "Inter-Semibold",
        "zillaslab-medium": "Zilla-Slab-Medium",
        "zillaslab-bold": "Zilla-Slab-Bold",
      }
    },
  },
  plugins: [],
}
