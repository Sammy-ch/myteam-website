import Head from "next/head";
import Hero from "@/components/Home-Components/Hero";
import Features from "@/components/Home-Components/Features";
import Reviews from "@/components/Home-Components/Reviews";
import ContactCard from "@/components/Contact-card";
export default function Home() {
  return (
      <>
        <Head>
          <title>myteam - Home</title>
          <meta name={"my-team-website"} content={"Home"}/>
        </Head>
          <main className={""}>
            <Hero/>
              <Features/>
              <Reviews/>
              <ContactCard/>
        </main>
    </>
  )
}

