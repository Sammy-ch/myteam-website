import React from "react";
import Image from "next/image";
import bgPatternAbout from "public/images/bg-home-about-contact/bg-pattern-about-1-mobile-nav-1.svg";

const About = () => {
    return (
        <section className={"flex flex-row text-white gap-[30px] px-[165px] py-[120px] justify-center items-center "}>
                    <h1 className={"h-small w-[350px]"}> About </h1>
            <div className={"flex flex-col gap-[40px]"}>
                <span className={"w-[50px] h-[4px] bg-[#F67E7E]"}></span>
                <p className={"w-[640px] h-[112px]"}>
                    We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.
                </p>
            </div>
            <Image src={bgPatternAbout} alt={"aboutPattern"} className={"w-[200px] h-[200px] relative top-[120px] left-[270px]"}/>
        </section>
    )
}

export default About;