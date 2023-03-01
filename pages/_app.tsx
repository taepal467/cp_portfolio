import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Splash from "./components/Splash";
import {BsFillMoonStarsFill, BsFillBrightnessHighFill} from 'react-icons/bs' ;
import Link from 'next/link';


export default function App({ Component, pageProps, router }: AppProps) {

  const [darkMode, setDarkMode] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }, []) 

  return (
    <>
      {loading ? <Splash /> : (
          <AnimatePresence>
            <div className={darkMode ? 'dark' : ''}>
              <nav className='text-2xl  flex justify-between -mt-10'>
              <Link href="/">
                <div className='text-2xl '>CP</div>
              </Link>
              <ul className='flex items-center px-10'>
                <li className=' px-2 pr-10 '> 
                  {darkMode ? <BsFillBrightnessHighFill 
                    className='cursor-pointer'
                    onClick={() => setDarkMode(!darkMode)}/> : 
                    <BsFillMoonStarsFill 
                    className='cursor-pointer'
                    onClick={() => setDarkMode(darkMode => !darkMode)}
                  />}
                </li>
                <li className=' px-2'>
                  <Link href='./components/Projects'>Projects</Link>
                  </li>
                <li className=' px-2'>
                  <a href="https://docs.google.com/document/d/1gd_s5Lm468wk0DONMSpgxVsJarLlb9Cx51AHrZmtRnQ/edit?usp=sharing" 
                    target='_blank'
                    rel="noopener noreferrer">
                    Resume
                  </a>
                </li>
              </ul>
            </nav>  
            <Component key={router.pathname} {...pageProps} />
            </div>
          </AnimatePresence>
      )}
    </>
  );

}
