import '@/styles/globals.css'
import {Livvic} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const livvic = Livvic({
    subsets:['latin'],
    weight:['600','700']
})
export default function App({ Component, pageProps }) {
  return (
      <>
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="shortcut icon" href="/images/favicon-32x32.png" type="image/x-icon" />
          </Head>
          <main className={`${livvic.className} midnight-green min-h-screen wrapper `}>
                  
              <Navbar />
                  <Component {...pageProps} />
                <Footer/> 
          </main>
      </>
  )
}
