import { plugin } from "postcss";
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
		primary : "#d22715",
		secondary : "#980a07",
		primaryDark:"#7c1108",
		}
	},
},
plugins:[],
}