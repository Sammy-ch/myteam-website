

const Hero = () =>{
    return (
        <section className={"grid grid-cols-2 px-[165px] py-[100px] sm:py-0 sm:pb-[150px] md:grid-cols-1 md:items-center min-h-[37.5rem] sm:min-h-[30rem] md:px-[45px] w-full hero-background "}>
            
                <h1 className={"h-large text-white md:text-[64px] sm:text-[40px] sm:leading-[40px] md:text-center md:px-5"}>
                    Find the best <span className={"light-coral"}>talent</span>
                </h1>
                <div className={"flex flex-col gap-4 md:justify-center md:items-center"}>
                    <div className={"w-[50px] h-[5px] bg-[#79C8C7] md:hidden"}></div>
                    <p className={"body1 text-white relative top-[90px] md:top-0 md:text-center md:w-[467px] sm:w-full sm:text-[15px] "}>
                        Finding the right people and building high performing teams can
                        be hard. Most companies aren’t tapping into the abundance of global
                        talent. We’re about to change that.
                    </p>
                </div>
            
            </section>
    )
}

export default Hero;