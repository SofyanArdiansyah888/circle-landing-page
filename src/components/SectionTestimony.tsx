import React from "react";
import {ButtonGhost} from "./Button";
import RightArrowRight from '../images/right-arrow-white.svg'
import Star from '../images/star.svg'
const SectionTestimony = () => {
    return <section className={"bg-background-join relative   bg-black text-white py-12 lg:pb-32 lg:pt-12"}>
        <h1 className={"text-3xl  md:text-5xl text-center font-semibold"}> What people are saying about <span
            className={"text-gradient"}>Circle</span></h1>
        <div className="snap-mandatory snap-x mx-auto px-2  my-24 flex flex-col md:flex-row gap-4 lg:gap-8 w-full overflow-hidden">
            <Card title={"Test"}
                  subtitle={"Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"}
                  border={false}/>
            <Card title={"Test"}
                  subtitle={"Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"}
                  border={false}/>
            <Card title={"Test"}
                  subtitle={"Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"}
                  border={false}/>
            <Card title={"Test"}
                  subtitle={"Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"}
                  border={false}/>
            <Card title={"Test"}
                  subtitle={"Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"}
                  border={false}/>
        </div>


    </section>
}

const Card = ({title, subtitle, border}: { title: string, subtitle: string, border: boolean }) => {
    return <div
        className={`bg-[#151925] md:min-w-[450px] rounded-xl p-6 snap-center ${border && "border-2 border-gradient"} `}>
        <div className={"flex  gap-2"}>
            <div className={"bg-gray-300 rounded-full h-10 w-10 "}/>
            <div className={"space-y-1"}>
                <p className={"font-semibold"}>Leslie Alexander</p>
                <p className={"text-xs text-gray-300"}>Community</p>
            </div>
        </div>
        <p className={"mt-4 text-gray-300 mb-6"}>{subtitle}</p>
        <div className={"flex"}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    </div>
}

export default SectionTestimony;