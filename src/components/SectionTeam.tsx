import React from "react";
import {Button, ButtonOutline} from "./Button";
import Elipse from "../images/ellipse1.svg";
import {StaticImage} from "gatsby-plugin-image";
import Code4 from '../images/code4.svg'
import Code5 from '../images/code5.svg'

const SectionTeam = () => {
    return <section
        className={"bg-background-join  text-left relative  section-padding bg-black text-white py-12 lg:py-16"}>
        <h1 className={"text-2xl  md:text-5xl font-semibold max-w-4xl"}>
            Circle provides teams and individuals with customizable <span
            className={"text-gradient"}>Management Tools</span> for your source code.
        </h1>
        <div className={"mt-8 grid grid-cols-1  lg:grid-cols-2 gap-8"}>
            <div>
                <p className={"text-lg max-w-xl text-gray-300"}>
                    Create issues, sections into tasks, track relationships, add custom spaces, and initiate
                    discussions. Visualize large projects with spreadsheets or codeboards, and use the help of code
                    systems to automate everything.
                </p>
                <div className={"flex flex-col md:flex-row mt-12 gap-4"}>
                    <div className={"relative"}>
                        <ButtonOutline className={"w-[160px]"}>
                            Get Started
                        </ButtonOutline>
                        <Elipse className={"absolute -top-[60px] w-full"} />
                    </div>

                    <Button className={"flex gap-2 md:mx-2 max-w-[160px]"}>
                        <StaticImage src={"../images/Play.svg"} alt={"Play Icon"}/>
                        Watch a Video
                    </Button>
                </div>
            </div>
            {/*IMAGE CODE*/}
            <div className={"relative"}>
                <Code4 className={"w-full"} />
                <Code5 className={"absolute w-full top-0 lg:top-12 left-0 lg:left-12"} />

                <StaticImage src={"../images/planek.svg"} alt={"Planet"} className={"absolute right-0 lg:-right-10 top-0 lg:-top-10"} />
            </div>

        </div>
    </section>
}

export default SectionTeam