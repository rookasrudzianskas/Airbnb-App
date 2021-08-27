import "nprogress/nprogress.css";
import "../styles/global.css";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import 'tailwindcss/tailwind.css'
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
    size: 4,
    color: '#FE595E',
    className: "z-50",
    delay: 100,
})

// NProgress.configure({ showSpinner: false });
// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <link
              href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap"
              rel="stylesheet"
          />
          <title>Airbnb</title>
          <meta
              name="description"
              content="Find holiday rentals, cabins, beach houses, unique homes and experiences around the world – all made possible by Hosts on Airbnb."
          />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <Component {...pageProps} />
      </>
  );
}

export default MyApp;

{
  /* deeyes36acfed */
}
