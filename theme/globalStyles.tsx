import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Variables */
  :root {
    /* colors */
    --color-text: black;
    --color-background: red;
    --light-color: #BFD7ED;
    --main-color: #003B73;
    --second-color: #60A3D9;
    --white-color: #F6FBFF;

    /* font */
    --ff: 'JetBrains Mono', monospace;
    --ff-serif: '';

    --fw-thin: 100;
    --fw-light: 300;
    --fw-medium: 500;
    --fw-bold: 700;

    /* spacing */
    --pad-4: 4rem;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background: #BFD7ED;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5rem;
    line-height: 1.7;
    color: #003B73;
    font-weight: 300;
  }

`;

export default GlobalStyle;
