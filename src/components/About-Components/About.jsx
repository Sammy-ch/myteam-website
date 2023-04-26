import React from "react";

const About = () => {
    return (
        <section className={"about-background w-full min-h-[400px] flex flex-row md:flex-col text-white gap-[30px] px-[165px] xs:px-[24px] md:px-[155px] py-[120px] xs:py-[10px] xs:pb-[120px] justify-center items-center md:text-center"}>
             <h1 className={"h-small w-[350px] xs:text-[40px]"}> About </h1>
                <div className={"flex flex-col gap-[40px]"}>
                    <span className={"w-[50px] h-[4px] bg-[#F67E7E] md:hidden"}></span>
                    <p className={"w-[640px] xs:text-[15px] xs:w-[327px] md:w-[477px] h-[112px]"}>
                        We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.
                    </p>
                  </div>
        </section>
    )
}

export default About;