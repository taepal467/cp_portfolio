import Head from 'next/head'

export default function Splash() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <Head>
        <title>CP</title>
      </Head>
      <div className='flex justify-center'>
        <span className=' text-cyan-100 text-7xl font-gloock animate-loader'>C</span>
        <span className=' text-cyan-100 text-7xl font-gloock animate-loader animation-delay-200'>P</span>
      </div>
    </div>
  )
}
