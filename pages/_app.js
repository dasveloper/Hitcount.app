import "../styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hitcount - Hitcounter for your website</title>
        <meta
          name="description"
          content="Old-school hit counter for your modern website. Start counting page views by adding a single image tag to your website."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
