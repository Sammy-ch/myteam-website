import Link from "next/link";
import React from "react";
import logo from "public/images/icons/logo.svg";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { createStyles , Burger , Drawer , CloseButton} from "@mantine/core";
const useStyles = createStyles((theme) => ({
    content :{
        backgroundColor:"#2C6269",
    }
}))

const Navbar = () => {
   const [opened,{toggle , close}] = useDisclosure(false);
   const label = opened ? 'Close navigation' : 'Open navigation';
    const { classes } = useStyles();
    return(
        <header className={'midnight-green flex items-center justify-between md:justify-between gap-5 xs:gap-[19px] py-[73px] px-[165px] relative md:px-[40px] xs:px-[24px]'}>
            <div>
                <Image src={logo} alt={"my_logo"} className={"h-[35px] sm:w-[127px] w-[210px] md:h-[32px]"}/>
            </div>
                     
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

            <Burger 
                color="white"
                className="hidden sm:block"
                opened={opened}
                onClick={toggle}
                aria-label={label}
            />
            
            <Drawer opened={opened} onClose={close} size={"70%"} withCloseButton={false} position="right" classNames={{content:classes.content}}  >
                    <CloseButton size={"xl"} className="float-right" onClick={close}/>
                    <nav className={"flex flex-col  text-[18px]  font-semibold text-[white] gap-[25px] px-[50px] pt-[112px] pb-[36px]"}>
                        <Link href="/" className={"hover:text-[#F67E7E]"}>home</Link>
                        <Link href="/about" className={"hover:text-[#F67E7E]"}>about</Link>
                     </nav> 
                    <Link href={"/contact"}>
                        <button className={"text-white rounded-full border-2 h-[50px] md:h-[48px] w-[180px] md:w-[153px] mx-[25px] " }>
                            contact us
                        </button>
                    </Link>
            </Drawer>
            

        </header>
    )
}

export default Navbar;