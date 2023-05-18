/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,jsx,js}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
