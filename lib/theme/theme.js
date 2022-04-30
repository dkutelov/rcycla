export const getTheme = (language) => ({
  colors: {
    primary: "#00904d",
  },
  textColors: {
    main: "#333333",
  },
  fontFamily:
    language === "en" ? "'Poppins', sans-serif" : "'Roboto Slab', serif",
  sizes: [
    "4px",
    "8px",
    "12px",
    "16px",
    "18px",
    "22px",
    "26px",
    "30px",
    "46px",
    "62px",
    "78px",
    "84px",
    "124px",
  ],
  fontSize: {
    caption: "12px",
    button: "14px",
    body: "16px",
    subtitle: "18px",
    title: "20px",
    h5: "24px",
    h4: "34px",
    h3: "45px",
    h2: "56px",
    h1: "112px",
  },
});
