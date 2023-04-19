import React from "react";
import quotes from "public/images/icons/icon-quotes.svg";
import Image from "next/image";
import user1 from "public/images/avatars/avatar-kady.jpg";
import user2 from "public/images/avatars/avatar-aiysha.jpg";
import user3 from "public/images/avatars/avatar-arthur.jpg";
import reviewBg1 from "public/images/bg-home-about-contact/bg-pattern-home-4-about-3.svg";
import reviewBg2 from "public/images/bg-home-about-contact/bg-pattern-home-5.svg";
const ReviewCard = ({profile,name,title,review}) => {
    return (
        <>
            <div className={"flex flex-col text-center justify-center items-center gap-[20px]"}>
                    <div className={"relative translate-y-[40px] z-1 "}>
                        <Image src={quotes} alt={"icon-quote"}/>
                    </div>
                    <p className={"body2 z-0 text-white opacity-80 w-[350px] h-[100px]"}>
                        {review}
                    </p>
                <div className={"flex flex-col gap-1"}>
                    <h3 className={"rapture-blue"}>{name}</h3>
                    <span className={"text-white opacity-80"}>{title}</span>
                </div>

                <div >
                        <Image src={profile} alt={`${profile} profile`} className={"w-[65px] h-[65px] rounded-full border border-[#C4FFFE] "}/>
                </div>

            </div>

        </>
    )
}

const Reviews = () => {
    return (
        <section className={"flex justify-center w-full pb-[140px]"}>
            <div className={"px-[170px]"}>
                <Image src={reviewBg1} alt={"reviewBG"} className={"h-[100px] w-[100px] transform -translate-x-[47px] "}/>
                <div className={"flex flex-col justify-between px-[165px] "}>
                    <h2 className={"h2 text-center relative left-14 w-[950px] "}>Delivering real results for top companies. Some of our <span className={"rapture-blue"}>success stories.</span>
                    </h2>
                    <div className={"flex flex-row mt-[60px] gap-[20px]"}>
                        <ReviewCard title={"Product Manager at Bookmark"} name={"Kady Baker"}
                                     review={"“The team perfectly fit the specialized skill set required. They focused \n" +
                                         "  on the most essential features helping us launch the platform eight months \n" +
                                         "  faster than planned.”"} profile={user1}/>

                        <ReviewCard title={"Founder of Manage"} name={"Aiysha Reese"}
                                    review={"“We needed to automate our entire onboarding process. The team came in and \n" +
                                        "  built out the whole journey. Since going live, user retention has gone \n" +
                                        "  through the roof!”"} profile={user2}/>

                        <ReviewCard title={"Co-founder of MyPhysio"} name={"Arthur Clarke"}
                                    review={"“Amazing. Our team helped us build an app that delivered a new experience for \n" +
                                        "  hiring a physio. The launch was an instant success with 100k downloads in the \n" +
                                        "  first month.”"} profile={user3}/>

                        <Image src={reviewBg2} alt={"bgPattern"} className={"h-[100px] w-[200px] relative top-[372px] left-[13px]"}/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Reviews;