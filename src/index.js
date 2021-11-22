const plugin = require("tailwindcss/plugin");

const classes = plugin(function ({ addUtilities }) {
  addUtilities({
    /* Webkit required classes */
    ".scrollbar-x-hide": {
      "&::-webkit-scrollbar:horizontal": {
        height: 0,
        width: 0,
        display: "none",
      },
      "&::-webkit-scrollbar-thumb:horizontal": {
        display: "none",
      },
    },
  });
});

module.exports = classes;
