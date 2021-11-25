import type { NextPage } from "next";
import GlobalStyle from "../src/theme/globalStyles";
import Head from "next/head";
import Theme from "../src/theme/theme";
import { ThemeProvider } from "styled-components";
import About from "../src/components/About";
import Header from "../src/components/Header";
import Contact from '../src/components/Contact';
import Skills from '../src/components/Skills';
import Works from '../src/components/Works';

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;300;500;700&display=swap"
          rel="stylesheet"
        />

        <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet" /> */}
      </Head>
      <GlobalStyle />
      <Header />
      <About />
      <Skills />
      <Works />
      <Contact />
      {
        /* <Wrapper>
        <p>Personal website</p>
      </Wrapper> */
      }
    </ThemeProvider>
  );
};

export default Home;
