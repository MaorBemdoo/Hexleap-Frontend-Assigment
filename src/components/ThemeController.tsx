"use client"

import { useEffect, ReactElement, useState } from "react"

const ThemeController = ({ children }: { children?: ReactElement }) => {

    const darkStorage = localStorage.getItem("dark")
    const dark = darkStorage ? JSON.parse(darkStorage) : localStorage.setItem("dark", "true")


    useEffect(() => {
        document.getElementsByTagName("html")[0].classList.toggle("dark", dark)
    }, [dark])

    return (
        <>{children}</>
    )
}
export default ThemeController