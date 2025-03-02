import { blackA, iris, irisA, irisDarkA } from "@radix-ui/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...iris,
        ...irisA,
        ...irisDarkA,
      }
    },
  }
};
