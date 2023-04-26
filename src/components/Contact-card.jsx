import React from "react";
import Link from "next/link";

const ContactCard = () => {
    return(
        <section className={"CTA-background flex sm:flex-col justify-between bg-[#F67E7E] py-[80px] px-[270px] gap-[1.5rem] md:px-[98px] sm:px-[24px] items-center sm:text-center2"}>
            <h2 className={"h2 sacramento-state-green md:text-[32px] xs:max-w-[12.5rem]"}>Ready to get started?</h2>
            <button className={"text-[#012F34] font-bold rounded-full border-2 border-[#012F34] h-[50px] w-[153px] px-[33px] py-[10px] hover:text-white hover:bg-[#012F34]"} >
                <Link href="/contact">contact us</Link>
            </button>
        </section>
    )
}

export default ContactCard;