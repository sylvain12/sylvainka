import type { NextPage } from "next";
import GlobalStyle from "../theme/globalStyles";
import Wrapper from "../components/styled/Wrapper.style";
import Header from "../components/Header";
import Head from "next/head";
import Theme from "../theme/theme";
import { ThemeProvider } from "styled-components";

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
      </Head>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <p>Personal website</p>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Home;
