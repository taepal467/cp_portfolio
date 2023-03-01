import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Splash from "./components/Splash";

export default function App({ Component, pageProps, router }: AppProps) {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     const timer = setTimeout(() => setLoading(false), 3000);
  //     return () => clearTimeout(timer);
  //   }, []) 

  return (
    <>
      {/* {loading ? <Splash /> : ( */}
          <AnimatePresence>
            <Component key={router.pathname} {...pageProps} />
          </AnimatePresence>
      
    </>
  );

}
