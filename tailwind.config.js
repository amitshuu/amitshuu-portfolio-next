/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1F242D",
        "custom-black": "#333",
        "primary-blue": "#00EEFF",
        "primary-blue-hover": "#00B3CC",
        "primary-blue-darker": "#00B3CC",
        "primary-section": "#171C23",
      },
      fontSize: {
        dynamic: "clamp(0rem, 10vw, 0.8rem)",
      },
      minHeight: {
        customMinHeight: "250px",
      },
      maxHeight: {
        customMaxHeight: "460px",
      },
      minWidth: {
        customMinHeight: "50px",
      },
      maxWidth: {
        customMaxWidth: "200px",
      },
      screens: {
        "3xl": "1921px",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
