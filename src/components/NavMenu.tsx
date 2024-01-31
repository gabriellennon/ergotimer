
import React, { ReactElement } from "react"

type ButtonProps = {
    icon:ReactElement
    isActive?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function NavMenu({ isActive, icon , ...rest}: ButtonProps){
    return(
        <button className={`${isActive ? 'text-green-500' :  'text-zinc-100' }`} {...rest}>{icon}</button>
    )
}

