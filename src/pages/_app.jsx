import Head from "next/head";
import ThemeProvider from "../theme/ThemeProvider.jsx";

const App = function ({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
