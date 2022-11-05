import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion"; 
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Head>
        <title>Lovely Guruji</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
            rel="stylesheet"
          />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        
      </Head>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
