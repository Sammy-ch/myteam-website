import personIcon from "../../../public/images/icons/icon-person.svg";
import cogIcon from "../../../public/images/icons/icon-cog.svg";
import chartIcon from "../../../public/images/icons/icon-chart.svg";
import Image from "next/image";
import bgPatternHome from "public/images/bg-home-about-contact/bg-pattern-home-3.svg";
const FeatureDetails =({icon,title,body}) => {
    return(
        <>
            <div className={"flex flex-row gap-7"}>
                <Image src={icon} alt={"icon"} className={"h-[56px] w-[56px]"}/>
                <div className={"flex flex-col gap-2"}>
                    <span className={"light-coral h3"}>{title}</span>
                    <p className={"body2 text-white"}>{body}</p>
                </div>
            </div>
        </>
    )
}
const Features = () => {
    return (
        <section className={"grid grid-cols-2 bg-[#012F34] gap-[50px] w-full px-[120px] py-[80px]"}>

                <div className={"flex flex-col gap-[100px]"}>
                    <span className={"w-[50px] h-[4px] bg-[#F67E7E]"}></span>
                    <h2 className={"h2 text-white w-[420px]"}> Build & manage distributed teams like no one else.</h2>
                </div>

                <div className={"flex flex-col gap-8 relative top-[120px] z-0"}>
                    <FeatureDetails title={"Experienced Individuals"}
                                    body={"Our network is made up of highly experienced professionals who are passionate about what they do."}
                                    icon={personIcon}/>
                    <FeatureDetails title={"Easy to Implement"}
                                    body={"Our processes have been refined over years of implementation meaning our teams always deliver."}
                                    icon={cogIcon}/>
                    <FeatureDetails title={"Enhanced Productivity"}
                                    body={"Enhanced Productivity  Our customized platform with in-built analytics helps you manage your distributed teams."}
                                    icon={chartIcon}/>
                    <Image src={bgPatternHome} alt={"patternHome"} className={"transform -translate-y-9 translate-x-[322%]"}/>
                </div>

        </section>

    )
}

export default Features;