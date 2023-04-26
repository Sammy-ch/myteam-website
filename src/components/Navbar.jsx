import Link from "next/link";
import React from "react";
import logo from "public/images/icons/logo.svg";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!IsOpen);
    };
    
    return(
        <header className={'midnight-green flex items-center justify-between md:justify-between gap-5 xs:gap-[19px] py-[73px] px-[165px] relative md:px-[40px] xs:px-[24px]'}>
            <div>
                <Image src={logo} alt={"my_logo"} className={"h-[35px] sm:w-[127px] w-[210px] md:h-[32px]"}/>
            </div>
            
                <button onClick={toggleMenu} className={`flex-col gap-[1px] justify-center items-center z-50 ${IsOpen? "fixed -right-[50%]" : "relative"} hidden sm:flex left-[5rem]`}>
                <div className={`h-[3px] w-[20px] border bg-white  ${
            IsOpen ? "rotate-45 translate-y-1 -translate-x-0.7" : "-translate-y-0.5"
          }`}></div>
                    <div className={`h-[3px] w-[20px] border bg-white ${
            IsOpen ? "opacity-0" : "opacity-100"
          }`}></div>
                    <div className={`h-[3px] w-[20px] border bg-white ${
            IsOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}></div>
                </button>
            
            {/* Mobile Navigation */}
            {IsOpen ? (
                <div className="w-[50vh] min-h-screen -top-[2px] left-[250px] sm:left-[7rem] flex fixed z-10 bg-[rgb(121,200,199);] mobileMenu-background">
                <nav className={"flex flex-col gap-[20px] pt-[150px] px-[48px]"}>
                    <Link href="/" className={"hover:text-[#F67E7E]"}>home</Link>
                        <Link href="/about" className={"hover:text-[#F67E7E]"}>about</Link>
                        <Link href="/contact">
                    <button className={"text-white rounded-full border-2 h-[50px] md:h-[48px] w-[180px] md:w-[153px] px-[33px] py-[10px] hover:bg-white hover:text-[#002529]" }>
                        contact us
                    </button>
                </Link>
                </nav>
                   
                    
            </div>
      
                ) : null}

            
            <div className={"w-full fex text-white relative left-[50px] sm:hidden"}>
                <nav className={"flex gap-3 md:gap-[40px] "}>
                    <Link href="/" className={"hover:text-[#F67E7E]"}>home</Link>
                    <Link href="/about" className={"hover:text-[#F67E7E]"}>about</Link>
                </nav>
            </div>

            <div>
                <Link href="/contact" className="sm:hidden">
                    <button className={"text-white rounded-full border h-[50px] md:h-[48px] w-[180px] md:w-[153px] px-[33px] py-[10px] hover:bg-white hover:text-[#002529]" }>
                        contact us
                    </button>
                </Link>
            </div>

            

        </header>
    )
}

export default Navbar;