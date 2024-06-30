import '@css/global.scss'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import type {AppProps} from 'next/app'
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>ACME STORE</title>
        </Head>
        <Component {...pageProps} />
    </>

}

export default MyApp
