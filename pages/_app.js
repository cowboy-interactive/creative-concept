import "../styles/globals.css";
import Head from "next/head";
import AppProvider from "../utils/provider";
import Script from "next/script";
import { Navbar } from "../components/Navbar/Navbar";
import { Container } from "../components/Container/Container";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <Navbar xl={"padding: 0 20%"} md={"padding: 0 5%"} />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
