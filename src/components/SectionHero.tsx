import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import Navbar from "./Navbar";
import {Button, ButtonOutline} from "./Button";
import CodeImage from '../images/code2.svg'
import MoonIcon from "../images/moon.svg";
import VelocityIcon from '../images/vector.svg';
import MuzicaIcon from '../images/vector1.svg'
import FoxHubIcon from '../images/vector2.svg'
import ZtosIcon from '../images/vector3.svg'
import LivaIcon from '../images/vector4.svg'
import GoldLineIcon from '../images/vector5.svg'
import Elipse from '../images/ellipse1.svg'
import Play from '../images/Play.svg'

const SectionHero = () => {
    return <section
        className={"w-full section-padding flex flex-col relative min-h-screen bg-background-hero bg-black"}>
        <MoonIcon className={"absolute right-0 top-0 w-[320px] lg:w-[unset] h-[240px] md:h-[unset]"}/>
        <Navbar/>
        <HeroText/>

        <CodeImage alt={"Code I Image "} className={"w-[320px] md:w-full h-[200px] md:h-auto  mx-auto"}/>

        <p className={"text-center my-20 max-w-md mx-auto text-gray-300"}>Providing power to the world's best product
            teams. From next-generation startups to established businesses</p>

        <div className={"flex flex-col lg:flex-row gap-16 w-full items-center lg:gap-32 mx-auto mb-20"}>
            <VelocityIcon/>
            <MuzicaIcon/>
            <FoxHubIcon/>
            <ZtosIcon/>
            <LivaIcon/>
            <GoldLineIcon/>
        </div>
    </section>
}

const HeroText = () => <div className={"max-w-[42rem] mt-48 mb-20 lg:my-20"}>
        <h1 className={"text-2xl  md:text-7xl font-semibold"}><span className={"text-gradient"}>Develop</span> - your app and
            web easily with circle.</h1>
        <p className={"text-gray-400 mt-6 max-w-md"}>Circle is a code development platform that gives innovators
            the speed and reliability they need to
            create at the speed of inspiration.</p>
        <div className={"flex flex-col md:flex-row mt-12 gap-4"}>
            <div className={"relative"}>
                <ButtonOutline className={"w-[160px]"}>
                    Get A Demo
                </ButtonOutline>
                <Elipse className={"absolute -top-[60px] w-full"} />
            </div>

            <Button className={"flex gap-2 md:mx-2 max-w-[160px]"}>
                <Play />
                Watch a Video
            </Button>
        </div>


</div>

export default SectionHero;