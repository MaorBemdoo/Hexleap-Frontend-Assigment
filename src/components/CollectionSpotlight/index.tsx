"use client"

import { events } from "@/data"
import Event from "./Event"
import Image from "next/image"
import { useEffect, useState } from "react"

const CollectionSpotlight = () => {

    const [dark, setIsDark] = useState(() => {
        const darkStorage = localStorage.getItem("dark")
        return darkStorage ? JSON.parse(darkStorage) : localStorage.setItem("dark", "true")
    })

    useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(dark))
        document.getElementsByTagName("html")[0].classList.toggle("dark", dark)
    }, [dark])

    return (
        <>
            <div className="absolute right-0 top-0 size-24 grid place-items-center rounded-full translate-x-1/2 -translate-y-1/2 cursor-pointer transition-[width,height] bg-[#292b32] dark:bg-white hover:w-28 hover:h-28" onClick={() => setIsDark(!dark)}>
                {
                    dark ? <Image src="/moon.svg" alt="dark mode" className="translate-y-[1.3rem] translate-x-[-1.8rem]" height={30} width={30} /> : <Image src="/sun.svg" alt="light mode" className="fill-white translate-y-[1.3rem] translate-x-[-1.8rem]" height={30} width={30} />
                }
            </div>
            <div className="mt-6 w-full text-center p-10 bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:from-[#18282A] dark:to-[#221A2C]">
                <h2 className="text-5xl font-['Poppins',_sans-serif] font-bold">Collection Spotlight</h2>
                <p className="text-sm mt-2 mb-4">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                <div className="flex items-center justify-between w-full">
                    <Image src="/chervon_left.png" alt="chervon left" className="p-2 border border-[#2C9CF0] cursor-pointer h-8 w-6 text-start" width={30} height={30} priority />
                    <div className="basis-8/12 columns-3 gap-8">
                        {
                            events.map(({ image, title, location, time, btnText, id }) => {
                                return <Event image={image} title={title} location={location} time={time} btnText={btnText} key={id}/>
                            })
                        }
                    </div>
                    <Image src="/chervon_right.png" alt="chervon right" className="p-2 border border-[#2C9CF0] cursor-pointer h-8 w-6 text-end" width={30} height={30} priority />
                </div>
            </div>
        </>
    )
}
export default CollectionSpotlight