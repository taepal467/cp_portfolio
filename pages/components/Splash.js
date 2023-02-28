import Head from 'next/head'
import Footer from "./Footer";
import { useEffect, useState } from 'react';

export default function Splash() {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <Head>
        <title>CP</title>
      </Head>
      <div className='flex justify-center pt-48 pb-72'>
        <span className=' text-cyan-100 text-7xl font-gloock animate-loader' >C</span>
        <span className=' text-cyan-100 text-7xl font-gloock animate-loader animation-delay-200'>P</span>
      </div>
        <Footer />
    </div>
  )
}
