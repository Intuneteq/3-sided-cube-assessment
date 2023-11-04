import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-green": "#A0FF1F",
      "primary-pink": "#F70087",
      "primary-black": "#000000",
      "primary-white": "#FFFFFF",
      "secondary-white": "#F3F3F3",
      "secondary-dark": "#444444",
      "secondary-green": "#00ED71",
      "secondary-pink": "#F40256",
      "dark-grey": "#5B5B5B",
      "mid-grey": "#C3C3C3",
      "light-grey": "#F8F8F8",
    },
    extend: {
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(81deg, #A0FF1F 13.17%, #00ED71 86.83%)",
          "background-image": 'url("/background-image.png"), linear-gradient(81deg, #A0FF1F 13.17%, #00ED71 86.83%)',
      },
      boxShadow: {
        light: "0px 1px 10px 0px rgba(26, 26, 25, 0.08)",
        strong: "0px 2px 10px 0px rgba(26, 26, 25, 0.24)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounce 2.5s linear infinite",
        "fade-in": "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
