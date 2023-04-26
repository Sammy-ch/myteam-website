import React from "react";
import logo from "public/images/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Facebook from "public/images/icons/icon-facebook.svg";
import Twitter from "public/images/icons/icon-twitter.svg";
import Pinterest from "public/images/icons/icon-pinterest.svg";
const Footer = () => {
    return (
        <footer className={"w-full flex sm:flex-col justify-between py-[48px] px-[165px] sm:px-[24px] sm:h-[450px] md:px-[40px] bg-[#002529] md:h-[271px]  "}>
 
                <section className={"flex flex-col gap-7 relative w-[150px]  sm:left-[7rem] xs:left-[5rem] items-center "}>
                    <Image src={logo} alt={"mylogo"} className={"h-[35px] sm:h-[24px] w-[140px] sm:w-[96px] md:mb-[20px]"}/>
                    <div className={"flex gap-10 text-white"}>
                        <Link href="/" className={"hover:text-[#F67E7E]"}>home</Link>
                        <Link href="/about" className={"hover:text-[#F67E7E]"}>about</Link>
                    </div>
                </section>

                <section className={"flex flex-col text-white opacity-80 sm:opacity-50 md:text-right sm:text-center md:relative md:left-[200px] sm:left-0 "}>
                    <div>987 Hillcrest Lane</div>
                    <div>Irvine, CA</div>
                    <div>California 92714</div>
                    <div>Call Us: 949-833-7432</div>
                </section>


            <section className={"flex flex-col gap-12 sm:gap-6"}>
                <div className={"flex flex-row gap-4 justify-end sm:justify-center relative lg:left-[-34.1rem] lg:top-[8.5rem] xs:left-0 xs:top-0"}>
                    <Link href='/' className={"hover:text-[#F67E7E]"}><Image src={Facebook} alt={"FB_LOGO"}/></Link>
                    <Link href='/' className={"hover:text-[#F67E7E]"}><Image src={Pinterest} alt={"PINT_LOGO"}/></Link>
                    <Link href='/' className={"hover:text-[#F67E7E]"}><Image src={Twitter} alt={"TWIT_LOGO"}/></Link>
                </div>
                <div className={"text-white opacity-50 flex sm:justify-center relative lg:top-[3.5rem] lg:right-[6.5rem] xs:left-0 xs:top-0"}>
                    Copyright 2020.All Rights Reserved
                </div>
            </section>

        </footer>
    )
}

export default Footer;

// md:absolute md:translate-y-[140px] md:left-[430px]

// md:relative md:top-[150px] md:-left-[550px] logo