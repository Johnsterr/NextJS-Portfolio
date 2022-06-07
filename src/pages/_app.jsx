import { ThemeProvider } from "next-themes";
import Head from "next/head";
import "../styles/globals.css";

const PortfolioApp = function ({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem="true" defaultTheme="dark">
        <Head>
          <title>NextJS Simple Starter</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default PortfolioApp;
