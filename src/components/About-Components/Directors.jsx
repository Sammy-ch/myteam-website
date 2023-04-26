import React from "react";
import Image from "next/image";
import profile1 from "public/images/avatars/avatar-nikita.jpg";
import profile2 from "public/images/avatars/avatar-christian.jpg";
import profile3 from "public/images/avatars/avatar-cruz.jpg";
import profile4 from "public/images/avatars/avatar-drake.jpg";
import profile5 from "public/images/avatars/avatar-griffin.jpg";
import profile6 from "public/images/avatars/avatar-aden.jpg";
import openBtn from "public/images/icons/icon-cross.svg";
import {AnimatePresence,motion} from "framer-motion";
import {useState} from "react";
import twitterIco from "public/images/icons/icon-twitter.svg";
import linkedInIcon from "public/images/icons/icon-linkedin.svg";



const DirectorCard = ({profile,name,title,description}) => {
    const [IsOpen,setIsOpen] = useState(false)

    const handleClick=()=>{
        setIsOpen(!IsOpen)
    }
    return(
<>
                    {!IsOpen ? (
                            <div className={"flex justify-center items-center w-[350px] md:w-[280px] md:h-[280px] h-[253px] bg-[#012F34]"}>
                            <div className={"flex flex-col px-[24px] pt-[52px] pb-[56px] justify-center items-center"}>
                                <Image src={profile} alt={`${name} profile`} className={"border-2 border-[#C4FFFE] rounded-full w-[96px] h-[96px] "}/>
                                <div className={"flex flex-col pt-[16px] "}>
                                    <span className={"h3 text-[#79C8C7]"}>{name}</span>
                                    <em className={"text-white font-light"}>{title}</em>
                                </div>

                                <motion.button onClick={handleClick} className={`border-transparent rounded-full w-[56px] h-[56px] p-[20px] bg-[#F67E7E] relative top-[50px] hover:bg-[#79C8C7] ${IsOpen ? "rotate-45" : null}`}>
                                    <Image src={openBtn} alt={"btn"} className={"w-[16px] h-[16px]"}/>
                                </motion.button>
                            </div>
                            </div>
                    ): (
                            <div className={"flex flex-col justify-center items-center w-[350px] md:w-[281px] h-[253px] md:h-[281px] bg-[#012F34] gap-7"}>
                                <div className={"flex flex-col px-[24px] pt-[52px] pb-[56px] justify-center items-center"}>
                                    <span className={"h3 text-[#79C8C7] pb-[8px]"}>{name}</span>
                                    <p className={"pb-[24px] text-white"}>{description}</p>
                                    <div className={"flex gap-[16px]"}>
                                        <span><Image src={twitterIco} alt={"twitter"} className={"hover:text-fuchsia-950"}/></span>
                                        <span><Image src={linkedInIcon} alt={"linkedIn"}/></span>
                                    </div>

                                </div>
                                <motion.button onClick={handleClick} className={`border-transparent rounded-full w-[56px] h-[56px] p-[20px] bg-[#F67E7E] absolute transform translate-y-[130px]  ${IsOpen ? "rotate-45" : null}`}>
                                    <Image src={openBtn} alt={"btn"} className={"w-[16px] h-[16px]"}/>
                                </motion.button>
                            </div>
                    ) }
</>



    );
}
const Directors = () => {
    return (
        <section className={"directors-card relative z-1 flex flex-col justify-center items-center px-[165px] md:px-[98px] xs:px-[24px] py-[140px] text-center bg-[#004047] "}>
            <h2 className={"h2 text-white xs:text-[32px]"}> Meet the directors</h2>
            <div className={"grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-[30px] md:gap-x-[50px] pt-[65px] gap-y-[76px] md:relative"}>
                <DirectorCard title={"Founder & CEO"} name={"Nikita Marks"} profile={profile1} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quae tempore dicta ducimus "}/>
                <DirectorCard title={"Co-founder & COO"} name={"Cristian Duncan"} profile={profile2} description={"lorem2"}/>
                <DirectorCard title={"Co-founder & CTO"} name={"Cruz Hamer"} profile={profile3} description={"lorem3"}/>
                <DirectorCard title={"Business Development Lead"} name={"Drake Heaton"} profile={profile4} description={"lorem4"}/>
                <DirectorCard title={"Lead Marketing"} name={"Griffin Wise"} profile={profile5} description={"lorem5"}/>
                <DirectorCard title={"Head of Talent"} name={"Aden Allan"} profile={profile6} description={"“Empowered teams create truly amazing products. Set the north star and let them follow it.”"}/>
            </div>

        </section>
    )
}

export default Directors;