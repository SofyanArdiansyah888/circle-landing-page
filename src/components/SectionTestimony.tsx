import React from "react";
import {ButtonGhost} from "./Button";
import RightArrowRight from '../images/right-arrow-white.svg'

const SectionTestimony = () => {
    return <section className={"bg-background-join relative   bg-black text-white py-12 lg:pb-32 lg:pt-12"}>
        <h1 className={"text-2xl  md:text-5xl text-center font-semibold"}> What people are saying about <span
            className={"text-gradient"}>Circle</span></h1>
        <div className="snap-mandatory snap-x mx-auto h-[100px] py-12 my-24 flex gap-8 w-full overflow-scroll">
            <div
                className="snap-center bg-amber-200 w-96 flex-shrink-0  flex items-center justify-center text-8xl">1
            </div>
            <div
                className="snap-center bg-teal-200 w-96 flex-shrink-0   flex items-center justify-center text-8xl">2
            </div>
            <div
                className="snap-center bg-cyan-200 w-96 flex-shrink-0  flex items-center justify-center text-8xl">3
            </div>
            <div
                className="snap-center bg-fuchsia-200 w-96 flex-shrink-0  flex items-center justify-center text-8xl">4
            </div>
            <div
                className="snap-center bg-fuchsia-200 w-96 flex-shrink-0  flex items-center justify-center text-8xl">4
            </div>
            <div
                className="snap-center bg-fuchsia-200 w-96 flex-shrink-0  flex items-center justify-center text-8xl">4
            </div>
            <div
                className="snap-center bg-fuchsia-200 w-96 flex-shrink-0  flex items-center justify-center text-8xl">4
            </div>
            <div
                className="snap-center bg-fuchsia-200 w-96 flex-shrink-0  flex items-center justify-center text-8xl">4
            </div>
            <div
                className="snap-center bg-fuchsia-200 w-96 flex-shrink-0  flex items-center justify-center text-8xl">4
            </div>
            <div
                className="snap-center bg-fuchsia-200 w-96 flex-shrink-0  flex items-center justify-center text-8xl">4
            </div>
        </div>


    </section>
}

const Card = ({title, subtitle, border}: { title: string, subtitle: string, border: boolean }) => {
    return <div className={`bg-[#151925] w-[500px] rounded-xl pt-12 pb-6 px-8 snap-center ${border && "border-2 border-gradient"} `}>
        <h3 className={"text-2xl font-semibold"}>{title}</h3>
        <p className={"mt-4 text-gray-300 mb-12"}>{subtitle}</p>
        <ButtonGhost className={"text-lg flex gap-2 items-center"}>
            Read More
            <RightArrowRight/>
        </ButtonGhost>
    </div>
}

export default SectionTestimony;