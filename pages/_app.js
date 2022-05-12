import "../styles/globals.css";
import "../styles/header.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/team.css";
import "../styles/contact.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header/Header.js";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
