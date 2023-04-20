import React from "react";
import Image from "next/image";
import profile1 from "public/images/avatars/avatar-nikita.jpg";
import profile2 from "public/images/avatars/avatar-christian.jpg";
import profile3 from "public/images/avatars/avatar-cruz.jpg";
import profile4 from "public/images/avatars/avatar-drake.jpg";
import profile5 from "public/images/avatars/avatar-griffin.jpg";
import profile6 from "public/images/avatars/avatar-aden.jpg";
import openBtn from "public/images/icons/icon-cross.svg";

import topPattern from "public/images/bg-home-about-contact/bg-pattern-about-2-contact-1.svg";
import bottomPattern from "public/images/bg-home-about-contact/bg-pattern-home-4-about-3.svg";

const DirectorCard = ({profile,name,title}) => {
    return(
        <card class={"flex justify-center items-center w-[350px] h-[253px] bg-[#012F34]"}>
            <div className={"flex flex-col px-[24px] pt-[52px] pb-[56px] justify-center items-center"}>
                <Image src={profile} alt={`${name} profile`} className={"border-2 border-[#C4FFFE] rounded-full w-[96px] h-[96px] "}/>
                <div className={"flex flex-col pt-[16px] "}>
                    <span className={"h3 text-[#79C8C7]"}>{name}</span>
                    <em className={"text-white font-light"}>{title}</em>
                </div>
                <button className={"border-transparent rounded-full w-[56px] h-[56px] p-[20px] bg-[#F67E7E] relative top-[50px]"}>
                    <Image src={openBtn} alt={"btn"} className={"w-[16px] h-[16px]"}/>
                </button>
            </div>
        </card>
    )
}
const Directors = () => {
    return (
        <section className={"flex flex-col justify-center items-center px-[165px] py-[140px] text-center bg-[#004047] "}>
            <Image src={topPattern} alt={"bgT-pattern"} className={"w-[200px] h-[200px] relative -left-[766px] -top-[140px] "} />
            <h2 className={"h2 text-white"}> Meet the directors</h2>
            <div className={"grid grid-cols-3 gap-[30px] pt-[65px] gap-y-[76px] "}>
                <DirectorCard title={"Founder & CEO"} name={"Nikita Marks"} profile={profile1}/>
                <DirectorCard title={"Co-founder & COO"} name={"Cristian Duncan"} profile={profile2}/>
                <DirectorCard title={"Co-founder & CTO"} name={"Cruz Hamer"} profile={profile3}/>
                <DirectorCard title={"Business Development Lead"} name={"Drake Heaton"} profile={profile4}/>
                <DirectorCard title={"Lead Marketing"} name={"Griffin Wise"} profile={profile5}/>
                <DirectorCard title={"Head of Talent"} name={"Aden Allan"} profile={profile6}/>
            </div>
            <Image src={bottomPattern} alt={"bottomPatternBg"} className={"w-[147px] relative top-[140px] left-[695px]"}/>
        </section>
    )
}

export default Directors;