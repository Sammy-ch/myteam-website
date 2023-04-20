import React from "react";
import Image from "next/image";
// import topBgPattern from "public/images/bg-home-about-contact/bg-pattern-about-2-contact-1.svg";
// import bottomBgPattern from "public/images/bg-home-about-contact/bg-pattern-contact-2.svg";
import chartIco from "public/images/icons/icon-chart.svg";
import cogIco from "public/images/icons/icon-cog.svg";
import personIco from "public/images/icons/icon-person.svg";
import {useForm} from "react-hook-form";



const Contact = () => {
    const {register,handleSubmit,formState:{errors} } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <section className={"flex justify-center px-[165px] max-h-screen gap-[100px] pb-[120px]"}>
            <div className={"flex flex-col gap-[32px]"}>
                <h1 className={"h-small text-white"}>Contact</h1>
                <span className={"light-coral font-bold leading-[48px] text-[32px]"}>Ask us about</span>
                <div className={"flex flex-col gap-[8px] text-white w-[540px] h-[232px]"}>
                    <div className={"flex flex-row gap-[23px] items-center "}><Image src={personIco} alt={"personIcon"} className={"w-72px h-[72px]"}/> <span>The quality of our talent network</span> </div>
                    <div className={"flex flex-row gap-[23px] items-center"}><Image src={cogIco} alt={"cogIco"} className={"w-72px h-[72px]"}/> <span>Usage & implementation of our software</span> </div>
                    <div className={"flex flex-row gap-[23px]  items-center"}><Image src={chartIco} alt={"chartIco"} className={"w-72px h-[72px]"}/> <span>How we help drive innovation</span> </div>
                </div>
            </div>

                <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col text-white w-[542px] gap-[24px]"}>
                    <input type="text" placeholder="Name"
                              className={"w-[540px] h-[42px] input"} {...register("Name", {
                        required: true,
                        maxLength: 80
                    })} />

                        <input type="email" placeholder="Email Address"
                                className={"w-[540px] h-[42px] input"} {...register("Email ", {
                        required: true,
                        max: 0,
                        maxLength: 100
                    })} />

                    <input type="text" placeholder="Company Name"
                              className={"w-[540px] h-[42px] input"} {...register("Company Name", {
                        required: true,
                        max: 20,
                        min: 5,
                        maxLength: 30,
                        pattern: /^\S+@\S+$/i
                    })} />
                    <textarea placeholder="Message" className={"h-[84px]"} {...register("Message", {
                        required: true,
                        max: 2400,
                        min: 1,
                        maxLength: 2400
                    })} />

                    <button type="submit" className={"border w-[123px] h-[48px] bg-white text-[#004047] rounded-full"} >Submit</button>
                </form>

        </section>
    )
}

export default Contact;