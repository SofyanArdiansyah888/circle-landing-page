import React from "react";
// @ts-ignore
import LogoIcon from '../images/circle.svg'
import {menus} from "../utils/constant";
const Navbar = () => {

    return <div className={"hidden py-8 h-[80px] items-center lg:flex gap-24 container mx-auto"}>
        {/*ICON HERE*/}
        <LogoIcon  className={"w-auto h-auto"} alt={"Logo"} />
        <div>
            <ul className={"flex gap-6 text-lg"}>
                {
                    menus.map((item,index) =>
                        <li key={index} className={`text-gray-300 ${index === 0 && "text-white"} `}>{item.title}</li>
                    )
                }
            </ul>
        </div>
    </div>
}

export default Navbar;