import React, {ReactNode} from "react";

const Button = ({children,className}:{children: ReactNode,className?: string}) => <button className={`bg-gradient py-2 min-w-[140px]  px-4 text-black rounded-md font-semibold text-sm ${className}`}>
    {children}
</button>
const ButtonOutline = ({children,className}:{children: ReactNode,className?: string}) => <button className={`bg-[rgba(21, 25, 37, 0.80)] border-gradient min-w-[140px] py-2  px-4 rounded-md font-medium border-[1px] border-white text-sm text-white backdrop ${className}`}>
    {children}
</button>
const ButtonGhost = () => <></>

export {
    Button,
    ButtonOutline,
    ButtonGhost
}