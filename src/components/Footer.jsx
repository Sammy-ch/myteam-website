import React from "react";
import logo from "public/images/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Facebook from "public/images/icons/icon-facebook.svg";
import Twitter from "public/images/icons/icon-twitter.svg";
import Pinterest from "public/images/icons/icon-pinterest.svg";
const Footer = () => {
    return (
        <footer className={"footer py-[50px] px-[165px] md:px-[40px] lg:px-[20px]"}>
 
                <section className={"flex flex-col gap-7 w-[150px] items-center navigation"}>
                    <Image src={logo} alt={"mylogo"} className={"h-[35px] sm:h-[24px] w-[140px] sm:w-[96px] md:mb-[20px]"}/>
                    <div className={"flex gap-10 text-white"}>
                        <Link href="/" className={"hover:text-[#F67E7E]"}>home</Link>
                        <Link href="/about" className={"hover:text-[#F67E7E]"}>about</Link>
                    </div>
                </section>

                <section className={"flex flex-col text-white location"}>
                    <div>987 Hillcrest Lane</div>
                    <div>Irvine, CA</div>
                    <div>California 92714</div>
                    <div>Call Us: 949-833-7432</div>
                </section>


                <div className={"flex flex-row gap-7 social "}>
                    <Link href='/' className={"hover:text-[#F67E7E]"}><Image src={Facebook} alt={"FB_LOGO"}/></Link>
                    <Link href='/' className={"hover:text-[#F67E7E]"}><Image src={Pinterest} alt={"PINT_LOGO"}/></Link>
                    <Link href='/' className={"hover:text-[#F67E7E]"}><Image src={Twitter} alt={"TWIT_LOGO"}/></Link>
                </div>

                <div className={"text-white cpy"}>
                    Copyright 2020.All Rights Reserved
                </div>
            

        </footer>
    )
}

export default Footer;
