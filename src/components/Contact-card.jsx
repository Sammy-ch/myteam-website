import React from "react";
import leftPattern from "public/images/bg-home-about-contact/bg-pattern-home-6-about-5.svg";
import Image from "next/image";

const ContactCard = () => {
    return(
        <section className={"flex justify-between bg-[#F67E7E] py-[80px] px-[270px] items-center"}>
            <h2 className={"h2 sacramento-state-green"}>Ready to get started</h2>
            <button className={"text-[#012F34] font-bold rounded-full border-2 border-[#012F34] h-[50px] w-[153px] px-[33px] py-[10px]"} >
                contact us
            </button>
            <Image src={leftPattern} alt={"leftPattern"} className={"h-[150px] w-[200px] absolute -left-0 bottom-0"} />
        </section>
    )
}

export default ContactCard;