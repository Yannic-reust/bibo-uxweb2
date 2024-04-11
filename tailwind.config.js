export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#13070C",
      teacherPrimary: "#7B9CD4",
      teacherSecondary: "#BCCBE4",
      teacherTertiary: "#EEF5FF",
      teacherAccent: "#FA7070",
      studentPrimary: "#FFC000",
      studentSecondary: "#FFD966",
      studentTertiary: "#FFF2CC",
    },
    fontFamily: {
      sonar: ["Euclid Square", "sans-serif"], // main font
    },
    fontSize: {
      "h-lg": [
        "26px",
        { lineHeight: "36.4px", fontWeight: "600", fontFamily: "karmina" },
      ], // desktop main title
      "h-md": [
        "21px",
        {
          lineHeight: "29.4px",
          fontWeight: "600",
          fontFamily: "Euclid Square",
        },
      ], // mobile main title
      "h-sm": [
        "18px",
        {
          lineHeight: "25.2px",
          fontWeight: "600",
          fontFamily: "Euclid Square",
        },
      ], // mobile sub title
      "p-lg": [
        "21px",
        {
          lineHeight: "29.4px",
          fontWeight: "400",
          fontFamily: "Euclid Square",
        },
      ], // desktop text
      "p-md": [
        "18px",
        {
          lineHeight: "25.2px",
          fontWeight: "400",
          fontFamily: "Euclid Square",
        },
      ], // mobile text
      "p-sm": [
        "16px",
        {
          lineHeight: "16.8px",
          fontWeight: "400",
          fontFamily: "Euclid Square",
        },
      ], // mobile text
    },
    extend: {
      fontFamily: { sans: ["Euclid Square"] },
      boxShadow: {
        main: "0px 4px 52.6px 0px rgba(0, 0, 0, 0.25)",
      },
    }, // set default font
  },
  plugins: [],
};
