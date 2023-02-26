import React from 'react';
import {BsFillMoonStarsFill, BsFillBrightnessHighFill} from 'react-icons/bs' ;
import Link from 'next/link';
import { useState } from 'react';


export default function Projects() {
    const [darkMode, setDarkMode] = useState(false);
    return(
        <div className={darkMode ? 'dark': ''}>
            <main className='min-h-screen px-10 bg-slate-400 font-gloock dark:bg-black'>
                    <nav className='py-4 mb-12 flex justify-between'>
                        <Link href="/">
                            <h1 className=''>CP</h1>
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
                    <section className='card--container'>
                        <div>
                            <h1>1st Card go here</h1>
                        </div>
                        <div>
                            <h1>2nd Card go here</h1>
                        </div>
                        <div>
                            <h1>3rd Card go here</h1>
                        </div>
                        <div>
                            <h1>4th Card go here</h1>
                        </div>
                        <div>
                            <h1>5th Card go here</h1>
                        </div>
                    </section>
                    
            </main>
        </div>
    );
}