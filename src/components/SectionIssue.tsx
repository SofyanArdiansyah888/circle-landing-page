import React from "react";
import {ButtonGhost} from "./Button";
import ArrowRight from '../images/right-arrow-white.svg'
import {StaticImage} from "gatsby-plugin-image";

const SectionIssue = () => {
    return <section className={"bg-background-join  text-center section-padding bg-black text-white py-16 lg:py-16"}>

        <h1 className={"text-2xl  md:text-5xl font-semibold max-w-4xl mx-auto text-center"}>
            Concentrate on larger issues.
        </h1>
        <p className={"text-lg max-w-xl text-gray-300 mt-6 mx-auto"}>
            Spend less time on repetitive code patterns and more time on what really matters building great software.
        </p>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12"}>
            <CardIssue title={"Get customized AI-based recommendations."}
                       description={"Get customized AI-based recommendations. A custom environment designed especially for developing and facilitating React, Vue, Angular, and other frameworks."}/>
            <CardIssue title={"Help of plugins and source code templates."}
                       description={"Get customized AI-based recommendations. A custom environment designed especially for developing and facilitating React, Vue, Angular, and other frameworks."}/>
        </div>
    </section>
}

const CardIssue = ({title, description}: { title: string, description: string }) => <div
    className={"bg-[#151925] relative min-h-[550px] rounded-xl py-12 pl-4 lg:pl-12 text-left"}>
    <h2 className={"text-xl mb-4  font-semibold"}>{title}</h2>
    <p>{description}</p>
    <ButtonGhost className={"flex gap-3 items-center mt-8  font-medium"}>
        Read More
        <ArrowRight/>
    </ButtonGhost>
    <div className={"lg:mt-8 absolute right-0 bottom-0"}>
        <StaticImage src={"../images/code6.svg"} alt={""} className={"lg:w-[590px] h-[180px] md:h-auto"}/>
    </div>
</div>
export default SectionIssue;