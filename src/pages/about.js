import React from "react"
import Head from "next/head";
import About from "@/components/About-Components/About";
import Directors from "@/components/About-Components/Directors";
import Clients from "@/components/About-Components/Clients";
import ContactCard from "@/components/Contact-card";

const about = () =>{
    return(
        <>
            <Head>
                <title>myteam - About</title>
                <meta name={"my-team-website"} content={"About"}/>
            </Head>
            <main className={"relative"}>
                <About/>
                <Directors/>
                <Clients/>
                <ContactCard/>
            </main>
        </>
    )
}

export default about;