import { defineConfig } from "vite";

export default defineConfig({
  base: "/auto-rent/",
});
module.exports = {
  content: ["./*.html", "./src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
