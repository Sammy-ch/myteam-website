import React from "react";
import Image from "next/image";
import gadgetsLogo from "public/images/clients/logo-gadgets-now.png";
import jakartaLogo from "public/images/clients/logo-jakarta-post.png";
import techRadar from "public/images/clients/logo-tech-radar.png";
import theGuardian from "public/images/clients/logo-the-guardian.png";
import theVerge from "public/images/clients/logo-the-verge.png";


const Clients = () => {
    return (
        <section className={"z-0 flex flex-col justify-center items-center gap-[64px] pb-[151px] text-center bg-[#012F34] clients-background"}>
            <div className={"pt-[140px] flex flex-col gap-[70px]"}>
                <h2 className={"h2 text-white md:text-[32px] "}>Some of our clients</h2>
                <div className={"flex flex-row xs:flex-col px-[165px] md:px-[40px] gap-[35px] justify-center items-center"}>
                    <span><Image src={theVerge} alt={"verge"} className={"w-[165px] xs:w-[155px] h-[28px] xs:h-[25px] md:h-[17px] "}/></span>
                    <span><Image src={jakartaLogo} alt={"jakarta"} className={"w-[165px] xs:w-[155px] h-[20px]"}/></span>
                    <span><Image src={theGuardian} alt={"guardian"} className={"w-[165px] xs:w-[155px] h-[25px]"}/></span>
                    <span><Image src={techRadar} alt={"radar"} className={"w-[155px] xs:w-[155px] h-[23px] xs:h-[25px] md:h-[17px]"}/></span>
                    <span><Image src={gadgetsLogo} alt={"Gadgets"} className={"w-[80px] xs:w-[85px] h-[37px] xs:h-[40px] md:h-[25px]"}/></span>
                </div> 
            </div>
        </section>
    )
}

export default Clients;