/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url(/src/assets/heroBg.png)",
        pricingHeroBg: "url(/src/assets/pricingHeroBg.png)",
        contactUsBg: "url(/src/assets/contactUsBg.png)",
        suburbsHeroBg: "url(/src/assets/suburbsHeroBg.png)",
      },
      container: {
        center: true,
        padding: "16px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
