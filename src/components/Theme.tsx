"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const Theme = () => {

    const [dark, setIsDark] = useState(() => {
        const darkStorage = localStorage.getItem("dark")
        return darkStorage ? JSON.parse(darkStorage) : localStorage.setItem("dark", "true")
    })

    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(dark))
        document.getElementsByTagName("html")[0].classList.toggle("dark", dark)
    }, [dark])

    return (
        <div className="absolute right-0 top-0 size-24 grid place-items-center rounded-full translate-x-1/2 -translate-y-1/2 cursor-pointer transition-[width,height] bg-[#292b32] dark:bg-white hover:w-28 hover:h-28" onClick={() => setIsDark(!dark)}>
                {
                    dark ? <Image src="/moon.svg" alt="dark mode" className="translate-y-[1.3rem] translate-x-[-1.8rem]" height={30} width={30} /> : <Image src="/sun.svg" alt="light mode" className="fill-white translate-y-[1.3rem] translate-x-[-1.8rem]" height={30} width={30} />
                }
        </div>
    )
}
export default Theme