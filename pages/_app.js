import "../styles/tailwind.css";
import Head from 'next/head';
import { ThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Theme color meta tag can be dynamic if needed, but setting a neutral one or handling via JS is fine */}
        <meta name="theme-color" content="#0f172a" /> 
        <meta name="description" content="Sai Europe Alumni Meet 2026" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/assets/icons/final_logo_small.svg" />
        <link rel="icon" href="/assets/icons/final_logo_small.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
