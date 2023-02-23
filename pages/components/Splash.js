import Head from 'next/head'

export default function Splash() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <Head>
        <title>Loading...</title>
      </Head>
      <img src="/splash-logo.svg" className="h-20 animate-pulse" alt="Logo" />
    </div>
  )
}
