import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

import '../styles/main.css';

function MyApp(props: AppProps) {
  const { Component, pageProps, router } = props;

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
