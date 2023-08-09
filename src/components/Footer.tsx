import React from "react";
import {footerMenus} from "../utils/constant";
import MoonFooter from '../images/moon-footer.svg'

const Footer = () => {
    return <div className={"relative bg-background-footer bg-black w-full h-auto flex items-end pb-12"}>
        <MoonFooter className={"absolute bottom-0  lg:right-[unset] w-[320px] lg:w-[unset] h-[200px] lg:h-[unset] "} />
        <div className={"bg-black flex w-full justify-start pl-8 lg:justify-end lg:pr-24"}>
            <div className={""}>
                <div className={" grid grid-cols-2 md:grid-cols-5  lg:grid-cols-5 lg:gap-14 gap-10"}>
                    {footerMenus.map((item, index) => <ItemFooter
                        title={item.title}
                        items={item.menus}
                        key={index}
                    />)}
                </div>

                <div className={" text-right mt-12 mr-8 pb-24 lg:pb-0 text-gray-300"}>
                    2022 All Rights Reserved © Circle
                </div>
            </div>

        </div>

    </div>
}


export default Footer;

const ItemFooter = ({title, items}: { title: string, items: string[] }) => {
    return <div>
        <h3 className={"text-white text-lg"}>{title}</h3>
        <ul className={"space-y-4 text-gray-400 text-md mt-4 lg:mt-8"}>
            {items.map((itemTitle, index) => <li key={index}>{itemTitle}</li>)}
        </ul>
    </div>
}