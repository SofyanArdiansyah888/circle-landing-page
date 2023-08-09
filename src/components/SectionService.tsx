import React from "react";
import Code3 from '../images/code3.svg'
import {ButtonGhost} from "./Button";
import RightArrowRight from '../images/right-arrow-white.svg'

const SectionService = () => {
    return <section className={"bg-background-join relative  section-padding bg-black text-white py-12 lg:py-24"}>
        <div className={"flex flex-col lg:flex-row gap-4 lg:gap-40"}>
            <div className={"text-2xl lg:text-5xl lg:max-w-[38rem]  font-bold"} style={{lineHeight: "130%"}}>
                Finally you can develop full-stack web applications in one place.
            </div>
            <div className={"text-gray-300"}>
                <p className={"max-w-lg text-lg"}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    sint. Velit officia consequat duis
                    enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
                    ullamco est sit aliqua dolor do amet sint. </p>
            </div>
        </div>

        <Code3 className={"my-12 lg:mt-16 lg:mb-0 w-full h-auto lg:w-[unset]"}/>
        <div className={"flex flex-col lg:flex-row gap-4 lg:mt-10"}>
            <Card
                title={"Optimized Frameworks"}
                subtitle={"A custom environment designed especially for developing and facilitating React, Vue, Angular, and\n" + "                    other frameworks."}
                border={true}
            />

            <Card
                title={"Integrated with GitHub"}
                subtitle={"Import and run GitHub repositories directly. Alternatively, you can commit your source code to a repository."}
                border={false}
            />

        </div>
        <div className={"w-full flex justify-center"}>
            <ButtonGhost className={"mx-auto mt-12 text-lg"}>
                Explore More Service
            </ButtonGhost>
        </div>


    </section>
}

const Card = ({title, subtitle, border}: { title: string, subtitle: string, border: boolean }) => {
    return <div className={`bg-[#151925] rounded-xl pt-12 pb-6 px-8 ${border && "border-2 border-gradient"} `}>
        <h3 className={"text-2xl font-semibold"}>{title}</h3>
        <p className={"mt-4 text-gray-300 mb-12"}>{subtitle}</p>
        <ButtonGhost className={"text-lg flex gap-2 items-center"}>
            Read More
            <RightArrowRight/>
        </ButtonGhost>
    </div>
}

export default SectionService;