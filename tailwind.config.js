const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./package.json/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./package.json/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tint-blue': '#1C1E53',
        'yellow': '#FCD980',
        'royalBlue': '#2405F2',
        'grey': '#F4F6FC',
        'accent': '#EEF4FA',
        'darkBlue': '#282938',
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif'],
      },
},
  },
  plugins: [],
});