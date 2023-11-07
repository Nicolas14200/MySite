/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      fontFamily: {
        forum: ["Forum-Regular", "sans"],
        avenir: ["Avenir-Regular", "sans"],
        josefin: ["JosefinSlab-Regular", "sans"],
      },
      backgroundImage: {
        iconLinkedin: "url('./src/assets/icon-linkedin.webp')",
        photoProfil: "url('./src/assets/photo-profils.webp')",
        photoDriver:"url('./src/assets/chauffeur-accompagnateur.webp')",
        photoAgri:"url('./src/assets/Agriculture-BIO_BVLeMag.webp')",
        photoIntrieurVoiture:"url('./src/assets/intérieur voiture.webp')",
      },
    },
  },
  plugins: [],
};
