import Link from "next/link";
import React from "react";
import logo from "public/images/icons/logo.svg";
import Image from "next/image";

const Navbar = () => {
    return(
        <header className={'midnight-green w-full flex items-center justify-between gap-5 py-[73px] px-[165px] relative'}>
            <div>
                <Image src={logo} alt={"my_logo"} className={"h-[35px] w-[210px] "}/>
            </div>

            <div className={"w-full fex text-white relative left-[50px]"}>
                <nav className={"flex gap-3"}>
                    <Link href="/">Home</Link>
                    <Link href="/about">about</Link>
                </nav>
            </div>

            <Link href="/contact">
                <button className={"text-white rounded-full border h-[50px] w-[180px] px-[33px] py-[10px]"}>
                    contact us
                </button>
            </Link>

        </header>
    )
}

export default Navbar;