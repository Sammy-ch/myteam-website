import React from "react";
import logo from "public/images/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Facebook from "public/images/icons/icon-facebook.svg";
import Twitter from "public/images/icons/icon-twitter.svg";
import Pinterest from "public/images/icons/icon-pinterest.svg";
const Footer = () => {
    return (
        <footer className={"w-full flex relative justify-between align-center py-[48px] px-[165px] bg-[#002529]"}>
            <section className={"flex flex-row gap-[150px]"}>
                <section className={"flex flex-col gap-7"}>
                    <Image src={logo} alt={"mylogo"} className={"h-[35px] w-[140px]"}/>
                    <div className={"flex gap-10 text-white"}>
                        <a>home</a>
                        <a>about</a>
                    </div>
                </section>

                <section className={"flex flex-col text-white opacity-80"}>
                    <div>987 Hillcrest Lane</div>
                    <div>Irvine, CA</div>
                    <div>California 92714</div>
                    <div>Call Us: 949-833-7432</div>
                </section>
            </section>

            <section className={"flex flex-col gap-12"}>
                <div className={"flex flex-row gap-4 justify-end"}>
                    <span><Image src={Facebook} alt={"FB_LOGO"}/></span>
                    <span><Image src={Pinterest} alt={"PINT_LOGO"}/></span>
                    <span><Image src={Twitter} alt={"TWIT_LOGO"}/></span>
                </div>
                <div className={"text-white opacity-80"}>
                    Copyright 2020.All Rights Reserved
                </div>
            </section>

        </footer>
    )
}

export default Footer;