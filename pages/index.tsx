import Head from 'next/head'
import {BsFillMoonStarsFill, BsFillBrightnessHighFill, BsLinkedin, BsGithub} from 'react-icons/bs' ;
import {FaDev} from 'react-icons/fa';
import Link from 'next/link';
import { useState , useEffect} from 'react';
import Splash from "./components/Splash";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={darkMode ? 'dark' : ''}>
        <Head>
          <title>CP</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico'/>
        </Head>
        {loading ? (
        <Splash />
      ) : (
        <main className='px-10 bg-white font-gloock dark:bg-black'>
          <section className='min-h-screen border-2 border-b-black border-r-0 border-t-0 border-l-0'>
            <nav className='py-4 mb-12 flex justify-between'>
              <Link href="/">
                  <h1 className='text-3xl font-bold p-1 border-4 border-violet-300 border-r-black border-4 border-violet-300 border-b-black hover:shadow-lg dark:hover:shadow-black/30'>CP</h1>
              </Link>
              <ul className='flex items-center px-10'>
                <li className=' px-2 pr-10 '> 
                {darkMode ? <BsFillBrightnessHighFill 
                  className='cursor-pointer text-2xl'
                  onClick={() => setDarkMode(!darkMode)}/> : 
                  <BsFillMoonStarsFill 
                  className='cursor-pointer text-2xl'
                  onClick={() => setDarkMode(darkMode => !darkMode)}
                />}
                </li>
                <li className=' px-2 text-2xl font-bold hover:underline underline-offset-4 decoration-4 decoration-violet-300 hover:-translate-y-1 hover:scale-110 hover:duration-300'>
                  <Link href="">About</Link>
                </li>
                <li className=' px-2 text-2xl font-bold transition ease-in-out delay-150 hover:underline underline-offset-4 decoration-4 decoration-violet-300 hover:-translate-y-1 hover:scale-110 hover:duration-300'>
                  <Link href='./components/Projects'>Projects</Link>
                  </li>
                <li className=' px-2 text-2xl font-bold rounded-lg shadow-lg shadow-indigo-500/40 border-2 border-black bg-gradient-to-r from-violet-300 to-violet-400 hover:shadow-lg dark:hover:shadow-black/30'>
                  <a href="https://docs.google.com/document/d/1gd_s5Lm468wk0DONMSpgxVsJarLlb9Cx51AHrZmtRnQ/edit?usp=sharing" 
                  target='_blank'
                  rel="noopener noreferrer">
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className=' text-center p-10'>
              <h2 className=' text-5xl py-2'>Chantae Palacio</h2>
              <h3 className='text-2xl py-2'>Front End Developer</h3>
              <p className='text-md py-2 leading-2'>Hire me please. Thank you!</p>
            </div>
            <div className=' text-4xl flex justify-center gap-10 py-3'>
              <a>
                <BsLinkedin/>
              </a>
              <a>
                <BsGithub />
              </a>
              <a>
                <FaDev />
              </a>
            </div>
          </section>
        </main>
      )}
   <div>
   </div>
    </div>

  );
}
