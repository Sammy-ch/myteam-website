import React from "react";
import Image from "next/image";
import chartIco from "public/images/icons/icon-chart.svg";
import cogIco from "public/images/icons/icon-cog.svg";
import personIco from "public/images/icons/icon-person.svg";
import Input from "@/components/Input";
import {FormProvider, useForm} from "react-hook-form";


const Contact = () => {
    const methods = useForm();

    const onSubmit = methods.handleSubmit(data => {
        console.log(data)
    })

    return (
        <section className={"contact-background flex md:flex-col  px-[165px] lg:px-[50px]  justify-between pb-[120px] "}>

            <div className={"flex flex-col gap-[32px] xs:gap-[16px] md:items-center"}>
                <h1 className={"h-small text-white xs:text-[40px]"}>Contact</h1>
                <span className={"light-coral font-bold leading-[48px] text-[32px]"}>Ask us about</span>
                <div className={"flex flex-col gap-[8px] text-white w-[540px] sm:w-full h-[232px] "}>
                    <div className={"flex flex-row gap-[23px] items-center "}><Image src={personIco} alt={"personIcon"} className={"w-72px h-[72px]"}/> <span>The quality of our talent network</span> </div>
                    <div className={"flex flex-row gap-[23px] items-center"}><Image src={cogIco} alt={"cogIco"} className={"w-72px h-[72px]"}/> <span>Usage & implementation of our software</span> </div>
                    <div className={"flex flex-row gap-[23px]  items-center"}><Image src={chartIco} alt={"chartIco"} className={"w-72px h-[72px]"}/> <span>How we help drive innovation</span> </div>
                </div>
            </div>

            <FormProvider {...methods}>
                <form onSubmit={e => e.preventDefault()} noValidate autoComplete="off" className={"flex flex-col text-white gap-[24px]"}>

                    <Input type={"text"} id={"name"} placeholder={"Name"} label={"Name"} className={"w-7"} validation={{
                        required: {
                            value: true,
                            message:"This field is required",
                        },
                        minlength: {
                            value: 6,
                            message:"min limit is 6 characters"
                        }
                    }}/>
                    <Input type="email" id={"email"} placeholder={"Email Address"} label={"Email"} validation={{
                        required: {
                            value: true,
                            message:"This field is required",
                        },
                        pattern: {
                            value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Please use a valid email address',
                        },
                    }} />
                    <Input type={"text"} id={"company"} placeholder={"Company Name"} label={"Company"} validation={{
                        required: {
                            value: true,
                            message:"This field is required",
                        }
                    }} />

                    <Input type={"text"} id={"title"} placeholder={"Title"} label={"Title"} validation={{
                        required:{
                            value: true,
                            message:"This field is required"
                        }
                    }}/>

                    <Input name={"message"} id={"message"} label={"Message"} placeholder={"Message"} multiline={true} validation={{
                        required:{
                            value: true,
                            message:"This field is required"
                        },
                        maxLength: {
                            value: 200,
                            message: '200 characters max',
                        },
                    }}/>
                    <button onClick={onSubmit}
                            className={"border w-[123px] h-[48px] bg-white text-[#004047] rounded-full"}>
                        Submit
                    </button>
                </form>
            </FormProvider>
        </section>
    )
}

export default Contact;