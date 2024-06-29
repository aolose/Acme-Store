import '@css/global.scss'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp(a: AppProps) {
  const { Component, pageProps } = a
  debugger
  return <>
    <Head>
      <title>Home</title>
    </Head>
    <Component {...pageProps} />
  </>

}

export default MyApp
