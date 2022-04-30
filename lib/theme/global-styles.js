import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
`;
