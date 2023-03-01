import Head from 'next/head'
import Footer from "./Footer";
import { useState, useEffect } from "react"

export default function Splash() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      rootMargin: '0px',
      threshold: 0.25,
    });

    observer.observe(document.querySelector('#fade-in'));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-300">
      <Head>
        <title>CP</title>
      </Head>
      <div className='flex justify-center pt-72 pb-32'>
        <div 
            id="fade-in"
            className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className=' font-sans text-3xl  text-gray-600 font-extralight'>Chantae Palacio | <span className='font-bold'>Portfolio</span></p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
