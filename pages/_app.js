import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "SofiaSans-Regular";
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url(/fonts/SofiaSans-Regular.woff2) format("woff2");
  }
  @font-face {
    font-family: 'Poppins Regular';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/Poppins-Regular.woff') format('woff');
  }
  body {
    margin: 50px;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins Regular", sans-serif;
  }
`;

const theme = {
  colors: {
    primary: "#18814D",
  },
  fonts: {
    english: "Poppins",
    bulgarian: "SofiaSans-Regular",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
