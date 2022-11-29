import { CssBaseline, ThemeProvider } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import theme from "../src/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* <ThemeProvider> */}
      {/* <CssBaseline /> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp;
