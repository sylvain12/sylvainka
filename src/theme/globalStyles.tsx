import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Variables */
  :root {
    /* colors */
    --color-text: black;
    --color-background: red;
    --light-color: #BFD7ED;
    --main-color: #003B73;
    --main-color-light: rgba(0, 59, 115, 0.2);
    --second-color: #60A3D9;
    --second-color-light: rgba(96, 163, 217, 0.2);
    --white-color: #F6FBFF;
    --white-color-light: rgba(246, 251, 255, 0.2);

    /* font */
    --ff: 'JetBrains Mono', monospace;
    --ff-variant: 'Comfortaa', cursive;

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
    font-size: 1.6rem;
    color: #003B73;
    font-weight: 300;
  }


  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  button {
    outline: none;
  }

`;

export default GlobalStyle;
