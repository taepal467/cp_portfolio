import React from 'react';
import {BsFillMoonStarsFill, BsFillBrightnessHighFill} from 'react-icons/bs' ;
import Link from 'next/link';
import { useState } from 'react';


export default function Projects() {
    const [darkMode, setDarkMode] = useState(false);
    return(
        <div className={darkMode ? 'dark': ''}>
        <main className='px-10 bg-white font-gloock dark:bg-black'>
        <section className='min-h-screen'>
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

            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </section>

        </main>
        </div>
    );
}