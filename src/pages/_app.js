import '@/styles/globals.css'
import {Livvic} from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Head} from "next/document";

const livvic = Livvic({
    subsets:['latin'],
    weight:['600','700']
})
export default function App({ Component, pageProps }) {
  return (
      <>
          <main className={`${livvic.className} w-full min-h-screen`}>
              <Navbar/>
              <Component {...pageProps} />
              <Footer/>
          </main>
      </>
  )
}
