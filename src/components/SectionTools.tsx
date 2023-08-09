import React from "react";
import {Button} from "./Button";
import Software1 from '../images/software1.svg'
import Software2 from '../images/software2.svg'
import Download from '../images/download.svg'
import Planet2 from '../images/planet2.svg'
import {StaticImage} from "gatsby-plugin-image";

const SectionTools = () => {
    return <div className={"relative"}>
        <section
            className={"bg-background-join relative justify-center section-padding bg-black text-white pt-0 pb-16 lg:py-16"}>
            <h1 className={"text-2xl  md:text-7xl font-semibold max-w-xl mx-auto text-center"}>Useful <span
                className={"text-gradient"}>Software</span> that can assist.
            </h1>
            <div className={"space-y-20  flex flex-col my-20"}>
                <StaticImage src={"../images/software1.svg"} alt={"software"} className={"mx-auto lg:max-w-[600px]  lg:w-full"}/>
                <StaticImage src={"../images/software2.svg"} alt={"software"} className={"mx-auto lg:max-w-[600px]  lg:w-full"}/>
                {/*<Software2 className={"mx-auto  lg:w-full"}/>*/}
                <div className={"mx-auto"}>
                    <Button className={"mt-12 flex gap-2 items-center"}>
                        <Download/>
                        Download Software
                    </Button>
                </div>
            </div>
        </section>
        <Planet2 className={"absolute h-[200px] lg:h-auto  right-0 -bottom-[60px] lg:-bottom-[150px]"}/>
    </div>
}

export default SectionTools;