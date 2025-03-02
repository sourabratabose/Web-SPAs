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
      },
      keyframes: {
        slideIn: {
          from: {
            opacity: 0,
            transform: "translateX(calc(100% + var(--viewport-padding)))",
          },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideOut: {
          from: {
            opacity: 1,
            transform: "translateX(var(--radix-toast-swipe-end-x))",
          },
          to: {
            opacity: 0,
            transform: "translateX(calc(100% + var(--viewport-padding)))",
          },
        },
        slideDown: {
          from: { opacity: 0, height: "0px" },
          to: { opacity: 1, height: "var(--radix-accordion-content-height)" },
        },
        slideUp: {
          from: { opacity: 1, height: "var(--radix-accordion-content-height)" },
          to: { opacity: 0, height: "0px" },
        },
      },
      animation: {
        slideIn: "slideIn 200ms ease-out",
        slideOut: "swipeOut 200ms ease-out",
        slideUp: "slideUp 200ms ease-out",
        slideDown: "slideDown 200ms ease-out",
      },
    },
  },
};
