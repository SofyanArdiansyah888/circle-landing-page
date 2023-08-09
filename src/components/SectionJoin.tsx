import React from "react";
import {Button} from "./Button";
import RightArrow from '../images/right-arrow.svg'
import Elipse2 from '../images/ellipse2.svg'
import Elipse3 from '../images/ellipse3.svg'

const SectionJoin = () => {
    return <section className={"bg-background-join relative section-padding bg-black text-white py-16 lg:py-16"}>
        <Elipse2 className ={"lg:absolute hidden  h-[400px] top-0 left-0"} />
        <Elipse3 className ={"lg:absolute hidden w-auto h-[400px] top-0 right-0"} />
        <div className={"rounded-xl border-[2px] border-gradient max-w-4xl mx-auto p-10"}>
            <h2 className={"text-2xl font-semibold"}>
                Join the community around the world
            </h2>
            <p className={"my-2"}>
                More than millions of people around the world have joined our community to develop skills for
                individuals and collaborate with teams. It's your turn to join us! We are waiting for the presence of
                all friends
            </p>
            <Button className={"mt-12 items-center text-lg flex gap-2"}>
                Join Community
                <RightArrow/>
            </Button>
        </div>
    </section>
}

export default SectionJoin;