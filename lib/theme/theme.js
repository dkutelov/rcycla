export const getTheme = (language) => ({
  colors: {
    primary: "#18814D",
  },
  textColors: {
    main: "#333333",
  },
  fontFamily: language === "en" ? "Poppins" : "SofiaSans-Regular",
});