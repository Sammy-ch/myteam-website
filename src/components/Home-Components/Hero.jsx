import Image from "next/image";
import ovalPattern from "../../../public/images/bg-home-about-contact/bg-pattern-home-1.svg";
import ovalPattern2 from "../../../public/images/bg-home-about-contact/bg-pattern-home-2.svg";

const Hero = () =>{
    return (
    <section className={"grid grid-cols-2 px-[165px] py-[100px]"}>
        <h1 className={"h-large text-white"}>
            Find the best <span className={"light-coral"}>talent</span>
        </h1>
        <div className={"flex flex-col gap-4"}>
            <Image src={ovalPattern} alt={"pattern"} className={"absolute left-[-100px]"}/>
            <div className={"w-[50px] h-[4px] bg-[#79C8C7]"}></div>
            <p className={"body1 text-white relative top-[90px]"}>
                Finding the right people and building high performing teams can
                be hard. Most companies aren’t tapping into the abundance of global
                talent. We’re about to change that.
            </p>
        </div>
        <Image src={ovalPattern2} alt={"pattern2"} className={"translate-x-[700px] translate-y-[100px]"}/>
    </section>
    )
}

export default Hero;