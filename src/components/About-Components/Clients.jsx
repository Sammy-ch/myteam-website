import React from "react";
import Image from "next/image";
import gadgetsLogo from "public/images/clients/logo-gadgets-now.png";
import jakartaLogo from "public/images/clients/logo-jakarta-post.png";
import techRadar from "public/images/clients/logo-tech-radar.png";
import theGuardian from "public/images/clients/logo-the-guardian.png";
import theVerge from "public/images/clients/logo-the-verge.png";
import topBg from "public/images/bg-home-about-contact/bg-pattern-about-4.svg";
const Clients = () => {
    return (
        <section className={"flex flex-col justify-center items-center gap-[64px] pb-[151px] text-center bg-[#012F34]"}>
            <Image src={topBg} alt={"background"} className={"absolute -left-0 transform -translate-y-[46.5px]"} />
            <div className={"pt-[140px] flex flex-col gap-[70px]"}>
                <h2 className={"h2 text-white "}>Some of our clients</h2>
                <div className={"flex flex-row  px-[165px] gap-[35px] justify-center items-center"}>
                    <span><Image src={theVerge} alt={"verge"} className={"w-[165px] h-[28px]"}/></span>
                    <span><Image src={jakartaLogo} alt={"jakarta"} className={"w-[165px] h-[20px]"}/></span>
                    <span><Image src={theGuardian} alt={"guardian"} className={"w-[165px] h-[25px]"}/></span>
                    <span><Image src={techRadar} alt={"radar"} className={"w-[155px] h-[23px]"}/></span>
                    <span><Image src={gadgetsLogo} alt={"Gadgets"} className={"w-[80px] h-[37px]"}/></span>
                </div>
            </div>
        </section>
    )
}

export default Clients;