import Head from "next/head";
import Hero from "@/components/Home-Components/Hero";
import Features from "@/components/Home-Components/Features";

export default function Home() {
  return (
      <>
        <Head>
          <title>myteam - Home</title>
          <meta name={"my-team-website"} content={"Home"}/>
        </Head>
          <main className={"midnight-green flex flex-col items-center w-full min-h-screen"}>
            <Hero/>
              <Features/>
        </main>
    </>
  )
}