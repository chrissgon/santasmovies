import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  darkMode: "class",
  content: ["app.vue", "components/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: "#4A7275",
        secondary: "#CB3F51",
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },
};
