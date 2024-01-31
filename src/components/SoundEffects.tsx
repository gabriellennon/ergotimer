import React, { ReactElement } from "react"

type ButtonProps = {
    icon:ReactElement
    isActive?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function SoundEffects({ isActive ,  icon , ...rest}: ButtonProps){
    return(
        <button className={`border p-3 rounded-full  ${isActive ? 'text-[#EBA417]' : 'text-zinc-100'} ${isActive ? 'border-[#EBA417]' : 'border-zinc-100'} `} {...rest}>
            {icon}
        </button>
    )
}

