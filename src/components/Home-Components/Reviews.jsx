import React from "react";
import quotes from "public/images/icons/icon-quotes.svg";
import Image from "next/image";
import user1 from "public/images/avatars/avatar-kady.jpg";
import user2 from "public/images/avatars/avatar-aiysha.jpg";
import user3 from "public/images/avatars/avatar-arthur.jpg";

const ReviewCard = ({profile,name,title,review}) => {
    return (
        <>
            <div className={"flex flex-col text-center justify-center items-center gap-[20px] md:gap-[10px]"}>
                    <div className={"relative translate-y-[40px] md:w-[62px] md:h-[62px]"}>
                        <Image src={quotes} alt={"icon-quote"}/>
                    </div>
                    <p className={"body2 z-0 text-white opacity-80 w-[350px] md:w-[573px] sm:w-[327px] h-[100px] sm:text-center relative"}>
                        {review}
                    </p>
                <div className={"flex flex-col gap-1"}>
                    <h3 className={"rapture-blue"}>{name}</h3>
                    <span className={"text-white opacity-80"}>{title}</span>
                </div>

                <div >
                        <Image src={profile} alt={`${profile} profile`} className={"w-[65px] h-[65px] rounded-full border border-[#C4FFFE]"}/>
                </div>

            </div>

        </>
    )
}

const Reviews = () => {
    return (
        <section className={"flex justify-center w-full pb-[140px] md:pb-[100px] sm:pb-[164px] review-background py-[8.75rem] md:py-[6.25rem]"}>

                <div className={"flex flex-col justify-between sm:items-center "}>
                    <h2 className={"h2 text-center relative text-white left-14 w-[950px] md:text-[30px] md:w-[573px] sm:w-[327px] md:left-0 "}>Delivering real results for top companies. Some of our <span className={"rapture-blue"}>success stories.</span>
                    </h2>
                    <div className={"flex flex-row mt-[60px] md:mt-0 gap-[20px] md:flex-col "}>
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
                    </div>

                </div>

        </section>
    )
}

export default Reviews;