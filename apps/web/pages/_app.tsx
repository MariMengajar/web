import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
